import type { Dictionary } from "@/lib/i18n";
import { Button, Check, Container, Eyebrow } from "@/components/ui/primitives";

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section className="overflow-hidden bg-canvas">
      <Container className="flex flex-col items-center pb-8 pt-20 text-center sm:pt-28">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h1 className="headline-xl mt-3 whitespace-pre-line text-balance">{t.title}</h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-fg-muted text-pretty sm:text-2xl">{t.subtitle}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Button href="/contact" size="lg">
            {t.primaryCta}
          </Button>
          <Button href="#how" variant="link">
            {t.secondaryCta}
          </Button>
        </div>
      </Container>

      {/* The "product shot": what a client actually receives */}
      <div className="relative mt-12 sm:mt-16">
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-canvas-alt" aria-hidden />
        <Container className="relative pb-24">
          <ShortlistCard t={t.shortlist} />
        </Container>
      </div>
    </section>
  );
}

function ShortlistCard({ t }: { t: Dictionary["hero"]["shortlist"] }) {
  return (
    <figure className="reveal mx-auto max-w-2xl rounded-[32px] bg-surface p-6 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.18)] ring-1 ring-line sm:p-8">
      <div className="flex flex-col-reverse items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div className="text-left">
          <p className="text-[13px] font-medium uppercase tracking-wide text-fg-subtle">{t.label}</p>
          <p className="mt-1 text-[17px] font-semibold">{t.brief}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-signal/10 px-3 py-1.5 text-[13px] font-medium text-signal">
          <Check className="h-3.5 w-3.5" /> {t.status}
        </span>
      </div>

      <ul className="mt-6 divide-y divide-line">
        {t.profiles.map((p) => (
          <li key={p.initials} className="flex items-center gap-4 py-4 text-left">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-canvas-alt text-[15px] font-semibold text-fg-muted"
              aria-hidden
            >
              {p.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[17px] font-medium">{p.title}</p>
              <p className="truncate text-[15px] text-fg-muted">{p.match}</p>
            </div>
            <span className="shrink-0 text-[15px] text-fg-subtle">{p.years} yrs</span>
          </li>
        ))}
      </ul>
      <figcaption className="mt-4 text-left text-[13px] text-fg-subtle">{t.footnote}</figcaption>
    </figure>
  );
}
