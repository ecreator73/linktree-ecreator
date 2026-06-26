import type { ReactElement, SVGProps } from "react";
import {
  Sparkles,
  Calendar,
  Layers,
  Trophy,
  Instagram,
  TikTok,
  LinkedIn,
  WhatsApp,
  Globe,
  YouTube,
  Cpu,
  Database,
  Target,
  Workflow,
  Search,
  Film,
} from "@/components/icons";

// Central place to swap real URLs.
export const URLS = {
  analyse: "https://ecreator.ch/analyse",
  termin: "https://ecreator.ch/termin",
  projekte: "https://ecreator.ch/projekte",
  caseStudies: "https://ecreator.ch/case-studies",
  instagram: "https://www.instagram.com/ecreator.ch",
  tiktok: "https://www.tiktok.com/@ecreator.ch",
  linkedin: "https://www.linkedin.com/company/ecreator",
  youtube: "https://www.youtube.com/@ecreator",
  whatsapp: "https://wa.me/41000000000",
  website: "https://ecreator.ch",
  email: "mailto:info@ecreator.ch",
};

type IconType = (p: SVGProps<SVGSVGElement>) => ReactElement;

type LinkCard = {
  icon: IconType;
  title: string;
  desc: string;
  href: string;
  primary?: boolean;
};

export const LINK_CARDS: LinkCard[] = [
  {
    icon: Sparkles,
    title: "Kostenlose Analyse",
    desc: "In 15 Minuten zeigen wir dir dein grösstes Wachstumspotenzial.",
    href: URLS.analyse,
    primary: true,
  },
  {
    icon: Calendar,
    title: "Termin buchen",
    desc: "Unverbindliches Strategiegespräch – direkt im Kalender sichern.",
    href: URLS.termin,
  },
  {
    icon: Layers,
    title: "Unsere Projekte",
    desc: "Ausgewählte Arbeiten aus Webdesign, Branding & Performance.",
    href: URLS.projekte,
  },
  {
    icon: Trophy,
    title: "Case Studies",
    desc: "Echte Zahlen. Echte Resultate. Messbares Wachstum.",
    href: URLS.caseStudies,
  },
  {
    icon: Instagram,
    title: "Instagram",
    desc: "Behind the scenes, Insights & aktuelle Projekte.",
    href: URLS.instagram,
  },
  {
    icon: TikTok,
    title: "TikTok",
    desc: "Kurz, ehrlich & nützlich – Marketing in unter 60 Sekunden.",
    href: URLS.tiktok,
  },
  {
    icon: LinkedIn,
    title: "LinkedIn",
    desc: "Strategie, Wachstum & Unternehmertum für Entscheider.",
    href: URLS.linkedin,
  },
  {
    icon: WhatsApp,
    title: "WhatsApp",
    desc: "Schreib uns direkt – wir antworten persönlich.",
    href: URLS.whatsapp,
  },
  {
    icon: Globe,
    title: "Website",
    desc: "Alles über eCreator auf ecreator.ch.",
    href: URLS.website,
  },
];

// Headline results band
export const STATS = [
  { value: "12'000+", label: "Leads generiert" },
  { value: "150+", label: "Projekte realisiert" },
  { value: "29+", label: "Branchen" },
  { value: "5.0★", label: "Google Bewertung" },
] as const;

// Placeholder client wall (text logos for the marquee)
export const CLIENTS = [
  "Swiss Immobilien",
  "Spitex Plus",
  "Widmer Finanz",
  "Alpenhof Group",
  "Bianchi Dental",
  "Meier Bau AG",
  "Roth Studio",
  "Suter Coaching",
  "Helvetia Auto",
  "Brunner Immobilien",
  "Lakeside Hotel",
  "Vitalis Praxis",
] as const;

// Many case studies (placeholders) — agency-style results grid
export const CASE_STUDIES = [
  { client: "Swiss Immobilien", industry: "Immobilien", metric: "+230%", label: "mehr Anfragen", period: "in 3 Monaten" },
  { client: "Spitex Plus", industry: "Healthcare", metric: "+178%", label: "qualifizierte Leads", period: "in 4 Monaten" },
  { client: "Widmer Finanz", industry: "Finanzen", metric: "+310%", label: "Conversions", period: "in 6 Monaten" },
  { client: "Alpenhof Group", industry: "Hospitality", metric: "+540K", label: "Impressionen", period: "in 90 Tagen" },
  { client: "Bianchi Dental", industry: "Dental", metric: "×3.4", label: "Neukunden / Monat", period: "in 5 Monaten" },
  { client: "Meier Bau AG", industry: "Bau", metric: "−42%", label: "Kosten pro Lead", period: "in 2 Monaten" },
  { client: "Roth Studio", industry: "Beauty", metric: "+260%", label: "Buchungen", period: "in 3 Monaten" },
  { client: "Suter Coaching", industry: "Coaching", metric: "CHF 300K", label: "Umsatz generiert", period: "in 90 Tagen" },
  { client: "Helvetia Auto", industry: "Automotive", metric: "+190%", label: "Probefahrten", period: "in 4 Monaten" },
  { client: "Lakeside Hotel", industry: "Hospitality", metric: "+88%", label: "Direktbuchungen", period: "in 6 Monaten" },
  { client: "Vitalis Praxis", industry: "Gesundheit", metric: "+215%", label: "Terminanfragen", period: "in 3 Monaten" },
  { client: "Nordwind Retail", industry: "E-Commerce", metric: "4.1×", label: "ROAS", period: "in 60 Tagen" },
] as const;

