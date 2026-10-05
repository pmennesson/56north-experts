import { articleMarkdown, getPublishedArticles } from "@/lib/articles";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

/**
 * /llms-full.txt — the full text of every published article, in Markdown, English then French.
 * AI assistants that follow /llms.txt read this instead of parsing the HTML pages.
 */
export const dynamic = "force-static";

export function GET() {
  const en = getPublishedArticles("en");
  const fr = getPublishedArticles("fr");
  const body = [
    `# ${site.name}: articles (full text)`,
    "",
    `> Reaction articles on enterprise AI incidents, the EU AI Act and AI governance, written for CIOs and compliance leads. Author: ${site.founder.name}. Each article states what is established, sets the danger against the advice, and lists what to check. Sources are listed under each article.`,
    "",
    "---",
    "",
    ...en.flatMap((a) => [articleMarkdown(a, absoluteUrl), "---", ""]),
    "# Version française",
    "",
    ...fr.flatMap((a) => [articleMarkdown(a, absoluteUrl), "---", ""]),
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
