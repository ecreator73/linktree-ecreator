"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";
import { Star, ChevronRight } from "@/components/icons";

export default function Testimonials() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="kundenstimmen" className="pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Kundenstimmen"
            title="Was unsere Kunden sagen"
          />
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              aria-label="Zurück"
              onClick={() => scrollBy(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-colors hover:border-accent/40 hover:text-accent-fg"
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
            </button>
            <button
              aria-label="Weiter"
              onClick={() => scrollBy(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-colors hover:border-accent/40 hover:text-accent-fg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-10">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bg to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg to-transparent sm:w-20" />

        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-4 sm:px-[max(1.5rem,calc((100vw-64rem)/2))]"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="group flex w-[300px] shrink-0 snap-start flex-col rounded-[24px] border border-line bg-card p-6 transition-colors duration-300 hover:border-accent/40 sm:w-[340px]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-bg text-sm font-semibold text-accent-fg ring-1 ring-line">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <figcaption className="truncate text-[0.92rem] font-semibold text-ink">
                    {t.name}
                  </figcaption>
                  <p className="truncate text-[0.78rem] text-muted">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} filled className="h-4 w-4 text-accent-fg" />
                ))}
              </div>

              <blockquote className="mt-3 text-[0.9rem] leading-relaxed text-muted">
                “{t.quote}”
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
