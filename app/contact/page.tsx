import type { Metadata } from "next";
import { ecosystems } from "@/lib/ecosystems";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Check, Container, Section } from "@/components/ui/primitives";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Request senior AI experts",
  description:
    "Send a staffing brief for Microsoft, Salesforce, Google Cloud, SAP or ServiceNow AI experts. A practice lead replies within one business day and sources through specialist practitioner communities.",
  path: "/contact",
});

type Props = { searchParams: Promise<{ ecosystem?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { ecosystem } = await searchParams;
  const valid = ecosystems.some((e) => e.slug === ecosystem) ? ecosystem : undefined;

  return (
    <>
      <PageHero
        eyebrow="Staffing request"
        title="Tell us the role."
        intro="Two minutes. A practice lead calls you back within one business day, then introduces two or three peer-vetted profiles, with a realistic lead time given upfront."
      />
      <Section tone="pearl">
        <Container className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <ContactForm ecosystems={ecosystems.map((e) => ({ value: e.slug, label: e.name }))} defaultEcosystem={valid} />
          <aside className="flex flex-col gap-6">
            <div className="tile-white p-8">
              <p className="text-xl font-semibold tracking-[-0.015em]">What happens next</p>
              <ol className="mt-5 space-y-3 text-[15px] text-fg-muted">
                {["Qualification call with a practice lead", "Shortlist with written peer assessment", "Interviews you schedule, we coordinate", "Contract and start date"].map((s) => (
                  <li key={s} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" /> {s}</li>
                ))}
              </ol>
            </div>
            <div className="tile-white p-8 text-[15px] text-fg-muted">
              Prefer email? Write to{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-link hover:underline">{siteConfig.email}</a>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
