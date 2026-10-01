import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { Container, Section } from "@/components/ui/primitives";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { insights: i } = await getDictionary(locale);
  return buildMetadata({
    title: i.metaTitle,
    description: i.metaDescription,
    path: "/insights",
    locale,
    noIndex: true, // TODO: remove once the first articles are published (thin page)
  });
}

/*
 * Content hub. Next iteration: MDX articles under content/insights/*.mdx,
 * rendered at /insights/[slug] with Article JSON-LD, author pages and
 * gated white papers (lead magnet → contact CRM).
 */
export default async function InsightsPage() {
  const { insights: i } = await getDictionary();
  return (
    <>
      <PageHero eyebrow={i.eyebrow} title={i.title} intro={i.intro} />
      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          {i.planned.map((p) => (
            <article key={p.title} className="tile reveal flex flex-col gap-3 p-8">
              <span className="text-[13px] font-medium uppercase tracking-wide text-signal">{p.type}</span>
              <h2 className="headline-md">{p.title}</h2>
              <span className="mt-auto pt-6 text-[13px] text-fg-subtle">{i.soon}</span>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}
