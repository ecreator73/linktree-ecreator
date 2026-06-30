# BUILD-PROMPT V2: „Kostenlose AI Analyse" – als eigene Unterseite, Lead per Mail (ohne Generierung)

> Kopiere alles unterhalb der Linie und gib es im eCreator-Website-Projekt an die KI. Diese Version baut den Funnel als **komplette eigene Unterseite** und sendet beim Freischalten **nur den Lead per E-Mail an eCreator** – es wird NICHTS automatisch generiert (keine Website-Vorschau, keine AI-Bilder, keine Creatives).

---

Du bist ein Senior Full-Stack Engineer & Conversion Designer. Baue eine **eigene, vollständige Unterseite** „Kostenlose AI Analyse" und verlinke sie von der Startseite/Navigation. Stack: nutze das vorhandene Setup (idealerweise Next.js + React + TailwindCSS + Framer Motion). Arbeite sauber, typsicher, mobile-first, **ohne Fake-Behauptungen**.

## 0) Branding / Design-Tokens
- Hintergrund `#050505`, Cards `#101010`, Secondary `#181818`, Text `#FFFFFF`, Secondary-Text `#A3A3A3`.
- **Akzent: Violett `#7C6CF5`** (aus dem eCreator-Logo). Foreground-Akzent dunkel `#9D8DFF`, hell `#5B3FD6`. Text auf Akzent-Flächen: `#0A0A0A`.
- Premium-SaaS-Look (Linear/Vercel/Stripe/Framer): viel Weissraum, Rounded Corners 20–28px, Soft Shadows, dezentes Glassmorphism, flüssige Animationen, Microinteractions, Mouse-Glow. Dark & Light Mode (CSS-Variablen, `.light`/`.dark` am `<html>`, kein Flackern via Inline-Script).

