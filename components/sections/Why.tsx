"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { WHY, URLS } from "@/lib/data";
import { Check, ArrowRight } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Why() {
  const reduce = useReducedMotion();
  return (
    <section id="warum" className="mx-auto max-w-5xl px-6 pt-28">
      <div className="grid items-center gap-12 rounded-[28px] border border-white/[0.07] bg-card/60 p-8 sm:p-12 lg:grid-cols-2">
        <Reveal>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Warum eCreator
          </span>
          <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-[2.1rem]">
            Eine Agentur, die wie ein Partner denkt – nicht wie ein Dienstleister.
          </h2>
          <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted">
            Wir verbinden Design, Branding und Performance zu einem System, das
            messbar mehr Kunden bringt. Persönlich, transparent und kompromisslos
            auf Resultate ausgerichtet.
          </p>
          <a
            href={URLS.analyse}
            className="group mt-7 inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-[0.95rem] font-semibold text-black transition-all duration-300 hover:-translate-y-0.5"
          >
            Kostenlose Analyse
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <motion.ul
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col gap-3"
        >
          {WHY.map((w) => (
            <motion.li
              key={w}
              variants={{
                hidden: { opacity: 0, x: 18, filter: "blur(6px)" },
                show: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.5, ease },
                },
              }}
              className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-secondary/50 px-4 py-3.5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-[0.95rem] font-medium text-white">{w}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
