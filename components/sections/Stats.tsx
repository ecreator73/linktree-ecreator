"use client";

import { motion, useReducedMotion } from "framer-motion";
import { STATS } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Stats() {
  const reduce = useReducedMotion();
  return (
    <section className="mx-auto mt-20 max-w-5xl px-6">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            className="flex flex-col items-center justify-center gap-1 bg-card px-4 py-8 text-center"
          >
            <span className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {s.value}
            </span>
            <span className="text-[0.8rem] text-muted">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
