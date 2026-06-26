// ============================================================
// /api/analysis-lead  — server-side lead capture (optional)
//
// Use this when you host on a server runtime (e.g. Vercel) instead of
// static GitHub Pages. To activate:
//   1. Remove `output: "export"` from next.config.mjs
//   2. Move this file to:  app/api/analysis-lead/route.ts
//   3. Set env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
//   4. Point the frontend at it: NEXT_PUBLIC_LEAD_ENDPOINT=/api/analysis-lead
//
// Inserting with the service role key keeps writes server-side and lets
// the DB trigger (supabase/schema.sql) create the follow-up task +
// sales notification automatically.
// ============================================================

import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // minimal validation
    if (!body?.email || !body?.company) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      return NextResponse.json(
        { ok: false, error: "Supabase not configured" },
        { status: 500 }
      );
    }

    const res = await fetch(`${url}/rest/v1/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        first_name: body.firstName,
        last_name: body.lastName,
        company: body.company,
        website: body.website,
        email: body.email,
        phone: body.phone,
        interest: body.interest,
        source: "Website AI Analyse",
        status: "Neu",
        overall_score: body.overall_score ?? null,
        scores: body.scores ?? null,
        quick_wins: body.quick_wins ?? null,
        analysis_raw: body.analysis_raw ?? null,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ ok: false, error: text }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: (e as Error).message },
      { status: 500 }
    );
  }
}
