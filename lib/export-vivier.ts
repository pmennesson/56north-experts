import "server-only";
import ExcelJS from "exceljs";
import { getSupabaseAdmin } from "./supabase-server";

/**
 * Export of the `prospects` table (the expert pool) as an Excel workbook:
 * Lire-moi · Synthèse · Vivier (all rows) · one sheet per platform · Pays · Communautés.
 *
 * Personal data: the workbook goes only to NOTIFY_EMAIL (or EXPORT_EMAIL) and,
 * when configured, to the Dropbox folder below. Never written to the public repo.
 */

export type Prospect = {
  platform: string;
  name: string;
  role: string | null;
  company: string | null;
  country: string | null;
  language: string | null;
  score: number;
  rarity: number;
  message_type: string | null;
  channel: string | null;
  ai_modules: string[] | null;
  score_reason: string | null;
  proof_title: string | null;
  proof_url: string | null;
  source_type: string | null;
  website: string | null;
  public_email: string | null;
  public_phone: string | null;
  contact_source_url: string | null;
  certifications: string | null;
  pool: string | null;
  profile_type: string | null;
  status: string;
  contacted_at: string | null;
  replied_at: string | null;
  notes: string | null;
  collected_at: string | null;
  updated_at: string | null;
  created_at: string | null;
};

export const PLATFORM_LABEL: Record<string, string> = {
  salesforce: "Salesforce",
  sap: "SAP",
  "google-cloud": "Google Cloud",
  workday: "Workday",
  microsoft: "Microsoft",
  servicenow: "ServiceNow",
};

const STATUS_LABEL: Record<string, string> = {
  new: "Nouveau",
  to_contact: "À contacter",
  contacted: "Contacté",
  replied: "A répondu",
  qualified: "Qualifié",
  declined: "Refus",
  erased: "Effacé",
};

const MESSAGE_LABEL: Record<string, string> = {
  A_network: "A (réseau)",
  B_panel: "B (panel)",
  C_need: "C (besoin client)",
};

/** Profile type (prospects.profile_type). */
const PROFILE_LABEL: Record<string, string> = {
  platform_ai: "IA de la plateforme",
  platform_data: "Données de la plateforme",
  adoption: "Adoption et mesure",
};

const COLUMNS: { header: string; key: keyof Prospect | "modules" | "statut" | "message" | "poolLabel" | "profileLabel"; width: number }[] = [
  { header: "Pays", key: "country", width: 7 },
  { header: "Vivier", key: "poolLabel", width: 11 },
  { header: "Type de profil", key: "profileLabel", width: 20 },
  { header: "Nom", key: "name", width: 26 },
  { header: "Rôle", key: "role", width: 34 },
  { header: "Société", key: "company", width: 24 },
  { header: "Langue", key: "language", width: 8 },
  { header: "Score /5", key: "score", width: 9 },
  { header: "Rareté", key: "rarity", width: 8 },
  { header: "Statut", key: "statut", width: 13 },
  { header: "Message", key: "message", width: 14 },
  { header: "Canal", key: "channel", width: 10 },
  { header: "Modules IA", key: "modules", width: 36 },
  { header: "Pourquoi ce score", key: "score_reason", width: 60 },
  { header: "Preuve principale", key: "proof_title", width: 60 },
  { header: "Lien preuve", key: "proof_url", width: 50 },
  { header: "Source", key: "source_type", width: 11 },
  { header: "Site perso", key: "website", width: 30 },
  { header: "E-mail public", key: "public_email", width: 28 },
  { header: "Téléphone public", key: "public_phone", width: 16 },
  { header: "Certifications (source publique)", key: "certifications", width: 40 },
  { header: "Coordonnées lues sur", key: "contact_source_url", width: 40 },
  { header: "Contacté le", key: "contacted_at", width: 12 },
  { header: "Réponse le", key: "replied_at", width: 12 },
  { header: "Notes", key: "notes", width: 40 },
  { header: "Collecté le", key: "collected_at", width: 12 },
];

