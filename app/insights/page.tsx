import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container, Section } from "@/components/ui/primitives";

export const metadata: Metadata = buildMetadata({
  title: "Insights on enterprise AI delivery",
  description:
    "Guides, white papers and benchmarks on staffing and delivering AI projects on Microsoft, Salesforce, Google Cloud, SAP and ServiceNow.",
  path: "/insights",
  noIndex: true, // TODO: remove once the first articles are published (thin page)
});

/*
 * Content hub. Next iteration: MDX articles under content/insights/*.mdx,
 * rendered at /insights/[slug] with Article JSON-LD, author pages and
 * gated white papers (lead magnet → contact CRM).
 */
const planned = [
  { type: "Guide", title: "Staff augmentation vs systems integrator for AI projects" },
  { type: "Benchmark", title: "Day rates for senior AI experts by platform and country" },
  { type: "White paper", title: "Preparing enterprise AI deployments for the EU AI Act" },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="What we learn from staffing enterprise AI."
        intro="Practical guides and data for CIOs, delivery leads and procurement teams working on the major enterprise AI platforms."
      />
      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          {planned.map((p) => (
            <article key={p.title} className="tile reveal flex flex-col gap-3 p-8">
              <span className="text-[13px] font-medium uppercase tracking-wide text-signal">{p.type}</span>
              <h2 className="headline-md">{p.title}</h2>
              <span className="mt-auto pt-6 text-[13px] text-fg-subtle">Coming soon</span>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}
