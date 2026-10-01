import type { Metadata } from "next";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { loadDictionary } from "@/lib/dictionaries";
import { getLocale } from "@/lib/i18n";
import { LegalPage } from "@/components/LegalPage";
import { NoticeEn } from "@/components/LegalTexts";

/** Legal notice (English slug). Only exists in English: the other language has its own slug. */

export async function generateMetadata(): Promise<Metadata> {
  const { legal } = await loadDictionary("en");
  return buildMetadata({ page: "notice", locale: "en", title: legal.noticeTitle, description: legal.noticeDescription });
}

export default async function Page() {
  if ((await getLocale()) !== "en") notFound();
  const { legal } = await loadDictionary("en");
  return (
    <LegalPage title={legal.noticeTitle} updated={site.legalUpdated.en} updatedLabel={legal.updatedLabel}>
      <NoticeEn />
    </LegalPage>
  );
}
