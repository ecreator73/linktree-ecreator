"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Container, Section, SectionHeading } from "@/components/finance/ui";
import { FAQ } from "@/lib/finance";
import { ChevronDown } from "@/components/icons";

export default function Faq({
  items = FAQ as unknown as { q: string; a: string }[],
  eyebrow = "FAQ",
  title = "Häufige Fragen",
}: {
  items?: { q: string; a: string }[];
  eyebrow?: string;
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading center eyebrow={eyebrow} title={title} />
        </Reveal>
        <div className="mt-10 space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-xl border bg-[#101010] transition-colors ${
                    isOpen ? "border-[#D8B76A]/30" : "border-white/[0.07]"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#D8B76A] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-[#A3A3A3]">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
