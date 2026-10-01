import { marked } from "marked";
import { articles } from "@/content/articles";
import type { Article, ArticleVersion } from "@/content/articles/types";
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

function localize(a: Article, locale: Locale): LocalizedArticle {
  const raw = a.versions[locale];
  const v = locale === "fr" ? frenchTypo(raw) : raw;
  const html = marked.parse(v.body.trim(), { async: false, gfm: true }) as string;
  const words = v.body.split(/\s+/).length;
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
