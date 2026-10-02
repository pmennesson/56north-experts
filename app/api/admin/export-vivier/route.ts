import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { buildWorkbook, emailWorkbook, fetchProspects, fingerprint, summaryText, uploadToDropbox } from "@/lib/export-vivier";

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
 *   ?ifChanged=<fingerprint>  — skip (204) when the table has not changed since
 *                               that fingerprint; the current one is always
 *                               returned in the x-vivier-fingerprint header.
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
    const rows = await fetchProspects();
    const fp = fingerprint(rows);
    const since = new URL(req.url).searchParams.get("ifChanged");
    if (since && since === fp) {
      return new NextResponse(null, { status: 204, headers: { "x-vivier-fingerprint": fp } });
    }

    const dateIso = new Date().toISOString().slice(0, 10);
    const filename = `vivier-experts-ia-${dateIso}.xlsx`;
    const xlsx = await buildWorkbook(rows, dateIso);

    let dropbox = false;
    let dropboxError: string | null = null;
    try {
      dropbox = await uploadToDropbox(xlsx, filename);
    } catch (err) {
      dropboxError = err instanceof Error ? err.message : String(err);
      console.error("[export-vivier] dropbox", dropboxError);
    }

    await emailWorkbook(xlsx, filename, summaryText(rows, dateIso, dropbox));

    return NextResponse.json(
      { ok: true, rows: rows.length, filename, dropbox, dropboxError, bytes: xlsx.length },
      { headers: { "x-vivier-fingerprint": fp } },
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
