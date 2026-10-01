import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  /** Self-contained server bundle for Docker / VPS hosting (OVH). */
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  /** URLs of the previous static site keep working (links, bookmarks, search results). */
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/en.html", destination: "/en", permanent: true },
      { source: "/mentions-legales.html", destination: "/mentions-legales", permanent: true },
      { source: "/confidentialite.html", destination: "/confidentialite", permanent: true },
      { source: "/legal-notice.html", destination: "/en/legal-notice", permanent: true },
      { source: "/privacy.html", destination: "/en/privacy", permanent: true },
    ];
  },
};

export default nextConfig;
