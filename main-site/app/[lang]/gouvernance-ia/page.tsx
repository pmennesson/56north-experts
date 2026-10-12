import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "@/lib/i18n";
import { PillarPage, pillarMetadata } from "@/components/PillarPage";

/** Pillar page "governance" (French slug). Only exists in French: the other language has its own slug. */

export async function generateMetadata(): Promise<Metadata> {
  if ((await getLocale()) !== "fr") return {};
  return pillarMetadata("fr", "governance");
}

export default async function Page() {
  if ((await getLocale()) !== "fr") notFound();
  return <PillarPage locale="fr" pageKey="governance" />;
}
