"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { AnalysisResult } from "@/lib/analysis";
import { generateCreatives } from "@/lib/report";
import { URLS } from "@/lib/data";
import { LogoMark, SiteShot } from "@/components/SmartImage";
import ScaledFrame from "@/components/ScaledFrame";
import {
  Check,
  ArrowRight,
  Globe,
  Search,
  Database,
  Calendar,
  Sparkles,
  Workflow,
} from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

/* brand mark: real company logo (Clearbit → favicon) with initials fallback */
function BrandMark({
  result,
  size = 28,
}: {
  result: AnalysisResult;
  size?: number;
}) {
  const initials = result.company
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return <LogoMark sources={result.logoSources} initials={initials} size={size} />;
}

function Block({
  eyebrow,
  title,
  children,
  delay = 0,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 26, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease, delay }}
      className="mt-10"
    >
      <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent-fg">
        <span className="h-1 w-1 rounded-full bg-accent-fg" />
        {eyebrow}
      </div>
      <h4 className="mb-5 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {title}
      </h4>
      {children}
    </motion.div>
  );
}

export default function AnalysisReport({
  result,
  company,
}: {
  result: AnalysisResult;
  company: string;
}) {
  const reduce = useReducedMotion();
  const c = generateCreatives(result);
  const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const previewUrl = `${BP}/vorschau/?c=${encodeURIComponent(
    result.company
  )}&d=${encodeURIComponent(result.domain)}`;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
      className="relative"
    >
      {/* thank-you + unlocked banner */}
      <div className="flex flex-col items-center gap-3 rounded-[24px] border border-accent/30 bg-accent/[0.06] p-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent-fg">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          Report freigeschaltet – danke, {company}!
        </h3>
        <p className="max-w-xl text-[0.9rem] leading-relaxed text-muted">
          Hier sind erste konkrete Vorschläge für {c.brand}. Unser Team meldet
          sich persönlich mit dem vollständigen, individuell ausgearbeiteten Report.
        </p>
      </div>

      {/* disclaimer */}
      <div className="mt-4 rounded-2xl border border-line bg-secondary/60 px-4 py-3 text-center text-[0.78rem] text-muted">
        ⚠︎ Alle folgenden Elemente sind <span className="text-ink">unverbindliche
        Vorschläge / Mockups</span> – sie wurden noch nicht umgesetzt und dienen
        als Inspiration für dein Wachstum.
      </div>

      {/* ---------- 0. CURRENT WEBSITE (real screenshot) ---------- */}
      <Block eyebrow="Analyse" title="Deine aktuelle Website">
        <div className="overflow-hidden rounded-[20px] border border-line bg-[#0c0c0c]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[0.72rem] text-white/40">
              {result.domain}
            </span>
          </div>
          <SiteShot
            domain={result.domain}
            alt={`Screenshot von ${result.domain}`}
            className="aspect-[16/10] w-full"
          />
        </div>
        <p className="mt-3 text-center text-[0.78rem] text-muted">
          Live-Screenshot deiner aktuellen Website – Basis unserer Analyse.
        </p>
      </Block>

      {/* ---------- 1. NEW WEBSITE PREVIEW (live, real page) ---------- */}
      <Block eyebrow="Vorschlag 01" title="Neue Website – Live-Vorschau">
        <div className="overflow-hidden rounded-[20px] border border-line bg-[#0c0c0c]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[0.72rem] text-white/40">
              {result.domain} · neues Design
            </span>
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-md bg-accent px-3 py-1 text-[0.72rem] font-semibold text-black sm:inline-flex"
            >
              In neuem Tab öffnen <ArrowRight className="h-3 w-3" />
            </a>
          </div>
          <ScaledFrame src={previewUrl} className="bg-[#070707]" />
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-[0.78rem] text-muted">
            Echte, live gerenderte Website-Vorschau mit deinem Logo – interaktiv.
          </p>
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 text-[0.8rem] font-semibold text-accent-fg hover:underline"
          >
            Vorschau öffnen <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Block>

      {/* ---------- 2. SOCIAL ADS ---------- */}
      <Block eyebrow="Vorschlag 02" title="Social Ads – Beispiele" delay={0.05}>
        <div className="grid gap-4 sm:grid-cols-3">
          {c.ads.map((ad) => (
            <div
              key={ad.platform}
              className="overflow-hidden rounded-[20px] border border-line"
            >
              <div
                className={`relative ${
                  ad.ratio === "1:1" ? "aspect-square" : "aspect-[9/16]"
                }`}
                style={{
                  background: `linear-gradient(160deg, hsl(${ad.hue} 55% 20%), #0b0b0b 75%)`,
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(184,255,59,0.18),transparent_55%)]" />
                <div className="absolute inset-0 flex flex-col p-4">
                  <div className="flex items-center gap-2">
                    <BrandMark result={result} size={22} />
                    <span className="text-[0.72rem] font-medium text-white/80">
                      {c.brand}
                    </span>
                    <span className="ml-auto rounded-full bg-black/40 px-2 py-0.5 text-[0.6rem] text-white/60">
                      {ad.platform}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="text-base font-semibold leading-snug text-white">
                      {ad.headline}
                    </div>
                    <p className="mt-1 text-[0.72rem] leading-snug text-white/60">
                      {ad.body}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-[0.72rem] font-semibold text-black">
                      {ad.cta}
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* ---------- 3. FLYER ---------- */}
      <Block eyebrow="Vorschlag 03" title="Flyer / Print-Creative" delay={0.05}>
        <div className="flex justify-center">
          <div className="relative aspect-[1/1.414] w-full max-w-[300px] overflow-hidden rounded-[20px] border border-line bg-[#0c0c0c] p-7">
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-2.5">
                <BrandMark result={result} size={30} />
                <span className="text-sm font-semibold text-white">{c.brand}</span>
              </div>
              <div className="mt-10">
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent">
                  {c.flyer.kicker}
                </span>
                <h5 className="mt-3 text-2xl font-semibold leading-tight text-white">
                  {c.flyer.headline}
                </h5>
              </div>
              <div className="mt-auto">
                <div className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-center text-sm font-semibold text-accent">
                  {c.flyer.offer}
                </div>
                <div className="mt-3 text-center text-[0.72rem] text-white/50">
                  {result.domain} · info@ecreator.ch
                </div>
              </div>
            </div>
          </div>
        </div>
      </Block>

      {/* ---------- 4. SEO ---------- */}
      <Block eyebrow="Vorschlag 04" title="SEO – optimierter Auftritt" delay={0.05}>
        <div className="rounded-[20px] border border-line bg-card p-6">
          <div className="flex items-center gap-2 text-[0.78rem] text-muted">
            <Search className="h-4 w-4 text-accent-fg" /> Google-Vorschau
          </div>
          <div className="mt-4 rounded-xl border border-line bg-bg/60 p-4">
            <div className="flex items-center gap-2 text-[0.72rem] text-muted">
              <BrandMark result={result} size={16} />
              {result.domain}
            </div>
            <div className="mt-1 text-[1.05rem] font-medium text-accent-fg">
              {c.seo.title}
            </div>
            <p className="mt-1 text-[0.82rem] leading-snug text-muted">
              {c.seo.description}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {c.seo.keywords.map((k) => (
              <span
                key={k}
                className="rounded-full border border-line bg-secondary px-3 py-1 text-[0.74rem] text-ink"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      </Block>

      {/* ---------- 5. CRM FLOW ---------- */}
      <Block eyebrow="Vorschlag 05" title="CRM & Automation – dein Lead-Flow" delay={0.05}>
        <div className="grid gap-3 sm:grid-cols-5">
          {c.crmSteps.map((s, i) => {
            const Icon = [Sparkles, Database, Workflow, Calendar, Check][i] ?? Sparkles;
            return (
              <div key={s.label} className="relative">
                <div className="flex h-full flex-col gap-2 rounded-2xl border border-line bg-card p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent-fg">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-sm font-semibold text-ink">{s.label}</span>
                  <span className="text-[0.74rem] text-muted">{s.desc}</span>
                </div>
                {i < c.crmSteps.length - 1 && (
                  <ArrowRight className="absolute -right-2.5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-muted sm:block" />
                )}
              </div>
            );
          })}
        </div>
      </Block>

      {/* ---------- 6. COMPETITORS ---------- */}
      <Block eyebrow="Vorschlag 06" title="Wettbewerber-Analyse" delay={0.05}>
        <div className="flex items-center gap-3 rounded-[20px] border border-line bg-card p-6 text-[0.88rem] text-muted">
          <Globe className="h-5 w-5 shrink-0 text-accent-fg" />
          Die detaillierte Wettbewerberanalyse (Sichtbarkeit, Website-Qualität,
          Social- & Google-Präsenz) ergänzen wir individuell in deinem
          persönlichen Report.
        </div>
      </Block>

      {/* final CTA */}
      <div className="mt-10 flex flex-col items-center gap-4 rounded-[24px] border border-accent/20 bg-bg/60 p-8 text-center">
        <h4 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          Sollen wir das für {c.brand} umsetzen?
        </h4>
        <p className="max-w-md text-[0.9rem] text-muted">
          Buche ein kostenloses Strategiegespräch – wir zeigen dir, wie wir diese
          Vorschläge in echtes Wachstum verwandeln.
        </p>
        <a
          href={URLS.termin}
          className="group inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-4 text-base font-semibold text-black transition-all duration-300 hover:-translate-y-0.5"
        >
          Strategiegespräch buchen
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}
