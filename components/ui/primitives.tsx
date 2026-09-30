import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`mx-auto w-full max-w-[1040px] px-6 ${className}`} {...props} />;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "link";
  size?: "md" | "lg";
  className?: string;
};

const variants = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "border border-accent text-link hover:bg-accent hover:text-white",
  link: "text-link hover:underline",
};

/** Pill buttons and chevron links, the two call-to-action forms of the system. */
export function Button({ href, children, variant = "primary", size = "md", className = "" }: ButtonProps) {
  if (variant === "link") {
    return (
      <Link href={href} className={`inline-flex items-center gap-1 text-[17px] ${variants.link} ${className}`}>
        {children}
        <Chevron />
      </Link>
    );
  }
  const s = size === "lg" ? "h-12 px-7 text-[17px]" : "h-10 px-5 text-[15px]";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full font-normal transition-colors duration-300 ${s} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[17px] font-semibold text-signal ${className}`}>{children}</p>;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "mx-auto text-center items-center" : "";
  return (
    <div className={`reveal flex max-w-3xl flex-col gap-4 ${a}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="headline-lg whitespace-pre-line text-balance">{title}</h2>
      {subtitle && <p className="max-w-2xl text-xl leading-relaxed text-fg-muted text-pretty">{subtitle}</p>}
    </div>
  );
}

export function Section({ tone = "white", className = "", ...props }: ComponentProps<"section"> & { tone?: "white" | "pearl" }) {
  return (
    <section
      className={`relative py-24 sm:py-32 ${tone === "pearl" ? "bg-canvas-alt" : "bg-canvas"} ${className}`}
      {...props}
    />
  );
}

export function Chevron({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} aria-hidden>
      <path d="M4.5 2.5 8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Kept for compatibility with pages using an inline arrow. */
export const ArrowRight = Chevron;

export function Check({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
