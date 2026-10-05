import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n";
import { formatDate, getPublishedArticles } from "@/lib/articles";
import { PageHero } from "@/components/PageHero";
import { MainSiteReads } from "@/components/MainSiteReads";
import { getMainSiteArticles } from "@/lib/main-site-feed";
import { Chevron, Container, Section } from "@/components/ui/primitives";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { insights: i } = await getDictionary(locale);
  return buildMetadata({
    title: i.metaTitle,
    description: i.metaDescription,
    path: "/insights",
    locale,
    // A hub with nothing published is a thin page: keep it out of the index until the first article is live.
    noIndex: getPublishedArticles(locale).length === 0,
  });
}

export default async function InsightsPage() {
  const locale = await getLocale();
  const { insights: i } = await getDictionary(locale);
  const list = getPublishedArticles(locale);
  const mainSite = await getMainSiteArticles(locale);
  return (
    <>
      <PageHero eyebrow={i.eyebrow} title={i.title} intro={i.intro} />
      <Section>
        <Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.length > 0
            ? list.map((a) => (
                <Link key={a.id} href={a.path} className="tile tile-lift reveal group flex flex-col gap-3 p-8">
                  <span className="text-[13px] font-medium uppercase tracking-wide text-signal">{a.category}</span>
                  <h2 className="headline-md text-balance">{a.title}</h2>
                  <p className="text-[15px] leading-relaxed text-fg-muted">{a.description}</p>
                  <span className="mt-auto flex items-center justify-between pt-6 text-[13px] text-fg-subtle">
                    {formatDate(a.published, locale)} · {a.minutes} {i.minutes}
                    <Chevron className="h-3 w-3 text-link" />
                  </span>
                </Link>
              ))
            : i.planned.map((p) => (
                <article key={p.title} className="tile reveal flex flex-col gap-3 p-8">
                  <span className="text-[13px] font-medium uppercase tracking-wide text-signal">{p.type}</span>
                  <h2 className="headline-md">{p.title}</h2>
                  <span className="mt-auto pt-6 text-[13px] text-fg-subtle">{i.soon}</span>
                </article>
              ))}
        </Container>
      </Section>
      <MainSiteReads t={i.mainSite} items={mainSite} locale={locale} />
    </>
  );
}
