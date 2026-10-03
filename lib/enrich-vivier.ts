import "server-only";
import { getSupabaseAdmin } from "./supabase-server";

/**
 * Enrichissement des coordonnées PUBLIQUES du vivier.
 *
 * Pour chaque personne dont on connaît le site (personnel ou de sa petite
 * structure) et qu'on n'a pas encore examinée, on lit la page d'accueil puis au
 * plus trois pages de contact (contact, à propos, mentions légales…) et on
 * relève uniquement ce que la page affiche en clair : un e-mail (lien mailto:
 * ou adresse écrite) et un téléphone (lien tel: seulement). On garde l'URL de
 * la page où l'information a été lue — c'est la preuve de source licite.
 *
 * Rien n'est deviné, rien n'est acheté, aucune page LinkedIn n'est lue.
 */

type Row = { id: string; name: string; website: string; public_email: string | null };

export type EnrichResult = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  source: string | null;
  outcome: "found" | "none" | "unreachable" | "skipped";
};

const UA = "Mozilla/5.0 (compatible; 56North-vivier/1.0; +https://experts.56north.io)";
const TIMEOUT_MS = 10_000;
const MAX_BYTES = 600_000;
const CONTACT_WORDS = /contact|kontakt|about|a-propos|apropos|%C3%A0-propos|uber|%C3%BCber|impressum|imprint|mentions|legal|team|equipe/i;
const EMAIL_RE = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi;
const IGNORE_EMAIL = /(noreply|no-reply|donotreply|example\.|sentry|wixpress|\.png|\.jpg|\.svg|\.gif|\.webp|@2x|schema\.org|w3\.org|@sentry|privacy@|abuse@|postmaster@|webmaster@|support@|jobs@|careers@|press@|sales@|billing@)/i;
// Grands cabinets : on ne relève pas leurs adresses (cf. METHODE).
const BIG_FIRMS = /(accenture|capgemini|deloitte|pwc|ey\.com|kpmg|ibm\.com|atos|soprasteria|cgi\.com|wipro|infosys|tcs\.com|cognizant)/i;
// Pages où une adresse n'est pas celle de la personne (agrégateurs).
const AGGREGATOR = /(medium\.com|substack\.com|youtube\.com|youtu\.be|github\.com|github\.io|dev\.to|x\.com|twitter\.com|linkedin\.com)/i;

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function getHtml(url: string): Promise<string | null> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { headers: { "user-agent": UA, accept: "text/html,*/*;q=0.5" }, redirect: "follow", signal: ctrl.signal });
    if (!res.ok) return null;
    const type = res.headers.get("content-type") ?? "";
    if (!/html|xml|text/i.test(type)) return null;
    const text = await res.text();
    return text.slice(0, MAX_BYTES);
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

function decode(s: string) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#64;|\[at\]|\(at\)|\s+at\s+/gi, "@")
    .replace(/\[dot\]|\(dot\)/gi, ".");
}

function contactLinks(html: string, base: URL): string[] {
  const out = new Set<string>();
  const re = /href\s*=\s*["']([^"']+)["']/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) && out.size < 3) {
    const href = m[1];
    if (/^(mailto|tel|javascript|#)/i.test(href)) continue;
    if (!CONTACT_WORDS.test(href)) continue;
    try {
      const u = new URL(href, base);
      if (u.host !== base.host) continue;
      u.hash = "";
      out.add(u.toString());
    } catch {
      /* ignore */
    }
  }
  return [...out];
}

function nameTokens(name: string) {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter((t) => t.length >= 3);
}

function pickEmail(html: string, siteHost: string, name: string): string | null {
  const text = decode(html);
  const found = new Set<string>();
  const mailto = /mailto:([^"'?\s>]+)/gi;
  let m: RegExpExecArray | null;
  while ((m = mailto.exec(text))) found.add(decodeURIComponent(m[1]).toLowerCase());
  for (const e of text.match(EMAIL_RE) ?? []) found.add(e.toLowerCase());

  const tokens = nameTokens(name);
  const root = siteHost.replace(/^www\./, "");
  const clean = [...found].filter((e) => !IGNORE_EMAIL.test(e) && !BIG_FIRMS.test(e));
  // 1) adresse qui porte le nom de la personne ; 2) adresse sur le domaine du site ; 3) rien d'autre.
  const personal = clean.find((e) => tokens.some((t) => e.split("@")[0].includes(t)));
  if (personal) return personal;
  const onDomain = clean.find((e) => e.endsWith("@" + root) || e.endsWith("." + root));
  return onDomain ?? null;
}

function pickPhone(html: string): string | null {
  const m = /href\s*=\s*["']tel:([^"']+)["']/i.exec(html);
  if (!m) return null;
  const digits = decodeURIComponent(m[1]).replace(/[^\d+]/g, "");
  return digits.length >= 8 ? digits : null;
}

export async function enrichOne(row: Row): Promise<EnrichResult> {
  const base = { id: row.id, name: row.name, email: null, phone: null, source: null } as const;
  let site: URL;
  try {
    site = new URL(row.website);
  } catch {
    return { ...base, outcome: "skipped" };
  }
  if (AGGREGATOR.test(site.host)) return { ...base, outcome: "skipped" };

  const home = await getHtml(site.toString());
  if (!home) return { ...base, outcome: "unreachable" };

  const pages: Array<{ url: string; html: string }> = [{ url: site.toString(), html: home }];
  for (const link of contactLinks(home, site)) {
    await sleep(1000);
    const html = await getHtml(link);
    if (html) pages.push({ url: link, html });
  }

  let email: string | null = row.public_email;
  let phone: string | null = null;
  let source: string | null = null;
  // Les pages de contact d'abord : c'est là que l'adresse est la plus fiable.
  for (const p of [...pages.slice(1), pages[0]]) {
    if (!email) {
      const e = pickEmail(p.html, site.host, row.name);
      if (e) {
        email = e;
        source = p.url;
      }
    }
    if (!phone) {
      const ph = pickPhone(p.html);
      if (ph) {
        phone = ph;
        source ??= p.url;
      }
    }
  }
  const outcome = email !== row.public_email || phone ? "found" : "none";
  return { ...base, email: email !== row.public_email ? email : null, phone, source, outcome };
}

export async function enrichBatch(limit = 40): Promise<{ processed: number; found: number; results: EnrichResult[] }> {
  const db = getSupabaseAdmin();
  if (!db) throw new Error("Supabase env vars missing");
  const { data, error } = await db
    .from("prospects")
    .select("id,name,website,public_email")
    .is("erasure_requested_at", null)
    .not("website", "is", null)
    .is("enriched_at", null)
    .order("score", { ascending: false })
    .limit(limit);
  if (error) throw new Error(error.message);

  const today = new Date().toISOString().slice(0, 10);
  const results: EnrichResult[] = [];
  for (const row of (data ?? []) as Row[]) {
    const r = await enrichOne(row);
    results.push(r);
    const patch: Record<string, unknown> = { enriched_at: today };
    if (r.email) patch.public_email = r.email;
    if (r.phone) patch.public_phone = r.phone;
    if (r.source) patch.contact_source_url = r.source;
    if (r.email) patch.channel = "website";
    const { error: upErr } = await db.from("prospects").update(patch).eq("id", row.id);
    if (upErr) console.error("[enrich-vivier]", row.id, upErr.message);
    await sleep(1000);
  }
  return { processed: results.length, found: results.filter((r) => r.outcome === "found").length, results };
}
