import { getPublishedArticles } from "@/lib/articles";
import { loadDictionary } from "@/lib/dictionaries";
import { absoluteUrl, feedPath, pagePaths } from "@/lib/seo";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/locale";

const esc = (s: string) =>
  s.replace(/ /g, " ").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RSS 2.0 feed of the published articles in one language. */
export async function buildFeed(locale: Locale): Promise<string> {
  const { articles: i } = await loadDictionary(locale);
  const items = getPublishedArticles(locale);
  const lastBuild = items[0] ? new Date(`${items[0].updated}T12:00:00Z`) : new Date();
  const entries = items
    .map(
      (a) => `    <item>
      <title>${esc(a.title)}</title>
      <link>${absoluteUrl(a.path)}</link>
      <guid isPermaLink="true">${absoluteUrl(a.path)}</guid>
      <pubDate>${new Date(`${a.published}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${esc(a.description)}</description>
      <category>${esc(a.category)}</category>
      <dc:creator>${esc(site.founder.name)}</dc:creator>
    </item>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${esc(`${site.name} · ${i.eyebrow}`)}</title>
    <link>${absoluteUrl(pagePaths.articles[locale])}</link>
    <atom:link href="${absoluteUrl(feedPath(locale))}" rel="self" type="application/rss+xml" />
    <description>${esc(i.metaDescription)}</description>
    <language>${locale === "fr" ? "fr-FR" : "en-GB"}</language>
    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
${entries}
  </channel>
</rss>
`;
}

export const feedResponse = async (locale: Locale) =>
  new Response(await buildFeed(locale), { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
