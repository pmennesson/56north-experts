import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
import { getAllArticles, getArticle } from "@/lib/articles";
import { hasLocale, locales } from "@/lib/locale";

export const alt = `${site.name} · Articles`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => getAllArticles().map((a) => ({ lang, slug: a.versions[lang].slug })));
}

/** Social card per article: category, title and the site name, in the article's language. */
export default async function OgImage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const locale = hasLocale(lang) ? lang : "fr";
  const found = getArticle(locale, slug);
  const title = (found?.localized.title ?? site.name).replace(/ /g, " ");
  const category = found ? `${found.localized.category} · ${found.localized.dial}` : "";
  const fontSize = title.length > 110 ? 44 : title.length > 70 ? 52 : title.length > 45 ? 60 : 68;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#ffffff",
          color: "#1d1d1f",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, fontWeight: 600 }}>
          <span>{site.name}</span>
          <span style={{ color: "#b42318" }}>{category}</span>
        </div>
        <div style={{ display: "flex", fontSize, fontWeight: 700, lineHeight: 1.12, letterSpacing: -1.5, maxWidth: 1056 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 26, color: "#6e6e73" }}>56north.io</div>
      </div>
    ),
    size,
  );
}
