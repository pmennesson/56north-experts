import type { MetadataRoute } from "next";
import { absoluteUrl, pagePaths } from "@/lib/seo";
import { site } from "@/lib/site";
import { locales } from "@/lib/locale";
import { articlePaths, getAllArticles } from "@/lib/articles";
import { PILLARS_UPDATED, pillarKeys } from "@/lib/pillars";

/** Every page in both languages, each entry listing its hreflang alternates (x-default: French). */
export default function sitemap(): MetadataRoute.Sitemap {
  const published = getAllArticles().filter((a) => a.status === "published");
  const day = (iso: string) => new Date(`${iso}T12:00:00Z`);
  // Stable dates, never the build date: a lastmod that moves on every deploy is ignored by crawlers.
  const latest = published.map((a) => a.updated).sort().at(-1) ?? site.legalUpdatedIso;
  const alternates = (p: Record<"fr" | "en", string>) => ({
    languages: { fr: absoluteUrl(p.fr), en: absoluteUrl(p.en), "x-default": absoluteUrl(p.fr) },
  });
  // Published articles only: drafts stay out of the index.
  const posts = published.flatMap((a) => {
    const paths = articlePaths(a);
    return locales.map((l) => ({
      url: absoluteUrl(paths[l]),
      lastModified: day(a.updated),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: alternates(paths),
    }));
  });
  const pages = (Object.keys(pagePaths) as (keyof typeof pagePaths)[])
    // The list of articles enters the sitemap with its first published article.
    .filter((key) => key !== "articles" || published.length > 0)
    .flatMap((key) => {
      const p = pagePaths[key];
      const legal = key === "notice" || key === "privacy";
      const pillar = (pillarKeys as string[]).includes(key);
      return locales.map((l) => ({
        url: absoluteUrl(p[l]),
        lastModified: day(legal ? site.legalUpdatedIso : pillar ? PILLARS_UPDATED : latest),
        changeFrequency: key === "articles" ? ("weekly" as const) : ("monthly" as const),
        priority: key === "home" ? 1 : pillar ? (key === "about" ? 0.5 : 0.8) : key === "articles" ? 0.7 : 0.3,
        alternates: alternates(p),
      }));
    });
  return [...pages, ...posts];
}
