import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ecosystems } from "@/lib/ecosystems";
import { buildMetadata, breadcrumbLd, founderLd } from "@/lib/seo";
import { fill, getDictionary, getLocale, localePath } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/home/Sections";
import { Founder } from "@/components/home/Founder";
import { Container, Section, SectionHeader } from "@/components/ui/primitives";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { about } = await getDictionary(locale);
  return buildMetadata({ title: about.metaTitle, description: about.metaDescription, path: "/about", locale });
}

export default async function AboutPage() {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  const a = t.about;
  const lp = (p: string) => localePath(locale, p);

  return (
    <>
      <JsonLd
        data={[
          founderLd(locale),
          breadcrumbLd([
            { name: t.practice.home, path: lp("/") },
            { name: a.eyebrow, path: lp("/about") },
          ]),
        ]}
      />
      <PageHero eyebrow={a.eyebrow} title={a.title} intro={a.intro} />
      <Founder t={{ ...t.founder, link: "" }} />
      <Section>
        <Container>
          <SectionHeader eyebrow={a.principlesEyebrow} title={a.principlesTitle} />
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {a.principles.map((p) => (
              <article key={p.name} className="tile reveal p-8">
                <h3 className="headline-md">{p.name}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-fg-muted">{fill(p.body, { count: ecosystems.length })}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section tone="pearl" className="!py-16">
        <Container className="max-w-[760px] text-center text-[15px] leading-relaxed text-fg-muted">
          {fill(a.operator, { company: siteConfig.company.name, brn: siteConfig.company.brn })}{" "}
          <Link href={lp("/legal")} className="text-link hover:underline">
            {a.legalLink}
          </Link>
        </Container>
      </Section>
      <CtaBand t={t.cta} />
    </>
  );
}
