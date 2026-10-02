"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The airworthiness score "calculating itself" in the hero.
 *
 * Server-rendered with the final values (SEO, no-JS, reduced motion). Once mounted,
 * if the visitor allows motion, the figure replays from zero: the five dials fill one
 * after the other, the score counts up, then the letter and the trend appear.
 * Pure CSS transitions + one requestAnimationFrame counter, no dependency.
 */

type Dial = { name: string; value: number };
type Props = {
  label: string;
  score: string;
  outOf: string;
  letter: string;
  letterLabel: string;
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
  // Gauge arc: 270° sweep, radius 54 → circumference ≈ 339, arc length ≈ 254.
  const arc = 254;
  const gaugeValue = atZero ? 0 : target;

  return (
    <figure
      className="reveal mx-auto max-w-2xl rounded-[32px] bg-surface p-6 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.18)] ring-1 ring-line sm:p-8"
      data-phase={phase}
    >
      <div className="flex items-end justify-between gap-4">
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
        <div className="flex flex-col items-center gap-1">
          <span className="relative flex h-20 w-20 items-center justify-center" aria-label={`${t.letterLabel} ${t.letter}`}>
            <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-[135deg]" aria-hidden>
              <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-fg/[0.06]" strokeDasharray={`${arc} 999`} />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                className="text-accent"
                strokeDasharray={`${(arc * gaugeValue) / 100} 999`}
                style={{ transition: running ? `stroke-dasharray ${COUNT_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)` : "none" }}
              />
            </svg>
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full bg-canvas-alt text-3xl font-semibold"
              style={{
                opacity: atZero ? 0 : 1,
                transform: atZero ? "scale(0.6)" : "scale(1)",
                transition: running ? `opacity 450ms ease ${COUNT_DURATION - 200}ms, transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1) ${COUNT_DURATION - 200}ms` : "none",
              }}
            >
              {t.letter}
            </span>
          </span>
          <span className="text-[12px] text-fg-subtle">{t.letterLabel}</span>
        </div>
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
