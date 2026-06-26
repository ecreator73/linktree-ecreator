"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { REELS, URLS } from "@/lib/data";

function Play() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export default function Reels() {
  const reduce = useReducedMotion();
  return (
    <section id="reels" className="pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Content & Reels"
          title="Content, der Reichweite in Kunden verwandelt."
          subtitle="Vertikale Videos & Creatives, die scrollende Daumen stoppen – und Resultate liefern."
        />
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bg to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg to-transparent sm:w-24" />

        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:px-[max(1.5rem,calc((100vw-72rem)/2))]">
          {REELS.map((r, i) => (
            <motion.a
              key={r.title}
              href={URLS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="group relative aspect-[9/16] w-[200px] shrink-0 snap-start overflow-hidden rounded-[24px] border border-line sm:w-[230px]"
            >
              {/* gradient "thumbnail" */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(155deg, hsl(${r.hue} 60% 22%), #0b0b0b 70%)`,
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(184,255,59,0.18),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* play button */}
              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:text-accent">
                <Play />
              </div>

              {/* meta */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                <div>
                  <div className="text-sm font-semibold text-white">{r.title}</div>
                  <div className="text-[0.72rem] text-white/60">{r.handle}</div>
                </div>
                <div className="rounded-full bg-black/40 px-2 py-1 text-[0.7rem] font-medium text-white backdrop-blur-sm">
                  {r.views}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
