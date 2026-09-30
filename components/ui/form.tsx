import type { ReactNode } from "react";

export const inputClass =
  "h-12 w-full rounded-xl border border-line-strong bg-surface px-4 text-[17px] text-fg placeholder:text-fg-subtle transition-shadow focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15";

export function Field({
  label,
  name,
  error,
  hint,
  wide,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <label htmlFor={name} className="mb-2 block text-[15px] font-medium">
        {label}
      </label>
      {children}
      {hint && !error && <span className="mt-1 block text-[13px] text-fg-subtle">{hint}</span>}
      {error && <span className="mt-1 block text-[13px] text-red-600">{error}</span>}
    </div>
  );
}

export function SubmitButton({ pending, label, pendingLabel = "Sending…" }: { pending: boolean; label: string; pendingLabel?: string }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-[17px] text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
    >
      {pending ? pendingLabel : label}
    </button>
  );
}

/** Invisible to humans, filled by bots. Checked server-side. */
export function Honeypot() {
  return <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />;
}
