// Finance Growth — lead capture with graceful, honest fallbacks.
// Priority: Supabase REST (if env keys) → custom webhook (if env) → mailto.
// The mailto fallback guarantees no lead is ever lost, even without a backend.
// Mirrors lib/leads.ts but with the finance-specific payload shape so it can be
// wired into eCreator OS / CRM later.

export type FinanceLeadInput = {
  firstName: string;
  lastName: string;
  company: string;
  website: string;
  email: string;
  phone: string;
  role: string; // Tätigkeit
  challenge: string; // grösste Herausforderung
};

export type FinanceLeadPayload = FinanceLeadInput & {
  source: "Finance Growth – Potenzialanalyse";
  brand: string;
  status: "Neu";
  created_at: string;
};

export type LeadResult = { ok: boolean; method: "supabase" | "webhook" | "mailto" };

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const WEBHOOK = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;
const SALES_EMAIL = "info@ecreator.ch";

export function buildFinancePayload(input: FinanceLeadInput): FinanceLeadPayload {
  return {
    ...input,
    source: "Finance Growth – Potenzialanalyse",
    brand: "Finance Growth by eCreator",
    status: "Neu",
    created_at: new Date().toISOString(),
  };
}

function mailtoFallback(p: FinanceLeadPayload): LeadResult {
  const lines = [
    `Neuer Lead – ${p.source}`,
    "",
    `Name: ${p.firstName} ${p.lastName}`,
    `Unternehmen: ${p.company}`,
    `Website: ${p.website}`,
    `E-Mail: ${p.email}`,
    `Telefon: ${p.phone}`,
    `Tätigkeit: ${p.role}`,
    `Grösste Herausforderung: ${p.challenge}`,
    "",
    `Quelle: ${p.source} · Status: ${p.status}`,
  ];
  const href = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(
    `Neue Potenzialanalyse: ${p.firstName} ${p.lastName} (${p.role})`
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
  if (typeof window !== "undefined") window.location.href = href;
  return { ok: true, method: "mailto" };
}

export async function submitFinanceLead(payload: FinanceLeadPayload): Promise<LeadResult> {
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
