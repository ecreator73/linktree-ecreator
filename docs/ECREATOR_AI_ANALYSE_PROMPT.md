# BUILD-PROMPT: „Kostenlose AI Analyse" Lead-Funnel für die eCreator-Website

> Kopiere alles unterhalb der Linie und gib es im eCreator-Website-Projekt an die KI (Claude Code / Cursor o. ä.). Der Funnel soll fix & fertig gebaut und in die bestehende Seite integriert werden.

---

Du bist ein Senior Full-Stack Engineer & Conversion Designer. Baue in dieses Projekt eine vollständige, hochwertige **„Kostenlose AI Analyse"-Lead-Funnel-Section** ein und integriere sie als eigene Section auf der Startseite. Arbeite sauber, typsicher, mobile-first und **ohne Fake-Behauptungen**. Wenn das Projekt Next.js + React + TailwindCSS + Framer Motion nutzt, verwende das. Falls ein anderer Stack vorliegt, übertrage die Logik 1:1 sinngemäss (gleiche UX, gleiche Texte, gleiche Datenstrukturen).

## 0) Branding / Design-Tokens
- Hintergrund `#050505`, Cards `#101010`, Secondary `#181818`, Text `#FFFFFF`, Secondary-Text `#A3A3A3`
- **Akzent: Violett `#7C6CF5`** (Periwinkle, aus dem eCreator-Logo). Foreground-Akzent auf Dunkel `#9D8DFF`, auf Hell `#5B3FD6`. Text auf Akzent-Flächen: `#0A0A0A` (schwarz, hoher Kontrast auf dem hellen Violett).
- Sehr viel Weissraum, Rounded Corners 20–28px, Soft Shadows, dezentes Glassmorphism, flüssige Animationen, Microinteractions, Mouse-Glow. Premium-SaaS-Look (Inspiration: Linear, Vercel, Stripe, Framer).
- Dark & Light Mode unterstützen (CSS-Variablen für die Tokens, `.light`/`.dark` Klasse am `<html>`, kein Flackern beim Laden via Inline-Script).

## 1) Section-Aufbau & Flow (State-Machine)
Eine Section mit `id="ai-analyse"`. Zustände: `input → analyzing → result → form → done`.

**Heading:** „Kostenlose AI Analyse für dein Unternehmen"
**Subline:** „Erfahre in wenigen Sekunden, wie stark deine Website, Sichtbarkeit und Neukundengewinnung wirklich sind – und wo du sofort Potenzial liegen lässt."

### input
- Felder: **Firmenname**, **Website URL**. Button **„Analyse starten"**.
- Hinweis klein: „Erste Schnellanalyse · unverbindlich · in wenigen Sekunden".

### analyzing (animierte Sequenz)
Progress-Bar + diese Schritte nacheinander (je ~750ms, Häkchen wenn erledigt, Spinner-Punkt aktiv):
1. „Website wird geprüft …" 2. „SEO wird analysiert …" 3. „Social Media wird gescannt …" 4. „Wettbewerber werden verglichen …" 5. „Ads-Potenzial wird berechnet …" 6. „AI-Sichtbarkeit wird bewertet …" 7. „Verbesserungen werden generiert …"
Zeige „Analysiere {domain}" + Prozent.

### result (Vorschau + Locked)
- **Ehrlichkeits-Badge:** „Erste Schnellanalyse · unverbindliche Einschätzung · finaler Report wird manuell geprüft".
- **Score-Hero:** echtes Logo + Firmenname + **Gesamtscore /100** (Count-up-Animation), daneben „{N} Wachstumschancen" und „{M} Bereiche mit hohem Potenzial".
- **Live-Screenshot** der eingegebenen Website (siehe §4).
- **3 kostenlose Quick Wins** (aus den schwächsten Kategorien abgeleitet), z. B.: „CTA auf der Startseite klarer platzieren", „Social Proof stärker sichtbar machen", „Dedizierte Landingpage für Ads erstellen".
- **Score-Cards** für jede Kategorie (animierte Balken, Sub-Metriken):
  - **Website:** Design, Mobile, Geschwindigkeit, CTA, Vertrauen, Conversion
  - **SEO:** Meta Title, Meta Description, Überschriften, Local SEO, Indexierbarkeit
  - **Social Media:** Instagram, TikTok, LinkedIn, Posting Frequenz, Video Content, Brand Consistency
  - **Ads Potenzial:** Meta Ads, Google Ads, Retargeting, Landingpage Readiness, Funnel Qualität
  - **Wettbewerber:** Sichtbarkeit, Website Qualität, Social Präsenz, Google Präsenz
  - **AI Sichtbarkeit:** AI-Verständlichkeit, Struktur der Leistungen, Trust Signale, AI-Lesbarkeit
  - **Lead Funnel:** Klare CTAs, Formular, Terminbuchung, Follow-Up, CRM Anbindung
