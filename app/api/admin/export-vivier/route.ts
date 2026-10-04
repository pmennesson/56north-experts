import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { buildWorkbook, emailWorkbook, fetchCommunities, fetchProspects, newSince, summaryText, uploadToDropbox } from "@/lib/export-vivier";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/admin/export-vivier
 *
 * Builds the Excel export of the `prospects` table, emails it (Resend) and
 * uploads it to Dropbox when configured. Protected by a shared secret:
 *   header  x-export-token: <EXPORT_TOKEN>
 * Without EXPORT_TOKEN in the environment the route does not exist (404).
 *
 * Query:
 *   ?since=<ISO timestamp>  — send only if candidates were ADDED after that time
 *                             (204 otherwise). New candidates get their own sheet,
 *                             separate from those already in the base.
 *   (no since)              — full export, sent unconditionally (manual --force).
 * The time of this check is returned in the x-vivier-now header: the caller
 * stores it and passes it as `since` next time.
 *
 * Called by deploy/export-vivier.sh from the server, never from a browser.
 */
export async function POST(req: Request) {
  const expected = process.env.EXPORT_TOKEN;
  if (!expected) return new NextResponse(null, { status: 404 });

  const given = req.headers.get("x-export-token") ?? "";
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  try {
    const now = new Date().toISOString();
    const since = new URL(req.url).searchParams.get("since");
    const rows = await fetchProspects();
    const fresh = newSince(rows, since);
    if (since && fresh.length === 0) {
      return new NextResponse(null, { status: 204, headers: { "x-vivier-now": now } });
    }
    const communities = await fetchCommunities();

    const dateIso = new Date().toISOString().slice(0, 10);
    const filename = `vivier-experts-ia-${dateIso}.xlsx`;
    const xlsx = await buildWorkbook(rows, dateIso, communities, since);

    let dropbox = false;
    let dropboxError: string | null = null;
    try {
      dropbox = await uploadToDropbox(xlsx, filename);
    } catch (err) {
      dropboxError = err instanceof Error ? err.message : String(err);
      console.error("[export-vivier] dropbox", dropboxError);
    }

    await emailWorkbook(xlsx, filename, summaryText(rows, dateIso, dropbox, since), since ? fresh.length : null);

    return NextResponse.json(
      { ok: true, rows: rows.length, fresh: fresh.length, filename, dropbox, dropboxError, bytes: xlsx.length },
      { headers: { "x-vivier-now": now } },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[export-vivier] failed", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export function GET() {
  return new NextResponse(null, { status: 405, headers: { Allow: "POST" } });
}
