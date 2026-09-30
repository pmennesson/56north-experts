"use server";

import { insertRow } from "@/lib/supabase-server";
import { siteConfig } from "@/lib/site";

export type LeadState = { ok: boolean; message: string; errors?: Record<string, string> };

const required = ["name", "email", "company", "ecosystem", "role"] as const;

/**
 * Staffing request handler. Runs on the server only, stores in Supabase `leads`.
 * TODO before launch: email notification to the practice lead (Resend/Postmark)
 * and rate limiting (e.g. Vercel Firewall or Upstash).
 */
export async function submitStaffingRequest(_prev: LeadState, form: FormData): Promise<LeadState> {
  // Honeypot: bots fill every field, humans never see this one.
  if (form.get("website")) return { ok: true, message: "Thank you." };

  const data = Object.fromEntries(
    [...form.entries()].map(([k, v]) => [k, typeof v === "string" ? v.trim().slice(0, 2000) : ""]),
  );

  const errors: Record<string, string> = {};
  for (const f of required) if (!data[f]) errors[f] = "Required";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid work email";
  if (/@(gmail|yahoo|hotmail|outlook)\./i.test(data.email ?? "")) errors.email = "Please use your work email";

  if (Object.keys(errors).length) return { ok: false, message: "Please check the highlighted fields.", errors };

  const saved = await insertRow("leads", {
    name: data.name,
    email: data.email.toLowerCase(),
    company: data.company,
    ecosystem: data.ecosystem,
    role: data.role,
    engagement_model: data.model || null,
    target_start: data.start || null,
    location: data.location || null,
    message: data.message || null,
  });
  if (!saved)
    return { ok: false, message: `Something went wrong on our side. Please email ${siteConfig.email} and we will answer directly.` };

  return {
    ok: true,
    message: "Brief received. A practice lead will reply within one business day.",
  };
}
