// Generates concrete (placeholder) creative proposals from the input.
// Deterministic so the same company always gets the same mockups.
// IMPORTANT: these are PROPOSALS / mockups — clearly NOT already implemented.

import type { AnalysisResult } from "./analysis";

export type Creatives = {
  brand: string;
  website: { headline: string; sub: string; cta: string; nav: string[] };
  flyer: { kicker: string; headline: string; offer: string; cta: string };
  ads: {
    platform: string;
    ratio: "1:1" | "9:16";
    headline: string;
    body: string;
    cta: string;
    hue: number;
  }[];
  seo: { title: string; description: string; keywords: string[] };
  crmSteps: { label: string; desc: string }[];
};

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

export function generateCreatives(r: AnalysisResult): Creatives {
  const brand =
    r.company.replace(/\b(gmbh|ag|inc|llc|kg|ohg)\b/gi, "").trim() || r.domain;
  const first = brand.split(/\s+/)[0];
  const seed = r.overall + r.opportunities + brand.length;

  const headline = pick(
    [
      `Mehr Kunden für ${brand}.`,
      `${brand} – sichtbar, digital, erfolgreich.`,
      `Wachstum, das zu ${brand} passt.`,
      `${first}: Aus Klicks werden Kunden.`,
    ],
    seed
  );

  const sub = pick(
    [
      "Eine Website, die nicht nur gut aussieht – sondern verkauft.",
      "Performance, Branding und Conversion aus einer Hand.",
      "Schneller, klarer, conversion-optimiert. Bereit für Wachstum.",
    ],
    seed + 1
  );

  const offer = pick(
    [
      "Jetzt kostenlose Erstberatung sichern",
      "Gratis Strategiegespräch – unverbindlich",
      "Kostenlose Wachstumsanalyse anfordern",
    ],
    seed + 2
  );

  const adBody = pick(
    [
      "Wir machen dein Unternehmen sichtbar – mit Systemen, die Kunden bringen.",
      "Mehr Anfragen, mehr Umsatz, planbares Wachstum.",
      "Schluss mit teuren Klicks ohne Resultat.",
    ],
    seed + 3
  );

  return {
    brand,
    website: {
      headline,
      sub,
      cta: "Jetzt Termin buchen",
      nav: ["Leistungen", "Projekte", "Über uns", "Kontakt"],
    },
    flyer: {
      kicker: "eCreator × " + brand,
      headline,
      offer,
      cta: offer,
    },
    ads: [
      {
        platform: "Meta Feed Ad",
        ratio: "1:1",
        headline: `Mehr Kunden für ${first}`,
        body: adBody,
        cta: "Mehr erfahren",
        hue: 96,
      },
      {
        platform: "Instagram Story",
        ratio: "9:16",
        headline: `${brand} neu gedacht`,
        body: "Swipe up & sichere dir deine Analyse.",
        cta: "Mehr erfahren",
        hue: 150,
      },
      {
        platform: "TikTok Ad",
        ratio: "9:16",
        headline: `So wächst ${first} 2026`,
        body: adBody,
        cta: "Jetzt ansehen",
        hue: 190,
      },
    ],
    seo: {
      title: `${brand} | ${pick(
        [
          "Mehr Kunden gewinnen in der Schweiz",
          "Beratung & Service – jetzt anfragen",
          "Ihr Partner für planbares Wachstum",
        ],
        seed + 4
      )}`,
      description: `${brand} aus der Schweiz: ${sub} Jetzt unverbindlich Kontakt aufnehmen und kostenlose Analyse sichern.`,
      keywords: [
        `${first} Schweiz`,
        `${first} Angebot`,
        `${first} Beratung`,
        `${first} Bewertungen`,
        `${first} Kontakt`,
      ],
    },
    crmSteps: [
      { label: "Lead", desc: "Formular ausgefüllt" },
      { label: "CRM", desc: "Automatisch erfasst" },
      { label: "Follow-up", desc: "Persönliche Nachricht" },
      { label: "Termin", desc: "Strategiegespräch" },
      { label: "Kunde", desc: "Abschluss & Betreuung" },
    ],
  };
}