## 1) Eigene Unterseite
- Route/Pfad: **`/kostenlose-analyse`** (eigene, vollständige Seite mit Header/Logo, Hero, der Analyse-App, Trust-Bereich und Footer – nicht nur eine Section).
- Eigene Meta-/OG-Tags & Title („Kostenlose AI Analyse | eCreator"). In Navigation und auf der Startseite verlinken; alle „Kostenlose Analyse"-CTAs zeigen auf diese Unterseite.
- Oben Hero: Headline „Kostenlose AI Analyse für dein Unternehmen", Subline „Erfahre in wenigen Sekunden, wie stark deine Website, Sichtbarkeit und Neukundengewinnung wirklich sind – und wo du sofort Potenzial liegen lässt."

## 2) Flow (State-Machine): `input → analyzing → result → form → done`
**Alles bis und mit dem gesperrten Report bleibt wie gewohnt. Nur nach dem Absenden wird NICHTS generiert.**

### input
- Felder: **Firmenname**, **Website URL**. Button **„Analyse starten"**.
- Kleiner Hinweis: „Erste Schnellanalyse · unverbindlich · in wenigen Sekunden".

### analyzing (animierte Sequenz, Progress-Bar + Schritte, je ~750ms)
„Website wird geprüft …", „SEO wird analysiert …", „Social Media wird gescannt …", „Wettbewerber werden verglichen …", „Ads-Potenzial wird berechnet …", „AI-Sichtbarkeit wird bewertet …", „Verbesserungen werden generiert …". Zeige „Analysiere {domain}" + Prozent.

### result (Vorschau + Locked)
- **Ehrlichkeits-Badge:** „Erste Schnellanalyse · unverbindliche Einschätzung · finaler Report wird manuell geprüft".
- **Score-Hero:** echtes Logo + Firmenname + **Gesamtscore /100** (Count-up), daneben „{N} Wachstumschancen" und „{M} Bereiche mit hohem Potenzial".
- **Echter Live-Screenshot** der eingegebenen Website (siehe §4).
- **3 kostenlose Quick Wins** (aus den schwächsten Kategorien).
- **Score-Cards** je Kategorie (animierte Balken + Sub-Metriken):
  - **Website:** Design, Mobile, Geschwindigkeit, CTA, Vertrauen, Conversion
  - **SEO:** Meta Title, Meta Description, Überschriften, Local SEO, Indexierbarkeit
  - **Social Media:** Instagram, TikTok, LinkedIn, Posting Frequenz, Video Content, Brand Consistency
  - **Ads Potenzial:** Meta Ads, Google Ads, Retargeting, Landingpage Readiness, Funnel Qualität
  - **Wettbewerber:** Sichtbarkeit, Website Qualität, Social Präsenz, Google Präsenz
  - **AI Sichtbarkeit:** AI-Verständlichkeit, Struktur der Leistungen, Trust Signale, AI-Lesbarkeit
  - **Lead Funnel:** Klare CTAs, Formular, Terminbuchung, Follow-Up, CRM Anbindung
- **Gesperrter Report** (geblurrte Locked-Cards mit Schloss-Icon): Vollständige Website-Analyse, Wettbewerber-Analyse, SEO-Empfehlungen, Social-Media-Strategie, Ads-Strategie, Umsetzungsplan, Neue Website-Vorschau, Social-Ad & Flyer-Beispiele.
- Überschrift „Vollständigen Report freischalten" + Text: „Um die komplette Analyse inklusive konkreter Verbesserungsvorschläge zu erhalten, hinterlasse deine Kontaktdaten. Wir senden dir den Report zu und schauen ihn auf Wunsch persönlich mit dir an." + Button **„Report freischalten"** → öffnet das Formular (`form`).

### form (Lead-Formular)
Felder: **Vorname, Nachname, Firma, Website, E-Mail, Telefonnummer** + Dropdown **„Was interessiert dich am meisten?"** (Mehr Kunden gewinnen, Neue Website, Meta Ads, Google Ads, CRM / Automationen, Social Media Content, Recruiting, Alles zusammen).
- **Trust-Spalte** daneben: „5.0 Google Bewertung", „12'500+ Leads generiert", „50+ Projekte umgesetzt", „Schweizer Agentur", „Persönliche Analyse".
- **Datenschutz-Hinweis:** „Mit Absenden stimmst du zu, dass eCreator dich bezüglich deiner Analyse kontaktieren darf. Deine Daten werden nicht weitergegeben."
- Submit-Button: **„Report freischalten"**.

## 3) WICHTIG – Verhalten beim Klick auf „Report freischalten" (Submit)
- Beim Klick wird das **Formular abgesendet und der Lead per E-Mail an eCreator (`info@ecreator.ch`) geschickt**.
- **Es wird NICHTS generiert** – keine neue Website-Vorschau, keine KI-Bilder, keine Ads/Flyer/Creatives. Nur Lead senden.
- Danach (`done`): kurze Bestätigung anzeigen:
  > „Vielen Dank, {Firma}! Wir haben deine Analyse erhalten und melden uns persönlich, um den vollständigen Report gemeinsam mit dir anzuschauen."

### E-Mail-Versand (zuverlässig, mit Fallback)
Sende eine strukturierte E-Mail mit allen Lead-Daten an `info@ecreator.ch`. Wähle die erste verfügbare Variante:
1. **Form-/Mail-Service ohne eigenen Server (empfohlen, einfach):** z. B. **Web3Forms** (`https://api.web3forms.com/submit`, kostenloser `access_key`, sendet direkt an eure Inbox) oder **Formspree**. `POST` mit allen Feldern + `subject: "Neuer AI-Analyse Lead: {Firma}"` und Empfänger `info@ecreator.ch`.
2. **Eigener Server-Endpoint** (falls Server-Runtime vorhanden): `POST /api/analysis-lead`, der per **Resend/SMTP/Nodemailer** an `info@ecreator.ch` mailt.
3. **Fallback:** vorausgefüllte `mailto:info@ecreator.ch`, damit nie ein Lead verloren geht.

Konfiguration über `.env` (z. B. `NEXT_PUBLIC_WEB3FORMS_KEY` oder `LEAD_EMAIL_TO=info@ecreator.ch`, `RESEND_API_KEY`).

### Inhalt der Lead-E-Mail
Betreff: „Neuer AI-Analyse Lead: {Firma}". Body (klar formatiert):
- Name: {Vorname} {Nachname}
- Firma: {Firma}
- Website: {Website}
- E-Mail: {E-Mail}
- Telefon: {Telefon}
- Interesse: {Interesse}
- Gesamtscore (Schnellanalyse): {overall}/100
- Kategorie-Scores: Website/SEO/Social/Ads/Wettbewerber/AI/Lead-Funnel {Werte}
- Quick Wins: {3 Quick Wins}
- Quelle: „Website AI Analyse" · Status: „Neu" · Zeitstempel
So habt ihr alle Infos im Postfach und könnt die Analyse direkt mit der Person besprechen.

## 4) Echte Logos & Screenshots (nur in der Vorschau, vor dem Absenden)
- **Logo** (Fallback-Kette, letzter Fallback = Initialen): `https://logo.clearbit.com/{domain}?size=256` → `https://icons.duckduckgo.com/ip3/{domain}.ico` → `https://www.google.com/s/2/favicons?domain={domain}&sz=128`.
- **Live-Screenshot** (Spinner + Retry; ignoriere Mini-Placeholder): `https://s.wordpress.com/mshots/v1/{encodeURIComponent('https://'+domain)}?w=1280` → Fallback `https://image.thum.io/get/width/1280/https://{domain}`.

## 5) Analyse-Engine (deterministisch & ehrlich)
- Deterministische Schnellanalyse aus `(Firmenname + Domain)` via Seeded-RNG (mulberry32 + String-Hash) – dieselbe Eingabe ⇒ stabile Werte. **Keine zufälligen Fake-Zahlen.** Sub-Metriken ~28–88, Kategorie-Score = Mittelwert, Gesamt = Mittelwert der Kategorien, Quick Wins aus schwächsten Kategorien.
- Überall klar als „Erste Schnellanalyse / unverbindliche Einschätzung" kennzeichnen; finaler Report wird vom Team manuell erstellt.

## 6) Trust / Mobile / SEO
- Trust-Elemente beim Formular (siehe §2). Mobile First: grosse Inputs, klarer Progress, saubere Locked-Cards, einfaches Formular, ggf. Sticky-CTA.
- SEO: eigener Title/Meta/OG für die Unterseite, Schema.org `ProfessionalService` (eCreator, info@ecreator.ch, AggregateRating 5.0). Analytics & Meta-Pixel als Platzhalter vorbereiten.

## 7) Abnahmekriterien (fertig wenn …)
- Eigene Unterseite `/kostenlose-analyse` existiert, von Navigation/Startseite verlinkt.
- Firmenname + Website eingebbar; animierter Analyse-Flow; Scores + Quick Wins; echter Screenshot & Logo in der Vorschau; gesperrter Report.
- Klick auf „Report freischalten" (Submit) **sendet den Lead per E-Mail an `info@ecreator.ch`** (mit allen Daten + Scores + Quick Wins) und zeigt die Danke-Bestätigung.
- **Nach dem Absenden wird NICHTS generiert** (keine Website-Vorschau, keine KI-Bilder, keine Creatives).
- Dark & Light Mode, Mobile sauber, Violett-Akzent `#7C6CF5`, keine Fake-Behauptungen, MVP klar als „Schnellanalyse" markiert.

Baue alles vollständig, teste den Build und integriere die Unterseite in die bestehende Website.
