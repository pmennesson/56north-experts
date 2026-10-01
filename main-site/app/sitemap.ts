import type { MetadataRoute } from "next";
import { absoluteUrl, pagePaths } from "@/lib/seo";
import { locales } from "@/lib/locale";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return (Object.keys(pagePaths) as (keyof typeof pagePaths)[]).flatMap((key) => {
    const p = pagePaths[key];
    const languages = { fr: absoluteUrl(p.fr), en: absoluteUrl(p.en) };
    return locales.map((l) => ({
      url: absoluteUrl(p[l]),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: key === "home" ? 1 : 0.3,
      alternates: { languages },
    }));
  });
}
