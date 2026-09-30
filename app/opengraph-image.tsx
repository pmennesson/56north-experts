import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} · Senior AI experts for enterprise platforms`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated at build time: default social card for every page. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#ffffff",
          color: "#1d1d1f",
          alignItems: "center",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#1a7f37", fontWeight: 600 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3, maxWidth: 1000, justifyContent: "center" }}>
          Senior AI experts. Vetted by peers.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6e6e73" }}>
          Microsoft · Salesforce · Google Cloud · SAP · ServiceNow
        </div>
      </div>
    ),
    size,
  );
}
