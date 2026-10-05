import { Chevron, Container, Section } from "@/components/ui/primitives";
import { formatDate } from "@/lib/articles";
import type { Locale } from "@/lib/locale";
import type { MainSiteArticle } from "@/lib/main-site-feed";
import { siteConfig as site } from "@/lib/site";

/** "Read on 56north.io": the latest governance / incident articles of the parent site, linked, not copied. */
export function MainSiteReads({
  t,
  items,
  locale,
}: {
  t: { title: string; intro: string; all: string };
  items: MainSiteArticle[];
  locale: Locale;
}) {
  if (items.length === 0) return null;
  const all = `${site.parent.url}${locale === "fr" ? "" : "/en"}/articles`;
  return (
    <Section tone="pearl">
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="headline-md">{t.title}</h2>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-fg-muted">{t.intro}</p>
          </div>
          <a href={all} className="inline-flex shrink-0 items-center gap-1 text-[15px] text-link hover:underline">
            {t.all}
            <Chevron className="h-3 w-3" />
          </a>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((a) => (
            <a key={a.url} href={a.url} className="tile-white tile-lift group flex flex-col gap-3 p-8">
              <span className="text-[13px] font-medium uppercase tracking-wide text-alert">{a.category}</span>
              <h3 className="text-[19px] font-semibold leading-snug text-balance">{a.title}</h3>
              <p className="text-[15px] leading-relaxed text-fg-muted line-clamp-3">{a.description}</p>
              <span className="mt-auto flex items-center justify-between pt-6 text-[13px] text-fg-subtle">
                {a.published ? formatDate(a.published, locale) : ""} · 56north.io
                <Chevron className="h-3 w-3 text-link" />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
