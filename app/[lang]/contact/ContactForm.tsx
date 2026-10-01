"use client";

import { useActionState } from "react";
import { Honeypot, inputClass as input } from "@/components/ui/form";
import { BigField, Choice, StepForm, type Step } from "@/components/StepForm";
import type { Dictionary, Locale } from "@/lib/i18n";
import { submitStaffingRequest, type LeadState } from "./actions";

type Option = { value: string; label: string };
type Props = {
  lang: Locale;
  t: Dictionary["contactForm"];
  s: Dictionary["steps"];
  privacyHref: string;
  ecosystems: Option[];
  defaultEcosystem?: string;
};

/** Staffing brief, one question per screen. Contact details come last. */
export function ContactForm({ lang, t, s, privacyHref, ecosystems, defaultEcosystem }: Props) {
  const [state, action, pending] = useActionState<LeadState, FormData>(submitStaffingRequest, { ok: false, message: "" });

  if (state.ok) {
    return (
      <div role="status" className="tile-white flex flex-col items-center gap-3 p-12 text-center">
        <p className="headline-md">{s.thanks}</p>
        <p className="text-[17px] text-fg-muted">{state.message}</p>
      </div>
    );
  }

  const steps: Step[] = [
    {
      id: "platform",
      title: t.platform,
      names: ["ecosystem"],
      required: ["ecosystem"],
      autoAdvance: true,
      content: (
        <Choice
          name="ecosystem"
          defaultValue={defaultEcosystem}
          options={[...ecosystems, { value: "other", label: s.otherPlatform }]}
        />
      ),
    },
    {
      id: "role",
      title: t.role,
      hint: t.roleHint,
      names: ["role"],
      required: ["role"],
      content: <input id="role" name="role" placeholder={t.rolePlaceholder} className={input} />,
    },
    {
      id: "model",
      title: t.model,
      names: ["model"],
      autoAdvance: true,
      content: (
        <Choice
          name="model"
          columns={1}
          defaultValue="staff-augmentation"
          options={t.models}
        />
      ),
    },
    {
      id: "when",
      title: t.when,
      names: ["start", "location"],
      content: (
        <div className="grid gap-5 sm:grid-cols-2">
          <BigField label={t.start} name="start">
            <input id="start" name="start" type="month" className={input} />
          </BigField>
          <BigField label={t.location} name="location">
            <input id="location" name="location" placeholder={t.locationPlaceholder} className={input} />
          </BigField>
        </div>
      ),
    },
    {
      id: "context",
      title: t.context,
      hint: t.contextHint,
      names: ["message"],
      optional: true,
      content: <textarea id="message" name="message" rows={4} className={`${input} h-auto py-3`} />,
    },
    {
      id: "you",
      title: t.you,
      names: ["name", "email", "company"],
      required: ["name", "email", "company"],
      content: (
        <div className="grid gap-5 sm:grid-cols-2">
          <BigField label={t.name} name="name">
            <input id="name" name="name" autoComplete="name" className={input} />
          </BigField>
          <BigField label={t.email} name="email">
            <input id="email" name="email" type="email" autoComplete="email" className={input} />
          </BigField>
          <div className="sm:col-span-2">
            <BigField label={t.company} name="company">
              <input id="company" name="company" autoComplete="organization" className={input} />
            </BigField>
          </div>
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
      labels={s}
      serverErrors={state.errors}
      serverMessage={state.message}
      initialStep={defaultEcosystem ? 1 : 0}
      footnote={
        <>
          {t.footnote}{" "}
          <a href={privacyHref} target="_blank" className="text-link hover:underline">
            {t.privacy}
          </a>
        </>
      }
    />
  );
}
