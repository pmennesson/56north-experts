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
    "## How clients work with the network",
    "- AI only, no classic integration work. All engagements are run as agile, outcome-driven consulting.",
    "- Senior expert in your squad: a senior AI expert from the network joins the client's product team and drives one AI use case sprint by sprint, from 3 months.",
    "- Dedicated AI squad: an architect plus 2 to 5 engineers from the network, committed to one business outcome, demo every sprint.",
    "- Fractional AI architect: a principal architect from the network, 2 to 8 days a month of design authority and governance.",
    "",
    "## Ecosystem practices",
    ...ecosystems.map((e) => `- [${e.name}](${absoluteUrl(`/experts/${e.slug}`)}): ${e.modules.map((m) => m.name).join(", ")}.`),
    "",
    "## Where we look (community first)",
    "- Members are identified in practitioner communities, not on job boards, and admitted after a technical interview with a senior peer: Trailblazer Community and the Salesforce MVP programme; Microsoft Tech Community and the Microsoft MVP programme; Google Developer Experts and Google Cloud Community; SAP Community and SAP Champions; ServiceNow Community and its Community MVP programme; Workday Community. These programmes belong to their vendors; 56North Experts is not affiliated with them.",
    "",
    "## Key facts",
    ...siteConfig.serviceLevels.map((s) => `- ${s.value}: ${s.label}.`),
    `- Areas served: ${siteConfig.areaServed.join(", ")}.`,
    "- Founder: Pascal Mennesson, co-founder of Maltem Consulting Group (grown from 2001 to 1,100+ consultants in 12 countries before its exit).",
    `- Part of ${siteConfig.parent.name} (${siteConfig.parent.url}), an enterprise AI governance platform.`,
    "- Vendor-neutral: 56North resells no licences and depends on no AI vendor. AI systems delivered by 56North Experts teams can be overseen in Cockpit with sealed evidence any third party can verify; 56North does not itself issue an independent third-party opinion on a system its own teams delivered.",
    "",
    ...(getPublishedArticles("en").length
      ? ["## Insights", ...getPublishedArticles("en").map((a) => `- [${a.title}](${absoluteUrl(a.path)}): ${a.takeaways[0]}`), ""]
      : []),
    "## Related",
    "- [56North Cockpit](https://56north.io/en): the 56North platform that lists the AI systems a company runs, tracks them on five dials (reliability, costs, AI Act evidence, usage, reference data) and gathers dated evidence for the EU AI Act.",
    "- [Cockpit 56North (français)](https://56north.io)",
    "",
    "## Contact",
    `- [Let's talk about your project](${absoluteUrl("/contact")}) — the first conversation is free, no commitment until you choose the member who will join you`,
    `- [About](${absoluteUrl("/about")})`,
    `- [Join the expert network](${absoluteUrl("/talents")})`,
    `- Email: ${siteConfig.email}`,
    `- Founder on LinkedIn: ${siteConfig.founder.linkedin}`,
    "",
    "## Version française",
    `Le site existe en français sous ${absoluteUrl("/fr")} : réseau sur admission d'experts IA seniors, en missions agiles dédiées à l'IA : expert senior dans votre squad, squad IA dédiée ou architecte IA à temps partagé, avec les mêmes engagements.`,
    ...getEcosystems("fr").map((e) => `- [${e.name}](${absoluteUrl(`/fr/experts/${e.slug}`)})`),
    `- [Parlons de votre projet](${absoluteUrl("/fr/contact")})`,
    `- [Rejoindre le réseau](${absoluteUrl("/fr/talents")})`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
