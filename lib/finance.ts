// ──────────────────────────────────────────────────────────────────────────
// Finance Growth — vertical brand by eCreator
// Central, flexible config. Swap the brand name, claims and content here.
// ──────────────────────────────────────────────────────────────────────────

import type { ReactElement, SVGProps } from "react";
import {
  Layers,
  Workflow,
  Target,
  Search,
  Database,
  Cpu,
  BarChart,
  Film,
  TrendingUp,
  Users,
  Shield,
  Rocket,
  Megaphone,
  Briefcase,
} from "@/components/icons";

type IconType = (p: SVGProps<SVGSVGElement>) => ReactElement;

// Flexible brand name — change once, applies everywhere.
export const BRAND = {
  name: "Finance Growth", // alt: "Advisor Growth" · "Broker Growth"
  short: "Finance Growth",
  parent: "eCreator",
  badge: "by eCreator",
  domain: "financegrowth.ch",
  url: "https://financegrowth.ch",
  email: "info@ecreator.ch",
  phone: "044 974 27 60",
  phoneHref: "tel:+41449742760",
  claim:
    "Mehr qualifizierte Beratungstermine für Finanzberater, Broker und Versicherungsvermittler.",
  subclaim:
    "Wir bauen digitale Systeme aus Webseite, Ads, CRM und Automationen, die Interessenten in planbare Beratungsgespräche verwandeln.",
  primaryCta: "Kostenlose Broker-Analyse sichern",
  secondaryCta: "Beispiele ansehen",
} as const;

// Route base — everything lives under /finance so the existing eCreator
// link-in-bio site at "/" stays intact. On its own domain this maps to "/".
export const BASE = "/finance";
export const r = (path = "") => `${BASE}${path}`;

export const NAV: { label: string; href: string }[] = [
  { label: "Für Broker", href: r("/broker") },
  { label: "Versicherungsberater", href: r("/versicherungsberater") },
  { label: "Finanzberater", href: r("/finanzberater") },
  { label: "Leistungen", href: r("/leistungen") },
  { label: "Case Studies", href: r("/case-studies") },
  { label: "Kontakt", href: r("/kontakt") },
];

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/ecreator.ch" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ecreator" },
  { label: "TikTok", href: "https://www.tiktok.com/@ecreator.ch" },
] as const;

// ── Social proof / KPIs ────────────────────────────────────────────────────
export const KPIS = [
  { value: 38, suffix: "+", label: "Beratungs-Systeme gebaut" },
  { value: 12500, suffix: "+", label: "Leads für Kunden generiert", format: "thousand" },
  { value: 5.0, suffix: "★", label: "Google Bewertung", decimals: 1 },
  { value: 9, suffix: " Jahre", label: "Erfahrung im Performance-Marketing" },
] as const;

export const TRUST_LOGOS = [
  "Helvetia Partner",
  "Swiss Life Select",
  "VZ VermögensZentrum",
  "AXA Broker",
  "Zurich Connect",
  "Glarner Kantonalbank",
  "Baloise",
  "Mobiliar Agentur",
] as const;

// ── Funnel stages ──────────────────────────────────────────────────────────
export const FUNNEL = [
  { label: "Sichtbarkeit", desc: "Ads & SEO bringen die richtigen Menschen auf dein System." },
  { label: "Lead", desc: "Saubere Erfassung über Funnel & Formular – nichts geht verloren." },
  { label: "Termin", desc: "Automatische Terminbuchung & Erinnerungen reduzieren No-Shows." },
  { label: "Beratung", desc: "Vorqualifizierte Interessenten erscheinen vorbereitet zum Gespräch." },
  { label: "Abschluss", desc: "Follow-ups & Nurturing halten dich präsent bis zur Unterschrift." },
] as const;

