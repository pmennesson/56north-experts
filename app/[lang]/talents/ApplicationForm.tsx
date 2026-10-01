"use client";

import { useActionState } from "react";
import { Honeypot, inputClass as input } from "@/components/ui/form";
import { BigField, Choice, StepForm, type Step } from "@/components/StepForm";
import type { Dictionary, Locale } from "@/lib/i18n";
import { submitApplication, type ApplicationState } from "./actions";

type Option = { value: string; label: string };
type Props = {
  lang: Locale;
  t: Dictionary["applicationForm"];
  s: Dictionary["steps"];
  success: string;
  privacyHref: string;
  ecosystems: Option[];
};

/** Expert application, one question per screen. Identity comes last. */
export function ApplicationForm({ lang, t, s, success, privacyHref, ecosystems }: Props) {
  const [state, action, pending] = useActionState<ApplicationState, FormData>(submitApplication, { ok: false, message: "" });

  if (state.ok) {
    return (
      <div role="status" className="tile-white flex flex-col items-center gap-3 p-12 text-center">
        <p className="headline-md">{s.thanks}</p>
        <p className="text-[17px] text-fg-muted">{state.message || success}</p>
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
      content: <Choice name="ecosystem" options={[...ecosystems, { value: "other", label: s.otherPlatform }]} />,
    },
    {
      id: "years",
      title: t.years,
      names: ["years"],
      required: ["years"],
      autoAdvance: true,
      content: (
        <Choice
          name="years"
          columns={3}
          options={["5-9", "10-14", "15+"].map((value, i) => ({ value, label: t.yearsOptions[i] }))}
        />
      ),
    },
    {
      id: "modules",
      title: t.modules,
      hint: t.modulesHint,
      names: ["modules"],
      required: ["modules"],
      content: <textarea id="modules" name="modules" rows={4} className={`${input} h-auto py-3`} />,
    },
    {
      id: "certifications",
      title: t.certifications,
      hint: t.certificationsHint,
      names: ["certifications"],
      optional: true,
      content: <input id="certifications" name="certifications" className={input} />,
    },
    {
      id: "community",
      title: t.community,
      hint: t.communityHint,
      names: ["community"],
      optional: true,
      content: <textarea id="community" name="community" rows={4} className={`${input} h-auto py-3`} />,
    },
    {
      id: "terms",
      title: t.terms,
      names: ["rate", "availability", "location"],
      content: (
        <div className="grid gap-5 sm:grid-cols-2">
          <BigField label={t.rate} name="rate">
            <input id="rate" name="rate" placeholder={t.ratePlaceholder} className={input} />
          </BigField>
          <BigField label={t.availability} name="availability">
            <input id="availability" name="availability" type="month" className={input} />
          </BigField>
          <div className="sm:col-span-2">
            <BigField label={t.location} name="location">
              <input id="location" name="location" placeholder={t.locationPlaceholder} className={input} />
            </BigField>
          </div>
        </div>
      ),
    },
    {
      id: "referral",
      title: t.referral,
      hint: t.referralHint,
      names: ["referral"],
      optional: true,
      content: <input id="referral" name="referral" placeholder={t.referralPlaceholder} className={input} />,
    },
    {
      id: "you",
      title: t.you,
      names: ["name", "email", "linkedin", "consent"],
      required: ["name", "email", "linkedin", "consent"],
      content: (
        <div className="grid gap-5 sm:grid-cols-2">
          <BigField label={t.name} name="name">
            <input id="name" name="name" autoComplete="name" className={input} />
          </BigField>
          <BigField label={t.email} name="email">
            <input id="email" name="email" type="email" autoComplete="email" className={input} />
          </BigField>
          <div className="sm:col-span-2">
            <BigField label={t.linkedin} name="linkedin">
              <input id="linkedin" name="linkedin" type="url" placeholder="https://www.linkedin.com/in/…" className={input} />
            </BigField>
          </div>
          <label className="flex items-start gap-3 text-[15px] text-fg-muted sm:col-span-2">
            <input type="checkbox" name="consent" value="yes" className="mt-1 h-4 w-4 rounded accent-[var(--color-accent)]" />
            <span>
              {t.consentBefore}{" "}
              <a href={privacyHref} target="_blank" className="text-link hover:underline">
                {t.consentLink}
              </a>
              .
            </span>
          </label>
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
      footnote={t.footnote}
    />
  );
}
