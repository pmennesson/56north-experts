import type { Dictionary } from "@/lib/i18n";
import { Chevron, Container, Section } from "@/components/ui/primitives";

/** Cross-link to the 56North Cockpit (56north.io): same company, complementary offer. */
export function CockpitLink({
  t,
  narrow = false,
  tone = "pearl",
}: {
  t: Dictionary["cockpit"];
  narrow?: boolean;
  tone?: "white" | "pearl";
}) {
  return (
    <Section tone={tone} className="!py-16">
      <Container className={narrow ? "!max-w-[760px]" : undefined}>
        <p className="text-[15px] font-semibold text-fg-muted">{t.eyebrow}</p>
        <h2 className="mt-2 max-w-[720px] text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[32px]">{t.title}</h2>
        <p className="mt-4 max-w-[680px] text-[17px] leading-relaxed text-fg-muted">{t.body}</p>
        <a href={t.href} className="mt-6 inline-flex items-center gap-1 text-[17px] text-link hover:underline">
          {t.link} <Chevron />
        </a>
      </Container>
    </Section>
  );
}
