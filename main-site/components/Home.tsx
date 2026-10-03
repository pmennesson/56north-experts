import type { Dictionary } from "@/lib/i18n";
import { Button, Check, Container, Eyebrow, Section, SectionHeader } from "@/components/ui/primitives";
import { ScoreBoard } from "@/components/ScoreBoard";

type T = Dictionary;

/* ------------------------------------------------------------------ Hero */

export function Hero({ t }: { t: T["hero"] }) {
  return (
    <section className="overflow-hidden bg-canvas">
      <Container className="flex flex-col items-center pb-8 pt-10 text-center sm:pt-28">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h1 className="headline-xl mt-3 max-w-5xl whitespace-pre-line text-balance !text-[clamp(2.1rem,5.4vw,4.4rem)]">{t.title}</h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-normal text-fg-muted text-pretty sm:mt-6 sm:text-2xl sm:leading-relaxed">{t.subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:mt-10">
          <Button href="#diagnostic" size="lg">
            {t.primary}
          </Button>
          <Button href="#pourquoi-un-tiers" variant="link">
            {t.secondary}
          </Button>
        </div>
        <p className="mt-4 max-w-md text-[15px] text-fg-subtle">{t.reassurance}</p>
      </Container>
      <div className="relative mt-8 sm:mt-16">
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-canvas-alt" aria-hidden />
        <Container className="relative pb-24">
          <Board t={t.board} />
        </Container>
      </div>
    </section>
  );
}

/** The product shot: what a leadership team sees in the Cockpit. */
function Board({ t }: { t: T["hero"]["board"] }) {
  return <ScoreBoard {...t} />;
}

/* ------------------------------------------------------- Regulatory clock */

const chip = {
  due: "bg-fg text-white",
  prepare: "bg-accent/10 text-accent",
  upcoming: "bg-fg/[0.06] text-fg-muted",
} as const;

