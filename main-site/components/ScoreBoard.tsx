"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The airworthiness score "calculating itself" in the hero.
 *
 * Server-rendered with the final values (SEO, no-JS, reduced motion). Once mounted,
 * if the visitor allows motion, the figure replays from zero: the headline bar fills,
 * the five dials fill one after the other, and the score counts up.
 *
 * ONE SHAPE, TOP TO BOTTOM. The global note is a BAR — like the five dials below it,
 * and like the Cockpit app (D-257): the app dropped the letter-in-a-gauge for a single
 * coloured bar, and the five dials on this very card were already bars. The gauge arc and
 * the "C" letter were the last element left in the old style; this aligns the headline
 * with the rest, here and with the product.
 */

type Dial = { name: string; value: number };
type Props = {
  label: string;
  score: string;
  outOf: string;
  trend: string;
  dials: Dial[];
  caption: string;
};

const DIAL_DELAY = 220; // ms between two dials
const DIAL_DURATION = 900; // ms for one bar to fill
const COUNT_DURATION = 1800; // ms for the score to count up

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function ScoreBoard(t: Props) {
  const target = Number(t.score) || 0;
  // "final" = static render (server, reduced motion). "run" = replay from zero.
  const [phase, setPhase] = useState<"final" | "zero" | "run">("final");
  const [shown, setShown] = useState(target);
  const [dialShown, setDialShown] = useState<number[]>(t.dials.map((d) => d.value));
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Two frames: first paint everything at zero, then let the transitions run.
    setPhase("zero");
    setShown(0);
    setDialShown(t.dials.map(() => 0));
    const id = window.setTimeout(() => {
      setPhase("run");
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / COUNT_DURATION);
        setShown(Math.round(easeOut(p) * target));
        setDialShown(
          t.dials.map((d, i) => {
            const local = Math.min(1, Math.max(0, (now - start - i * DIAL_DELAY) / DIAL_DURATION));
            return Math.round(easeOut(local) * d.value);
          }),
        );
        if (p < 1) raf.current = requestAnimationFrame(tick);
      };
      raf.current = requestAnimationFrame(tick);
    }, 350);
    return () => {
      window.clearTimeout(id);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const running = phase === "run";
  const atZero = phase === "zero";
  const lastDialEnd = (t.dials.length - 1) * DIAL_DELAY + DIAL_DURATION;

  return (
    <figure
      className="reveal mx-auto max-w-2xl rounded-[32px] bg-surface p-6 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.18)] ring-1 ring-line sm:p-8"
      data-phase={phase}
    >
      <div className="text-left">
        <p className="text-[13px] font-medium uppercase tracking-wide text-fg-subtle">{t.label}</p>
        <p className="mt-2 flex items-baseline gap-2">
          <span className="text-6xl font-semibold tracking-[-0.04em] tabular-nums">{shown}</span>
          <span className="text-[17px] text-fg-muted">{t.outOf}</span>
        </p>
        <p
          className="mt-1 text-[15px] font-medium text-signal"
          style={{
            opacity: atZero ? 0 : 1,
            transform: atZero ? "translateY(6px)" : "none",
            transition: running ? `opacity 500ms ease ${COUNT_DURATION}ms, transform 500ms ease ${COUNT_DURATION}ms` : "none",
          }}
        >
          {t.trend}
        </p>
      </div>

      {/* LA NOTE GLOBALE, EN BARRE — plus épaisse que les cadrans (c'est le titre),
          même couleur, même remplissage animé. Décorative : la valeur est déjà
          lue en toutes lettres par le grand nombre au-dessus. */}
      <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-fg/[0.06]" aria-hidden>
        <span
          className="block h-full rounded-full bg-accent"
          style={{
            width: `${atZero ? 0 : target}%`,
            transition: running ? `width ${COUNT_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)` : "none",
          }}
        />
      </div>

      <ul className="mt-6 space-y-4 border-t border-line pt-6">
        {t.dials.map((d, i) => (
          <li key={d.name} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5 text-left sm:grid-cols-[150px_1fr_auto]">
            <span className="text-[15px] font-medium">{d.name}</span>
            <span className="order-last col-span-2 h-1.5 overflow-hidden rounded-full bg-fg/[0.06] sm:order-none sm:col-span-1" aria-hidden>
              <span
                className="block h-full rounded-full bg-accent"
                style={{
                  width: `${atZero ? 0 : d.value}%`,
                  transition: running ? `width ${DIAL_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) ${i * DIAL_DELAY}ms` : "none",
                }}
              />
            </span>
            <span className="text-right text-[15px] tabular-nums text-fg-muted">{phase === "final" ? d.value : dialShown[i]}</span>
          </li>
        ))}
      </ul>
      <figcaption
        className="mt-5 text-left text-[13px] text-fg-subtle"
        style={{ opacity: atZero ? 0 : 1, transition: running ? `opacity 600ms ease ${lastDialEnd}ms` : "none" }}
      >
        {t.caption}
      </figcaption>
    </figure>
  );
}
