import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, getLocale, localePath } from "@/lib/i18n";
import { blogLd, breadcrumbLd, buildMetadata, feedPath, pagePaths } from "@/lib/seo";
import { formatDate, getPublishedArticles } from "@/lib/articles";
import { JsonLd } from "@/components/JsonLd";
import { Chevron, Container, Eyebrow, Section } from "@/components/ui/primitives";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { articles: i } = await getDictionary(locale);
  return buildMetadata({
    page: "articles",
    locale,
    title: i.metaTitle,
    description: i.metaDescription,
    // A list with nothing published is a thin page: keep it out of the index until the first article is live.
    noIndex: getPublishedArticles(locale).length === 0,
  });
}

export default async function ArticlesPage() {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  const i = t.articles;
  const list = getPublishedArticles(locale);
  return (
    <>
      <JsonLd
        data={[
          blogLd(locale, i.metaTitle, i.metaDescription, list),
          breadcrumbLd([
            { name: i.home, path: localePath(locale, "/") },
            { name: i.eyebrow, path: pagePaths.articles[locale] },
          ]),
        ]}
      />
      <section className="bg-canvas">
        <Container className="flex flex-col items-center pb-14 pt-16 text-center sm:pt-24">
          <Eyebrow>{i.eyebrow}</Eyebrow>
          <h1 className="headline-lg mt-3 max-w-4xl whitespace-pre-line text-balance">{i.title}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-fg-muted text-pretty">{i.intro}</p>
        </Container>
      </section>
      <Section tone="pearl" className="!pt-14">
        <Container>
          {list.length > 0 ? (
            <ul className="grid gap-5 md:grid-cols-2">
              {list.map((a) => (
                <li key={a.id} className="flex">
                  <Link href={a.path} className="tile-white tile-lift group flex w-full flex-col gap-3 p-8">
                    <span className="flex flex-wrap items-center gap-2 text-[12px] font-medium">
                      <span className="rounded-full bg-alert/10 px-2.5 py-1 text-alert">{a.category}</span>
                      <span className="rounded-full bg-fg/[0.06] px-2.5 py-1 text-fg-muted">
                        {i.dial} · {a.dial}
                      </span>
                    </span>
                    <h2 className="mt-1 text-[22px] font-semibold leading-snug tracking-[-0.02em] text-balance">{a.title}</h2>
                    <p className="text-[15px] leading-relaxed text-fg-muted">{a.description}</p>
                    <span className="mt-auto flex items-center justify-between pt-6 text-[13px] text-fg-subtle">
                      <span>
                        <time dateTime={a.published}>{formatDate(a.published, locale)}</time> · {a.minutes} {i.minutes}
                      </span>
                      <span className="inline-flex items-center gap-1 text-link">
                        {i.read} <Chevron />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-[17px] text-fg-muted">{i.empty}</p>
          )}
          <div className="mt-12 flex flex-col items-center gap-3 text-center text-[15px] text-fg-muted">
            <p>
              <a href={feedPath(locale)} className="text-link hover:underline">
                {i.rss}
              </a>
            </p>
            <p className="max-w-xl">
              {i.expertsBody}{" "}
              <a href={i.expertsHref} className="text-link hover:underline">
                {i.expertsLink}
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
