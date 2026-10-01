import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site } from "@/lib/site";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import { organizationLd, websiteLd } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import "../globals.css";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = await getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: meta.title, template: `%s · ${site.name}` },
    description: meta.description,
    applicationName: site.name,
    category: "business",
    formatDetection: { email: false, telephone: false, address: false },
  };
}

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getDictionary(lang);
  return (
    <html lang={lang} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Invisible identity links: the founder's profile and the sister site, for search engines. */}
        <link rel="me" href={site.founder.linkedin} />
        <link rel="related" href={site.experts} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          {t.nav.skip}
        </a>
        <JsonLd data={[organizationLd(t.meta.description), websiteLd()]} />
        <Header t={t.nav} />
        <main id="main">{children}</main>
        <Footer t={t.footer} />
      </body>
    </html>
  );
}
