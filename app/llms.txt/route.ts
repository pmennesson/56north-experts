import { ecosystems } from "@/lib/ecosystems";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

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
    `- Part of ${siteConfig.parent.name} (${siteConfig.parent.url}), an enterprise AI governance platform.`,
    "- Independence rule: 56North never audits or rates an AI system built or maintained by an expert it placed with the same client in the previous 24 months.",
    "",
    "## Contact",
    `- [Request experts](${absoluteUrl("/contact")})`,
    `- [Join the expert network](${absoluteUrl("/talents")})`,
    `- Email: ${siteConfig.email}`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