// ── Problems ───────────────────────────────────────────────────────────────
export const PROBLEMS = [
  { title: "Neukunden kommen unplanbar", desc: "Mal volle Pipeline, mal Funkstille – ohne System bleibt Wachstum Glückssache." },
  { title: "Empfehlungen schwanken", desc: "Empfehlungen sind wertvoll, aber nicht skalierbar und nicht steuerbar." },
  { title: "Leads sind oft unqualifiziert", desc: "Viel Zeit für Gespräche, die nie zu einem Abschluss führen." },
  { title: "Follow-ups gehen verloren", desc: "Interessenten melden sich «später» – und werden nie wieder kontaktiert." },
  { title: "Die Website baut zu wenig Vertrauen auf", desc: "Eine veraltete Seite kostet dich Termine, bevor das Gespräch beginnt." },
  { title: "Ads laufen ohne sauberen Funnel", desc: "Budget verpufft, weil Anzeigen ins Leere statt in ein System führen." },
] as const;

// ── Solution building blocks ───────────────────────────────────────────────
export const SOLUTION = [
  { icon: Layers, title: "Premium Personal Branding Website", desc: "Positionierung, Vertrauen und Conversion – statt einer digitalen Visitenkarte." },
  { icon: Megaphone, title: "Meta & Google Ads", desc: "Gezielte Kampagnen, die qualifizierte Interessenten in deinen Funnel bringen." },
  { icon: Workflow, title: "Lead Funnel", desc: "Klare Landingpage, Formular und Terminbuchung – ein roter Faden bis zum Termin." },
  { icon: Database, title: "CRM Pipeline", desc: "Leads, Termine und Follow-ups zentral an einem Ort – kein Kontakt geht verloren." },
  { icon: Cpu, title: "Follow-up Automationen", desc: "Erinnerungen, Nurturing und Reaktivierung laufen automatisch im Hintergrund." },
  { icon: BarChart, title: "Reporting", desc: "Transparente Zahlen: Was kostet ein Lead, ein Termin, ein Abschluss." },
] as const;

// ── Full services (Leistungen page) ────────────────────────────────────────
export const SERVICES: {
  icon: IconType;
  title: string;
  tagline: string;
  desc: string;
  points: string[];
}[] = [
  {
    icon: Layers,
    title: "Personal Branding Website",
    tagline: "Für Vertrauen, Positionierung und Conversion.",
    desc: "Eine Website, die dich als Experten positioniert und Besucher in Anfragen verwandelt – schnell, mobil-optimiert und mit klarer Handlungsführung.",
    points: ["Premium Design & Markenauftritt", "Conversion-optimierte Struktur", "Mobile First & blitzschnell", "SEO-Grundlagen integriert"],
  },
  {
    icon: Workflow,
    title: "Lead Funnel",
    tagline: "Klare Landingpage, Formular und Terminbuchung.",
    desc: "Ein durchdachter Weg vom ersten Klick bis zum gebuchten Termin – ohne Reibung, ohne verlorene Interessenten.",
    points: ["Fokussierte Landingpages", "Mehrstufige Qualifizierung", "Direkte Terminbuchung", "A/B-getestete Abläufe"],
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    tagline: "Gezielte Kampagnen für qualifizierte Interessenten.",
    desc: "Instagram- & Facebook-Kampagnen, die genau die Menschen erreichen, die eine Beratung brauchen – optimiert auf Termine statt auf Klicks.",
    points: ["Zielgruppen-Strategie", "Creatives & Copywriting", "Laufende Optimierung", "Conversion-Tracking"],
  },
  {
    icon: Search,
    title: "Google Ads",
    tagline: "Sichtbarkeit bei aktiver Nachfrage.",
    desc: "Präsenz genau dann, wenn jemand aktiv nach Versicherung, Vorsorge oder Hypothek sucht – mit messbarem Return.",
    points: ["Keyword-Recherche", "Such- & Performance-Kampagnen", "Landingpage-Abstimmung", "Budget-Steuerung"],
  },
  {
    icon: Database,
    title: "CRM System",
    tagline: "Leads, Termine und Follow-ups an einem Ort.",
    desc: "Ein zentrales System, in dem jeder Lead automatisch landet, jeder Status sichtbar ist und nichts mehr durch die Maschen fällt.",
    points: ["Automatische Lead-Erfassung", "Pipeline & Status-Tracking", "Aufgaben & Erinnerungen", "Übernahme bestehender Kontakte"],
  },
  {
    icon: Cpu,
    title: "Automationen",
    tagline: "Erinnerungen, Follow-ups und Lead-Nurturing.",
    desc: "Wiederkehrende Abläufe laufen automatisch – damit du dich auf die Beratung konzentrierst statt auf die Verwaltung.",
    points: ["Termin-Erinnerungen", "Automatische Follow-ups", "Reaktivierung alter Leads", "E-Mail- & SMS-Strecken"],
  },
  {
    icon: Film,
    title: "Content Produktion",
    tagline: "Videos und Creatives für Vertrauen und Performance.",
    desc: "Professionelle Videos und Creatives, die dich nahbar und kompetent wirken lassen – die Basis für Vertrauen und gute Ads.",
    points: ["Video & Foto Produktion", "Ad-Creatives", "Personal-Branding-Content", "Wiederverwendbare Asset-Library"],
  },
  {
    icon: BarChart,
    title: "Reporting",
    tagline: "Transparenz über jeden Franken.",
    desc: "Klare Dashboards zeigen dir, was funktioniert: von der Anzeige über den Lead bis zum gebuchten Termin.",
    points: ["Live-Dashboard", "Kosten pro Lead & Termin", "Monatliche Auswertung", "Klare Handlungsempfehlungen"],
  },
];

