import { getDictionary, getLocale, localePath } from "@/lib/i18n";
import { Button, Container } from "@/components/ui/primitives";

export default async function NotFound() {
  const locale = await getLocale();
  const { notFound: t } = await getDictionary(locale);
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-5 py-24 text-center">
      <p className="text-[17px] font-semibold text-signal">404</p>
      <h1 className="headline-lg">{t.title}</h1>
      <Button href={localePath(locale, "/")}>{t.home}</Button>
    </Container>
  );
}
