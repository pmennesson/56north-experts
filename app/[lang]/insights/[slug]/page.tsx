import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { getEcosystem } from "@/lib/ecosystems";
import { articleLanguages, formatDate, getAllArticles, getArticle, getPublishedArticles } from "@/lib/articles";
import { articleLd, breadcrumbLd, buildMetadata } from "@/lib/seo";
import { fill, getDictionary, getLocale, hasLocale, localePath } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand } from "@/components/home/Sections";
import { StickyCta } from "@/components/home/Founder";
import { Check, Chevron, Container, Section } from "@/components/ui/primitives";

type Props = PageProps<"/[lang]/insights/[slug]">;

/** One static page per article and language; drafts included (unlisted, noindex). */
export const dynamicParams = false;
export async function generateStaticParams({ params }: { params: { lang: string } }) {
  const lang = hasLocale(params.lang) ? params.lang : "en";
  return getAllArticles().map((a) => ({ slug: a.versions[lang].slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale();
  const found = getArticle(locale, (await params).slug);
  if (!found) return {};
  const { article, localized: a } = found;
  return buildMetadata({
    title: a.title,
    description: a.description,
    locale,
    languages: articleLanguages(article),
    noIndex: a.status !== "published",
    article: {
      publishedTime: a.published,
      modifiedTime: a.updated,
      authors: [siteConfig.founder.name],
      section: a.category,
    },
  });
}

export default async function ArticlePage({ params }: Props) {
  const locale = await getLocale();
  const found = getArticle(locale, (await params).slug);
  if (!found) notFound();
  const { localized: a } = found;
  const t = await getDictionary(locale);
  const i = t.insights;
  const lp = (p: string) => localePath(locale, p);
  const practices = a.practices.map((s) => getEcosystem(s, locale)).filter((e) => !!e);
  const more = getPublishedArticles(locale).filter((x) => x.id !== a.id).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleLd({
            url: a.path,
            title: a.title,
            description: a.description,
            datePublished: a.published,
            dateModified: a.updated,
            locale,
            section: a.category,
            keywords: [a.keyword],
          }),
          breadcrumbLd([
            { name: t.practice.home, path: lp("/") },
            { name: i.eyebrow, path: lp("/insights") },
            { name: a.title, path: a.path },
          ]),
        ]}
      />

      {a.status !== "published" && (
        <div className="bg-amber-50 py-3 text-center text-[13px] text-amber-900">{i.draft}</div>
      )}

      <article>
        <header className="bg-canvas">
          <Container className="!max-w-[760px] pb-12 pt-16 sm:pt-24">
            <Link href={lp("/insights")} className="inline-flex items-center gap-1 text-[15px] text-link hover:underline">
              {i.back}
            </Link>
            <p className="mt-8 text-[13px] font-medium uppercase tracking-wide text-signal">{a.category}</p>
            <h1 className="headline-lg mt-3 text-balance">{a.title}</h1>
            <div className="mt-8 flex items-center gap-3">
              <Image src="/founder.jpg" alt={siteConfig.founder.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
              <div className="text-[15px] leading-snug">
                <Link href={lp("/about")} className="font-semibold hover:underline">
                  {i.by} {siteConfig.founder.name}
                </Link>
                <p className="text-fg-subtle">
                  {i.role} · {formatDate(a.published, locale)} · {a.minutes} {i.minutes}
                </p>
              </div>
            </div>
          </Container>
        </header>

        <Container className="!max-w-[760px] pb-20">
          {/* Answer-first summary: what readers skim and what AI assistants quote */}
          <aside className="rounded-3xl bg-canvas-alt p-7 sm:p-8">
            <p className="text-[13px] font-semibold uppercase tracking-wide text-fg-subtle">{i.takeaways}</p>
            <ul className="mt-4 space-y-3">
              {a.takeaways.map((k) => (
                <li key={k} className="flex gap-3 text-[17px] leading-relaxed">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-signal" /> {k}
                </li>
              ))}
            </ul>
          </aside>

          <div
            className="prose-article mt-12 text-[18px] leading-[1.7] text-fg/90
              [&_a]:text-link [&_a:hover]:underline
              [&_h2]:mb-4 [&_h2]:mt-14 [&_h2]:text-[28px] [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:tracking-[-0.02em] [&_h2]:text-fg
              [&_li]:mt-2 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-5 [&_strong]:font-semibold [&_strong]:text-fg
              [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-6
              [&_table]:mt-8 [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_table]:text-[15px] [&_table]:leading-snug
              [&_td]:border-t [&_td]:border-line [&_td]:px-3 [&_td]:py-3 [&_td]:align-top [&_td:first-child]:font-semibold [&_td:first-child]:text-fg
              [&_th]:px-3 [&_th]:pb-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-fg"
            dangerouslySetInnerHTML={{ __html: a.html }}
          />

          {a.updated !== a.published && (
            <p className="mt-12 text-[13px] text-fg-subtle">
              {i.updated} {formatDate(a.updated, locale)}
            </p>
          )}
        </Container>
      </article>

      {practices.length > 0 && (
        <Section tone="pearl" className="!py-16">
          <Container className="!max-w-[760px]">
            <p className="text-[15px] font-semibold text-fg-muted">{i.practicesTitle}</p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {practices.map((e) => (
                <li key={e.slug}>
                  <Link href={lp(`/experts/${e.slug}`)} className="inline-flex items-center gap-1 text-[17px] text-link hover:underline">
                    {fill(t.practice.linkLabel, { vendor: e.vendor })} <Chevron />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {more.length > 0 && (
        <Section className="!py-16">
          <Container className="!max-w-[760px]">
            <p className="text-[15px] font-semibold text-fg-muted">{i.moreTitle}</p>
            <ul className="mt-4 space-y-3">
              {more.map((m) => (
                <li key={m.id}>
                  <Link href={m.path} className="text-[17px] text-link hover:underline">
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <CtaBand t={{ ...t.cta, title: i.ctaTitle, body: i.ctaBody }} />
      <StickyCta href={lp("/contact")} label={t.hero.primaryCta} />
    </>
  );
}
