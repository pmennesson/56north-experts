import { Button, Container } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-5 py-24 text-center">
      <p className="text-[17px] font-semibold text-signal">404</p>
      <h1 className="headline-lg">This page does not exist.</h1>
      <p className="text-fg-muted">The expert you are looking for might still be one brief away.</p>
      <div className="mt-4 flex items-center gap-8">
        <Button href="/">Home</Button>
        <Button href="/contact" variant="link">Request experts</Button>
      </div>
    </Container>
  );
}
