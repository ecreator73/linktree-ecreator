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

export const CASE_STUDIES = [
  {
    client: "Swiss Immobilien",
    metric: "+230%",
    label: "mehr Anfragen",
    tag: "Real Estate",
    accentFrom: "#B8FF3B",
  },
  {
    client: "Spitex",
    metric: "+178%",
    label: "qualifizierte Leads",
    tag: "Healthcare",
    accentFrom: "#9FE6FF",
  },
  {
    client: "Finanzberater",
    metric: "+310%",
    label: "Conversions",
    tag: "Finance",
    accentFrom: "#FFD66B",
  },
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