- **Gesperrter Report** (geblurrte Locked-Cards mit Schloss-Icon): Vollständige Website-Analyse, Wettbewerber-Analyse, SEO-Empfehlungen, Social-Media-Strategie, Ads-Strategie & Beispiel-Creatives, Umsetzungsplan, Neue Website-Vorschau, Social-Ad & Flyer-Beispiele.
- Überschrift „Vollständigen Report freischalten" + Text + Button **„Report freischalten"** → wechselt zu `form`.

### form (Lead-Formular)
Felder: **Vorname, Nachname, Firma, Website, E-Mail, Telefonnummer** + Dropdown **„Was interessiert dich am meisten?"** mit Optionen: Mehr Kunden gewinnen, Neue Website, Meta Ads, Google Ads, CRM / Automationen, Social Media Content, Recruiting, Alles zusammen. Button **„Report freischalten"**.
- **Trust-Spalte** daneben: „5.0 Google Bewertung", „12'500+ Leads generiert", „50+ Projekte umgesetzt", „Schweizer Agentur", „Persönliche Analyse".
- **Datenschutz-Hinweis** unter dem Formular: „Mit Absenden stimmst du zu, dass eCreator dich bezüglich deiner Analyse kontaktieren darf. Deine Daten werden nicht weitergegeben."
- Nach Absenden: Lead speichern (siehe §6) → Zustand `done`.

### done → vollständiger Report
Statt eines simplen Danke wird der **komplette, freigeschaltete Report** angezeigt (siehe §5) – die Belohnung für die Kontaktdaten.

## 2) Analyse-Engine (deterministisch & ehrlich)
- Erzeuge eine **deterministische Schnellanalyse** aus `(Firmenname + Domain)` via Seeded-RNG (z. B. mulberry32 + String-Hash), damit dieselbe Eingabe stabil dieselben Werte liefert. **Keine zufälligen Fake-Zahlen pro Render.**
- Sub-Metriken realistisch im Bereich ~28–88 (lässt klar Luft nach oben). Kategorie-Score = Mittelwert der Sub-Metriken. Gesamtscore = Mittelwert der Kategorien.
- Quick Wins aus den schwächsten Kategorien.
- **Überall klar als „Erste Schnellanalyse / unverbindliche Einschätzung" kennzeichnen.** Der finale Report wird vom Team manuell geprüft. Nichts behaupten, das nicht stimmt.

## 3) Echte Logos
Logo-Quellen in dieser Reihenfolge (Fallback-Kette im `<img onError>`), letzter Fallback = typografische Initialen:
1. `https://logo.clearbit.com/{domain}?size=256`
2. `https://icons.duckduckgo.com/ip3/{domain}.ico`
3. `https://www.google.com/s/2/favicons?domain={domain}&sz=128`

## 4) Echte Website-Screenshots
Live-Screenshot der eingegebenen Domain, mehrere kostenlose Provider mit Fallback + Lade-Spinner/Retry (mShots braucht ein paar Sekunden):
1. `https://s.wordpress.com/mshots/v1/{encodeURIComponent('https://'+domain)}?w=1280` (mit `&r={retry}` neu anstossen)
2. Fallback: `https://image.thum.io/get/width/1280/https://{domain}`
Ignoriere Mini-Placeholder (`naturalWidth < 200`). Nach finalem Fehler dezenter Hinweis statt Crash.

## 5) Vollständiger Report (nach Freischaltung) – mit ECHTEN Bildern
Zeige zuoberst ein Danke + **Disclaimer**: „Alle folgenden Elemente sind unverbindliche Vorschläge / Mockups – noch nicht umgesetzt." Dann:

1. **Deine aktuelle Website** – echter Live-Screenshot (§4) im Browser-Rahmen.
2. **Neue Website – Live-Vorschau:** eine **echte, live gerenderte Redesign-Seite** (eigene Route `/vorschau?c={Firma}&d={domain}`), eingebettet als **skaliertes Live-iframe** (Desktop-Layout in 1280px rendern, per `transform: scale()` in die Card einpassen, ResizeObserver) + Button „In neuem Tab öffnen". Die Vorschau-Seite nutzt echtes Logo + echten Screenshot + generierte Headline/CTA im eCreator-Stil (dunkel, Violett-Akzent).
3. **Social Ads – KI-generiert:** 3 Karten (Meta 1:1, Instagram Story 9:16, TikTok 9:16). Hintergrund = **echtes KI-generiertes Bild** (siehe §7), darüber echtes Logo + Headline + CTA (dunkler Scrim für Lesbarkeit).
4. **KI-generierte Bildkonzepte:** 3 weitere AI-Bilder (Brand-Mood, Office, Hero-Visual) – klar als KI-generiert gekennzeichnet.
5. **Flyer / Print-Creative:** A4-Karte mit echtem Logo, Headline, Angebot, CTA, Kontakt.
6. **SEO-Vorschlag:** Google-Snippet-Mockup (optimierter Meta Title + Description) + Keyword-Chips.
7. **CRM & Automation:** Flow Lead → CRM → Follow-up → Termin → Kunde.
8. **Wettbewerber:** Platzhalter-Hinweis „wird im persönlichen Report ergänzt".
9. **Abschluss-CTA:** „Sollen wir das für {Firma} umsetzen?" → Termin/Strategiegespräch buchen.

