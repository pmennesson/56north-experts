import type { Locale } from "@/lib/locale";

export type ArticleVersion = {
  /** URL slug in this language (each language has its own, for search). */
  slug: string;
  title: string;
  /** Meta description: 140–160 characters, contains the target query. */
  description: string;
  /** The query this version targets. One article, one main query. */
  keyword: string;
  /** Niche long-tail queries (low competition) the article also answers. Hypotheses until Search Console confirms. */
  niche: string[];
  /** Answer-first summary shown at the top (and quoted by AI assistants). */
  takeaways: string[];
  /** Markdown. No table alignment colons (French typography pass). */
  body: string;
  /** Short Q&A at the end: FAQPage JSON-LD, the format AI assistants quote most. */
  faq: { q: string; a: string }[];
};

export type Article = {
  id: string;
  /** "draft": online but unlisted and noindex, for review. "published": listed and indexed. */
  status: "draft" | "published";
  published: string; // ISO date
  updated: string; // ISO date
  category: { en: string; fr: string };
  /** Practice pages this article supports (internal links). */
  practices: string[];
  /** Pillar of the editorial line. */
  pillar: "integrate" | "use" | "maintain" | "regulate";
  /** Official or primary sources, shown at the end (authority signal for search and AI). */
  sources: { title: string; url: string }[];
  versions: Record<Locale, ArticleVersion>;
};
