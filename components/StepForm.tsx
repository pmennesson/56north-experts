"use client";

import { useEffect, useRef, useState, type ReactNode, type FormEvent, type KeyboardEvent } from "react";

/**
 * One-question-per-screen form, configurator style.
 *
 * All steps stay mounted (inactive ones use the `hidden` attribute), so every
 * value is part of the same <form> and reaches the server action in one
 * FormData. Validation runs per step on the client, then again on the server;
 * a server error jumps back to the first step that holds the faulty field.
 */
export type Step = {
  id: string;
  title: string;
  hint?: string;
  /** Field names on this step, used for validation and error routing. */
  names: string[];
  /** Names that must be filled before continuing. */
  required?: string[];
  /** Single-choice step: continue automatically once an option is picked. */
  autoAdvance?: boolean;
  optional?: boolean;
  content: ReactNode;
};

type Props = {
  steps: Step[];
  action: (formData: FormData) => void;
  pending: boolean;
  submitLabel: string;
  serverErrors?: Record<string, string>;
  serverMessage?: string;
  initialStep?: number;
  footnote?: ReactNode;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function StepForm({ steps, action, pending, submitLabel, serverErrors, serverMessage, initialStep = 0, footnote }: Props) {
  const [index, setIndex] = useState(initialStep);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const last = index === steps.length - 1;
  const step = steps[index];

  // Server-side errors: show them and jump to the first step concerned.
  useEffect(() => {
    if (!serverErrors || !Object.keys(serverErrors).length) return;
    setErrors(serverErrors);
    const i = steps.findIndex((s) => s.names.some((n) => serverErrors[n]));
    if (i >= 0) setIndex(i);
  }, [serverErrors, steps]);

  // Move focus to the first control of the new step (not on first render: never steal focus on page load).
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const el = stepRefs.current[index]?.querySelector<HTMLElement>(
      "input:not([type=hidden]):not([type=radio]), textarea, select, input[type=radio]:checked, input[type=radio]",
    );
    el?.focus({ preventScroll: true });
  }, [index]);

  function validate(i: number) {
    const form = formRef.current;
    if (!form) return true;
    const data = new FormData(form);
    const found: Record<string, string> = {};
    for (const name of steps[i].required ?? []) {
      const value = String(data.get(name) ?? "").trim();
      if (!value) found[name] = "Required";
      else if (name === "email" && !EMAIL.test(value)) found[name] = "Enter a valid email";
    }
    setErrors((prev) => {
      const next = { ...prev };
      for (const n of steps[i].names) delete next[n];
      return { ...next, ...found };
    });
    return Object.keys(found).length === 0;
  }

  function next() {
    if (!validate(index)) return;
    setIndex((i) => Math.min(i + 1, steps.length - 1));
  }

  function onKeyDown(e: KeyboardEvent<HTMLFormElement>) {
    const target = e.target as HTMLElement;
    if (e.key === "Enter" && target.tagName !== "TEXTAREA" && !last) {
      e.preventDefault();
      next();
    }
  }

  function onChange(e: FormEvent<HTMLFormElement>) {
    const target = e.target as HTMLInputElement;
    if (target.type === "radio" && step.autoAdvance && step.names.includes(target.name)) {
      setErrors((prev) => ({ ...prev, [target.name]: "" }));
      setTimeout(() => setIndex((i) => Math.min(i + 1, steps.length - 1)), 220);
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    if (!validate(index)) e.preventDefault();
  }

  const progress = ((index + 1) / steps.length) * 100;

  return (
    <form
      ref={formRef}
      action={action}
      onKeyDown={onKeyDown}
      onChange={onChange}
      onSubmit={onSubmit}
      noValidate
      className="tile-white p-6 sm:p-12"
    >
      {/* Progress */}
      <div className="mb-4 h-1 overflow-hidden rounded-full bg-canvas-alt" aria-hidden>
        <div className="h-full rounded-full bg-accent transition-[width] duration-500 ease-[var(--ease-apple)]" style={{ width: `${progress}%` }} />
      </div>
      <p className="text-[13px] text-fg-subtle" aria-live="polite">
        {index + 1} of {steps.length}
        {step.optional ? " · Optional" : ""}
      </p>

      {steps.map((s, i) => (
        <div
          key={s.id}
          ref={(el) => {
            stepRefs.current[i] = el;
          }}
          hidden={i !== index}
          className="step-in mt-3"
          role="group"
          aria-labelledby={`step-${s.id}`}
        >
          <h2 id={`step-${s.id}`} className="headline-md text-balance">
            {s.title}
          </h2>
          {s.hint && <p className="mt-2 text-[17px] text-fg-muted">{s.hint}</p>}
          <div className="mt-8">{s.content}</div>
          {s.names.map((n) =>
            errors[n] ? (
              <p key={n} role="alert" className="mt-3 text-[15px] text-red-600">
                {errors[n]}
              </p>
            ) : null,
          )}
        </div>
      ))}

      {serverMessage && !Object.keys(serverErrors ?? {}).length && (
        <p role="alert" className="mt-6 text-[15px] text-red-600">
          {serverMessage}
        </p>
      )}

      <div className="mt-10 flex items-center justify-between gap-4">
        {index > 0 ? (
          <button type="button" onClick={() => setIndex(index - 1)} className="text-[17px] text-link hover:underline">
            Back
          </button>
        ) : (
          <span />
        )}
        {last ? (
          <button
            type="submit"
            disabled={pending}
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-[17px] text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
          >
            {pending ? "Sending…" : submitLabel}
          </button>
        ) : (
          <button
            type="button"
            onClick={next}
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-[17px] text-white transition-colors hover:bg-accent-hover"
          >
            {step.optional ? "Skip or continue" : "Continue"}
          </button>
        )}
      </div>
      {footnote && <div className="mt-6 text-[13px] text-fg-subtle">{footnote}</div>}
    </form>
  );
}

/** Large tappable options, one per line on mobile. */
export function Choice({
  name,
  options,
  defaultValue,
  columns = 2,
}: {
  name: string;
  options: { value: string; label: string; detail?: string }[];
  defaultValue?: string;
  columns?: 1 | 2 | 3;
}) {
  const cols = columns === 3 ? "sm:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "";
  return (
    <div className={`grid gap-3 ${cols}`}>
      {options.map((o) => (
        <label
          key={o.value}
          className="flex cursor-pointer flex-col gap-1 rounded-2xl border border-line-strong bg-surface p-5 transition-all duration-200 hover:border-fg-subtle has-[:checked]:border-accent has-[:checked]:ring-2 has-[:checked]:ring-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent/40"
        >
          <input type="radio" name={name} value={o.value} defaultChecked={o.value === defaultValue} className="sr-only" />
          <span className="text-[17px] font-semibold">{o.label}</span>
          {o.detail && <span className="text-[14px] text-fg-muted">{o.detail}</span>}
        </label>
      ))}
    </div>
  );
}

/** Labelled text input sized for a single-question screen. */
export function BigField({
  label,
  name,
  children,
}: {
  label?: string;
  name: string;
  children: ReactNode;
}) {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="mb-2 block text-[15px] font-medium text-fg-muted">
          {label}
        </label>
      )}
      {children}
    </div>
  );
}
