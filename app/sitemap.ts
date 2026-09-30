import type { MetadataRoute } from "next";
import { ecosystems } from "@/lib/ecosystems";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statics = ["/", "/contact", "/talents"].map((p) => ({
    url: absoluteUrl(p),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "/" ? 1 : 0.7,
  }));
  const pillars = ecosystems.map((e) => ({
    url: absoluteUrl(`/experts/${e.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...statics, ...pillars];
}
