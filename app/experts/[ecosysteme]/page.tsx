import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ecosystems, getEcosystem } from "@/lib/ecosystems";
import { breadcrumbLd, buildMetadata, ecosystemServiceLd, faqLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { VendorMark } from "@/components/VendorMark";
import { Faq, CtaBand } from "@/components/home/Sections";
import { StickyCta } from "@/components/home/Founder";
import { getDictionary } from "@/lib/i18n";
import { Button, Check, Chevron, Container, Section, SectionHeader } from "@/components/ui/primitives";

type Props = { params: Promise<{ ecosysteme: string }> };

/** Pre-render one static page per practice; unknown slugs return 404. */
export const dynamicParams = false;
export function generateStaticParams() {
  return ecosystems.map((e) => ({ ecosysteme: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const e = getEcosystem((await params).ecosysteme);
  if (!e) return {};
  return buildMetadata({
    title: `${e.vendor} AI experts & consultants for hire`,
    description: `Senior ${e.modules.map((m) => m.name).slice(0, 3).join(", ")} experts on staff augmentation. Sourced in specialist communities, vetted by peers, deployed across Europe, the Middle East and Africa.`,
    path: `/experts/${e.slug}`,
  });
}

export default async function EcosystemPage({ params }: Props) {
  const e = getEcosystem((await params).ecosysteme);
  if (!e) notFound();
  const t = await getDictionary();
  const p = t.practice;
  const fill = (s: string) => s.replaceAll("{vendor}", e.vendor);
  const others = ecosystems.filter((o) => o.slug !== e.slug);

  return (
    <>
      <JsonLd
        data={[
          ecosystemServiceLd(e),
          faqLd(e.faq),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Practices", path: "/#ecosystems" },
            { name: e.name, path: `/experts/${e.slug}` },
          ]),
        ]}
      />

      {/* Local sub-nav, like a product page */}
      <div className="sticky top-12 z-40 border-b border-line bg-canvas/80 backdrop-blur-xl">
        <Container className="flex h-12 items-center justify-between">
          <nav aria-label="Breadcrumb" className="text-[13px] text-fg-muted">
            <Link href="/#ecosystems" className="hover:text-fg">Practices</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span className="font-semibold text-fg">{e.vendor}</span>
          </nav>
          <Button href={`/contact?ecosystem=${e.slug}`} className="!h-7 !px-3.5 !text-[12px]">
            Request experts
          </Button>
        </Container>
      </div>

      <section className="bg-canvas">
        <Container className="flex flex-col items-center gap-6 pb-24 pt-20 text-center sm:pt-28">
          <VendorMark slug={e.slug} name={e.vendor} />
          <h1 className="headline-lg max-w-3xl text-balance">{e.headline}</h1>
          {/* Answer-first paragraph: the passage LLMs quote when asked "who staffs X experts?" */}
          <p className="max-w-2xl text-xl leading-relaxed text-fg-muted text-pretty">
            {e.summary} Delivered through staff augmentation, dedicated squads or fractional architecture, sourced
            through the {e.vendor} practitioner communities and vetted by a senior peer.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Button href={`/contact?ecosystem=${e.slug}`} size="lg">
              Request {e.vendor} experts
            </Button>
            <Button href="#modules" variant="link">
              Modules covered
            </Button>
          </div>
        </Container>
      </section>

      {/* The reader's situation in their words, then the outcome (mirror, then future-pace) */}
      <Section tone="pearl">
        <Container className="grid gap-5 lg:grid-cols-2">
          <article className="tile-white reveal p-10">
            <h2 className="headline-md">{p.painsTitle}</h2>
            <ul className="mt-6 space-y-4">
              {p.pains.map((x) => (
                <li key={x} className="text-[17px] leading-relaxed text-fg-muted">
                  {fill(x)}
                </li>
              ))}
            </ul>
          </article>
          <article className="tile-white reveal p-10">
            <h2 className="headline-md">{p.afterTitle}</h2>
            <ul className="mt-6 space-y-4">
              {p.after.map((x) => (
                <li key={x} className="flex gap-3 text-[17px] leading-relaxed">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-signal" /> {fill(x)}
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </Section>

      <Section id="modules" className="scroll-mt-24">
        <Container>
          <SectionHeader eyebrow="Modules" title={`What our ${e.vendor} experts deliver.`} />
          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {e.modules.map((m) => (
              <article key={m.name} className="tile reveal p-8">
                <h3 className="headline-md">{m.name}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-fg-muted">{m.detail}</p>
              </article>
            ))}
          </div>
          <div className="reveal mt-12 flex flex-col items-center gap-3 text-center">
            <Button href={`/contact?ecosystem=${e.slug}`} size="lg">
              {fill(p.midCta)}
            </Button>
            <p className="text-[15px] text-fg-subtle">{t.hero.reassurance}</p>
          </div>
        </Container>
      </Section>

      <Section tone="pearl">
        <Container className="grid gap-5 lg:grid-cols-2">
          <article className="tile-white reveal p-10">
            <h2 className="headline-md">Roles we staff</h2>
            <ul className="mt-6 space-y-3">
              {e.roles.map((r) => (
                <li key={r} className="flex items-center gap-3 text-[17px]">
                  <Check className="h-4 w-4 text-signal" /> {r}
                </li>
              ))}
            </ul>
          </article>
          <article className="tile-white reveal p-10">
            <h2 className="headline-md">Credentials we verify</h2>
            <ul className="mt-6 space-y-3">
              {e.credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 text-[17px]">
                  <Check className="h-4 w-4 text-signal" /> {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] text-fg-subtle">Checked against the vendor&apos;s public credential registry where available.</p>
          </article>
        </Container>
      </Section>

      <Faq t={{ eyebrow: "FAQ", title: `${e.vendor} AI staffing, answered.`, items: e.faq }} />
      <CtaBand t={t.cta} />

      {/* Internal links between pillar pages (SEO) */}
      <Section tone="pearl" className="!py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <p className="text-[15px] font-semibold text-fg-muted">{p.related}</p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/experts/${o.slug}`} className="inline-flex items-center gap-1 text-[17px] text-link hover:underline">
                  {o.vendor} AI experts <Chevron />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <StickyCta href={`/contact?ecosystem=${e.slug}`} label={`Request ${e.vendor} experts`} />
    </>
  );
}