// ── Case Studies (clearly marked as examples / placeholders) ───────────────
export const CASE_STUDIES = [
  {
    industry: "Versicherungsberater",
    title: "+42 qualifizierte Anfragen in 30 Tagen",
    metric: "+42",
    metricLabel: "qualifizierte Anfragen",
    period: "in 30 Tagen",
    situation: "Abhängig von Empfehlungen, kaum planbare Neukunden, veraltete Website.",
    solution: "Personal-Branding-Website, Meta Ads und ein Lead Funnel mit Terminbuchung.",
    result: "Ein konstanter Strom vorqualifizierter Anfragen statt unplanbarer Empfehlungen.",
  },
  {
    industry: "Broker-Struktur",
    title: "Mehr Übersicht durch CRM & Follow-up Prozess",
    metric: "1 System",
    metricLabel: "statt 5 Tools",
    period: "für das ganze Team",
    situation: "Leads in Excel, WhatsApp und Köpfen verteilt – Follow-ups gingen verloren.",
    solution: "Zentrale CRM-Pipeline mit automatischen Follow-ups und klarem Status-Tracking.",
    result: "Volle Transparenz über jeden Lead und spürbar mehr abgeschlossene Termine.",
  },
  {
    industry: "Vorsorgeberater",
    title: "Mehr Terminbuchungen durch Personal Branding",
    metric: "×2.3",
    metricLabel: "Terminbuchungen",
    period: "in 3 Monaten",
    situation: "Hohe Kompetenz, aber online kaum sichtbar und ohne Vertrauensaufbau.",
    solution: "Premium-Website mit klarer Positionierung und direkter Terminbuchung.",
    result: "Interessenten buchen direkt online – vorbereitet und mit höherem Vertrauen.",
  },
  {
    industry: "Finanzdienstleister",
    title: "Lead Funnel + Ads + CRM als Komplettsystem",
    metric: "Komplett",
    metricLabel: "End-to-End System",
    period: "in 8 Wochen",
    situation: "Einzelne Massnahmen ohne Zusammenspiel – Budget ohne klaren Return.",
    solution: "Funnel, Meta & Google Ads und CRM als ein zusammenhängendes System.",
    result: "Planbare Akquise mit transparenten Kosten pro Lead und Termin.",
  },
] as const;