// Vertical reel / short-video showcase (placeholders)
export const REELS = [
  { title: "Brand Story", handle: "@ecreator.ch", views: "1.2M", hue: 96 },
  { title: "Vorher / Nachher", handle: "@ecreator.ch", views: "840K", hue: 150 },
  { title: "Kundenstimme", handle: "@ecreator.ch", views: "612K", hue: 190 },
  { title: "Behind the Scenes", handle: "@ecreator.ch", views: "503K", hue: 70 },
  { title: "Produkt-Launch", handle: "@ecreator.ch", views: "2.0M", hue: 45 },
  { title: "Ad Creative", handle: "@ecreator.ch", views: "1.6M", hue: 280 },
] as const;

export const SERVICES = [
  {
    icon: Cpu,
    title: "AI Websites",
    desc: "Schnelle, intelligente Websites, die konvertieren statt nur gut aussehen.",
  },
  {
    icon: Database,
    title: "CRM Systeme",
    desc: "Jeder Lead landet automatisch im System – kein Kontakt geht verloren.",
  },
  {
    icon: Target,
    title: "Performance Ads",
    desc: "Meta & Google Kampagnen, optimiert auf Umsatz statt auf Klicks.",
  },
  {
    icon: Workflow,
    title: "Automatisierung",
    desc: "Wir automatisieren Routine, damit dein Team an Wachstum arbeitet.",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Nachhaltige Sichtbarkeit, die dich dauerhaft auf Seite 1 bringt.",
  },
  {
    icon: Film,
    title: "Content Produktion",
    desc: "Foto, Video & Creatives, die deine Marke premium wirken lassen.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Marco Brunner",
    role: "CEO",
    company: "Brunner Immobilien",
    quote:
      "Innerhalb von drei Monaten kamen mehr qualifizierte Anfragen rein als im ganzen Jahr davor. Absolut professionell.",
    initials: "MB",
  },
  {
    name: "Sandra Keller",
    role: "Inhaberin",
    company: "Spitex Plus",
    quote:
      "Endlich eine Agentur, die nicht nur redet, sondern liefert. Unser CRM läuft, die Leads sprudeln.",
    initials: "SK",
  },
  {
    name: "Thomas Widmer",
    role: "Geschäftsführer",
    company: "Widmer Finanz",
    quote:
      "Das Team denkt unternehmerisch mit. Die neue Website hat unsere Conversions mehr als verdreifacht.",
    initials: "TW",
  },
  {
    name: "Laura Frei",
    role: "Marketing Lead",
    company: "Alpenhof Group",
    quote:
      "Design, Branding, Performance – alles aus einer Hand und auf einem Niveau, das man selten sieht.",
    initials: "LF",
  },
  {
    name: "David Suter",
    role: "Founder",
    company: "Suter Coaching",
    quote:
      "Vom ersten Gespräch an spürbar anders. Strukturiert, schnell und mit echtem Fokus auf Resultate.",
    initials: "DS",
  },
  {
    name: "Nadia Bianchi",
    role: "CEO",
    company: "Bianchi Dental",
    quote:
      "Unsere Praxis ist seit dem Relaunch durchgehend ausgebucht. Die Investition hat sich längst gerechnet.",
    initials: "NB",
  },
  {
    name: "Patrick Meier",
    role: "Inhaber",
    company: "Meier Bau AG",
    quote:
      "Persönliche Betreuung auf höchstem Level. Man fühlt sich als Kunde wirklich verstanden.",
    initials: "PM",
  },
  {
    name: "Céline Roth",
    role: "Co-Founderin",
    company: "Roth Studio",
    quote:
      "Die Automatisierungen sparen uns jede Woche Stunden. eCreator hat unser Business effizienter gemacht.",
    initials: "CR",
  },
  {
    name: "Luca Ferrari",
    role: "Geschäftsführer",
    company: "Helvetia Auto",
    quote:
      "Die Reels haben unsere Showrooms gefüllt. So viele Probefahrten hatten wir noch nie.",
    initials: "LF",
  },
  {
    name: "Anita Graf",
    role: "Inhaberin",
    company: "Vitalis Praxis",
    quote:
      "Vom Branding bis zu den Ads – alles greift ineinander. Die Terminanfragen haben sich mehr als verdoppelt.",
    initials: "AG",
  },
  {
    name: "Stefan Huber",
    role: "CEO",
    company: "Nordwind Retail",
    quote:
      "Unser ROAS ist auf 4× gestiegen. Endlich ein Partner, der Performance wirklich versteht.",
    initials: "SH",
  },
  {
    name: "Melanie Vogt",
    role: "Marketing",
    company: "Lakeside Hotel",
    quote:
      "Direktbuchungen rauf, Abhängigkeit von Portalen runter. Genau das, was wir wollten.",
    initials: "MV",
  },
] as const;

export const WHY = [
  "Persönliche Betreuung",
  "Messbare Resultate",
  "Schweizer Agentur",
  "Alles aus einer Hand",
  "Keine Standardlösungen",
  "Fokus auf Wachstum",
] as const;

export const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: URLS.instagram },
  { icon: TikTok, label: "TikTok", href: URLS.tiktok },
  { icon: LinkedIn, label: "LinkedIn", href: URLS.linkedin },
  { icon: YouTube, label: "YouTube", href: URLS.youtube },
] as const;
