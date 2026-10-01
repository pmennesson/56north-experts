import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ecosystems } from "@/lib/ecosystems";
import { buildMetadata, breadcrumbLd, founderLd } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/home/Sections";
import { Founder } from "@/components/home/Founder";
import { Container, Section, SectionHeader } from "@/components/ui/primitives";

export const metadata: Metadata = buildMetadata({
  title: "About 56North Experts",
  description:
    "Who runs 56North Experts, how we source and vet senior AI specialists, and the independence rule that separates staffing from AI audits. Founded by Pascal Mennesson, co-founder of Maltem Consulting Group.",
  path: "/about",
});

export default async function AboutPage() {
  const t = await getDictionary();
  const principles = [
    {
      name: "Sourced in communities",
      body: "The best platform specialists rarely answer job boards. We find them where they contribute: user groups, community forums, meetups and conference talks.",
    },
    {
      name: "Vetted by peers",
      body: `Every candidate is interviewed by a senior practitioner of the same platform, using a standard scorecard. We cover ${ecosystems.length} enterprise platforms today.`,
    },
    {
      name: "Independent by rule",
      body: `${siteConfig.parent.name} never audits or rates an AI system built or maintained by an expert it placed with the same client in the previous 24 months.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          founderLd(),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="About"
        title={"Senior people.\nPlaced with care."}
        intro={`${siteConfig.name} is the expert network of ${siteConfig.parent.name}. We place senior specialists on the AI modules of the enterprise platforms companies already run, across Europe, the Middle East and Africa.`}
      />
      <Founder t={{ ...t.founder, link: "" }} />
      <Section>
        <Container>
          <SectionHeader eyebrow="How we work" title="Three principles." />
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {principles.map((p) => (
              <article key={p.name} className="tile reveal p-8">
                <h3 className="headline-md">{p.name}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-fg-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section tone="pearl" className="!py-16">
        <Container className="max-w-[760px] text-center text-[15px] leading-relaxed text-fg-muted">
          {siteConfig.name} is operated by {siteConfig.company.name} (BRN {siteConfig.company.brn}), registered in Port Louis,
          Mauritius. <a href="/legal" className="text-link hover:underline">Legal notice</a>
        </Container>
      </Section>
      <CtaBand t={t.cta} />
    </>
  );
}
