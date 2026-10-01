import { loadDictionary } from "@/lib/dictionaries";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

/** /llms.txt — plain-text map of the site for AI assistants. */
export const dynamic = "force-static";

export async function GET() {
  const fr = await loadDictionary("fr");
  const en = await loadDictionary("en");
  const plain = (s: string) => s.replace(/ /g, " ");
  const body = [
    `# ${site.name}`,
    "",
    `> ${en.meta.description}`,
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
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
