import type { Metadata } from "next";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { loadDictionary } from "@/lib/dictionaries";
import { getLocale } from "@/lib/i18n";
import { LegalPage } from "@/components/LegalPage";
import { NoticeFr } from "@/components/LegalTexts";

/** Legal notice (French slug). Only exists in French: the other language has its own slug. */

export async function generateMetadata(): Promise<Metadata> {
  const { legal } = await loadDictionary("fr");
  return buildMetadata({ page: "notice", locale: "fr", title: legal.noticeTitle, description: legal.noticeDescription });
}

export default async function Page() {
  if ((await getLocale()) !== "fr") notFound();
  const { legal } = await loadDictionary("fr");
  return (
    <LegalPage title={legal.noticeTitle} updated={site.legalUpdated.fr} updatedLabel={legal.updatedLabel}>
      <NoticeFr />
    </LegalPage>
  );
}
