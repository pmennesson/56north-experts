import { ImageResponse } from "next/og";
import { loadDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/locale";

export const alt = "56North";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { meta, hero } = await loadDictionary(hasLocale(lang) ? lang : "fr");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          padding: 80,
          background: "#ffffff",
          color: "#1d1d1f",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#1a7f37", fontWeight: 600 }}>{hero.eyebrow.replace(/ /g, " ")}</div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2.5, maxWidth: 1040, justifyContent: "center" }}>
          {meta.ogTitle.replace(/ /g, " ")}
        </div>
        <div style={{ display: "flex", fontSize: 36, fontWeight: 600 }}>56North</div>
      </div>
    ),
    size,
  );
}
