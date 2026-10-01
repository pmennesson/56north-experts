"use client";

import { useActionState } from "react";
import { Honeypot, inputClass as input } from "@/components/ui/form";
import { BigField, Choice, StepForm, type Step } from "@/components/StepForm";
import type { Dictionary, Locale } from "@/lib/i18n";
import { requestDiagnostic, type DiagnosticState } from "@/app/[lang]/actions";

/** "Premier échange": the easiest question first, contact details last. */
export function DiagnosticForm({ lang, t, privacyHref }: { lang: Locale; t: Dictionary["contact"]; privacyHref: string }) {
  const [state, action, pending] = useActionState<DiagnosticState, FormData>(requestDiagnostic, { ok: false, message: "" });

  if (state.ok) {
    return (
      <div role="status" className="tile-white flex flex-col items-center gap-3 p-12 text-center">
        <p className="headline-md">{t.ui.thanks}</p>
        <p className="text-[17px] text-fg-muted">{state.message}</p>
      </div>
    );
  }

  const steps: Step[] = [
    {
      id: "count",
      title: t.steps.count,
      hint: t.steps.countHint,
      names: ["count"],
      required: ["count"],
      autoAdvance: true,
      content: <Choice name="count" columns={1} options={t.counts.map((c) => ({ value: c, label: c }))} />,
    },
    {
      id: "company",
      title: t.steps.company,
      names: ["company"],
      required: ["company"],
      content: (
        <BigField label={t.labels.company} name="company">
          <input id="company" name="company" autoComplete="organization" className={input} />
        </BigField>
      ),
    },
    {
      id: "job",
      title: t.steps.job,
      names: ["job"],
      required: ["job"],
      content: (
        <BigField label={t.labels.job} name="job">
          <input id="job" name="job" autoComplete="organization-title" className={input} />
        </BigField>
      ),
    },
    {
      id: "you",
      title: t.steps.name,
      names: ["name", "email"],
      required: ["name", "email"],
      content: (
        <div className="grid gap-5 sm:grid-cols-2">
          <BigField label={t.labels.name} name="name">
            <input id="name" name="name" autoComplete="name" className={input} />
          </BigField>
          <BigField label={t.labels.email} name="email">
            <input id="email" name="email" type="email" autoComplete="email" className={input} />
          </BigField>
          <Honeypot />
          <input type="hidden" name="lang" value={lang} />
        </div>
      ),
    },
  ];

  return (
    <StepForm
      steps={steps}
      action={action}
      pending={pending}
      submitLabel={t.submit}
      labels={t.ui}
      serverErrors={state.errors}
      serverMessage={state.message}
      footnote={
        <>
          {t.reassurance}{" "}
          <a href={privacyHref} target="_blank" className="text-link hover:underline">
            {t.privacy}
          </a>
        </>
      }
    />
  );
}