export async function fetchProspects(): Promise<Prospect[]> {
  const db = getSupabaseAdmin();
  if (!db) throw new Error("Supabase env vars missing");
  const rows: Prospect[] = [];
  const page = 1000;
  for (let from = 0; ; from += page) {
    const { data, error } = await db
      .from("prospects")
      .select(
        "platform,name,role,company,country,language,score,rarity,message_type,channel,ai_modules,score_reason,proof_title,proof_url,source_type,website,public_email,public_phone,contact_source_url,certifications,pool,profile_type,status,contacted_at,replied_at,notes,collected_at,updated_at,created_at",
      )
      .is("erasure_requested_at", null)
      .order("platform")
      .order("country", { nullsFirst: false })
      .order("score", { ascending: false })
      .order("rarity", { ascending: false })
      .order("name")
      .range(from, from + page - 1);
    if (error) throw new Error(error.message);
    rows.push(...((data ?? []) as Prospect[]));
    if (!data || data.length < page) break;
  }
  return rows;
}

/** Short signature of the table's state: changes whenever a row is added or edited. */
export function fingerprint(rows: Prospect[]): string {
  const latest = rows.reduce((m, r) => (r.updated_at && r.updated_at > m ? r.updated_at : m), "");
  return `${rows.length}-${latest}`;
}

function styleHeader(ws: ExcelJS.Worksheet) {
  const row = ws.getRow(1);
  row.font = { bold: true, color: { argb: "FFFFFFFF" } };
  row.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1F3A5F" } };
  row.alignment = { vertical: "middle", wrapText: true };
  ws.views = [{ state: "frozen", ySplit: 1 }];
}

function addTable(ws: ExcelJS.Worksheet, rows: Prospect[]) {
  ws.columns = COLUMNS.map((c) => ({ header: c.header, key: c.key, width: c.width }));
  for (const r of rows) {
    ws.addRow({
      ...r,
      statut: STATUS_LABEL[r.status] ?? r.status,
      poolLabel: r.pool === "nearshore" ? "Nearshore" : "Expert",
      profileLabel: PROFILE_LABEL[r.profile_type ?? "platform_ai"] ?? r.profile_type,
      message: r.message_type ? MESSAGE_LABEL[r.message_type] ?? r.message_type : "",
      modules: (r.ai_modules ?? []).join(", "),
    });
  }
  styleHeader(ws);
  ws.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: COLUMNS.length } };
}

export type Community = {
  platform: string;
  offer: string;
  name: string;
  kind: string | null;
  country: string | null;
  city: string | null;
  language: string | null;
  url: string;
  contact_url: string | null;
  public_email: string | null;
  size_hint: string | null;
  last_activity: string | null;
  how_to_engage: string | null;
  notes: string | null;
};

const OFFER_LABEL: Record<string, string> = { experts: "Experts", cockpit: "Cockpit", both: "Experts + Cockpit" };

export async function fetchCommunities(): Promise<Community[]> {
  const db = getSupabaseAdmin();
  if (!db) return [];
  const { data, error } = await db
    .from("communities")
    .select("platform,offer,name,kind,country,city,language,url,contact_url,public_email,size_hint,last_activity,how_to_engage,notes")
    .order("platform")
    .order("country", { nullsFirst: false })
    .order("city", { nullsFirst: false })
    .order("name")
    .limit(5000);
  if (error) {
    console.error("[export-vivier] communities", error.message);
    return [];
  }
  return (data ?? []) as Community[];
}

export type ClientLead = {
  id: string;
  company: string;
  country: string | null;
  sector: string | null;
  platforms: string[] | null;
  confidence: string;
  reasoning: string;
  evidence_urls: string[] | null;
  competitors: string[] | null;
  status: string;
  first_seen_at: string;
  last_seen_at: string;
  jobs: { title: string; url: string | null; location: string | null }[];
};

