import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/**
 * GEO stance: AI crawlers are explicitly allowed. Being quoted by ChatGPT,
 * Perplexity, Claude or Gemini when a buyer asks "who can staff an
 * Agentforce architect?" is a lead channel. Block them here if you disagree.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended"], allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
