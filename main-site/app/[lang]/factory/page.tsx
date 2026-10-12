import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n";
import { PillarPage, pillarMetadata } from "@/components/PillarPage";

/** Pillar page "factory": same slug in both languages (/factory and /en/factory). */

export async function generateMetadata(): Promise<Metadata> {
  return pillarMetadata(await getLocale(), "factory");
}

export default async function Page() {
  return <PillarPage locale={await getLocale()} pageKey="factory" />;
}
