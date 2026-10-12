import { loadDictionary } from "@/lib/dictionaries";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import { getPublishedArticles } from "@/lib/articles";
import { loadPillars, pillarKeys } from "@/lib/pillars";
import { pagePaths } from "@/lib/seo";

/** /llms.txt — plain-text map of the site for AI assistants. */
export const dynamic = "force-static";

export async function GET() {
  const fr = await loadDictionary("fr");
  const en = await loadDictionary("en");
  const plain = (s: string) => s.replace(/ /g, " ");
  const articlesEn = getPublishedArticles("en");
  const articlesFr = getPublishedArticles("fr");
  const pillarsEn = await loadPillars("en");
  const pillarsFr = await loadPillars("fr");
  const body = [
    `# ${site.name}`,
    "",
    `> ${en.meta.description}`,
    "",
    "## Pages",
    ...pillarKeys.map((k) => `- [${pillarsEn.pages[k].h1}](${absoluteUrl(pagePaths[k].en)}): ${pillarsEn.pages[k].answer}`),
    "",
    "## What 56North does",
    ...en.offer.layers.map((l) => `- ${l.name} (${l.kind}, ${l.status.toLowerCase()}): ${l.body}`),
    "",
    "## Ways to start",
    ...en.offer.plans.map((p) => `- ${p.name}: ${p.body}`),
    "",
    "## The Cockpit's five dials",
    ...en.cockpit.dials.map((d) => `- ${d.name}: ${d.body}`),
    "",
    "## Commitments",
    ...en.commitments.items.map((c) => `- ${c.name}. ${c.body}`),
    "",
    "## FAQ",
    ...en.faq.items.flatMap((f) => [`### ${f.q}`, f.a, ""]),
    ...(articlesEn.length
      ? [
          "## Articles",
          "Reaction articles on AI incidents, the EU AI Act and AI governance. Each one states what is established, sets the danger against the advice, and lists what to check.",
          ...articlesEn.map((a) => `- [${a.title}](${absoluteUrl(a.path)}) (${a.published}): ${a.takeaways[0]}`),
          `- Full text of every article, in Markdown: ${absoluteUrl("/llms-full.txt")}`,
          `- RSS: ${absoluteUrl("/en/feed.xml")} (English) · ${absoluteUrl("/feed.xml")} (français)`,
          "",
        ]
      : []),
    "## Links",
    `- [Français](${absoluteUrl("/")}) · [English](${absoluteUrl("/en")})`,
    `- [Request an assessment](${absoluteUrl("/en#diagnostic")}) · [Demander un diagnostic](${absoluteUrl("/#diagnostic")})`,
    `- [56North Experts, the expert network](${site.experts})`,
    `- Contact: ${site.email}`,
    `- Founder: ${site.founder.name} (${site.founder.linkedin})`,
    "",
    "## En français",
    plain(`> ${fr.meta.description}`),
    "",
    "### Pages",
    ...pillarKeys.map((k) => plain(`- [${pillarsFr.pages[k].h1}](${absoluteUrl(pagePaths[k].fr)}) : ${pillarsFr.pages[k].answer}`)),
    ...(articlesFr.length ? ["", "### Articles", ...articlesFr.map((a) => plain(`- [${a.title}](${absoluteUrl(a.path)}) : ${a.takeaways[0]}`))] : []),
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
