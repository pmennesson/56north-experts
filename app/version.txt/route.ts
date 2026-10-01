/** /version.txt — the commit currently deployed (set at build time), to check deployments. */
export const dynamic = "force-static";

export function GET() {
  return new Response(`${process.env.GIT_SHA ?? "unknown"}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
