import "server-only";

/**
 * New-submission alerts by email, sent through Resend's HTTP API (no SDK).
 *
 * Env vars (server only, in .env.production):
 *   RESEND_API_KEY   re_...            — without it, notifications are skipped
 *   NOTIFY_EMAIL     where alerts go   — in Resend test mode, must be the Resend account's email
 *   NOTIFY_FROM      optional          — defaults to Resend's shared test sender;
 *                                        set "56North Experts <experts@56north.io>" once the domain is verified
 *
 * Never throws and never blocks a submission: the row is already saved in
 * Supabase when this runs, so an email failure only costs the alert.
 */
export async function notify(subject: string, fields: Record<string, string | null | undefined>, replyTo?: string) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  if (!key || !to) return;

  const from = process.env.NOTIFY_FROM || "56North Experts <onboarding@resend.dev>";
  const text =
    Object.entries(fields)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n") + "\n\nAll submissions: Supabase → project 56north-experts → Table Editor.";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        subject: subject.replace(/[\r\n]+/g, " ").slice(0, 150),
        text,
        ...(replyTo && { reply_to: replyTo }),
      }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) console.error("[notify] Resend error", res.status, (await res.text()).slice(0, 300));
  } catch (err) {
    console.error("[notify] failed", err instanceof Error ? err.message : err);
  }
}