export type ActivityReport = { created_at: string; source: string; title: string; body: string };

/** Reports written by the sourcing and monitoring tasks since `since` (table activity_reports). */
export async function fetchReports(since: string | null): Promise<ActivityReport[]> {
  const db = getSupabaseAdmin();
  if (!db) return [];
  const after = since ?? new Date(Date.now() - 24 * 3600_000).toISOString();
  const { data, error } = await db.from("activity_reports").select("created_at,source,title,body").gt("created_at", after).order("created_at").limit(50);
  if (error) {
    console.error("[export-vivier] activity_reports", error.message);
    return [];
  }
  return (data ?? []) as ActivityReport[];
}

export type ClientContact = {
  prospect_type: "besoin_immediat" | "cible_role";
  name: string;
  role: string | null;
  company: string;
  country: string | null;
  platforms: string[] | null;
  proof_title: string | null;
  source_url: string;
  source_type: string | null;
  score: number | null;
  score_reason: string | null;
  status: string;
  created_at: string;
  lead: { company: string; confidence: string } | null;
};

/** Client-side contacts named in public sources (table client_contacts). */
export async function fetchClientContacts(): Promise<ClientContact[]> {
  const db = getSupabaseAdmin();
  if (!db) return [];
  const { data, error } = await db
    .from("client_contacts")
    .select("prospect_type,name,role,company,country,platforms,proof_title,source_url,source_type,score,score_reason,status,created_at,lead:client_leads(company,confidence)")
    .neq("status", "erased")
    .order("score", { ascending: false, nullsFirst: false })
    .order("company")
    .limit(10000);
  if (error) {
    console.error("[export-vivier] client_contacts", error.message);
    return [];
  }
  return (data ?? []) as unknown as ClientContact[];
}

export function newContactsSince(contacts: ClientContact[], since: string | null): ClientContact[] {
  if (!since) return [];
  const t = Date.parse(since);
  if (Number.isNaN(t)) return [];
  return contacts.filter((c) => Date.parse(c.created_at) > t);
}

const CONFIDENCE_LABEL: Record<string, string> = { forte: "Forte", moyenne: "Moyenne", hypothese: "Hypothèse" };
const CONFIDENCE_RANK: Record<string, number> = { forte: 0, moyenne: 1, hypothese: 2 };

/** End clients inferred from competitors' public job ads (tables client_leads, client_contacts, competitor_jobs). */
export async function fetchClientLeads(): Promise<ClientLead[]> {
  const db = getSupabaseAdmin();
  if (!db) return [];
  const { data, error } = await db
    .from("client_leads")
    .select("id,company,country,sector,platforms,confidence,reasoning,evidence_urls,job_ids,competitors,status,first_seen_at,last_seen_at")
    .neq("status", "discarded")
    .limit(5000);
  if (error) {
    console.error("[export-vivier] client_leads", error.message);
    return [];
  }
  const jobIds = [...new Set((data ?? []).flatMap((l: { job_ids: string[] | null }) => l.job_ids ?? []))];
  const jobs = new Map<string, { title: string; url: string | null; location: string | null }>();
  for (let i = 0; i < jobIds.length; i += 200) {
    const { data: j } = await db.from("competitor_jobs").select("id,title,url,location").in("id", jobIds.slice(i, i + 200));
    for (const r of j ?? []) jobs.set(r.id, r);
  }
  return (data ?? [])
    .map((l: Record<string, unknown>) => ({
      ...(l as unknown as ClientLead),
      jobs: ((l.job_ids as string[] | null) ?? []).map((id) => jobs.get(id)).filter(Boolean) as ClientLead["jobs"],
    }))
    .sort((a, b) => (CONFIDENCE_RANK[a.confidence] ?? 9) - (CONFIDENCE_RANK[b.confidence] ?? 9) || b.last_seen_at.localeCompare(a.last_seen_at));
}

