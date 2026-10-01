import type { Metadata } from "next";
import { getEcosystems } from "@/lib/ecosystems";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale, localePath } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { Check, Container, Section } from "@/components/ui/primitives";
import { ContactForm } from "./ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { contactPage: c } = await getDictionary(locale);
  return buildMetadata({ title: c.metaTitle, description: c.metaDescription, path: "/contact", locale });
}

export default async function ContactPage({ searchParams }: PageProps<"/[lang]/contact">) {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  const c = t.contactPage;
  const ecosystems = getEcosystems(locale);
  const { ecosystem } = await searchParams;
  const valid = typeof ecosystem === "string" && ecosystems.some((e) => e.slug === ecosystem) ? ecosystem : undefined;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
      <Section tone="pearl">
        <Container className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <ContactForm
            lang={locale}
            t={t.contactForm}
            s={t.steps}
            privacyHref={localePath(locale, "/privacy")}
            ecosystems={ecosystems.map((e) => ({ value: e.slug, label: e.name }))}
            defaultEcosystem={valid}
          />
          <aside className="flex flex-col gap-6">
            <div className="tile-white p-8">
              <p className="text-xl font-semibold tracking-[-0.015em]">{c.nextTitle}</p>
              <ol className="mt-5 space-y-3 text-[15px] text-fg-muted">
                {c.next.map((s) => (
                  <li key={s} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" /> {s}
                  </li>
                ))}
              </ol>
            </div>
            <div className="tile-white p-8 text-[15px] text-fg-muted">
              {c.preferEmail}{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-link hover:underline">
                {siteConfig.email}
              </a>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
