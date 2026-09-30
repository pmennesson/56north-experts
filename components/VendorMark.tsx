import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

/**
 * Vendor identifier for the logo bar and ecosystem cards.
 *
 * Drop the OFFICIAL logo file (from the vendor's press kit or partner
 * portal) at /public/logos/<slug>.svg and it is used automatically.
 * Without a file, a neutral text wordmark is rendered instead.
 *
 * The check runs at build time on the server: zero client JS, zero
 * layout shift. Monochrome treatment is on by default for a consistent
 * logo bar; set monochrome={false} if a vendor's guidelines forbid
 * recolouring its mark.
 */
export function VendorMark({
  slug,
  name,
  size = "md",
  monochrome = true,
}: {
  slug: string;
  name: string;
  size?: "sm" | "md";
  monochrome?: boolean;
}) {
  const file = `/logos/${slug}.svg`;
  const hasLogo = existsSync(path.join(process.cwd(), "public", file));
  const h = size === "sm" ? 20 : 28;

  if (hasLogo) {
    return (
      <Image
        src={file}
        alt={name}
        width={h * 4}
        height={h}
        className={`w-auto object-contain ${monochrome ? "opacity-60 brightness-0 transition-opacity hover:opacity-100" : ""}`}
        style={{ height: h }}
      />
    );
  }

  return (
    <span
      className={`whitespace-nowrap font-semibold tracking-[-0.02em] text-fg-muted transition-colors hover:text-fg ${
        size === "sm" ? "text-sm" : "text-lg sm:text-xl"
      }`}
    >
      {name}
    </span>
  );
}