export function newLeadsSince(leads: ClientLead[], since: string | null): ClientLead[] {
  if (!since) return [];
  const t = Date.parse(since);
  if (Number.isNaN(t)) return [];
  return leads.filter((l) => Date.parse(l.first_seen_at) > t);
}

function addClientSheets(wb: ExcelJS.Workbook, leads: ClientLead[], contacts: ClientContact[], since: string | null) {
  const fresh = new Set(newLeadsSince(leads, since).map((l) => l.id));
  const ws = wb.addWorksheet("Clients repérés");
  ws.columns = [
    { header: "Nouveau", key: "nv", width: 9 },
    { header: "Client final (déduit)", key: "company", width: 30 },
    { header: "Confiance", key: "conf", width: 11 },
    { header: "Pays", key: "country", width: 7 },
    { header: "Secteur", key: "sector", width: 20 },
    { header: "Plateformes", key: "plat", width: 22 },
    { header: "Concurrent(s) qui recrutent", key: "comp", width: 28 },
    { header: "Annonces", key: "jobs", width: 60 },
    { header: "Raisonnement", key: "reasoning", width: 70 },
    { header: "Preuves (liens)", key: "ev", width: 60 },
    { header: "Interlocuteurs (onglet besoin immédiat)", key: "dm", width: 50 },
    { header: "Statut", key: "status", width: 11 },
    { header: "Repéré le", key: "first", width: 12 },
  ];
  for (const l of leads) {
    const r = ws.addRow({
      nv: fresh.has(l.id) ? "Oui" : "",
      company: l.company,
      conf: CONFIDENCE_LABEL[l.confidence] ?? l.confidence,
      country: l.country,
      sector: l.sector,
      plat: (l.platforms ?? []).map((p) => PLATFORM_LABEL[p] ?? p).join(", "),
      comp: (l.competitors ?? []).join(", "),
      jobs: l.jobs.map((j) => `${j.title}${j.location ? ` (${j.location})` : ""}${j.url ? ` — ${j.url}` : ""}`).join("\n"),
      reasoning: l.reasoning,
      ev: (l.evidence_urls ?? []).join("\n"),
      dm: contacts.filter((c) => c.prospect_type === "besoin_immediat" && c.lead?.company === l.company).map((c) => `${c.name}${c.role ? `, ${c.role}` : ""}`).join("\n"),
      status: l.status,
      first: l.first_seen_at.slice(0, 10),
    });
    r.alignment = { wrapText: true, vertical: "top" };
  }
  styleHeader(ws);
  ws.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: 13 } };

  const freshContacts = new Set(newContactsSince(contacts, since));
  const contactSheet = (title: string, list: ClientContact[], withLead: boolean) => {
    const ws2 = wb.addWorksheet(title);
    ws2.columns = [
      { header: "Nouveau", key: "nv", width: 9 },
      { header: "Score /5", key: "score", width: 9 },
      { header: "Statut", key: "statut", width: 12 },
      { header: "Nom", key: "name", width: 26 },
      { header: "Fonction (telle que publiée)", key: "role", width: 40 },
      { header: "Entreprise", key: "company", width: 28 },
      { header: "Pays", key: "country", width: 7 },
      { header: "Plateformes", key: "plat", width: 22 },
      ...(withLead ? [{ header: "Confiance du besoin", key: "conf", width: 14 }] : []),
      { header: "Pourquoi ce score", key: "score_reason", width: 60 },
      { header: "Preuve", key: "proof_title", width: 60 },
      { header: "Lu sur", key: "source_url", width: 55 },
      { header: "Type de source", key: "source_type", width: 18 },
      { header: "Repéré le", key: "first", width: 12 },
    ];
    for (const c of list) {
      ws2.addRow({
        ...c,
        nv: freshContacts.has(c) ? "Oui" : "",
        statut: STATUS_LABEL[c.status] ?? c.status,
        plat: (c.platforms ?? []).map((p) => PLATFORM_LABEL[p] ?? p).join(", "),
        conf: c.lead ? CONFIDENCE_LABEL[c.lead.confidence] ?? c.lead.confidence : "",
        first: c.created_at.slice(0, 10),
      }).alignment = { wrapText: true, vertical: "top" };
    }
    styleHeader(ws2);
    ws2.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: (ws2.columns ?? []).length } };
  };
  contactSheet("Prospects besoin immédiat", contacts.filter((c) => c.prospect_type === "besoin_immediat"), true);
  contactSheet("Prospects cibles fonction", contacts.filter((c) => c.prospect_type === "cible_role"), false);
}

