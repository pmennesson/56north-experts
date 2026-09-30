"use client";

import { useActionState } from "react";
import { Honeypot, inputClass as input } from "@/components/ui/form";
import { BigField, Choice, StepForm, type Step } from "@/components/StepForm";
import { submitStaffingRequest, type LeadState } from "./actions";

type Option = { value: string; label: string };

/** Staffing brief, one question per screen. Contact details come last. */
export function ContactForm({ ecosystems, defaultEcosystem }: { ecosystems: Option[]; defaultEcosystem?: string }) {
  const [state, action, pending] = useActionState<LeadState, FormData>(submitStaffingRequest, { ok: false, message: "" });

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
      title: "Which platform?",
      names: ["ecosystem"],
      required: ["ecosystem"],
      autoAdvance: true,
      content: (
        <Choice
          name="ecosystem"
          defaultValue={defaultEcosystem}
          options={[...ecosystems, { value: "other", label: "Another platform" }]}
        />
      ),
    },
    {
      id: "role",
      title: "What role do you need?",
      hint: "The modules matter more than the title.",
      names: ["role"],
      required: ["role"],
      content: <input id="role" name="role" placeholder="e.g. Agentforce architect with Data 360" className={input} />,
    },
    {
      id: "model",
      title: "How would you like to work?",
      names: ["model"],
      autoAdvance: true,
      content: (
        <Choice
          name="model"
          columns={1}
          defaultValue="staff-augmentation"
          options={[
            { value: "staff-augmentation", label: "One expert in my team", detail: "Staff augmentation, daily rate" },
            { value: "squad", label: "A dedicated squad", detail: "Architect plus engineers, scoped outcome" },
            { value: "fractional", label: "A fractional architect", detail: "Two to eight days a month" },
            { value: "unsure", label: "Not sure yet", detail: "We will advise on the call" },
          ]}
        />
      ),
    },
    {
      id: "when",
      title: "When and where?",
      names: ["start", "location"],
      content: (
        <div className="grid gap-5 sm:grid-cols-2">
          <BigField label="Target start" name="start">
            <input id="start" name="start" type="month" className={input} />
          </BigField>
          <BigField label="Location & work mode" name="location">
            <input id="location" name="location" placeholder="Paris, hybrid" className={input} />
          </BigField>
        </div>
      ),
    },
    {
      id: "context",
      title: "Anything we should know?",
      hint: "Project stage, team, constraints.",
      names: ["message"],
      optional: true,
      content: <textarea id="message" name="message" rows={4} className={`${input} h-auto py-3`} />,
    },
    {
      id: "you",
      title: "Who should we call?",
      names: ["name", "email", "company"],
      required: ["name", "email", "company"],
      content: (
        <div className="grid gap-5 sm:grid-cols-2">
          <BigField label="Full name" name="name">
            <input id="name" name="name" autoComplete="name" className={input} />
          </BigField>
          <BigField label="Work email" name="email">
            <input id="email" name="email" type="email" autoComplete="email" className={input} />
          </BigField>
          <div className="sm:col-span-2">
            <BigField label="Company" name="company">
              <input id="company" name="company" autoComplete="organization" className={input} />
            </BigField>
          </div>
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
      submitLabel="Send brief"
      serverErrors={state.errors}
      serverMessage={state.message}
      initialStep={defaultEcosystem ? 1 : 0}
      footnote={
        <>
          Your brief is confidential and used only to answer your request.{" "}
          <a href="/privacy" target="_blank" className="text-link hover:underline">
            Privacy policy
          </a>
        </>
      }
    />
  );
}
