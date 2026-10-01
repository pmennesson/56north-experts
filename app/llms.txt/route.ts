import { ecosystems } from "@/lib/ecosystems";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import { getEcosystems } from "@/lib/ecosystems";
import { getPublishedArticles } from "@/lib/articles";

/** /llms.txt — a plain-text map of the site for AI assistants (GEO). */
export const dynamic = "force-static";

export function GET() {
  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "## Services",
    "- Staff augmentation: senior AI experts embedded in the client's team, daily rate, from 3 months.",
    "- Dedicated squad: architect plus 2 to 5 engineers for a defined AI delivery scope.",
    "- Fractional AI architect: 2 to 8 days a month of design authority and governance.",
    "",
    "## Ecosystem practices",
    ...ecosystems.map((e) => `- [${e.name}](${absoluteUrl(`/experts/${e.slug}`)}): ${e.modules.map((m) => m.name).join(", ")}.`),
    "",
    "## Key facts",
    ...siteConfig.serviceLevels.map((s) => `- ${s.value}: ${s.label}.`),
    `- Areas served: ${siteConfig.areaServed.join(", ")}.`,
    "- Founder: Pascal Mennesson, co-founder of Maltem Consulting Group (grown from 2001 to 1,100+ consultants in 12 countries before its exit).",
    `- Part of ${siteConfig.parent.name} (${siteConfig.parent.url}), an enterprise AI governance platform.`,
    "- Independence rule: 56North never audits or rates an AI system built or maintained by an expert it placed with the same client in the previous 24 months.",
    "",
    ...(getPublishedArticles("en").length
      ? ["## Insights", ...getPublishedArticles("en").map((a) => `- [${a.title}](${absoluteUrl(a.path)}): ${a.takeaways[0]}`), ""]
      : []),
    "## Contact",
    `- [Request experts](${absoluteUrl("/contact")}) — free to brief, no commitment until a profile is chosen`,
    `- [About](${absoluteUrl("/about")})`,
    `- [Join the expert network](${absoluteUrl("/talents")})`,
    `- Email: ${siteConfig.email}`,
    `- Founder on LinkedIn: ${siteConfig.founder.linkedin}`,
    "",
    "## Version française",
    `Le site existe en français sous ${absoluteUrl("/fr")} : délégation d'experts IA seniors en régie, mêmes services et mêmes engagements.`,
    ...getEcosystems("fr").map((e) => `- [${e.name}](${absoluteUrl(`/fr/experts/${e.slug}`)})`),
    `- [Demander des experts](${absoluteUrl("/fr/contact")})`,
    `- [Rejoindre le réseau](${absoluteUrl("/fr/talents")})`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
