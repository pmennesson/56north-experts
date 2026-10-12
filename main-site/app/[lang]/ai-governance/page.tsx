import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "@/lib/i18n";
import { PillarPage, pillarMetadata } from "@/components/PillarPage";

/** Pillar page "governance" (English slug). Only exists in English: the other language has its own slug. */

export async function generateMetadata(): Promise<Metadata> {
  if ((await getLocale()) !== "en") return {};
  return pillarMetadata("en", "governance");
}

export default async function Page() {
  if ((await getLocale()) !== "en") notFound();
  return <PillarPage locale="en" pageKey="governance" />;
}
