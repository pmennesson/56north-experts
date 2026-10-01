import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import { Button, Container, Section } from "@/components/ui/primitives";

/**
 * Founder block: authority and a human face before the final call to action.
 * Drop a square photo at /public/founder.jpg and it replaces the initials.
 */
export function Founder({ t }: { t: Dictionary["founder"] }) {
  const hasPhoto = existsSync(path.join(process.cwd(), "public", "founder.jpg"));
  return (
    <Section tone="pearl">
      <Container className="reveal flex flex-col items-center gap-6 text-center">
        {hasPhoto ? (
          <Image src="/founder.jpg" alt="Pascal Mennesson" width={112} height={112} className="h-28 w-28 rounded-full object-cover" />
        ) : (
          <span
            className="flex h-28 w-28 items-center justify-center rounded-full bg-surface text-3xl font-semibold text-fg-muted shadow-[0_2px_12px_rgb(0_0_0/0.06)]"
            aria-hidden
          >
            PM
          </span>
        )}
        <p className="text-[17px] font-semibold text-signal">{t.eyebrow}</p>
        <h2 className="headline-lg max-w-3xl text-balance">{t.title}</h2>
        <p className="max-w-2xl text-xl leading-relaxed text-fg-muted text-pretty">{t.body}</p>
        {t.link && (
          <Button href="/about" variant="link">
            {t.link}
          </Button>
        )}
      </Container>
    </Section>
  );
}

/** Mobile-only bottom bar keeping the primary action one tap away. */
export function StickyCta({ href = "/contact", label }: { href?: string; label: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/85 px-4 py-3 backdrop-blur-xl md:hidden">
      <Button href={href} className="w-full">
        {label}
      </Button>
    </div>
  );
}