/** Rows added to the table after `since` (ISO timestamp): the "new candidates". */
export function newSince(rows: Prospect[], since: string | null): Prospect[] {
  if (!since) return [];
  const t = Date.parse(since);
  if (Number.isNaN(t)) return [];
  return rows.filter((r) => r.created_at && Date.parse(r.created_at) > t);
}

export async function buildWorkbook(
  rows: Prospect[],
  dateIso: string,
  communities: Community[] = [],
  since: string | null = null,
  leads: ClientLead[] = [],
  contacts: ClientContact[] = [],
): Promise<Buffer> {
  const wb = new ExcelJS.Workbook();
  wb.creator = "56North";
  wb.created = new Date();

  const total = rows.length;
  const toContact = rows.filter((r) => r.status === "to_contact").length;

  const lisez = wb.addWorksheet("Lire-moi");
  lisez.columns = [{ header: "Lire-moi", key: "t", width: 120 }];
  [
    `Vivier d'experts IA 56North — export du ${dateIso}. ${total} personnes repérées sur des sources publiques (programmes de conférences, groupes communautaires, blogs, GitHub, podcasts).`,
    "Aucun accès LinkedIn, aucune donnée non publique. Chaque ligne porte sa preuve (titre + lien) : c'est la base de l'information RGPD au premier contact (art. 14).",
    "Score /5 : séniorité, force de la preuve, modules IA, statut indépendant, zone EMEA (1 point chacun). Rareté 1-3 : 3 = distinction officielle (MVP, CTA, GDE…). Un rôle ou une société non affichés plafonnent à 3.",
    since
      ? `Onglet « Nouveaux » : les ${newSince(rows, since).length} candidats ajoutés depuis l'envoi précédent (${since.slice(0, 16).replace("T", " ")} UTC). Les onglets « Déjà en base » et par plateforme ne contiennent que les candidats déjà connus.`
      : "Envoi complet : tous les candidats sont dans l'onglet « Vivier » et les onglets par plateforme.",
    "Statut « À contacter » = score 4 ou 5. Message : A = réseau, B = panel de pairs, C = besoin client ouvert.",
    "E-mail / téléphone publics : relevés uniquement là où la personne les affiche elle-même (site perso ou de sa structure) ; la colonne « Coordonnées lues sur » donne la page. Rien n'est deviné ni acheté.",
    "Onglet « Communautés » : groupes d'utilisateurs, meetups, associations et conférences liés à nos offres (Europe, Maghreb, Canada) : le moyen de toucher beaucoup d'experts d'un coup (talk, sponsoring, annonce).",
    "La table de référence est `prospects` dans Supabase ; ce classeur en est la copie à la date d'export. Les mentions « à vérifier » dans la colonne Pourquoi se confirment avant tout message.",
    "Onglet « Clients repérés » : clients finaux DÉDUITS des annonces publiques de nos concurrents (France, Belgique, Suisse, Luxembourg). Confiance « Forte » = deux recoupements indépendants ; « Moyenne » = un seul ; « Hypothèse » = indices sans recoupement, à ne pas utiliser seule. Ne jamais citer au client l'annonce d'un concurrent comme source.",
    "Prospects clients, deux onglets : « besoin immédiat » = interlocuteurs d'un client dont un besoin est constaté (annonce concurrente) ; « cibles fonction » = décideurs dont la fonction fait une cible (DSI, CDO, CRM, SIRH, conformité IA…), repérés comme les candidats : conférences, études de cas éditeur, presse, sites d'entreprise. Nom, fonction et page lue uniquement : jamais LinkedIn, aucune coordonnée devinée ni stockée. Score /5 : fonction de décision, lien avec l'IA de la plateforme, source récente, deux preuves, taille ou force du besoin.",
    "Ce fichier contient des données personnelles : usage interne 56North, ne pas diffuser.",
  ].forEach((t) => {
    const r = lisez.addRow({ t });
    r.alignment = { wrapText: true, vertical: "top" };
  });
  styleHeader(lisez);

  const syn = wb.addWorksheet("Synthèse");
  syn.columns = [
    { header: "Plateforme", key: "p", width: 16 },
    { header: "Nouveaux", key: "nv", width: 10 },
    { header: "Total", key: "n", width: 8 },
    { header: "À contacter (score ≥ 4)", key: "c", width: 22 },
    { header: "Score 5", key: "s5", width: 9 },
    { header: "Contactés", key: "k", width: 10 },
    { header: "Réponses", key: "r", width: 10 },
  ];
  const fresh = newSince(rows, since);
  const freshSet = new Set(fresh);
  const known = since ? rows.filter((r) => !freshSet.has(r)) : rows;
  const platforms = [...new Set(rows.map((r) => r.platform))].sort();
  for (const p of platforms) {
    const g = rows.filter((r) => r.platform === p);
    syn.addRow({
      p: PLATFORM_LABEL[p] ?? p,
      nv: fresh.filter((r) => r.platform === p).length,
      n: g.length,
      c: g.filter((r) => r.status === "to_contact").length,
      s5: g.filter((r) => r.score === 5).length,
      k: g.filter((r) => r.contacted_at).length,
      r: g.filter((r) => r.replied_at).length,
    });
  }
  const tot = syn.addRow({
    p: "TOTAL",
    nv: fresh.length,
    n: total,
    c: toContact,
    s5: rows.filter((r) => r.score === 5).length,
    k: rows.filter((r) => r.contacted_at).length,
    r: rows.filter((r) => r.replied_at).length,
  });
  tot.font = { bold: true };
  styleHeader(syn);

  const fullSheet = (name: string, list: Prospect[]) => {
    const ws = wb.addWorksheet(name);
    ws.columns = [{ header: "Plateforme", key: "platform", width: 14 }, ...COLUMNS.map((c) => ({ header: c.header, key: c.key, width: c.width }))];
    for (const r of list) {
      ws.addRow({
        ...r,
        platform: PLATFORM_LABEL[r.platform] ?? r.platform,
        statut: STATUS_LABEL[r.status] ?? r.status,
        poolLabel: r.pool === "nearshore" ? "Nearshore" : "Expert",
      profileLabel: PROFILE_LABEL[r.profile_type ?? "platform_ai"] ?? r.profile_type,
        message: r.message_type ? MESSAGE_LABEL[r.message_type] ?? r.message_type : "",
        modules: (r.ai_modules ?? []).join(", "),
      });
    }
    styleHeader(ws);
    ws.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: COLUMNS.length + 1 } };
  };
  if (since) {
    fullSheet("Nouveaux", fresh);
    fullSheet("Déjà en base", known);
  } else {
    fullSheet("Vivier", rows);
  }

  for (const p of platforms) {
    const g = known.filter((r) => r.platform === p);
    if (g.length) addTable(wb.addWorksheet((PLATFORM_LABEL[p] ?? p).slice(0, 31)), g);
  }

  const pays = wb.addWorksheet("Pays");
  pays.columns = [
    { header: "Pays", key: "c", width: 8 },
    { header: "Personnes", key: "n", width: 10 },
  ];
  const byCountry = new Map<string, number>();
  for (const r of rows) if (r.country) byCountry.set(r.country, (byCountry.get(r.country) ?? 0) + 1);
  [...byCountry.entries()].sort((a, b) => b[1] - a[1]).forEach(([c, n]) => pays.addRow({ c, n }));
  styleHeader(pays);

  if (communities.length) {
    const com = wb.addWorksheet("Communautés");
    com.columns = [
      { header: "Plateforme", key: "platformLabel", width: 14 },
      { header: "Pays", key: "country", width: 7 },
      { header: "Ville", key: "city", width: 14 },
      { header: "Offre", key: "offerLabel", width: 16 },
      { header: "Communauté", key: "name", width: 40 },
      { header: "Type", key: "kind", width: 12 },
      { header: "Langue", key: "language", width: 8 },
      { header: "Taille affichée", key: "size_hint", width: 20 },
      { header: "Dernière activité", key: "last_activity", width: 20 },
      { header: "Comment s'y engager", key: "how_to_engage", width: 40 },
      { header: "Lien", key: "url", width: 45 },
      { header: "Contact / proposer un talk", key: "contact_url", width: 40 },
      { header: "E-mail public", key: "public_email", width: 28 },
      { header: "Notes", key: "notes", width: 40 },
    ];
    for (const c of communities) {
      com.addRow({
        ...c,
        platformLabel: PLATFORM_LABEL[c.platform] ?? (c.platform === "ai-governance" ? "Gouvernance IA" : c.platform),
        offerLabel: OFFER_LABEL[c.offer] ?? c.offer,
      });
    }
    styleHeader(com);
  }

  if (leads.length || contacts.length) addClientSheets(wb, leads, contacts, since);

  return Buffer.from(await wb.xlsx.writeBuffer());
}

