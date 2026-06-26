"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, animate, useReducedMotion } from "framer-motion";
import {
  runAnalysis,
  normalizeUrl,
  ANALYSIS_STEPS,
  INTEREST_OPTIONS,
  type AnalysisResult,
} from "@/lib/analysis";
import { buildPayload, submitLead, type LeadInput } from "@/lib/leads";
import AnalysisReport from "@/components/sections/AnalysisReport";
import { LogoMark, SiteShot } from "@/components/SmartImage";
import {
  Sparkles,
  ArrowRight,
  Lock,
  Check,
  Star,
  Shield,
  Cpu,
  Target,
  Search,
  Workflow,
} from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

type Phase = "input" | "analyzing" | "result" | "form" | "done";

const CATEGORY_ICONS: Record<string, (p: { className?: string }) => JSX.Element> = {
  website: Cpu,
  seo: Search,
  social: Sparkles,
  ads: Target,
  competitor: Shield,
  ai: Sparkles,
  funnel: Workflow,
};

const LOCKED_ITEMS = [
  "Vollständige Website-Analyse",
  "Wettbewerber-Analyse",
  "Konkrete SEO-Empfehlungen",
  "Social-Media-Strategie",
  "Ads-Strategie & Beispiel-Creatives",
  "Umsetzungsplan & Roadmap",
  "Neue Website-Vorschau",
  "Social-Ad & Flyer-Beispiele",
];

function scoreColor(score: number) {
  if (score >= 70) return "var(--accent-fg)";
  if (score >= 50) return "#E0A23B";
  return "#E0653B";
}

/* ---------- small building blocks ---------- */

