import { marked } from "marked";
import { articles } from "@/content/articles";
import type { Article, ArticleVersion, DangerAdvice } from "@/content/articles/types";
import { frenchTypo, localePath, type Locale } from "@/lib/locale";

export type LocalizedArticle = Omit<Article, "versions" | "category"> &
  ArticleVersion & { locale: Locale; category: string; path: string; html: string; minutes: number };

/** Public path of an article in a locale. */
export const articlePath = (a: Article, locale: Locale) => localePath(locale, `/insights/${a.versions[locale].slug}`);

/** hreflang map for an article (slugs differ per language). */
export const articleLanguages = (a: Article): Record<Locale | "x-default", string> => ({
  en: articlePath(a, "en"),
  fr: articlePath(a, "fr"),
  "x-default": articlePath(a, "en"),
});

/** Column titles of the danger / advice block. */
export const dangerLabels: Record<Locale, { danger: string; advice: string }> = {
  en: { danger: "The danger", advice: "The advice" },
  fr: { danger: "Le danger", advice: "Le conseil" },
};

/** Where the danger / advice block goes in the Markdown body. */
const DANGER_TOKEN = "[[danger-conseil]]";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

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

function localize(a: Article, locale: Locale): LocalizedArticle {
  const raw = a.versions[locale];
  const v = locale === "fr" ? frenchTypo(raw) : raw;
  let html = marked.parse(v.body.trim(), { async: false, gfm: true }) as string;
  if (v.dangers?.length) {
    const block = dangersHtml(v.dangers, locale);
    const token = `<p>${DANGER_TOKEN}</p>`;
    html = html.includes(token) ? html.replace(token, block) : `${html}\n${block}`;
  }
  const words = [v.body, ...(v.dangers ?? []).flatMap((d) => [d.danger, d.advice])].join(" ").split(/\s+/).length;
  return {
    id: a.id,
    status: a.status,
    published: a.published,
    updated: a.updated,
    practices: a.practices,
    pillar: a.pillar,
    sources: a.sources,
    ...v,
    locale,
    category: a.category[locale],
    path: articlePath(a, locale),
    html,
    minutes: Math.max(1, Math.round(words / 220)),
  };
}

/** Listed articles: published only (drafts stay reachable by URL, unlisted and noindex). */
export const getPublishedArticles = (locale: Locale) =>
  articles.filter((a) => a.status === "published").map((a) => localize(a, locale));

export const getAllArticles = () => articles;

export function getArticle(locale: Locale, slug: string) {
  const a = articles.find((x) => x.versions[locale].slug === slug);
  return a ? { article: a, localized: localize(a, locale) } : null;
}

export const formatDate = (iso: string, locale: Locale) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
