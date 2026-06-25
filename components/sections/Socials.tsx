"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SOCIALS } from "@/lib/data";

export default function Socials() {
  const reduce = useReducedMotion();
  return (
    <section id="socials" className="mx-auto max-w-2xl px-6 pt-28 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Folge uns
      </p>
      <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
        {SOCIALS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-card text-muted transition-colors duration-300 hover:border-accent/50 hover:text-accent-fg"
            >
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_30px_-4px_rgba(184,255,59,0.5)] transition-opacity duration-300 group-hover:opacity-100" />
              <Icon className="relative h-6 w-6" />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
