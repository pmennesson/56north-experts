"use client";

import { useActionState } from "react";
import { Honeypot, inputClass as input } from "@/components/ui/form";
import { BigField, Choice, StepForm, type Step } from "@/components/StepForm";
import { submitApplication, type ApplicationState } from "./actions";

type Option = { value: string; label: string };

/** Expert application, one question per screen. Identity comes last. */
export function ApplicationForm({ ecosystems }: { ecosystems: Option[] }) {
  const [state, action, pending] = useActionState<ApplicationState, FormData>(submitApplication, { ok: false, message: "" });

  if (state.ok) {
    return (
      <div role="status" className="tile-white flex flex-col items-center gap-3 p-12 text-center">
        <p className="headline-md">Thank you.</p>
        <p className="text-[17px] text-fg-muted">{state.message}</p>
      </div>
    );
  }

  const steps: Step[] = [
    {
      id: "platform",
      title: "What is your main platform?",
      names: ["ecosystem"],
      required: ["ecosystem"],
      autoAdvance: true,
      content: <Choice name="ecosystem" options={[...ecosystems, { value: "other", label: "Another platform" }]} />,
    },
    {
      id: "years",
      title: "How long have you delivered for large organisations?",
      names: ["years"],
      required: ["years"],
      autoAdvance: true,
      content: (
        <Choice
          name="years"
          columns={3}
          options={[
            { value: "5-9", label: "5–9 years" },
            { value: "10-14", label: "10–14 years" },
            { value: "15+", label: "15+ years" },
          ]}
        />
      ),
    },
    {
      id: "modules",
      title: "Which AI modules have you shipped?",
      hint: "In production, for a named industry. Example: Agentforce service agent for a European insurer.",
      names: ["modules"],
      required: ["modules"],
      content: <textarea id="modules" name="modules" rows={4} className={`${input} h-auto py-3`} />,
    },
    {
      id: "certifications",
      title: "Your certifications.",
      hint: "Add credential IDs if you have them. We verify.",
      names: ["certifications"],
      optional: true,
      content: <input id="certifications" name="certifications" className={input} />,
    },
    {
      id: "community",
      title: "Where do you contribute?",
      hint: "User groups, talks, community answers, open source. This weighs as much as your CV.",
      names: ["community"],
      optional: true,
      content: <textarea id="community" name="community" rows={4} className={`${input} h-auto py-3`} />,
    },
    {
      id: "terms",
      title: "Your terms.",
      names: ["rate", "availability", "location"],
      content: (
        <div className="grid gap-5 sm:grid-cols-2">
          <BigField label="Day rate expectation" name="rate">
            <input id="rate" name="rate" placeholder="900–1,100 EUR" className={input} />
          </BigField>
          <BigField label="Available from" name="availability">
            <input id="availability" name="availability" type="month" className={input} />
          </BigField>
          <div className="sm:col-span-2">
            <BigField label="Base location & mobility" name="location">
              <input id="location" name="location" placeholder="Dubai, open to Paris two weeks a month" className={input} />
            </BigField>
          </div>
        </div>
      ),
    },
    {
      id: "referral",
      title: "Who would you vouch for?",
      hint: "A specialist you trust. Referrals that lead to a mission are rewarded.",
      names: ["referral"],
      optional: true,
      content: <input id="referral" name="referral" placeholder="Name and LinkedIn URL" className={input} />,
    },
    {
      id: "you",
      title: "Finally, you.",
      names: ["name", "email", "linkedin", "consent"],
      required: ["name", "email", "linkedin", "consent"],
      content: (
        <div className="grid gap-5 sm:grid-cols-2">
          <BigField label="Full name" name="name">
            <input id="name" name="name" autoComplete="name" className={input} />
          </BigField>
          <BigField label="Email" name="email">
            <input id="email" name="email" type="email" autoComplete="email" className={input} />
          </BigField>
          <div className="sm:col-span-2">
            <BigField label="LinkedIn profile" name="linkedin">
              <input id="linkedin" name="linkedin" type="url" placeholder="https://www.linkedin.com/in/…" className={input} />
            </BigField>
          </div>
          <label className="flex items-start gap-3 text-[15px] text-fg-muted sm:col-span-2">
            <input type="checkbox" name="consent" value="yes" className="mt-1 h-4 w-4 rounded accent-[var(--color-accent)]" />
            <span>
              I agree that my data is processed to assess my application and match me with missions. I can ask for it
              to be deleted at any time. {/* TODO: link to privacy policy */}
            </span>
          </label>
          <Honeypot />
        </div>
      ),
    },
  ];

  return (
    <StepForm
      steps={steps}
      action={action}
      pending={pending}
      submitLabel="Send application"
      serverErrors={state.errors}
      serverMessage={state.message}
      footnote="A practitioner of your platform reads every application."
    />
  );
}
