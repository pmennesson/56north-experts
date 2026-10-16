import type { Locale } from "@/lib/locale";
import { evidenceMap } from "@/content/pillars/evidence-map";

/**
 * The evidence file mapped to the AI Act, article by article, on a vertical timeline.
 * Plain HTML (no script, no image): readable on a phone, indexable, quotable.
 * "In force" / "Upcoming" is computed when the page is built (every deployment).
 */
export function EvidenceMap({ locale }: { locale: Locale }) {
  const t = evidenceMap[locale];
  const today = new Date().toISOString().slice(0, 10);

  return (
    <section id="dossier-de-preuves" className="not-prose my-10 scroll-mt-24 rounded-3xl bg-canvas-alt p-6 sm:p-8">
      <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.02em]">{t.title}</h2>
      <p className="mt-3 text-[17px] leading-relaxed text-fg-muted">{t.intro}</p>

      <ol className="mt-8">
        {t.phases.map((ph, pi) => {
          const live = ph.iso <= today;
          const last = pi === t.phases.length - 1;
          return (
            <li key={ph.iso} className="relative pl-8 pb-8 last:pb-0">
              {/* rail and dot */}
              {!last && <span className="absolute left-[7px] top-4 bottom-0 w-px bg-line-strong" aria-hidden />}
              <span
                className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full ring-4 ring-canvas-alt ${live ? "bg-signal" : "bg-surface ring-offset-0 outline outline-2 outline-fg-subtle"}`}
                aria-hidden
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="text-[19px] font-semibold tracking-[-0.01em]">{ph.date}</p>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[12px] font-medium ${live ? "bg-signal/10 text-signal" : "bg-fg/[0.06] text-fg-muted"}`}
                >
                  {live ? t.inForce : t.upcoming}
                </span>
              </div>
              <p className="mt-0.5 text-[15px] text-fg-subtle">{ph.scope}</p>

              <ul className="mt-4 grid gap-3">
                {ph.items.map((it) => (
                  <li key={it.article} className="rounded-2xl bg-surface p-4 ring-1 ring-line sm:p-5">
                    <div className="flex items-start gap-3">
                      <span className="shrink-0 rounded-lg bg-fg px-2 py-1 font-mono text-[12px] font-semibold text-canvas">{it.article}</span>
                      <p className="text-[16px] font-medium leading-snug">{it.obligation}</p>
                    </div>
                    <p className="mt-3 flex gap-2 border-t border-line pt-3 text-[15px] leading-snug text-fg-muted">
                      <span className="shrink-0 font-medium text-signal">{t.evidenceLabel}</span>
                      <span aria-hidden>→</span>
                      <span>{it.evidence}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 rounded-2xl border border-line p-5">
        <p className="text-[15px] font-semibold">{t.qualitiesTitle}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {t.qualities.map((q) => (
            <li key={q} className="rounded-full bg-surface px-3 py-1 text-[14px] ring-1 ring-line">
              {q}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
