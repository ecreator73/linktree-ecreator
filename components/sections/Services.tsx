"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const reduce = useReducedMotion();
  return (
    <section id="leistungen" className="mx-auto max-w-5xl px-6 pt-28">
      <SectionHeading
        align="center"
        eyebrow="Unsere Leistungen"
        title="Alles für planbares Wachstum"
        subtitle="Sechs Disziplinen, ein System – nahtlos aufeinander abgestimmt."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease, delay: (i % 3) * 0.08 }}
              whileHover={reduce ? undefined : { y: -5 }}
              className="group relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-card p-6 transition-colors duration-300 hover:border-accent/40"
            >
              <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/10" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-muted transition-colors duration-300 group-hover:bg-accent/15 group-hover:text-accent">
                <Icon className="h-[22px] w-[22px]" />
              </span>
              <h3 className="relative mt-5 text-[1.05rem] font-semibold text-white">
                {s.title}
              </h3>
              <p className="relative mt-2 text-[0.88rem] leading-relaxed text-muted">
                {s.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
