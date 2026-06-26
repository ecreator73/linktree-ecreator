"use client";

import { motion, useReducedMotion } from "framer-motion";
import Logo from "@/components/Logo";
import { Star, ArrowRight } from "@/components/icons";
import { URLS } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};

const pills = ["AI Websites", "CRM Systeme", "Performance Ads", "Automatisierung"];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <header className="relative mx-auto flex max-w-2xl flex-col items-center px-6 pt-20 text-center sm:pt-28">
      {/* Logo */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.92, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease }}
        className="w-[78vw] max-w-[420px]"
      >
        <Logo priority width={420} className="h-auto w-full" />
      </motion.div>

      <motion.div
        variants={container}
        initial={reduce ? false : "hidden"}
        animate="show"
        className="mt-12 flex flex-col items-center"
      >
        {/* Status badge */}
        <motion.div
          variants={item}
          className="glass hairline mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Verfügbar für neue Projekte
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-balance text-[2.1rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl"
        >
          Wir bauen digitale Systeme,
          <br className="hidden sm:block" /> die Unternehmen{" "}
          <span className="text-accent-fg">wachsen</span> lassen.
        </motion.h1>

        {/* Service pills */}
        <motion.ul
          variants={item}
          className="mt-7 flex flex-wrap items-center justify-center gap-2"
        >
          {pills.map((p) => (
            <li
              key={p}
              className="rounded-full border border-line bg-secondary/60 px-3.5 py-1.5 text-[0.8rem] text-muted"
            >
              {p}
            </li>
          ))}
        </motion.ul>

        {/* Lead text */}
        <motion.p
          variants={item}
          className="mt-7 max-w-md text-balance text-[0.98rem] leading-relaxed text-muted"
        >
          Wir entwickeln keine Standard-Webseiten. Wir bauen Systeme, die mehr
          Kunden, mehr Umsatz und planbares Wachstum ermöglichen.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-9 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href={URLS.analyse}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-[0.95rem] font-semibold text-black shadow-[0_10px_40px_-10px_rgba(124,108,245,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-8px_rgba(124,108,245,0.65)]"
          >
            Kostenlose Analyse
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={URLS.termin}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-line-strong bg-overlay px-6 py-3.5 text-[0.95rem] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-overlay-strong"
          >
            Termin buchen
          </a>
        </motion.div>

        {/* Trust row */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 text-sm sm:flex-row sm:gap-7"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} filled className="h-4 w-4 text-accent-fg" />
              ))}
            </div>
            <span className="font-semibold text-ink">5.0</span>
            <span className="text-muted">Google</span>
          </div>
          <span className="hidden h-4 w-px bg-line-strong sm:block" />
          <div className="text-muted">
            <span className="font-semibold text-ink">12&apos;000+</span> Leads
            generiert
          </div>
          <span className="hidden h-4 w-px bg-line-strong sm:block" />
          <div className="text-muted">
            <span className="font-semibold text-ink">Meta &amp; Google</span>{" "}
            Partner
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
