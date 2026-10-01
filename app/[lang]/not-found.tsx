import { getDictionary, getLinker } from "@/lib/i18n";
import { Button, Container } from "@/components/ui/primitives";

export default async function NotFound() {
  const { notFound: t } = await getDictionary();
  const lp = await getLinker();
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-5 py-24 text-center">
      <p className="text-[17px] font-semibold text-signal">404</p>
      <h1 className="headline-lg">{t.title}</h1>
      <p className="text-fg-muted">{t.body}</p>
      <div className="mt-4 flex items-center gap-8">
        <Button href={lp("/")}>{t.home}</Button>
        <Button href={lp("/contact")} variant="link">
          {t.cta}
        </Button>
      </div>
    </Container>
  );
}
