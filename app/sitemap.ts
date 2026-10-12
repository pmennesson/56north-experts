import type { MetadataRoute } from "next";
import { ecosystems } from "@/lib/ecosystems";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { defaultLocale, localePath, locales } from "@/lib/locale";
import { articleLanguages, getAllArticles } from "@/lib/articles";

/** Every page in both languages, each entry listing its hreflang alternates (x-default: English). */
export default function sitemap(): MetadataRoute.Sitemap {
  // Published articles only: drafts stay out of the index.
  const published = getAllArticles().filter((a) => a.status === "published");
  // Stable dates, never the build date: a lastmod that moves on every deploy is ignored by crawlers.
  const latest = published.map((a) => a.updated).sort().at(-1) ?? siteConfig.legalUpdatedIso;
  const day = (iso: string) => new Date(`${iso}T12:00:00Z`);
  const legal = new Set(["/privacy", "/legal"]);
  const pages = [
    ...["/", "/about", "/contact", "/talents", "/privacy", "/legal"].map((p) => ({ p, priority: p === "/" ? 1 : 0.7 })),
    ...ecosystems.map((e) => ({ p: `/experts/${e.slug}`, priority: 0.9 })),
  ];
  const languages = (p: string) => ({
    ...Object.fromEntries(locales.map((l) => [l, absoluteUrl(localePath(l, p))])),
    "x-default": absoluteUrl(localePath(defaultLocale, p)),
  });
  const posts = published.flatMap((a) => {
    const langs = articleLanguages(a);
    const alt = {
      ...Object.fromEntries(locales.map((l) => [l, absoluteUrl(langs[l])])),
      "x-default": absoluteUrl(langs["x-default"]),
    };
    return locales.map((l) => ({
      url: absoluteUrl(langs[l]),
      lastModified: day(a.updated),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages: alt },
    }));
  });
  if (posts.length) pages.push({ p: "/insights", priority: 0.6 });
  return [...posts, ...pages.flatMap(({ p, priority }) =>
    locales.map((l) => ({
      url: absoluteUrl(localePath(l, p)),
      lastModified: day(legal.has(p) ? siteConfig.legalUpdatedIso : latest),
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: languages(p) },
    })),
  )];
}
