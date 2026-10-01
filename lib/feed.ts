import { getPublishedArticles } from "@/lib/articles";
import { loadDictionary } from "@/lib/dictionaries";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { localePath, type Locale } from "@/lib/locale";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Public path of the RSS feed for a locale. */
export const feedPath = (locale: Locale) => localePath(locale, "/feed.xml");

/** RSS 2.0 feed of the published articles in one language. */
export async function buildFeed(locale: Locale): Promise<string> {
  const { meta, nav } = await loadDictionary(locale);
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
    </item>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(`${siteConfig.name} · ${nav.insights}`)}</title>
    <link>${absoluteUrl(localePath(locale, "/insights"))}</link>
    <atom:link href="${absoluteUrl(feedPath(locale))}" rel="self" type="application/rss+xml" />
    <description>${esc(meta.description)}</description>
    <language>${locale === "fr" ? "fr-FR" : "en-GB"}</language>
    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
${entries}
  </channel>
</rss>
`;
}

export const feedResponse = async (locale: Locale) =>
  new Response(await buildFeed(locale), { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
