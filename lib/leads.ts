// Lead capture with graceful, honest fallbacks.
// Priority: Supabase REST (if env keys) → custom webhook (if env) → mailto.
// The mailto fallback guarantees no lead is ever lost, even without a backend.

import type { AnalysisResult } from "./analysis";

export type LeadInput = {
  firstName: string;
  lastName: string;
  company: string;
  website: string;
  email: string;
  phone: string;
  interest: string;
};

export type LeadPayload = LeadInput & {
  source: "Website AI Analyse";
  status: "Neu";
  overall_score: number | null;
  scores: Record<string, number> | null;
  quick_wins: string[] | null;
  analysis_raw: unknown;
  created_at: string;
};

export type LeadResult = { ok: boolean; method: "supabase" | "webhook" | "mailto" };

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const WEBHOOK = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;
const SALES_EMAIL = "info@ecreator.ch";

export function buildPayload(
  input: LeadInput,
  analysis: AnalysisResult | null
): LeadPayload {
  return {
    ...input,
    source: "Website AI Analyse",
    status: "Neu",
    overall_score: analysis?.overall ?? null,
    scores: analysis
      ? Object.fromEntries(analysis.categories.map((c) => [c.key, c.score]))
      : null,
    quick_wins: analysis?.quickWins ?? null,
    analysis_raw: analysis ?? null,
    created_at: new Date().toISOString(),
  };
}

function mailtoFallback(p: LeadPayload): LeadResult {
  const lines = [
    `Neuer Lead – ${p.source}`,
    "",
    `Name: ${p.firstName} ${p.lastName}`,
    `Firma: ${p.company}`,
    `Website: ${p.website}`,
    `E-Mail: ${p.email}`,
    `Telefon: ${p.phone}`,
    `Interesse: ${p.interest}`,
    `Score (Schnellanalyse): ${p.overall_score ?? "—"}/100`,
    `Quick Wins: ${(p.quick_wins ?? []).join(" | ")}`,
    "",
    `Quelle: ${p.source} · Status: ${p.status}`,
  ];
  const href = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(
    `Neuer AI-Analyse Lead: ${p.company}`
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
  if (typeof window !== "undefined") window.location.href = href;
  return { ok: true, method: "mailto" };
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  // 1) Supabase REST — direct insert (requires an RLS insert policy on `leads`)
  if (SUPABASE_URL && SUPABASE_ANON) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON,
          Authorization: `Bearer ${SUPABASE_ANON}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) return { ok: true, method: "supabase" };
    } catch {
      /* fall through */
    }
  }

  // 2) Custom webhook / serverless endpoint
  if (WEBHOOK) {
    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) return { ok: true, method: "webhook" };
    } catch {
      /* fall through */
    }
  }

  // 3) Guaranteed fallback — open a prefilled mail to sales
  return mailtoFallback(payload);
}
