import Link from "next/link";
import { site } from "@/lib/site";
import { getLocale, type Dictionary } from "@/lib/i18n";
import { feedPath, pagePaths } from "@/lib/seo";
import { Container } from "@/components/ui/primitives";

export async function Footer({ t }: { t: Dictionary["footer"] }) {
  const locale = await getLocale();
  return (
    <footer className="bg-canvas-alt pb-20 text-[12px] text-fg-muted md:pb-0">
      <Container className="flex flex-col gap-4 py-10">
        <p className="leading-relaxed text-fg-subtle">{t.tagline}</p>
        <p className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href={pagePaths.articles[locale]} className="text-link hover:underline">
            {t.articles}
          </Link>
          <a href={feedPath(locale)} className="text-link hover:underline">
            RSS
          </a>
          <a href={site.experts} className="text-link hover:underline">
            {t.experts}
          </a>
        </p>
        <p className="border-t border-line pt-4">
          © {new Date().getFullYear()} {site.company.name} · {site.name}
          <span className="mx-2" aria-hidden>|</span>
          <Link href={pagePaths.notice[locale]} className="hover:text-fg hover:underline">
            {t.notice}
          </Link>
          <span className="mx-2" aria-hidden>|</span>
          <Link href={pagePaths.privacy[locale]} className="hover:text-fg hover:underline">
            {t.privacy}
          </Link>
          <span className="mx-2" aria-hidden>|</span>
          <a href={`mailto:${site.email}`} className="hover:text-fg hover:underline">
            {site.email}
          </a>
        </p>
      </Container>
    </footer>
  );
}
