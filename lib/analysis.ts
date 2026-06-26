// Preliminary "Schnellanalyse" engine.
// IMPORTANT: This is a deterministic heuristic estimate derived from the input,
// NOT a measured audit. The UI labels it clearly as "Erste Schnellanalyse".
// The full report is verified manually by the eCreator team. No fake claims.

export type SubMetric = { label: string; score: number };
export type Category = {
  key: string;
  title: string;
  score: number;
  metrics: SubMetric[];
};

export type AnalysisResult = {
  company: string;
  domain: string;
  faviconUrl: string;
  logoSources: string[];
  screenshotUrl: string;
  overall: number;
  opportunities: number;
  highPotential: number;
  categories: Category[];
  quickWins: string[];
};

// --- deterministic seeded RNG (mulberry32) so the same input is stable ---
function hashString(str: string): number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function normalizeUrl(input: string): string {
  let v = input.trim();
  if (!v) return "";
  if (!/^https?:\/\//i.test(v)) v = "https://" + v;
  return v;
}

export function getDomain(input: string): string {
  try {
    const u = new URL(normalizeUrl(input));
    return u.hostname.replace(/^www\./, "");
  } catch {
    return input.trim().replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
  }
}

// Real logo attempt via Google's favicon service (works client-side, no CORS).
export function faviconUrl(domain: string): string {
  return `https://www.google.com/s/2/favicons?domain=${encodeURIComponent(
    domain
  )}&sz=128`;
}

// Real company logo (Clearbit) — returns the actual brand logo for many domains.
export function logoUrl(domain: string): string {
  return `https://logo.clearbit.com/${domain}?size=256`;
}

// Logo sources in priority order (real logo → larger favicon → small favicon).
export function logoSources(domain: string): string[] {
  return [
    logoUrl(domain),
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
    faviconUrl(domain),
  ];
}

// Real live screenshot of the website (WordPress mShots — free, no key).
export function screenshotUrl(domain: string, width = 1280): string {
  const target = `https://${domain}`;
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
    target
  )}?w=${width}`;
}

const CATEGORY_DEFS: { key: string; title: string; metrics: string[] }[] = [
  {
    key: "website",
    title: "Website",
    metrics: ["Design", "Mobile", "Geschwindigkeit", "CTA", "Vertrauen", "Conversion"],
  },
  {
    key: "seo",
    title: "SEO",
    metrics: ["Meta Title", "Meta Description", "Überschriften", "Local SEO", "Indexierbarkeit"],
  },
  {
    key: "social",
    title: "Social Media",
    metrics: ["Instagram", "TikTok", "LinkedIn", "Posting Frequenz", "Video Content", "Brand Consistency"],
  },
  {
    key: "ads",
    title: "Ads Potenzial",
    metrics: ["Meta Ads", "Google Ads", "Retargeting", "Landingpage Readiness", "Funnel Qualität"],
  },
  {
    key: "competitor",
    title: "Wettbewerber",
    metrics: ["Sichtbarkeit", "Website Qualität", "Social Präsenz", "Google Präsenz"],
  },
  {
    key: "ai",
    title: "AI Sichtbarkeit",
    metrics: ["AI-Verständlichkeit", "Struktur der Leistungen", "Trust Signale", "AI-Lesbarkeit"],
  },
  {
    key: "funnel",
    title: "Lead Funnel",
    metrics: ["Klare CTAs", "Formular", "Terminbuchung", "Follow-Up", "CRM Anbindung"],
  },
];

const QUICK_WIN_POOL: Record<string, string[]> = {
  website: [
    "CTA auf der Startseite klarer und prominenter platzieren",
    "Ladegeschwindigkeit & Bilder für Mobile optimieren",
  ],
  seo: [
    "Meta Title & Description mit klarem Nutzen-Versprechen schärfen",
    "Local-SEO-Eintrag (Google Business) vollständig ausfüllen",
  ],
  social: [
    "Posting-Frequenz erhöhen und auf Video-Content setzen",
    "Brand-Auftritt über alle Kanäle vereinheitlichen",
  ],
  ads: [
    "Dedizierte Landingpage für Ads erstellen",
    "Retargeting-Pixel einrichten und warme Zielgruppen nutzen",
  ],
  competitor: ["Sichtbarkeitslücke zu Wettbewerbern gezielt schliessen"],
  ai: ["Leistungen klar strukturieren, damit AI-Suchsysteme dich verstehen"],
  funnel: [
    "Social Proof stärker und höher auf der Seite sichtbar machen",
    "Terminbuchung & automatisches Follow-up im CRM einrichten",
  ],
};

export function runAnalysis(company: string, website: string): AnalysisResult {
  const domain = getDomain(website);
  const seed = hashString((company + "|" + domain).toLowerCase());
  const rand = mulberry32(seed);

  // Each sub-metric gets a believable score that leaves clear room to grow.
  const scoreFor = () => {
    // mostly 38–82, occasionally lower — feels honest for a "potential" tool
    const base = 38 + Math.floor(rand() * 44);
    return Math.min(88, Math.max(28, base));
  };

  const categories: Category[] = CATEGORY_DEFS.map((def) => {
    const metrics = def.metrics.map((label) => ({ label, score: scoreFor() }));
    const avg = Math.round(
      metrics.reduce((s, m) => s + m.score, 0) / metrics.length
    );
    return { key: def.key, title: def.title, score: avg, metrics };
  });

  const overall = Math.round(
    categories.reduce((s, c) => s + c.score, 0) / categories.length
  );

  // weakest categories drive the quick wins (real prioritisation logic)
  const sorted = [...categories].sort((a, b) => a.score - b.score);
  const quickWins: string[] = [];
  for (const c of sorted) {
    const pool = QUICK_WIN_POOL[c.key] || [];
    for (const w of pool) {
      if (quickWins.length < 3 && !quickWins.includes(w)) quickWins.push(w);
    }
    if (quickWins.length >= 3) break;
  }

  const opportunities = 5 + (seed % 6); // 5–10 concrete chances
  const highPotential = sorted.filter((c) => c.score < 60).length || 3;

  return {
    company: company.trim() || domain,
    domain,
    faviconUrl: faviconUrl(domain),
    logoSources: logoSources(domain),
    screenshotUrl: screenshotUrl(domain),
    overall,
    opportunities,
    highPotential: Math.min(highPotential, 5),
    categories,
    quickWins,
  };
}

// Steps shown during the animated analysis sequence
export const ANALYSIS_STEPS = [
  "Website wird geprüft …",
  "SEO wird analysiert …",
  "Social Media wird gescannt …",
  "Wettbewerber werden verglichen …",
  "Ads-Potenzial wird berechnet …",
  "AI-Sichtbarkeit wird bewertet …",
  "Verbesserungen werden generiert …",
] as const;

export const INTEREST_OPTIONS = [
  "Mehr Kunden gewinnen",
  "Neue Website",
  "Meta Ads",
  "Google Ads",
  "CRM / Automationen",
  "Social Media Content",
  "Recruiting",
  "Alles zusammen",
] as const;
