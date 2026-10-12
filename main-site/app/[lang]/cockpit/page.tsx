import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n";
import { PillarPage, pillarMetadata } from "@/components/PillarPage";

/** Pillar page "cockpit": same slug in both languages (/cockpit and /en/cockpit). */

export async function generateMetadata(): Promise<Metadata> {
  return pillarMetadata(await getLocale(), "cockpit");
}

export default async function Page() {
  return <PillarPage locale={await getLocale()} pageKey="cockpit" />;
}
