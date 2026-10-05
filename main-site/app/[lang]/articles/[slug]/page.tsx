import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { articlePaths, formatDate, getAllArticles, getArticle, getPublishedArticles } from "@/lib/articles";
import { articleLd, breadcrumbLd, buildMetadata, faqLd, pagePaths } from "@/lib/seo";
import { getDictionary, getLocale, hasLocale, localePath } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { Button, Check, Chevron, Container, Section } from "@/components/ui/primitives";

type Props = PageProps<"/[lang]/articles/[slug]">;

/** One static page per article and language; drafts included (unlisted, noindex). */
export const dynamicParams = false;
export async function generateStaticParams({ params }: { params: { lang: string } }) {
  const lang = hasLocale(params.lang) ? params.lang : "fr";
  return getAllArticles().map((a) => ({ slug: a.versions[lang].slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale();
  const found = getArticle(locale, (await params).slug);
  if (!found) return {};
  const { article, localized: a } = found;
  return buildMetadata({
    paths: articlePaths(article),
    locale,
    title: a.seoTitle,
    socialTitle: a.title,
    description: a.description,
    keywords: [a.keyword, ...a.niche],
    noIndex: a.status !== "published",
    article: {
      publishedTime: `${a.published}T08:00:00+02:00`,
      modifiedTime: `${a.updated}T08:00:00+02:00`,
      authors: [site.founder.name],
      section: a.category,
      tags: [a.keyword, ...a.niche],
    },
  });
}

export default async function ArticlePage({ params }: Props) {
  const locale = await getLocale();
  const found = getArticle(locale, (await params).slug);
  if (!found) notFound();
  const { localized: a } = found;
  const t = await getDictionary(locale);
  const i = t.articles;
  const home = localePath(locale, "/");
  const list = pagePaths.articles[locale];
  const more = getPublishedArticles(locale).filter((x) => x.id !== a.id).slice(0, 3);
  const diagnostic = `${home === "/" ? "/" : home}#diagnostic`;

  return (
    <>
      <JsonLd
        data={[
          articleLd({ ...a, section: a.category, keywords: [a.keyword, ...a.niche] }),
          ...(a.faq.length ? [faqLd(a.faq)] : []),
          breadcrumbLd([
            { name: i.home, path: home },
            { name: i.eyebrow, path: list },
            { name: a.title, path: a.path },
          ]),
        ]}
      />

      {a.status !== "published" && <div className="bg-amber-50 py-3 text-center text-[13px] text-amber-900">{i.draft}</div>}

      <article>
        <header className="bg-canvas">
          <Container className="!max-w-[760px] pb-12 pt-12 sm:pt-20">
            <nav aria-label="Breadcrumb" className="text-[13px] text-fg-subtle">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href={home} className="hover:text-fg hover:underline">
                    {i.home}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href={list} className="hover:text-fg hover:underline">
                    {i.eyebrow}
                  </Link>
                </li>
              </ol>
            </nav>
            <p className="mt-8 flex flex-wrap items-center gap-2 text-[12px] font-medium">
              <span className="rounded-full bg-alert/10 px-2.5 py-1 text-alert">{a.category}</span>
              <span className="rounded-full bg-fg/[0.06] px-2.5 py-1 text-fg-muted">
                {i.dial} · {a.dial}
              </span>
            </p>
            <h1 className="mt-4 text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance">{a.title}</h1>
            <div className="mt-8 flex items-center gap-3">
              <Image src="/founder.jpg" alt={site.founder.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
              <div className="text-[15px] leading-snug">
                <a href={site.founder.linkedin} rel="author noopener" target="_blank" className="font-semibold hover:underline">
                  {i.by} {site.founder.name}
                </a>
                <p className="text-fg-subtle">
                  {i.role} · {i.published} <time dateTime={a.published}>{formatDate(a.published, locale)}</time> · {a.minutes} {i.minutes}
                </p>
              </div>
            </div>
          </Container>
        </header>

        <Container className="!max-w-[760px] pb-20">
          {/* Answer-first summary: what readers skim and what AI assistants quote. */}
          <aside className="rounded-3xl bg-canvas-alt p-7 sm:p-8" data-speakable>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-fg-subtle">{i.takeaways}</p>
            <ul className="mt-4 space-y-3">
              {a.takeaways.map((k) => (
                <li key={k} className="flex gap-3 text-[17px] leading-relaxed">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-signal" /> {k}
                </li>
              ))}
            </ul>
          </aside>

          {a.toc.length > 2 && (
            <nav aria-label={i.toc} className="mt-10 border-y border-line py-6">
              <p className="text-[13px] font-semibold uppercase tracking-wide text-fg-subtle">{i.toc}</p>
              <ol className="mt-3 grid gap-x-8 gap-y-2 text-[15px] sm:grid-cols-2">
                {a.toc.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="text-link hover:underline">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="prose-article mt-10" dangerouslySetInnerHTML={{ __html: a.html }} />

          {a.faq.length > 0 && (
            <section className="mt-16">
              <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.02em]">{i.faqTitle}</h2>
              <div className="mt-6 divide-y divide-line border-y border-line">
                {a.faq.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[18px] font-semibold tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fg/5 text-fg-muted transition-transform duration-300 group-open:rotate-45"
                        aria-hidden
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-[17px] leading-relaxed text-fg-muted">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {a.sources.length > 0 && (
            <section className="mt-12">
              <h2 className="text-[13px] font-semibold uppercase tracking-wide text-fg-subtle">{i.sourcesTitle}</h2>
              <p className="mt-2 text-[13px] text-fg-subtle">{i.sourcesNote}</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-[15px]">
                {a.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} rel="noopener" target="_blank" className="text-link hover:underline">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {a.updated !== a.published && (
            <p className="mt-12 text-[13px] text-fg-subtle">
              {i.updated} <time dateTime={a.updated}>{formatDate(a.updated, locale)}</time>
            </p>
          )}
        </Container>
      </article>

      <Section tone="pearl" className="!py-16">
        <Container className="!max-w-[760px]">
          {more.length > 0 && (
            <>
              <p className="text-[15px] font-semibold text-fg-muted">{i.moreTitle}</p>
              <ul className="mt-4 space-y-3">
                {more.map((m) => (
                  <li key={m.id}>
                    <Link href={m.path} className="text-[17px] leading-snug text-link hover:underline">
                      {m.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className={`text-[15px] font-semibold text-fg-muted ${more.length > 0 ? "mt-10" : ""}`}>{i.expertsTitle}</p>
          <p className="mt-2 text-[17px] leading-relaxed text-fg-muted">
            {i.expertsBody}{" "}
            <a href={i.expertsHref} className="inline-flex items-center gap-1 text-link hover:underline">
              {i.expertsLink} <Chevron />
            </a>
          </p>
          <p className="mt-10">
            <Link href={list} className="inline-flex items-center gap-1 text-[17px] text-link hover:underline">
              {i.back} <Chevron />
            </Link>
          </p>
        </Container>
      </Section>

      <Section className="!py-20">
        <Container className="flex max-w-[760px] flex-col items-center gap-5 text-center">
          <h2 className="headline-md max-w-2xl text-balance">{i.ctaTitle}</h2>
          <Button href={diagnostic} size="lg">
            {t.hero.primary}
          </Button>
          <p className="text-[15px] text-fg-subtle">{i.ctaBody}</p>
        </Container>
      </Section>
    </>
  );
}
