import Link from "next/link";
import { getLinker, type Dictionary } from "@/lib/i18n";
import { Button, Check, Chevron, Container, Section, SectionHeader } from "@/components/ui/primitives";

export function ServiceLevels({ t }: { t: Dictionary["serviceLevels"] }) {
  return (
    <Section tone="pearl">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} />
        <dl className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {t.items.map((s) => (
            <div key={s.label} className="reveal flex flex-col-reverse items-center gap-3 text-center">
              <dt className="max-w-[220px] text-[17px] leading-snug text-fg-muted">{s.label}</dt>
              <dd className="text-5xl font-semibold tracking-[-0.03em]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}

export function EngagementModels({ t }: { t: Dictionary["models"] }) {
  return (
    <Section>
      <Container>
        <div className="whitespace-pre-line">
          <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        </div>
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {t.items.map((m) => (
            <article key={m.name} className="tile reveal flex flex-col gap-4 p-8">
              <p className="h-5 text-[13px] font-medium text-signal">{m.tag}</p>
              <h3 className="headline-md">{m.name}</h3>
              <p className="text-[17px] leading-relaxed text-fg-muted">{m.body}</p>
              <ul className="mt-auto space-y-2 pt-6">
                {m.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[15px]">
                    <Check className="h-4 w-4 text-fg-subtle" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function Process({ t }: { t: Dictionary["process"] }) {
  return (
    <Section tone="pearl" id="how" className="scroll-mt-12">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} />
        <ol className="mt-16 grid gap-5 md:grid-cols-3">
          {t.steps.map((s, i) => (
            <li key={s.name} className="tile-white reveal flex flex-col gap-3 p-8">
              <span className="text-6xl font-semibold tracking-[-0.04em] text-fg-subtle/40">{i + 1}</span>
              <h3 className="headline-md mt-4">{s.name}</h3>
              <p className="text-[13px] font-medium uppercase tracking-wide text-signal">{s.time}</p>
              <p className="text-[17px] leading-relaxed text-fg-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

export async function Trust({ t }: { t: Dictionary["trust"] }) {
  const lp = await getLinker();
  const [lead, ...rest] = t.items;
  return (
    <Section>
      <Container>
        <div className="whitespace-pre-line">
          <SectionHeader eyebrow={t.eyebrow} title={t.title} />
        </div>
        <article className="tile reveal mt-16 flex flex-col items-center gap-4 px-8 py-16 text-center">
          <h3 className="headline-lg max-w-2xl text-balance">{lead.name}</h3>
          <p className="max-w-xl text-xl leading-relaxed text-fg-muted">{lead.body}</p>
          {"href" in lead && lead.href && (
            <Link href={lp(lead.href)} className="mt-2 inline-flex items-center gap-1 text-[17px] text-link hover:underline">
              {lead.linkLabel} <Chevron />
            </Link>
          )}
        </article>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {rest.map((it, i) => (
            <article
              key={it.name}
              className={`tile reveal p-8 ${rest.length % 2 === 1 && i === rest.length - 1 ? "sm:col-span-2" : ""}`}
            >
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">{it.name}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-fg-muted">{it.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Community-first pitch: where the experts come from, vendor by vendor. */
export async function Community({ t }: { t: Dictionary["community"] }) {
  const lp = await getLinker();
  return (
    <Section tone="pearl" id="community-pitch" className="scroll-mt-12">
      <Container>
        <div className="whitespace-pre-line">
          <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.intro} />
        </div>
        <h3 className="reveal mt-16 text-center text-2xl font-semibold tracking-[-0.02em]">{t.groupsTitle}</h3>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.groups.map((g) => (
            <li key={g.vendor} className="tile-white reveal p-7">
              <h4 className="text-xl font-semibold tracking-[-0.015em]">{g.vendor}</h4>
              <p className="mt-2 text-[16px] leading-relaxed text-fg-muted">{g.items}</p>
            </li>
          ))}
        </ul>
        <p className="reveal mx-auto mt-12 max-w-2xl text-center text-xl leading-relaxed text-fg">{t.closing}</p>
        <div className="reveal mt-8 flex justify-center">
          <Link href={lp("/talents")} className="inline-flex items-center gap-1 text-[17px] text-link hover:underline">
            {t.cta} <Chevron />
          </Link>
        </div>
        <p className="reveal mx-auto mt-10 max-w-2xl text-center text-[13px] leading-relaxed text-fg-subtle">{t.note}</p>
      </Container>
    </Section>
  );
}

/** Native <details>: accessible, zero JS, content indexable by crawlers and LLMs. */
export function Faq({ t }: { t: Dictionary["faq"] }) {
  return (
    <Section tone="pearl">
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

export async function CtaBand({ t }: { t: Dictionary["cta"] }) {
  const lp = await getLinker();
  return (
    <Section>
      <Container className="reveal flex flex-col items-center gap-5 text-center">
        <h2 className="headline-xl">{t.title}</h2>
        <p className="text-xl text-fg-muted">{t.body}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Button href={lp("/contact")} size="lg">
            {t.primary}
          </Button>
          <Button href={lp("/talents")} variant="link">
            {t.secondary}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