Generiere alle Texte (Headline, Sub, Angebot, SEO, Keywords, Ad-Copy) **deterministisch** aus Firmenname/Domain (z. B. „Mehr Kunden für {Brand}.", „{Brand} – sichtbar, digital, erfolgreich."). Markennamen-Suffixe (GmbH/AG/Inc) für die Anzeige entfernen.

## 6) Lead-Erfassung / CRM (mit ehrlichen Fallbacks)
Speichere den Lead mit abgestufter Strategie (so geht nie ein Lead verloren):
1. **Supabase direkt** (wenn `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` gesetzt): `POST {url}/rest/v1/leads` mit Headern `apikey`, `Authorization: Bearer {anon}`, `Prefer: return=minimal`.
2. **Webhook** (`NEXT_PUBLIC_LEAD_ENDPOINT`): `POST` JSON.
3. **Fallback:** vorausgefüllte `mailto:info@ecreator.ch` mit allen Lead-Daten.

**Lead-Payload:** Vorname, Nachname, Firma, Website, E-Mail, Telefon, Interesse, `source: "Website AI Analyse"`, `status: "Neu"`, `overall_score`, `scores` (pro Kategorie), `quick_wins`, `analysis_raw`, `created_at`.

**Supabase-Schema (SQL) mitliefern:** Tabelle `leads` (siehe Felder oben) + RLS-Policy „anon darf INSERT". Trigger `after insert on leads`, der automatisch
- eine Aufgabe in `tasks` anlegt: Titel „AI Analyse Lead kontaktieren: {Firma}", Status „Offen", `due_at = now()+1 day`,
- und eine `notifications`-Zeile „Neuer AI-Analyse Lead: {Firma} ({E-Mail})" erstellt.
`tasks`/`notifications` bleiben intern (RLS ohne anon-Zugriff, Lesen via Service-Role/Dashboard).

**Optional (Server-Variante):** Falls ein Server-Runtime vorhanden ist, zusätzlich Route `POST /api/analysis-lead` bauen, die mit `SUPABASE_SERVICE_ROLE_KEY` serverseitig in `leads` schreibt; Frontend dann via `NEXT_PUBLIC_LEAD_ENDPOINT=/api/analysis-lead`.

## 7) Echte KI-Bilder (keylos, client-seitig)
Nutze **Pollinations** (kein API-Key, kein Server nötig):
`https://image.pollinations.ai/prompt/{encodeURIComponent(prompt)}?width={w}&height={h}&seed={n}&nologo=true&model=flux`
- Lade-Spinner „KI-Bild wird generiert …", Fallback-Gradient bei Fehler.
- Prompts aus Firmenname bauen, z. B. „professional {platform} advertising creative for a {brand} business, premium modern marketing photography, dramatic lighting, copy space", „premium brand mood image for {brand}, dark tones with violet purple accents".
- (Optional, höhere Qualität: serverseitige Bild-API wie OpenAI gpt-image / Replicate hinter einem API-Key – als Aktivierungs-Option vorsehen, aber Pollinations ist der Default ohne Key.)

## 8) Trust / Mobile / SEO
- Trust-Elemente direkt beim Formular (siehe §1 form).
- Mobile First: grosse Inputs, klare Progress, saubere Locked-Cards, einfaches Formular.
- SEO: Schema.org `ProfessionalService` (eCreator, info@ecreator.ch, AggregateRating 5.0), passende Meta/OG-Tags, Analytics & Meta-Pixel als Platzhalter vorbereiten.

## 9) Integration
- Section prominent auf der Startseite einbauen (z. B. nach dem Hero/Trust-Bereich). Alle „Kostenlose Analyse"-CTAs der Seite sollen per Anker zu `#ai-analyse` springen.
- Env-Variablen dokumentieren (`.env.example`): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_LEAD_ENDPOINT` (alle optional; ohne sie greift der Mail-Fallback).

## 10) Abnahmekriterien (fertig wenn …)
- Section auf der Startseite, Firmenname + Website eingebbar.
- Animierter Analyse-Flow funktioniert, Scores + Quick Wins werden angezeigt.
- Gesperrter Report erscheint; Formular funktioniert und speichert den Lead (Supabase **oder** Webhook **oder** Mail-Fallback); bei Supabase werden Follow-up-Task + Sales-Notification per Trigger erstellt.
- Nach Absenden erscheint der **vollständige Report** mit **echtem Screenshot**, **echtem Logo**, **echter Live-Website-Vorschau (iframe)** und **echten KI-Bildern**.
- Dark & Light Mode, Mobile sauber, Violett-Akzent `#7C6CF5`, keine Fake-Behauptungen, MVP klar als „Schnellanalyse" markiert.

Baue alles vollständig, teste den Build und integriere es direkt in die bestehende Seite.
