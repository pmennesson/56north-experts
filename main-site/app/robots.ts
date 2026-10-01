import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/** AI crawlers explicitly allowed: being cited by assistants is a discovery channel. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended"], allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
