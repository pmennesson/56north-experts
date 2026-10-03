import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { enrichBatch } from "@/lib/enrich-vivier";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

/**
 * POST /api/admin/enrich-vivier?limit=40
 *
 * Lit les sites publics des personnes du vivier pas encore examinées et
 * relève e-mail / téléphone affichés en clair (voir lib/enrich-vivier.ts).
 * Même jeton que l'export : header x-export-token. Appelée par
 * deploy/export-vivier.sh avant l'export, jamais depuis un navigateur.
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
  const limit = Math.min(60, Math.max(1, Number(new URL(req.url).searchParams.get("limit") ?? 40)));
  try {
    const { processed, found, results } = await enrichBatch(limit);
    return NextResponse.json({
      ok: true,
      processed,
      found,
      details: results.map((r) => ({ name: r.name, outcome: r.outcome, email: r.email, phone: r.phone })),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[enrich-vivier]", message);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: "method not allowed" }, { status: 405 });
}
