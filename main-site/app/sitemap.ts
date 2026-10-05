import type { MetadataRoute } from "next";
import { absoluteUrl, pagePaths } from "@/lib/seo";
import { locales } from "@/lib/locale";
import { articlePaths, getAllArticles } from "@/lib/articles";

/** Every page in both languages, each entry listing its hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const published = getAllArticles().filter((a) => a.status === "published");
  // Published articles only: drafts stay out of the index.
  const posts = published.flatMap((a) => {
    const paths = articlePaths(a);
    const languages = { fr: absoluteUrl(paths.fr), en: absoluteUrl(paths.en) };
    return locales.map((l) => ({
      url: absoluteUrl(paths[l]),
      lastModified: new Date(`${a.updated}T12:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages },
    }));
  });
  const latest = published.map((a) => a.updated).sort().at(-1);
  const pages = (Object.keys(pagePaths) as (keyof typeof pagePaths)[])
    // The list of articles enters the sitemap with its first published article.
    .filter((key) => key !== "articles" || published.length > 0)
    .flatMap((key) => {
      const p = pagePaths[key];
      const languages = { fr: absoluteUrl(p.fr), en: absoluteUrl(p.en) };
      return locales.map((l) => ({
        url: absoluteUrl(p[l]),
        lastModified: key === "articles" && latest ? new Date(`${latest}T12:00:00Z`) : now,
        changeFrequency: key === "articles" ? ("weekly" as const) : ("monthly" as const),
        priority: key === "home" ? 1 : key === "articles" ? 0.7 : 0.3,
        alternates: { languages },
      }));
    });
  return [...pages, ...posts];
}
