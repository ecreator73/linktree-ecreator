# eCreator — Link-in-Bio Landingpage

Eine hochwertige Premium Brand Experience als Link-in-Bio Seite für **eCreator**.
Kein Linktree-Klon — eine kuratierte, animierte Landingpage im Stil von Apple,
Linear, Stripe, Vercel, Framer & Raycast.

> **We create customers, not clicks.**

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (Design Tokens für die eCreator Farbwelt)
- **Framer Motion** (Load-, Scroll- & Microinteraktionen)
- `next/font` (Inter), `next/image` (optimierte Bilder, Lazy Loading)
- SEO: Metadata API, Open Graph, Twitter Cards, JSON-LD (Schema.org)

## Design

| Token        | Wert      | Verwendung                                   |
| ------------ | --------- | -------------------------------------------- |
| `bg`         | `#050505` | Hintergrund                                  |
| `card`       | `#101010` | Cards                                        |
| `secondary`  | `#181818` | Sekundärflächen                              |
| `ink`        | `#FFFFFF` | Text                                         |
| `muted`      | `#A3A3A3` | Sekundärtext                                 |
| `accent`     | `#B8FF3B` | Neon Lime — nur Icons, Checks, Hover, Akzente |

Rounded Corners (24–28px), Soft Shadows, sehr dezentes Glassmorphism, langsam
driftende grüne Partikel, Mouse-Glow und Floating Shapes im Hintergrund.

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktionsbuild
npm run start    # Produktionsserver
```

## Inhalte & Links anpassen

Alle Texte, Cards, Case Studies, Leistungen, Testimonials und URLs liegen
zentral in **`lib/data.ts`**. Echte Ziel-URLs im `URLS`-Objekt eintragen
(Analyse, Termin, Social-Profile, WhatsApp-Nummer …).

Das Logo liegt unter `public/ecreator-logo.png` (transparent aufbereitet).

## Kostenlose AI Analyse (Lead Funnel)

Die Section `components/sections/AiAnalysis.tsx` ist der zentrale Lead-Magnet:
Eingabe (Firma + Website) → animierte Analyse-Sequenz → Scores & Quick Wins →
gesperrter Report → Lead-Formular → Success.

**Ehrlichkeit:** Die Analyse ist eine als solche gekennzeichnete *Erste
Schnellanalyse* (deterministische Einschätzung aus der Eingabe in
`lib/analysis.ts`, echtes Logo via Favicon-Service) – keine erfundenen
Messwerte. Der vollständige Report wird vom Team manuell geprüft.

**Lead-Erfassung** (`lib/leads.ts`) mit abgestuften Fallbacks:
1. **Supabase** direkt aus dem Browser, wenn `NEXT_PUBLIC_SUPABASE_URL` +
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` gesetzt sind (Schema:
   `supabase/schema.sql` – Tabelle `leads` + RLS-Insert + Trigger, der
   automatisch einen Follow-up-Task und eine Sales-Notification anlegt).
2. **Webhook** über `NEXT_PUBLIC_LEAD_ENDPOINT` (z. B. die Route-Vorlage
   `activation/analysis-lead.route.ts` auf einem Server-Runtime / Vercel).
3. **Fallback:** vorausgefüllte E-Mail an `info@ecreator.ch` – so geht nie
   ein Lead verloren, auch ohne Backend.

Env-Variablen siehe `.env.example`. Auf statischem GitHub Pages funktioniert
Variante 1 (Supabase direkt) und 3 (Mail); für `/api/analysis-lead` (Variante 2)
`output: "export"` entfernen und auf einem Server-Runtime deployen.

## Analytics / Meta Pixel

Platzhalter vorbereitet in `app/layout.tsx`. IDs eintragen und das
`next/script`-Snippet aktivieren, um Meta Pixel / Analytics scharf zu schalten.

## Struktur

```
app/
  layout.tsx        # Metadata, SEO, Schema.org, Fonts
  page.tsx          # Komposition aller Sektionen
  globals.css       # Tokens, Utilities, Reduced-Motion
components/
  Background.tsx    # Partikel, Floating Shapes, Mouse-Glow (Canvas)
  Reveal.tsx        # Scroll-Reveal Wrapper
  Logo.tsx          # Original eCreator Logo
  icons.tsx         # Inline-SVG Icon-Set
  ui/SectionHeading.tsx
  sections/         # Hero, LinkCards, CaseStudies, Services,
                    # Testimonials, Why, Socials, FinalCTA, Footer
lib/data.ts         # Zentrale Inhalte & URLs
```