function ScoreBar({ score, delay = 0 }: { score: number; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
      <motion.div
        className="h-full rounded-full"
        style={{ background: scoreColor(score) }}
        initial={reduce ? false : { width: 0 }}
        whileInView={{ width: `${score}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease, delay }}
      />
    </div>
  );
}

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) {
      if (ref.current) ref.current.textContent = String(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.4,
      ease,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [to, reduce]);
  return <span ref={ref}>0</span>;
}

function ScoreCard({
  cat,
  index,
}: {
  cat: AnalysisResult["categories"][number];
  index: number;
}) {
  const reduce = useReducedMotion();
  const Icon = CATEGORY_ICONS[cat.key] ?? Sparkles;
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 22, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease, delay: (index % 3) * 0.08 }}
      className="rounded-[24px] border border-line bg-card p-5"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-accent-fg">
            <Icon className="h-[18px] w-[18px]" />
          </span>
          <span className="text-[0.95rem] font-semibold text-ink">{cat.title}</span>
        </div>
        <span
          className="text-lg font-semibold tabular-nums"
          style={{ color: scoreColor(cat.score) }}
        >
          {cat.score}
        </span>
      </div>
      <div className="mt-3">
        <ScoreBar score={cat.score} />
      </div>
      <ul className="mt-4 space-y-2.5">
        {cat.metrics.map((m, i) => (
          <li key={m.label} className="flex items-center gap-3">
            <span className="w-28 shrink-0 truncate text-[0.78rem] text-muted">
              {m.label}
            </span>
            <span className="flex-1">
              <ScoreBar score={m.score} delay={0.1 + i * 0.05} />
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ---------- main component ---------- */

export default function AiAnalysis() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("input");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [stepIdx, setStepIdx] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const start = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company.trim() || !website.trim()) return;
    setResult(runAnalysis(company, website));
    setStepIdx(0);
    setPhase("analyzing");
  };

  // animated analysis sequence
  useEffect(() => {
    if (phase !== "analyzing") return;
    if (reduce) {
      setPhase("result");
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      if (i >= ANALYSIS_STEPS.length) {
        clearInterval(id);
        setTimeout(() => setPhase("result"), 500);
      } else {
        setStepIdx(i);
      }
    }, 750);
    return () => clearInterval(id);
  }, [phase, reduce]);

  const progress = Math.round(((stepIdx + 1) / ANALYSIS_STEPS.length) * 100);

  return (
    <section
      ref={sectionRef}
      id="ai-analyse"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 pt-28"
    >
      {/* heading */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.06] px-4 py-1.5 text-xs font-medium text-accent-fg">
          <Sparkles className="h-4 w-4" />
          Kostenlose AI Analyse
        </span>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-[2.6rem] sm:leading-[1.1]">
          Kostenlose AI Analyse für dein Unternehmen
        </h2>
        <p className="mt-4 text-balance text-[0.98rem] leading-relaxed text-muted">
          Erfahre in wenigen Sekunden, wie stark deine Website, Sichtbarkeit und
          Neukundengewinnung wirklich sind – und wo du sofort Potenzial liegen lässt.
        </p>
      </div>

      {/* card shell */}
      <div className="relative mx-auto mt-10 overflow-hidden rounded-[28px] border border-line bg-card/70 p-6 backdrop-blur-sm sm:p-10">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[26rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />

        <AnimatePresence mode="wait">
          {/* ---------- INPUT ---------- */}
          {phase === "input" && (
            <motion.form
              key="input"
              onSubmit={start}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease }}
              className="relative mx-auto max-w-xl"
            >
              <div className="flex flex-col gap-3">
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Firmenname"
                  required
                  className="w-full rounded-2xl border border-line bg-bg px-5 py-4 text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent/60"
                />
                <input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Website URL (z. B. deine-firma.ch)"
                  inputMode="url"
                  required
                  className="w-full rounded-2xl border border-line bg-bg px-5 py-4 text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent/60"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-base font-semibold text-black shadow-[0_12px_40px_-10px_rgba(184,255,59,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-8px_rgba(184,255,59,0.7)]"
                >
                  Analyse starten
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
              <p className="mt-4 text-center text-xs text-muted">
                Erste Schnellanalyse · unverbindlich · in wenigen Sekunden
              </p>
            </motion.form>
          )}

          {/* ---------- ANALYZING ---------- */}
          {phase === "analyzing" && (
            <motion.div
              key="analyzing"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto max-w-xl py-6"
            >
              <div className="mb-6 flex items-center justify-between text-sm">
                <span className="font-medium text-ink">
                  Analysiere {result?.domain}
                </span>
                <span className="tabular-nums text-accent-fg">{progress}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease }}
                />
              </div>
              <ul className="mt-7 space-y-3">
                {ANALYSIS_STEPS.map((s, i) => {
                  const done = i < stepIdx;
                  const active = i === stepIdx;
                  return (
                    <li
                      key={s}
                      className={`flex items-center gap-3 text-sm transition-colors ${
                        done || active ? "text-ink" : "text-muted/50"
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                          done
                            ? "border-accent/40 bg-accent/15 text-accent-fg"
                            : active
                            ? "border-accent/40 text-accent-fg"
                            : "border-line text-muted/40"
                        }`}
                      >
                        {done ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : active ? (
                          <span className="h-2 w-2 animate-ping rounded-full bg-accent" />
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        )}
                      </span>
                      {s}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}

          {/* ---------- RESULT (preview + locked) ---------- */}
          {phase === "result" && result && (
            <motion.div
              key="result"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease }}
              className="relative"
            >
              {/* honesty badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-secondary px-3 py-1.5 text-[0.72rem] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-fg" />
                Erste Schnellanalyse · unverbindliche Einschätzung · finaler Report wird
                manuell geprüft
              </div>

              {/* score hero */}
              <div className="flex flex-col items-center gap-6 rounded-[24px] border border-line bg-bg/60 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/5 p-1">
                    <LogoMark
                      sources={result.logoSources}
                      initials={result.company.slice(0, 2).toUpperCase()}
                      size={32}
                    />
                  </span>
                  <div>
                    <div className="text-sm text-muted">{result.company}</div>
                    <div className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                      <CountUp to={result.overall} />
                      <span className="text-muted">/100</span>
                    </div>
                  </div>
                </div>
                <div className="hidden h-12 w-px bg-line sm:block" />
                <div className="grid flex-1 grid-cols-2 gap-4 text-center sm:text-left">
                  <div>
                    <div className="text-xl font-semibold text-accent-fg">
                      {result.opportunities}
                    </div>
                    <div className="text-[0.78rem] text-muted">Wachstumschancen</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-accent-fg">
                      {result.highPotential}
                    </div>
                    <div className="text-[0.78rem] text-muted">
                      Bereiche mit hohem Potenzial
                    </div>
                  </div>
                </div>
              </div>

              {/* real live screenshot of the entered site */}
              <div className="mt-4 overflow-hidden rounded-[24px] border border-line bg-[#0c0c0c]">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="ml-3 flex-1 truncate text-[0.72rem] text-white/40">
                    {result.domain}
                  </span>
                  <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[0.62rem] font-medium text-accent-fg">
                    Live-Screenshot
                  </span>
                </div>
                <SiteShot
                  domain={result.domain}
                  alt={`Screenshot von ${result.domain}`}
                  className="aspect-[16/9] w-full"
                />
              </div>

              {/* quick wins */}
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
                  3 kostenlose Quick Wins
                </h3>
                <ul className="grid gap-3 sm:grid-cols-3">
                  {result.quickWins.map((w) => (
                    <li
                      key={w}
                      className="flex items-start gap-3 rounded-2xl border border-line bg-card p-4 text-[0.88rem] text-ink"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-fg">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              {/* score cards */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {result.categories.map((c, i) => (
                  <ScoreCard key={c.key} cat={c} index={i} />
                ))}
              </div>

              {/* locked report */}
              <div className="relative mt-8 overflow-hidden rounded-[24px] border border-accent/20 bg-bg/60 p-6 sm:p-8">
                <div className="pointer-events-none absolute inset-0 accent-radial opacity-60" />
                <div className="relative grid gap-2 sm:grid-cols-2" aria-hidden>
                  {LOCKED_ITEMS.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-line bg-card/70 px-4 py-3"
                    >
                      <Lock className="h-4 w-4 shrink-0 text-accent-fg" />
                      <span className="select-none text-[0.85rem] text-ink/80 blur-[3px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative mt-7 text-center">
                  <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    Vollständigen Report freischalten
                  </h3>
                  <p className="mx-auto mt-2 max-w-lg text-[0.9rem] leading-relaxed text-muted">
                    Um die komplette Analyse inklusive konkreter
                    Verbesserungsvorschläge zu erhalten, hinterlasse deine
                    Kontaktdaten. Wir senden dir den Report zu und zeigen dir auf
                    Wunsch persönlich, wo das grösste Potenzial liegt.
                  </p>
                  <button
                    onClick={() => {
                      setPhase("form");
                      requestAnimationFrame(() =>
                        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                      );
                    }}
                    className="group mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-7 py-4 text-base font-semibold text-black shadow-[0_12px_40px_-10px_rgba(184,255,59,0.55)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Report freischalten
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ---------- FORM ---------- */}
          {phase === "form" && (
            <LeadForm
              key="form"
              company={company}
              website={website}
              analysis={result}
              onDone={() => setPhase("done")}
              onBack={() => setPhase("result")}
            />
          )}

          {/* ---------- DONE → full unlocked report ---------- */}
          {phase === "done" && result && (
            <AnalysisReport key="report" result={result} company={company} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------- lead form ---------- */

function LeadForm({
  company,
  website,
  analysis,
  onDone,
  onBack,
}: {
  company: string;
  website: string;
  analysis: AnalysisResult | null;
  onDone: () => void;
  onBack: () => void;
}) {
  const reduce = useReducedMotion();
  const [form, setForm] = useState<LeadInput>({
    firstName: "",
    lastName: "",
    company,
    website,
    email: "",
    phone: "",
    interest: INTEREST_OPTIONS[0],
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof LeadInput, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const payload = buildPayload(form, analysis);
    await submitLead(payload);
    setSubmitting(false);
    onDone();
  };

  const field =
    "w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent/60";

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease }}
      className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr]"
    >
      <form onSubmit={submit} className="order-2 lg:order-1">
        <h3 className="text-xl font-semibold tracking-tight text-ink">
          Report freischalten
        </h3>
        <p className="mt-1.5 text-[0.88rem] text-muted">
          Wir senden dir die vollständige Analyse zu.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <input required placeholder="Vorname" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className={field} />
          <input required placeholder="Nachname" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className={field} />
          <input required placeholder="Firma" value={form.company} onChange={(e) => update("company", e.target.value)} className={field} />
          <input required placeholder="Website" value={form.website} onChange={(e) => update("website", e.target.value)} className={field} />
          <input required type="email" placeholder="E-Mail" value={form.email} onChange={(e) => update("email", e.target.value)} className={field} />
          <input required type="tel" placeholder="Telefonnummer" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={field} />
        </div>

        <div className="mt-3">
          <label className="mb-1.5 block text-[0.8rem] text-muted">
            Was interessiert dich am meisten?
          </label>
          <select
            value={form.interest}
            onChange={(e) => update("interest", e.target.value)}
            className={`${field} appearance-none`}
          >
            {INTEREST_OPTIONS.map((o) => (
              <option key={o} value={o} className="bg-card text-ink">
                {o}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-base font-semibold text-black shadow-[0_12px_40px_-10px_rgba(184,255,59,0.55)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Wird gesendet …" : "Report freischalten"}
          {!submitting && (
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </button>

        <p className="mt-4 text-[0.74rem] leading-relaxed text-muted">
          Mit Absenden stimmst du zu, dass eCreator dich bezüglich deiner Analyse
          kontaktieren darf. Deine Daten werden nicht weitergegeben.
        </p>
        <button
          type="button"
          onClick={onBack}
          className="mt-3 text-[0.8rem] text-muted underline-offset-4 hover:text-accent-fg hover:underline"
        >
          ← Zurück zur Vorschau
        </button>
      </form>

      {/* trust column */}
      <aside className="order-1 flex flex-col gap-3 lg:order-2">
        {[
          { icon: Star, label: "5.0 Google Bewertung" },
          { icon: Sparkles, label: "12'500+ Leads generiert" },
          { icon: Check, label: "50+ Projekte umgesetzt" },
          { icon: Shield, label: "Schweizer Agentur" },
          { icon: ArrowRight, label: "Persönliche Analyse" },
        ].map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.label}
              className="flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-3.5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-fg">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-[0.88rem] font-medium text-ink">{t.label}</span>
            </div>
          );
        })}
      </aside>
    </motion.div>
  );
}
