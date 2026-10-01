import type { MetadataRoute } from "next";
import { ecosystems } from "@/lib/ecosystems";
import { absoluteUrl } from "@/lib/seo";
import { localePath, locales } from "@/lib/locale";

/** Every page in both languages, each entry listing its hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    ...["/", "/about", "/contact", "/talents", "/privacy", "/legal"].map((p) => ({ p, priority: p === "/" ? 1 : 0.7 })),
    ...ecosystems.map((e) => ({ p: `/experts/${e.slug}`, priority: 0.9 })),
  ];
  const languages = (p: string) => Object.fromEntries(locales.map((l) => [l, absoluteUrl(localePath(l, p))]));
  return pages.flatMap(({ p, priority }) =>
    locales.map((l) => ({
      url: absoluteUrl(localePath(l, p)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: languages(p) },
    })),
  );
}
