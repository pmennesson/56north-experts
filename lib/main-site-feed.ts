import "server-only";
import type { Locale } from "@/lib/locale";
import { siteConfig as site } from "@/lib/site";

/**
 * The latest articles of 56north.io (incidents, AI Act, governance), read from its RSS feed.
 * Used to point visitors of experts.56north.io to them instead of duplicating the articles
 * on both sites (duplicate content would split search ranking between the two domains).
 * Refreshed every 30 minutes; if 56north.io does not answer, the block simply does not show.
 */
export type MainSiteArticle = { title: string; url: string; published: string; category: string; description: string };

const decode = (s: string) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();

const tag = (item: string, name: string) => decode(item.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`))?.[1] ?? "");

export async function getMainSiteArticles(locale: Locale, limit = 3): Promise<MainSiteArticle[]> {
  const url = `${site.parent.url}${locale === "fr" ? "" : "/en"}/feed.xml`;
  try {
    const res = await fetch(url, { next: { revalidate: 1800 }, signal: AbortSignal.timeout(4000) });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
    return items
      .map((it) => {
        const pub = new Date(tag(it, "pubDate"));
        return {
          title: tag(it, "title"),
          url: tag(it, "link"),
          published: Number.isNaN(pub.getTime()) ? "" : pub.toISOString().slice(0, 10),
          category: tag(it, "category"),
          description: tag(it, "description"),
        };
      })
      .filter((a) => a.title && a.url.startsWith(site.parent.url))
      .slice(0, limit);
  } catch {
    return [];
  }
}
