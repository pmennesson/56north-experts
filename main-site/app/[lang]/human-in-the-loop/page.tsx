import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n";
import { PillarPage, pillarMetadata } from "@/components/PillarPage";

/** Pillar page "hitl": same slug in both languages (/human-in-the-loop and /en/human-in-the-loop). */

export async function generateMetadata(): Promise<Metadata> {
  return pillarMetadata(await getLocale(), "hitl");
}

export default async function Page() {
  return <PillarPage locale={await getLocale()} pageKey="hitl" />;
}
