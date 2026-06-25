"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LINK_CARDS } from "@/lib/data";
import { ChevronRight } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export default function LinkCards() {
  const reduce = useReducedMotion();

  return (
    <section id="links" className="mx-auto max-w-2xl px-6 pt-24">
      <motion.div
        initial={reduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className="flex flex-col gap-3"
      >
        {LINK_CARDS.map((card) => {
          const Icon = card.icon;
          const external = card.href.startsWith("http");
          return (
            <motion.a
              key={card.title}
              href={card.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              variants={{
                hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.6, ease },
                },
              }}
              whileHover={reduce ? undefined : { scale: 1.015 }}
              whileTap={{ scale: 0.99 }}
              className={`group relative flex items-center gap-4 overflow-hidden rounded-[24px] border p-4 transition-colors duration-300 sm:p-5 ${
                card.primary
                  ? "border-accent/30 bg-accent/[0.06] hover:border-accent/60"
                  : "border-line bg-card hover:border-accent/40"
              }`}
            >
              {/* hover green glow */}
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute inset-0 bg-[radial-gradient(400px_circle_at_var(--x,50%)_50%,rgba(184,255,59,0.08),transparent_60%)]" />
              </span>

              <span
                className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${
                  card.primary
                    ? "bg-accent/15 text-accent-fg"
                    : "bg-secondary text-muted group-hover:bg-accent/15 group-hover:text-accent-fg"
                }`}
              >
                <Icon className="h-[22px] w-[22px]" />
              </span>

              <span className="relative min-w-0 flex-1">
                <span className="block truncate text-[1.02rem] font-semibold text-ink">
                  {card.title}
                </span>
                <span className="mt-0.5 block truncate text-[0.85rem] text-muted">
                  {card.desc}
                </span>
              </span>

              <ChevronRight className="relative h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-fg" />
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}
