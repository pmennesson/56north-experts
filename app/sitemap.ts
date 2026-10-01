import type { MetadataRoute } from "next";
import { ecosystems } from "@/lib/ecosystems";
import { absoluteUrl } from "@/lib/seo";
import { localePath, locales } from "@/lib/locale";
import { articleLanguages, getAllArticles } from "@/lib/articles";

/** Every page in both languages, each entry listing its hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    ...["/", "/about", "/contact", "/talents", "/privacy", "/legal"].map((p) => ({ p, priority: p === "/" ? 1 : 0.7 })),
    ...ecosystems.map((e) => ({ p: `/experts/${e.slug}`, priority: 0.9 })),
  ];
  const languages = (p: string) => Object.fromEntries(locales.map((l) => [l, absoluteUrl(localePath(l, p))]));
  // Published articles only: drafts stay out of the index.
  const posts = getAllArticles()
    .filter((a) => a.status === "published")
    .flatMap((a) => {
      const langs = articleLanguages(a);
      const alt = Object.fromEntries(locales.map((l) => [l, absoluteUrl(langs[l])]));
      return locales.map((l) => ({
        url: absoluteUrl(langs[l]),
        lastModified: new Date(a.updated),
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: { languages: alt },
      }));
    });
  if (posts.length) pages.push({ p: "/insights", priority: 0.6 });
  return [...posts, ...pages.flatMap(({ p, priority }) =>
    locales.map((l) => ({
      url: absoluteUrl(localePath(l, p)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: languages(p) },
    })),
  )];
}