export function Clock({ t }: { t: T["clock"] }) {
  return (
    <Section tone="pearl" id="horloge" className="scroll-mt-12">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.intro} />
        <ol className="tile-white reveal mx-auto mt-16 max-w-3xl divide-y divide-line px-6 sm:px-10">
          {t.milestones.map((m) => {
            const status = m.status as keyof typeof chip;
            return (
              <li key={m.date} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:gap-6">
                <span className="w-40 shrink-0 text-[17px] font-semibold tabular-nums">{m.date}</span>
                <span className="flex-1 text-[17px] leading-relaxed text-fg-muted">{m.label}</span>
                <span className={`w-fit shrink-0 rounded-full px-3 py-1 text-[12px] font-medium ${chip[status]}`}>
                  {t.statuses[status]}
                </span>
              </li>
            );
          })}
        </ol>
        <p className="reveal mt-10 text-center text-xl font-semibold tracking-[-0.015em]">{t.sanctions}</p>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- Problem */

export function Problem({ t }: { t: T["problem"] }) {
  return (
    <Section>
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.intro} />
        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((it, i) => (
            <li key={it.q} className="tile reveal flex flex-col gap-3 p-8">
              <span className="text-5xl font-semibold tracking-[-0.04em] text-fg-subtle/40">{i + 1}</span>
              <h3 className="headline-md mt-2">{it.q}</h3>
              <p className="text-[17px] leading-relaxed text-fg-muted">{it.a}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ Offer */

export function Offer({ t }: { t: T["offer"] }) {
  return (
    <Section tone="pearl" id="offre" className="scroll-mt-12">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.intro} />
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {t.layers.map((l, i) => (
            <article key={l.n} className="tile-white reveal flex flex-col gap-3 p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-5xl font-semibold tracking-[-0.04em] text-fg-subtle/40">{l.n}</span>
                <span
                  className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-[12px] font-medium ${i === 0 ? "bg-signal/10 text-signal" : "bg-fg/[0.06] text-fg-muted"}`}
                >
                  {l.status}
                </span>
              </div>
              <p className="mt-2 text-[13px] font-medium uppercase tracking-wide text-fg-subtle">{l.kind}</p>
              <h3 className="headline-md">{l.name}</h3>
              <p className="text-[17px] leading-relaxed text-fg-muted">{l.body}</p>
            </article>
          ))}
        </div>
        <h3 className="reveal mt-20 text-center text-2xl font-semibold tracking-[-0.02em]">{t.plansTitle}</h3>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {t.plans.map((p) => (
            <article key={p.name} className="tile-white reveal flex flex-col gap-3 p-8">
              <p className="text-[13px] font-medium text-signal">{p.tag}</p>
              <h4 className="text-2xl font-semibold tracking-[-0.02em]">{p.name}</h4>
              <p className="text-[17px] leading-relaxed text-fg-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- Cockpit */

export function Cockpit({ t }: { t: T["cockpit"] }) {
  return (
    <Section id="cockpit" className="scroll-mt-12">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.intro} />
        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.dials.map((d) => (
            <li key={d.name} className="tile reveal flex flex-col gap-2 p-6">
              <h3 className="text-xl font-semibold tracking-[-0.015em]">{d.name}</h3>
              <p className="text-[15px] leading-relaxed text-fg-muted">{d.body}</p>
            </li>
          ))}
        </ul>
        <p className="reveal mt-8 text-center text-[17px] text-fg-muted">{t.scale}</p>

        <h3 className="reveal mt-20 text-center text-2xl font-semibold tracking-[-0.02em]">{t.stepsTitle}</h3>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {t.steps.map((s, i) => (
            <li key={s.name} className="tile reveal flex flex-col gap-3 p-8">
              <span className="text-5xl font-semibold tracking-[-0.04em] text-fg-subtle/40">{i + 1}</span>
              <h4 className="headline-md mt-2">{s.name}</h4>
              <p className="text-[17px] leading-relaxed text-fg-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="reveal mx-auto mt-12 max-w-2xl text-center text-[17px] leading-relaxed text-fg-muted">{t.report}</p>
      </Container>
    </Section>
  );
}

/* ----------------------------------------------------------- Sovereignty */

export function Sovereignty({ t }: { t: T["sovereignty"] }) {
  return (
    <Section tone="pearl" id="souverainete" className="scroll-mt-12">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.intro} />
        <dl className="mt-16 grid gap-5 sm:grid-cols-2">
          {t.items.map((it) => (
            <div key={it.name} className="tile-white reveal p-8">
              <dt className="text-[13px] font-medium uppercase tracking-wide text-fg-subtle">{it.name}</dt>
              <dd className="mt-3 text-xl leading-relaxed tracking-[-0.01em]">{it.body}</dd>
            </div>
          ))}
        </dl>
        <h3 className="reveal mt-20 text-center text-2xl font-semibold tracking-[-0.02em]">{t.modesTitle}</h3>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {t.modes.map((m) => (
            <article key={m.name} className="tile-white reveal flex flex-col gap-2 p-8">
              <h4 className="headline-md">{m.name}</h4>
              <p className="text-[15px] font-medium text-signal">{m.detail}</p>
              <p className="text-[17px] leading-relaxed text-fg-muted">{m.body}</p>
            </article>
          ))}
        </div>
        <p className="reveal mt-8 text-center text-[17px] text-fg-muted">{t.same}</p>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- Factory */

export function Factory({ t }: { t: T["factory"] }) {
  return (
    <Section id="fabrique" className="scroll-mt-12">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.intro} />
        <dl className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {t.figures.map((f) => (
            <div key={f.label} className="reveal flex flex-col-reverse items-center gap-3 text-center">
              <dt className="max-w-[220px] text-[17px] leading-snug text-fg-muted">{f.label}</dt>
              <dd className="whitespace-nowrap text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-4xl xl:text-5xl">{f.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.principles.map((p) => (
            <article key={p.name} className="tile reveal p-8">
              <h3 className="text-xl font-semibold tracking-[-0.015em]">{p.name}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-fg-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------ Commitments */

export function Commitments({ t }: { t: T["commitments"] }) {
  return (
    <Section tone="pearl">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {t.items.map((it) => (
            <article key={it.name} className="tile-white reveal flex gap-4 p-8">
              <Check className="mt-1.5 h-5 w-5 shrink-0 text-signal" />
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">{it.name}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-fg-muted">{it.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------- FAQ */

export function Faq({ t }: { t: T["faq"] }) {
  return (
    <Section tone="pearl" id="questions" className="scroll-mt-12">
      <Container className="max-w-[760px]">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-14 divide-y divide-line border-y border-line">
          {t.items.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold tracking-[-0.015em] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fg/5 text-fg-muted transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-[17px] leading-relaxed text-fg-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Mobile-only bottom bar keeping the primary action one tap away. */
export function StickyCta({ label }: { label: string }) {
  return (
    <div data-sticky-cta className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/85 px-4 py-3 backdrop-blur-xl md:hidden">
      <Button href="#diagnostic" className="w-full">
        {label}
      </Button>
    </div>
  );
}

/* ---------------------------------------------- Definition (quotable, GEO) */

/** One sentence that defines 56North: what search engines and AI assistants quote. */
export function Definition({ t }: { t: T["definition"] }) {
  return (
    <section className="bg-canvas-alt">
      <Container className="max-w-[860px] py-16 text-center">
        <p className="text-[13px] font-semibold uppercase tracking-wide text-fg-subtle">{t.label}</p>
        <p className="mt-4 text-2xl font-medium leading-snug tracking-[-0.015em] text-pretty sm:text-[28px]">{t.text}</p>
      </Container>
    </section>
  );
}

/* ------------------------- Why a third party (vendor vs deployer, GEO) */

export function WhyThirdParty({ t }: { t: T["whyThirdParty"] }) {
  return (
    <Section id="pourquoi-un-tiers" className="scroll-mt-12">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.intro} />
        <ol className="mt-16 grid gap-5 sm:grid-cols-2">
          {t.items.map((it, i) => (
            <li key={it.name} className="tile reveal flex flex-col gap-3 p-8">
              <span className="text-5xl font-semibold tracking-[-0.04em] text-fg-subtle/40">{i + 1}</span>
              <h3 className="headline-md mt-2">{it.name}</h3>
              <p className="text-[17px] leading-relaxed text-fg-muted">{it.body}</p>
            </li>
          ))}
        </ol>
        <p className="reveal mx-auto mt-12 max-w-[760px] text-center text-xl font-medium leading-snug tracking-[-0.015em] text-pretty">{t.closing}</p>
        <div className="reveal mt-8 text-center">
          <Button href="#cockpit" variant="link">
            {t.link}
          </Button>
        </div>
      </Container>
    </Section>
  );
}

/* --------------------------------- Mirror, then future pacing (persuasion) */

export function Mirror({ t }: { t: T["mirror"] }) {
  return (
    <Section>
      <Container className="grid gap-5 lg:grid-cols-2">
        <article className="tile reveal p-10">
          <h2 className="headline-md">{t.painsTitle}</h2>
          <ul className="mt-6 space-y-4">
            {t.pains.map((x) => (
              <li key={x} className="text-[17px] leading-relaxed text-fg-muted">
                {x}
              </li>
            ))}
          </ul>
        </article>
        <article className="tile reveal p-10">
          <h2 className="headline-md">{t.afterTitle}</h2>
          <ul className="mt-6 space-y-4">
            {t.after.map((x) => (
              <li key={x} className="flex gap-3 text-[17px] leading-relaxed">
                <Check className="mt-1.5 h-4 w-4 shrink-0 text-signal" /> {x}
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </Section>
  );
}

/* --------------------------------------------- Mid-page call to action */

export function MidCta({ label, reassurance, tone = "white" }: { label: string; reassurance: string; tone?: "white" | "pearl" }) {
  return (
    <div className={tone === "pearl" ? "bg-canvas-alt" : "bg-canvas"}>
      <Container className="reveal flex flex-col items-center gap-3 pb-20 text-center">
        <Button href="#diagnostic" size="lg">
          {label}
        </Button>
        <p className="max-w-md text-[15px] text-fg-subtle">{reassurance}</p>
      </Container>
    </div>
  );
}

/* ------------------------------------------------------- Founder (authority) */

export function Founder({ t, linkedin, name }: { t: T["founder"]; linkedin: string; name: string }) {
  return (
    <Section>
      <Container className="reveal flex flex-col items-center gap-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/founder.jpg" alt={name} width={112} height={112} className="h-28 w-28 rounded-full object-cover" />
        <p className="text-[17px] font-semibold text-signal">{t.eyebrow}</p>
        <h2 className="headline-lg max-w-3xl text-balance">{t.title}</h2>
        <p className="max-w-2xl text-xl leading-relaxed text-fg-muted text-pretty">{t.body}</p>
        <a href={linkedin} rel="me noopener" target="_blank" className="inline-flex items-center gap-1 text-[17px] text-link hover:underline">
          LinkedIn ↗
        </a>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------- Further reading (links) */

export function Guides({ t }: { t: T["guides"] }) {
  return (
    <Section className="!py-16">
      <Container className="max-w-[760px]">
        <p className="text-[15px] font-semibold text-fg-muted">{t.title}</p>
        <ul className="mt-4 space-y-3">
          {t.items.map((g) => (
            <li key={g.href}>
              <a href={g.href} className="inline-flex items-start gap-1 text-[17px] leading-snug text-link hover:underline">
                {g.title}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ------------------------------- Partner offers: Human in the Loop, Factory */

type OfferDetailT = {
  eyebrow: string;
  title: string;
  intro: string;
  status: string;
  itemsTitle: string;
  items: { name: string; body: string }[];
  cta: string;
  proof?: string;
  independence?: string;
  /** Named partner, shown as a link under the status pill. */
  partner?: { label: string; name: string; url?: string; tagline: string };
};

export function OfferDetail({ t, id, tone = "white" }: { t: OfferDetailT; id: string; tone?: "white" | "pearl" }) {
  const card = tone === "pearl" ? "tile-white" : "tile";
  const note = t.proof ?? t.independence;
  return (
    <Section tone={tone} id={id} className="scroll-mt-12">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.intro} />
        <p className="reveal mt-6 text-center">
          <span className="inline-flex rounded-full bg-fg/[0.06] px-3 py-1 text-[13px] font-medium text-fg-muted">{t.status}</span>
        </p>
        {t.partner && (
          <div className="reveal mx-auto mt-4 max-w-2xl text-center">
            <p className="text-[15px] text-fg-muted">
              {t.partner.label}{" "}
              {t.partner.url ? (
                <a href={t.partner.url} rel="noopener" target="_blank" className="text-link hover:underline">
                  {t.partner.name} ↗
                </a>
              ) : (
                <span className="text-fg">{t.partner.name}</span>
              )}
            </p>
            <p className="mt-1 text-[15px] leading-relaxed text-fg-muted">{t.partner.tagline}</p>
          </div>
        )}
        <h3 className="reveal mt-16 text-center text-2xl font-semibold tracking-[-0.02em]">{t.itemsTitle}</h3>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {t.items.map((it) => (
            <li key={it.name} className={`${card} reveal flex gap-4 p-8`}>
              <Check className="mt-1.5 h-5 w-5 shrink-0 text-signal" />
              <div>
                <h4 className="text-xl font-semibold tracking-[-0.015em]">{it.name}</h4>
                <p className="mt-2 text-[17px] leading-relaxed text-fg-muted">{it.body}</p>
              </div>
            </li>
          ))}
        </ul>
        {note && <p className="reveal mx-auto mt-10 max-w-2xl text-center text-[17px] leading-relaxed text-fg-muted">{note}</p>}
        <div className="reveal mt-10 flex justify-center">
          <Button href="#diagnostic" size="lg">
            {t.cta}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
