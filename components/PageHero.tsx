import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/primitives";

/** Shared hero for secondary pages: centred, big headline, one line of context. */
export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="bg-canvas">
      <Container className="flex flex-col items-center gap-5 pb-20 pt-20 text-center sm:pt-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="headline-xl max-w-4xl whitespace-pre-line text-balance">{title}</h1>
        <p className="max-w-2xl text-xl leading-relaxed text-fg-muted text-pretty">{intro}</p>
        {children && <div className="mt-4">{children}</div>}
      </Container>
    </section>
  );
}
