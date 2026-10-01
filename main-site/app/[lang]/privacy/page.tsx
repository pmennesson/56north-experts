import type { Metadata } from "next";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { loadDictionary } from "@/lib/dictionaries";
import { getLocale } from "@/lib/i18n";
import { LegalPage } from "@/components/LegalPage";
import { PrivacyEn } from "@/components/LegalTexts";

/** Privacy policy (English slug). Only exists in English: the other language has its own slug. */

export async function generateMetadata(): Promise<Metadata> {
  const { legal } = await loadDictionary("en");
  return buildMetadata({ page: "privacy", locale: "en", title: legal.privacyTitle, description: legal.privacyDescription });
}

export default async function Page() {
  if ((await getLocale()) !== "en") notFound();
  const { legal } = await loadDictionary("en");
  return (
    <LegalPage title={legal.privacyTitle} updated={site.legalUpdated.en} updatedLabel={legal.updatedLabel}>
      <PrivacyEn />
    </LegalPage>
  );
}
