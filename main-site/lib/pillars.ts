import { marked } from "marked";
import type { Pillar, PillarDictionary, PillarKey } from "@/content/pillars/types";
import { frenchTypo, type Locale } from "@/lib/locale";
import { pagePaths } from "@/lib/seo";

/** Date of the pillar pages' content: sitemap lastmod and dateModified. Change it when a page's text changes. */
export const PILLARS_UPDATED = "2026-10-12";

export const pillarKeys: PillarKey[] = ["governance", "register", "compliance", "cockpit", "hitl", "factory", "about"];

const dictionaries: Record<Locale, () => Promise<PillarDictionary>> = {
  fr: () => import("@/content/pillars/fr").then((m) => frenchTypo(m.default)),
  en: () => import("@/content/pillars/en").then((m) => m.default),
};

export const loadPillars = (locale: Locale) => dictionaries[locale]();

export type RenderedPillar = Pillar & { key: PillarKey; path: string; html: string; words: number };

/**
 * Markdown to HTML, as for the articles: external links open in a new tab,
 * tables get a scroll wrapper so a phone never scrolls the whole page sideways.
 */
function render(md: string): string {
  let html = marked.parse(md.trim(), { async: false, gfm: true }) as string;
  html = html.replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" rel="noopener" target="_blank"');
  // Tables of three columns or more keep a readable width and scroll inside their box on a phone.
  html = html.replace(/<table>([\s\S]*?)<\/table>/g, (_, inner: string) => {
    const cols = (inner.match(/<thead>[\s\S]*?<\/thead>/)?.[0].match(/<th[\s>]/g) ?? []).length;
    return `<div class="table-scroll"><table${cols >= 3 ? ' class="wide"' : ""}>${inner}</table></div>`;
  });
  return html;
}

const countWords = (s: string) => s.replace(/\(\/[^)]*\)|\(https?:[^)]*\)/g, "").split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;

export async function getPillar(locale: Locale, key: PillarKey): Promise<{ page: RenderedPillar; dict: PillarDictionary }> {
  const dict = await loadPillars(locale);
  const p = dict.pages[key];
  const words = countWords([p.h1, p.answer, p.body, ...p.faq.flatMap((f) => [f.q, f.a])].join(" "));
  return { dict, page: { ...p, key, path: pagePaths[key][locale], html: render(p.body), words } };
}
