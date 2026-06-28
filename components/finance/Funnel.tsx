"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FUNNEL } from "@/lib/finance";
import { ChevronDown } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Funnel() {
  const reduce = useReducedMotion();
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center">
      {FUNNEL.map((stage, i) => {
        // funnel narrows as it descends
        const width = 100 - i * 13;
        return (
          <div key={stage.label} className="flex w-full flex-col items-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
              style={{ width: `${width}%` }}
              className="group relative min-w-[220px] overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-b from-[#141414] to-[#0d0d0d] px-5 py-4 text-center"
            >
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(216,183,106,0.6), transparent)",
                }}
              />
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-semibold text-[#D8B76A]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-semibold text-white">{stage.label}</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-[#A3A3A3]">{stage.desc}</p>
            </motion.div>
            {i < FUNNEL.length - 1 && (
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                className="my-1.5 text-[#D8B76A]/60"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