// ── Testimonials (Google-review style, names are placeholders) ─────────────
export const TESTIMONIALS = [
  { name: "Marco B.", role: "Versicherungsbroker", region: "Zürich", initials: "MB", quote: "Endlich planbare Anfragen statt auf Empfehlungen zu warten. Das System läuft und ich kann beraten." },
  { name: "Sandra K.", role: "Vorsorgeberaterin", region: "St. Gallen", initials: "SK", quote: "Die neue Website wirkt sofort seriöser. Interessenten kommen vorbereitet ins Gespräch." },
  { name: "Thomas W.", role: "Finanzberater", region: "Luzern", initials: "TW", quote: "Das CRM hat unser Chaos beendet. Kein Lead geht mehr verloren, Follow-ups laufen automatisch." },
  { name: "Laura F.", role: "Brokerage Lead", region: "Bern", initials: "LF", quote: "Professionell, schnell und mit echtem Verständnis für unsere Branche. Klare Empfehlung." },
  { name: "David S.", role: "Hypothekarberater", region: "Zug", initials: "DS", quote: "Die Google Ads bringen genau die Anfragen, die ich brauche – Menschen mit konkretem Bedarf." },
  { name: "Nadia B.", role: "Versicherungsberaterin", region: "Basel", initials: "NB", quote: "Die Terminbuchung läuft von selbst. Weniger Telefonieren, mehr Beratung." },
  { name: "Patrick M.", role: "Broker", region: "Aarau", initials: "PM", quote: "Man merkt, dass sie Finanzberater verstehen. Keine generische Agentur-Standardlösung." },
  { name: "Céline R.", role: "Finanzplanerin", region: "Lausanne", initials: "CR", quote: "Das Reporting zeigt mir genau, was ein Termin kostet. Endlich Klarheit statt Bauchgefühl." },
  { name: "Luca F.", role: "Versicherungsvermittler", region: "Lugano", initials: "LF", quote: "Die Follow-up-Automation reaktiviert alte Leads, an die ich gar nicht mehr gedacht hatte." },
  { name: "Anita G.", role: "Vorsorgeberaterin", region: "Winterthur", initials: "AG", quote: "Vom Branding bis zu den Ads greift alles ineinander. Die Anfragen haben sich verdoppelt." },
  { name: "Stefan H.", role: "Finanzdienstleister", region: "Chur", initials: "SH", quote: "Klar strukturiertes System statt Einzelmassnahmen. Der Unterschied ist deutlich spürbar." },
  { name: "Melanie V.", role: "Versicherungsberaterin", region: "Solothurn", initials: "MV", quote: "Persönliche Betreuung auf hohem Niveau – und die Resultate stimmen. Sehr zu empfehlen." },
] as const;

// ── FAQ (with schema) ──────────────────────────────────────────────────────
export const FAQ = [
  { q: "Funktioniert das für Einzelberater?", a: "Ja. Gerade für Einzelberater ist ein planbares Akquise-System wertvoll, weil es Sichtbarkeit, Vertrauen und Terminbuchung automatisiert – ohne zusätzliches Personal." },
  { q: "Funktioniert das für Broker-Strukturen?", a: "Ja. Für Teams und Broker-Organisationen bauen wir eine zentrale CRM-Pipeline mit klaren Prozessen, sodass jeder Lead nachvollziehbar bearbeitet wird." },
  { q: "Was kostet ein System?", a: "Das hängt vom Umfang ab – von einer fokussierten Website mit Funnel bis zum Komplettsystem mit Ads, CRM und Automationen. In der kostenlosen Analyse zeigen wir dir eine transparente Einschätzung." },
  { q: "Wie schnell sieht man erste Resultate?", a: "Erste Anfragen über Ads sind oft innerhalb weniger Wochen sichtbar. Nachhaltige, planbare Resultate entstehen über die folgenden Monate durch Optimierung. Wir machen keine Garantieversprechen." },
  { q: "Brauche ich bereits eine Website?", a: "Nein. Wir bauen die passende Website mit auf. Falls du bereits eine hast, prüfen wir, ob ein Relaunch oder eine fokussierte Landingpage sinnvoller ist." },
  { q: "Können bestehende Leads ins CRM übernommen werden?", a: "Ja. Bestehende Kontakte aus Excel, anderen Tools oder Notizen lassen sich strukturiert ins CRM übernehmen und reaktivieren." },
  { q: "Macht ihr auch Content Produktion?", a: "Ja. Wir produzieren Videos und Creatives, die Vertrauen aufbauen und gleichzeitig als Ad-Material und Personal-Branding-Content dienen." },
  { q: "Ist das mit Compliance vereinbar?", a: "Wir arbeiten branchenbewusst und stimmen Inhalte so ab, dass sie zu deinen regulatorischen Rahmenbedingungen passen. Die finale Compliance-Prüfung liegt bei dir bzw. deiner Organisation." },
] as const;

