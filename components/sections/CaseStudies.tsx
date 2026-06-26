"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { CASE_STUDIES, URLS } from "@/lib/data";
import { ArrowRight } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;
const INITIAL = 6;

// minimal upward growth sparkline for the card footer
function Spark() {
  const pts = [40, 36, 38, 30, 24, 19, 11, 6];
  const d = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * 100} ${p}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 44" preserveAspectRatio="none" className="h-10 w-full">
      <motion.path
        d={d}
        fill="none"
        stroke="var(--accent-fg)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease }}
      />
    </svg>
  );
}

export default function CaseStudies() {
  const reduce = useReducedMotion();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? CASE_STUDIES : CASE_STUDIES.slice(0, INITIAL);

  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-6 pt-28">
      <SectionHeading
        align="center"
        eyebrow="Case Studies"
        title="Resultate, die für sich sprechen."
        subtitle="Über 29 Branchen, ein Anspruch: messbares Wachstum. Eine Auswahl unserer Projekte."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((cs, i) => (
          <motion.a
            key={cs.client}
            href={URLS.caseStudies}
            target="_blank"
            rel="noopener noreferrer"
            initial={reduce ? false : { opacity: 0, y: 26, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, ease, delay: (i % 3) * 0.08 }}
            whileHover={reduce ? undefined : { y: -6 }}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-[28px] border border-line bg-card p-6 transition-colors duration-300 hover:border-accent/40"
          >
            <span className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/10" />

            <div className="flex items-center justify-between">
              <span className="rounded-full border border-line bg-secondary px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-muted">
                {cs.industry}
              </span>
              <ArrowRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-fg" />
            </div>

            <div className="relative">
              <div className="text-[2.6rem] font-semibold leading-none tracking-tight text-accent-fg">
                {cs.metric}
              </div>
              <div className="mt-2 text-sm text-muted">
                {cs.label} · <span className="text-ink/70">{cs.period}</span>
              </div>
            </div>

            <Spark />

            <div className="mt-auto border-t border-line pt-4 text-[0.95rem] font-medium text-ink">
              {cs.client}
            </div>
          </motion.a>
        ))}
      </div>

      {!showAll && CASE_STUDIES.length > INITIAL && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 rounded-2xl border border-line bg-card px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
          >
            Alle {CASE_STUDIES.length} Case Studies anzeigen
            <ArrowRight className="h-4 w-4 text-accent-fg" />
          </button>
        </div>
      )}
    </section>
  );
}
