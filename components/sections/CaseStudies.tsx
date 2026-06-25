"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { CASE_STUDIES } from "@/lib/data";
import { ArrowRight } from "@/components/icons";
import { useTheme } from "@/lib/useTheme";

const ease = [0.22, 1, 0.36, 1] as const;

// Tiny browser-window mockup with an animated growth chart.
function Mockup({ accent }: { accent: string }) {
  const pts = [38, 34, 36, 30, 26, 22, 14, 8];
  const path = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * 100} ${p}`)
    .join(" ");
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-[#0c0c0c]">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
      </div>
      <div className="relative h-28 px-3 py-3">
        <svg
          viewBox="0 0 100 44"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id={`g-${accent}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d={`${path} L 100 44 L 0 44 Z`}
            fill={`url(#g-${accent})`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.path
            d={path}
            fill="none"
            stroke={accent}
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease }}
          />
        </svg>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const reduce = useReducedMotion();
  const theme = useTheme();
  return (
    <section id="case-studies" className="mx-auto max-w-5xl px-6 pt-28">
      <SectionHeading
        align="center"
        eyebrow="Case Studies"
        title="Echte Zahlen. Echtes Wachstum."
        subtitle="Keine leeren Versprechen – nur Resultate, die sich messen lassen."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.map((cs, i) => (
          <motion.article
            key={cs.client}
            initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: i * 0.1 }}
            whileHover={reduce ? undefined : { y: -6 }}
            className="group relative flex flex-col gap-5 rounded-[28px] border border-line bg-card p-6 transition-colors duration-300 hover:border-accent/40"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-line bg-secondary px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-muted">
                {cs.tag}
              </span>
              <ArrowRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-fg" />
            </div>

            <div>
              <div
                className="text-5xl font-semibold tracking-tight"
                style={{ color: theme === "light" ? cs.accentLight : cs.accentFrom }}
              >
                {cs.metric}
              </div>
              <div className="mt-1 text-sm text-muted">{cs.label}</div>
            </div>

            <Mockup accent={cs.accentFrom} />

            <div className="mt-auto text-[0.95rem] font-medium text-ink">
              {cs.client}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