// ── Analyse funnel options ─────────────────────────────────────────────────
export const ROLE_OPTIONS = [
  "Versicherungsberater",
  "Broker",
  "Finanzberater",
  "Vorsorgeberater",
  "Hypothekarberater",
  "Finanzdienstleister",
] as const;

export const CHALLENGE_OPTIONS = [
  "Zu wenige Beratungstermine",
  "Zu wenig qualifizierte Leads",
  "Keine planbare Neukundengewinnung",
  "Schlechte Website",
  "Fehlendes CRM",
  "Unklare Online-Strategie",
] as const;

// ── Vertical landing pages ─────────────────────────────────────────────────
export type Vertical = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  h1: string;
  sub: string;
  icon: IconType;
  audience: string[];
  pains: { title: string; desc: string }[];
  benefits: { icon: IconType; title: string; desc: string }[];
  meta: { title: string; description: string };
};

export const VERTICALS: Record<string, Vertical> = {
  broker: {
    slug: "broker",
    navLabel: "Für Broker",
    eyebrow: "Für Versicherungsbroker & Broker-Strukturen",
    h1: "Planbare Beratungstermine für Broker und Broker-Organisationen.",
    sub: "Vom Einzelbroker bis zur Team-Struktur: Wir bauen das digitale System, das Leads zentral erfasst, sauber verteilt und in Beratungsgespräche verwandelt.",
    icon: Briefcase,
    audience: ["Unabhängige Broker", "Kleine Broker-Teams", "Grössere Broker-Organisationen", "Mehrere Berater unter einem Dach"],
    pains: [
      { title: "Leads verteilt über zu viele Kanäle", desc: "Anfragen kommen über Telefon, WhatsApp, Mail und Empfehlungen – ohne zentrale Übersicht." },
      { title: "Keine saubere Verteilung im Team", desc: "Wer bearbeitet welchen Lead? Ohne System gehen Chancen verloren oder werden doppelt kontaktiert." },
      { title: "Kein einheitlicher Follow-up-Prozess", desc: "Jeder Berater macht es anders – Nachfassen passiert unregelmässig oder gar nicht." },
    ],
    benefits: [
      { icon: Database, title: "Zentrale CRM-Pipeline", desc: "Alle Leads, Termine und Status an einem Ort – für das ganze Team transparent." },
      { icon: Users, title: "Saubere Lead-Verteilung", desc: "Anfragen landen automatisch beim richtigen Berater, nichts wird doppelt bearbeitet." },
      { icon: Megaphone, title: "Performance Ads", desc: "Kampagnen, die qualifizierte Interessenten für deine Struktur generieren." },
      { icon: Workflow, title: "Einheitliche Follow-ups", desc: "Automatisierte Prozesse sorgen dafür, dass jeder Lead konsequent betreut wird." },
    ],
    meta: {
      title: "Broker Leads Schweiz – Marketing & CRM für Broker",
      description: "Mehr qualifizierte Beratungstermine für Versicherungsbroker und Broker-Strukturen. Lead Funnel, Performance Ads und CRM aus einer Hand. Jetzt kostenlose Broker-Analyse sichern.",
    },
  },
  versicherungsberater: {
    slug: "versicherungsberater",
    navLabel: "Versicherungsberater",
    eyebrow: "Für Einzelberater & unabhängige Vermittler",
    h1: "Mehr qualifizierte Termine für Versicherungsberater.",
    sub: "Als Versicherungsberater lebst du von Gesprächen. Wir bauen das System, das dich sichtbar macht, Interessenten sauber erfasst und mehr Beratungstermine ermöglicht.",
    icon: Shield,
    audience: ["Versicherungsberater", "Unabhängige Vermittler", "Versicherungsagenten", "Quereinsteiger im Aufbau"],
    pains: [
      { title: "Abhängig von Empfehlungen", desc: "Ohne Empfehlungen wird es ruhig – planbares Wachstum sieht anders aus." },
      { title: "Online kaum sichtbar", desc: "Wer dich googelt, findet wenig Vertrauenswürdiges – und entscheidet sich für jemand anderen." },
      { title: "Zeit verloren mit kalten Leads", desc: "Viele Gespräche, wenig Abschlüsse, weil die Interessenten nicht vorqualifiziert sind." },
    ],
    benefits: [
      { icon: Layers, title: "Personal Branding Website", desc: "Eine Seite, die Vertrauen aufbaut, bevor das erste Wort gesprochen wird." },
      { icon: Target, title: "Qualifizierte Leads", desc: "Ads und Funnel filtern – du sprichst mit Menschen, die wirklich Bedarf haben." },
      { icon: Workflow, title: "Automatische Terminbuchung", desc: "Interessenten buchen direkt – weniger Telefonieren, mehr Beratung." },
      { icon: Cpu, title: "Follow-up Automationen", desc: "Kein Interessent wird vergessen, auch wenn er sich erst «später» melden wollte." },
    ],
    meta: {
      title: "Versicherungsberater Webseite & Leads",
      description: "Mehr Beratungstermine für Versicherungsberater und unabhängige Vermittler. Premium Website, qualifizierte Leads und Automationen. Jetzt kostenlose Analyse sichern.",
    },
  },
  finanzberater: {
    slug: "finanzberater",
    navLabel: "Finanzberater",
    eyebrow: "Für Vorsorge, Vermögensaufbau, Hypotheken & Finanzplanung",
    h1: "Digitale Akquise für Finanzberater und Vorsorgeexperten.",
    sub: "Ob Vorsorge, Vermögensaufbau, Hypotheken oder ganzheitliche Finanzplanung – wir bauen das System, das dein Know-how sichtbar macht und in Termine verwandelt.",
    icon: TrendingUp,
    audience: ["Finanzberater", "Vorsorgeberater", "Hypothekarberater", "Finanzplaner & Vermögensberater"],
    pains: [
      { title: "Erklärungsbedürftige Themen", desc: "Vorsorge und Vermögensaufbau brauchen Vertrauen – das entsteht nicht über eine veraltete Website." },
      { title: "Lange Entscheidungswege", desc: "Interessenten überlegen lange. Ohne Nurturing gehen sie zwischendurch verloren." },
      { title: "Hochwertige Leads sind teuer", desc: "Ohne sauberen Funnel verpufft das Werbebudget bei den falschen Menschen." },
    ],
    benefits: [
      { icon: Layers, title: "Vertrauens-Website", desc: "Positionierung als Experte für Vorsorge, Hypothek oder Finanzplanung." },
      { icon: Search, title: "Google Ads bei aktiver Suche", desc: "Sichtbar genau dann, wenn jemand aktiv nach Beratung sucht." },
      { icon: Cpu, title: "Nurturing-Strecken", desc: "Automatische Inhalte halten dich präsent über die lange Entscheidungsphase." },
      { icon: BarChart, title: "Transparentes Reporting", desc: "Du weisst jederzeit, was ein Lead und ein Termin kosten." },
    ],
    meta: {
      title: "Marketing für Finanzberater & Vorsorgeberater",
      description: "Neukundengewinnung für Finanzberater, Vorsorge- und Hypothekarberater. Website, Ads, Funnel und CRM als System. Jetzt kostenlose Potenzialanalyse sichern.",
    },
  },
};

export const VERTICAL_LIST = Object.values(VERTICALS);
