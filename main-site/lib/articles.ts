import { marked } from "marked";
import { articles } from "@/content/articles";
import type { Article, ArticleVersion, DangerAdvice } from "@/content/articles/types";
import { frenchTypo, localePath, type Locale } from "@/lib/locale";

/** Section path, the same word in both languages: /articles and /en/articles. */
export const ARTICLES_PATH = "/articles";

export type TocEntry = { id: string; text: string };

export type LocalizedArticle = Omit<Article, "versions" | "category" | "dial"> &
  ArticleVersion & {
    locale: Locale;
    category: string;
    dial: string;
    path: string;
    html: string;
    toc: TocEntry[];
    minutes: number;
    words: number;
  };

/** Column titles of the danger / advice block. */
export const dangerLabels: Record<Locale, { danger: string; advice: string }> = {
  fr: { danger: "Le danger", advice: "Le conseil" },
  en: { danger: "The danger", advice: "The advice" },
};

/** Where the danger / advice block goes in the Markdown body. */
const DANGER_TOKEN = "[[danger-conseil]]";

export const articlesPath = (locale: Locale) => localePath(locale, ARTICLES_PATH);

/** Public path of an article in a locale. */
export const articlePath = (a: Article, locale: Locale) => localePath(locale, `${ARTICLES_PATH}/${a.versions[locale].slug}`);

/** Path per language (slugs differ): feeds hreflang, the sitemap and the language switch. */
export const articlePaths = (a: Article): Record<Locale, string> => ({ fr: articlePath(a, "fr"), en: articlePath(a, "en") });

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** marked escapes quotes and ampersands; the table of contents needs the plain text back. */
const decodeEntities = (s: string) =>
  s.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

/** "Ce qui est établi" → "ce-qui-est-etabli": stable anchors for the table of contents. */
const slugify = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * The danger / advice block as a real <table>: search engines and AI assistants read tables well.
 * On a phone the CSS turns each row into a card, using data-label as the cell title.
 */
function dangersHtml(rows: DangerAdvice[], locale: Locale): string {
  const l = dangerLabels[locale];
  const body = rows
    .map(
      (r) =>
        `<tr><td class="da-danger" data-label="${esc(l.danger)}">${esc(r.danger)}</td><td class="da-advice" data-label="${esc(l.advice)}">${esc(r.advice)}</td></tr>`,
    )
    .join("");
  return `<table class="danger-advice"><thead><tr><th scope="col" class="da-danger">${esc(l.danger)}</th><th scope="col" class="da-advice">${esc(l.advice)}</th></tr></thead><tbody>${body}</tbody></table>`;
}

/** Same block in Markdown, for the plain-text version served to AI assistants. */
function dangersMarkdown(rows: DangerAdvice[], locale: Locale): string {
  const l = dangerLabels[locale];
  const cell = (s: string) => s.replace(/\|/g, "/");
  return [`| ${l.danger} | ${l.advice} |`, "|---|---|", ...rows.map((r) => `| ${cell(r.danger)} | ${cell(r.advice)} |`)].join("\n");
}

function localize(a: Article, locale: Locale): LocalizedArticle {
  const raw = a.versions[locale];
  const v = locale === "fr" ? frenchTypo(raw) : raw;
  const toc: TocEntry[] = [];
  let html = marked.parse(v.body.trim(), { async: false, gfm: true }) as string;
  // Anchors on every section title, collected for the table of contents.
  html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner: string) => {
    const text = decodeEntities(inner.replace(/<[^>]+>/g, ""));
    const id = slugify(text);
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  // External links open in a new tab; internal ones stay in the site.
  html = html.replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" rel="noopener" target="_blank"');
  const block = dangersHtml(v.dangers, locale);
  const token = `<p>${DANGER_TOKEN}</p>`;
  html = html.includes(token) ? html.replace(token, block) : `${html}\n${block}`;
  const words = [v.body, ...v.dangers.flatMap((d) => [d.danger, d.advice])].join(" ").split(/\s+/).length;
  return {
    id: a.id,
    status: a.status,
    published: a.published,
    updated: a.updated,
    sources: a.sources,
    ...v,
    locale,
    category: a.category[locale],
    dial: a.dial[locale],
    path: articlePath(a, locale),
    html,
    toc,
    words,
    minutes: Math.max(1, Math.round(words / 220)),
  };
}

const newestFirst = (x: Article, y: Article) => y.published.localeCompare(x.published);

/** Listed articles: published only (drafts stay reachable by URL, unlisted and noindex). */
export const getPublishedArticles = (locale: Locale) =>
  articles
    .filter((a) => a.status === "published")
    .sort(newestFirst)
    .map((a) => localize(a, locale));

export const getAllArticles = () => articles;

export function getArticle(locale: Locale, slug: string) {
  const a = articles.find((x) => x.versions[locale].slug === slug);
  return a ? { article: a, localized: localize(a, locale) } : null;
}

/** Full article in Markdown (title, summary, body, Q&A, sources): what /llms-full.txt serves. */
export function articleMarkdown(a: LocalizedArticle, absolute: (path: string) => string): string {
  const plain = (s: string) => s.replace(/ /g, " ");
  const body = a.body.trim().replace(DANGER_TOKEN, dangersMarkdown(a.dangers, a.locale));
  return plain(
    [
      `# ${a.title}`,
      "",
      `URL: ${absolute(a.path)}`,
      `Published: ${a.published} · Updated: ${a.updated} · Author: Pascal Mennesson, 56North`,
      "",
      ...a.takeaways.map((k) => `- ${k}`),
      "",
      body,
      "",
      ...a.faq.flatMap((f) => [`### ${f.q}`, f.a, ""]),
      "Sources:",
      ...a.sources.map((s) => `- ${s.title}: ${s.url}`),
      "",
    ].join("\n"),
  );
}

export const formatDate = (iso: string, locale: Locale) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