/** Sends the workbook as an attachment through Resend. Throws on failure. */
export async function emailWorkbook(xlsx: Buffer, filename: string, summary: string, freshCount: number | null = null, subjectOverride: string | null = null) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.EXPORT_EMAIL || process.env.NOTIFY_EMAIL;
  if (!key || !to) throw new Error("RESEND_API_KEY / NOTIFY_EMAIL missing");
  const from = process.env.NOTIFY_FROM || "56North Experts <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: subjectOverride ?? (freshCount ? `Vivier experts IA — ${freshCount} nouveaux candidats` : `Vivier experts IA — ${filename}`),
      text: summary,
      attachments: [{ filename, content: xlsx.toString("base64") }],
    }),
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 300)}`);
}

/**
 * Uploads the workbook to Dropbox. Needs a long-lived setup:
 *   DROPBOX_APP_KEY, DROPBOX_APP_SECRET, DROPBOX_REFRESH_TOKEN
 * (an access token alone expires after four hours). Returns false when not configured.
 */
export async function uploadToDropbox(xlsx: Buffer, filename: string): Promise<boolean> {
  const appKey = process.env.DROPBOX_APP_KEY;
  const appSecret = process.env.DROPBOX_APP_SECRET;
  const refresh = process.env.DROPBOX_REFRESH_TOKEN;
  if (!appKey || !appSecret || !refresh) return false;
  const folder = process.env.DROPBOX_FOLDER || "/56 North/04 Commercial & Partenariats/Vivier experts IA";

  const tokenRes = await fetch("https://api.dropboxapi.com/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refresh, client_id: appKey, client_secret: appSecret }),
    signal: AbortSignal.timeout(10000),
  });
  if (!tokenRes.ok) throw new Error(`Dropbox token ${tokenRes.status}: ${(await tokenRes.text()).slice(0, 300)}`);
  const { access_token } = (await tokenRes.json()) as { access_token: string };

  const up = await fetch("https://content.dropboxapi.com/2/files/upload", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/octet-stream",
      "Dropbox-API-Arg": JSON.stringify({ path: `${folder}/${filename}`, mode: "overwrite", autorename: false, mute: true }),
    },
    body: new Uint8Array(xlsx),
    signal: AbortSignal.timeout(30000),
  });
  if (!up.ok) throw new Error(`Dropbox upload ${up.status}: ${(await up.text()).slice(0, 300)}`);
  return true;
}

export function summaryText(rows: Prospect[], dateIso: string, dropbox: boolean, since: string | null = null, leads: ClientLead[] = [], contacts: ClientContact[] = [], reports: ActivityReport[] = []): string {
  const reportLines = reports.length
    ? [
        "",
        "——— Comptes rendus des tâches depuis le dernier point ———",
        ...reports.flatMap((r) => ["", `▸ ${r.title} (${r.created_at.slice(0, 16).replace("T", " ")} UTC)`, r.body.trim()]),
      ]
    : [];
  const freshContacts = newContactsSince(contacts, since);
  const contactLine = contacts.length
    ? [
        `Prospects clients : ${contacts.filter((c) => c.prospect_type === "besoin_immediat").length} liés à un besoin immédiat, ${contacts.filter((c) => c.prospect_type === "cible_role").length} cibles par fonction${since ? ` (dont ${freshContacts.length} nouveaux)` : ""}.`,
        "",
      ]
    : [];
  const freshLeads = newLeadsSince(leads, since);
  const leadLines = leads.length
    ? [
        `Clients finaux repérés via les annonces des concurrents : ${leads.length} (${leads.filter((l) => l.confidence === "forte").length} en confiance forte)${since ? `, dont ${freshLeads.length} nouveaux` : ""} — onglet « Clients repérés ».`,
        ...freshLeads.slice(0, 10).map((l) => `  ${l.company} (${CONFIDENCE_LABEL[l.confidence] ?? l.confidence}) — ${(l.platforms ?? []).map((p) => PLATFORM_LABEL[p] ?? p).join(", ")} — via ${(l.competitors ?? []).join(", ")}`),
        "",
      ]
    : [];
  const fresh = newSince(rows, since);
  const freshLines = [...new Set(fresh.map((r) => r.platform))].sort().map((p) => {
    const g = fresh.filter((r) => r.platform === p);
    const nearshore = g.filter((r) => r.pool === "nearshore").length;
    return `  ${PLATFORM_LABEL[p] ?? p} : ${g.length}${nearshore ? ` (dont ${nearshore} nearshore)` : ""}`;
  });
  const platforms = [...new Set(rows.map((r) => r.platform))].sort();
  const lines = platforms.map((p) => {
    const g = rows.filter((r) => r.platform === p);
    return `${PLATFORM_LABEL[p] ?? p} : ${g.length} (${g.filter((r) => r.status === "to_contact").length} à contacter)`;
  });
  return [
    `Point quotidien 56North — candidats et prospects, au ${dateIso}. Un seul envoi par jour ; le détail est dans le fichier joint.`,
    "",
    ...(since
      ? [
          `${fresh.length} nouveaux candidats depuis l'envoi précédent (onglet « Nouveaux ») :`,
          ...freshLines,
          `${rows.length - fresh.length} candidats déjà en base (onglet « Déjà en base »).`,
          "",
        ]
      : []),
    `Total : ${rows.length} personnes, ${rows.filter((r) => r.status === "to_contact").length} à contacter.`,
    "",
    ...leadLines,
    ...contactLine,
    ...lines,
    "",
    dropbox ? "Copie déposée dans Dropbox : 56 North / 04 Commercial & Partenariats / Vivier experts IA." : "Dropbox non configuré : le fichier n'est joint qu'à ce message.",
    ...reportLines,
    "",
    "Données personnelles, usage interne.",
  ].join("\n");
}
