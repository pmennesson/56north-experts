/**
 * Pillar pages: one page per search intent (the Cockpit, the two partner offers,
 * AI governance, the AI register, AI Act compliance, about).
 *
 * RULES (same as fr.ts / en.ts): every claim complies with docs/faits-publics.md of the
 * cockpit-56north repository. Human in the Loop and Factory are OFFERS, not yet operated:
 * never described in the present tense as something running. Every regulatory fact
 * (article, date, amount) comes from a source listed in `sources`, opened before writing.
 */
export type PillarKey = "cockpit" | "hitl" | "factory" | "governance" | "register" | "compliance" | "about";

export type Pillar = {
  /** Tab title, query first. Rendered with the " · 56North" suffix: keep the whole under 60 characters. */
  title: string;
  /** Meta description, 140 to 160 characters. */
  description: string;
  /** Short name: breadcrumb, footer and cross-links. */
  name: string;
  eyebrow: string;
  /** H1, containing the target query. */
  h1: string;
  /** One-sentence answer, shown first (what search engines and assistants quote). */
  answer: string;
  /** Offers only: availability, as fr.ts states it. */
  status?: string;
  /** Body in Markdown: H2 sections, lists, tables, links. */
  body: string;
  faq: { q: string; a: string }[];
  /** Sources opened before writing (regulatory facts). */
  sources?: { title: string; url: string }[];
  /** Offers: schema.org Service. */
  service?: { name: string; serviceType: string; description: string };
  /** Pages linked at the bottom ("Pour aller plus loin"). */
  related: PillarKey[];
  /** Target query (and niche queries): meta keywords and editorial tracking. */
  keywords: string[];
};

export type PillarDictionary = {
  /** Shared labels. */
  ui: {
    home: string;
    faqTitle: string;
    sourcesTitle: string;
    sourcesNote: string;
    relatedTitle: string;
    ctaTitle: string;
    ctaBody: string;
    cta: string;
    updated: string;
    /** Footer heading of the pages list. */
    footerTitle: string;
    /** "En savoir plus" links on the home page, one per section. */
    more: { cockpit: string; hitl: string; factory: string; whyThirdParty: string; clock: string };
  };
  pages: Record<PillarKey, Pillar>;
};
