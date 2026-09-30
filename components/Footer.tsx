import Link from "next/link";
import { ecosystems } from "@/lib/ecosystems";
import { siteConfig } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/primitives";

/** Small grey footer: dense links, legal line at the bottom. */
export function Footer({ t }: { t: Dictionary }) {
  const cols = [
    {
      title: "Practices",
      links: ecosystems.map((e) => ({ href: `/experts/${e.slug}`, label: `${e.vendor} AI experts` })),
    },
    {
      title: "Clients",
      links: [
        { href: "/contact", label: t.nav.contact },
        { href: "/#how", label: "How it works" },
        { href: "/insights", label: t.nav.insights },
      ],
    },
    {
      title: "Experts",
      links: [
        { href: "/talents", label: "Join the network" },
        { href: "/talents#community", label: "Community programme" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: siteConfig.parent.url, label: `${siteConfig.parent.name} governance platform` },
        { href: `mailto:${siteConfig.email}`, label: "Contact" },
        { href: siteConfig.linkedin, label: "LinkedIn" },
      ],
    },
  ];

  return (
    <footer className="bg-canvas-alt text-[12px] text-fg-muted">
      <Container className="py-10">
        <p className="border-b border-line pb-4 leading-relaxed text-fg-subtle">
          {t.footer.independence} {t.footer.disclaimer}
        </p>
        <div className="grid grid-cols-2 gap-8 py-8 md:grid-cols-4">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="mb-2 font-semibold text-fg">{c.title}</p>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-fg hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="border-t border-line pt-4">
          Copyright © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved. Part of{" "}
          <a href={siteConfig.parent.url} className="hover:text-fg hover:underline">
            {siteConfig.parent.name}
          </a>
          , {siteConfig.parent.tagline.toLowerCase()}.
        </p>
      </Container>
    </footer>
  );
}
