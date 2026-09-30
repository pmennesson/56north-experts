import type { ReactNode } from "react";
import { Container } from "@/components/ui/primitives";

/** Long-form legal text with a calm, readable measure. */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <section className="bg-canvas">
      <Container className="max-w-[720px] pb-28 pt-20 sm:pt-24">
        <h1 className="headline-lg">{title}</h1>
        <p className="mt-4 text-[15px] text-fg-subtle">Last updated: {updated}</p>
        <div
          className="mt-12 text-[17px] leading-relaxed text-fg-muted
            [&_a]:text-link [&_a:hover]:underline
            [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-[-0.015em] [&_h2]:text-fg
            [&_p]:mt-4 [&_strong]:font-semibold [&_strong]:text-fg
            [&_table]:mt-4 [&_table]:w-full [&_table]:text-[15px]
            [&_td]:border-t [&_td]:border-line [&_td]:py-3 [&_td]:pr-4 [&_td]:align-top
            [&_th]:pb-2 [&_th]:pr-4 [&_th]:text-left [&_th]:font-semibold [&_th]:text-fg
            [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
