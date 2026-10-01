import Link from "next/link";
import { getEcosystems } from "@/lib/ecosystems";
import { siteConfig } from "@/lib/site";
import { fill, getLocale, localePath, type Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/primitives";

/** Small grey footer: dense links, legal line at the bottom. */
export async function Footer({ t }: { t: Dictionary }) {
  const locale = await getLocale();
  const lp = (p: string) => localePath(locale, p);
  const f = t.footer;
  const cols = [
    {
      title: f.practices,
      links: getEcosystems(locale).map((e) => ({ href: lp(`/experts/${e.slug}`), label: fill(t.practice.linkLabel, { vendor: e.vendor }) })),
    },
    {
      title: f.clients,
      links: [
        { href: lp("/contact"), label: t.nav.contact },
        { href: lp("/#how"), label: t.nav.howItWorks },
        { href: lp("/insights"), label: t.nav.insights },
      ],
    },
    {
      title: f.experts,
      links: [
        { href: lp("/talents"), label: f.join },
        { href: lp("/talents#community"), label: f.community },
      ],
    },
    {
      title: f.company,
      links: [
        { href: lp("/about"), label: t.nav.about },
        { href: siteConfig.parent.url, label: f.platform },
        { href: `mailto:${siteConfig.email}`, label: f.contact },
        { href: siteConfig.linkedinCompany || siteConfig.founder.linkedin, label: "LinkedIn" },
      ],
    },
  ];

  return (
    <footer className="bg-canvas-alt pb-20 text-[12px] text-fg-muted md:pb-0">
      <Container className="py-10">
        <p className="border-b border-line pb-4 leading-relaxed text-fg-subtle">
          {f.independence} {f.disclaimer}
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
          Copyright © {new Date().getFullYear()} {siteConfig.legalName}. {f.rights}{" "}
          <a href={siteConfig.parent.url} className="hover:text-fg hover:underline">
            {siteConfig.parent.name}
          </a>
          , {f.tagline}.
          <span className="mx-2" aria-hidden>|</span>
          <Link href={lp("/privacy")} className="hover:text-fg hover:underline">
            {f.privacy}
          </Link>
          <span className="mx-2" aria-hidden>|</span>
          <Link href={lp("/legal")} className="hover:text-fg hover:underline">
            {f.legal}
          </Link>
        </p>
      </Container>
    </footer>
  );
}
