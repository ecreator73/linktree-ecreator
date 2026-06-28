"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, Calendar, Users, Check } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

const PIPELINE = [
  { label: "Lead", value: "128", icon: Users, tone: "text-white" },
  { label: "Termin", value: "54", icon: Calendar, tone: "text-white" },
  { label: "Beratung", value: "31", icon: TrendingUp, tone: "text-[#D8B76A]" },
  { label: "Abschluss", value: "18", icon: Check, tone: "text-[#B8FF3B]" },
];

const BARS = [38, 52, 44, 67, 58, 79, 71, 88];

export default function HeroVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* glow */}
      <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_50%_30%,rgba(216,183,106,0.16),transparent_70%)] blur-xl" />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease }}
        className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d0d0d]/90 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur"
      >
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D8B76A]" />
            <span className="text-xs font-semibold tracking-wide text-white">
              Akquise Pipeline
            </span>
          </div>
          <span className="rounded-full bg-[#B8FF3B]/10 px-2 py-0.5 text-[10px] font-medium text-[#B8FF3B]">
            ● Live
          </span>
        </div>

        {/* pipeline stages */}
        <div className="grid grid-cols-4 gap-2 p-4">
          {PIPELINE.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.12 }}
              className="rounded-xl border border-white/[0.06] bg-[#141414] p-3"
            >
              <s.icon className={`h-4 w-4 ${s.tone}`} />
              <div className={`mt-2 text-lg font-semibold ${s.tone}`}>{s.value}</div>
              <div className="text-[10px] text-[#A3A3A3]">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* chart */}
        <div className="px-4 pb-5">
          <div className="rounded-xl border border-white/[0.06] bg-[#101010] p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs text-[#A3A3A3]">Termine / Woche</span>
              <span className="flex items-center gap-1 text-xs font-semibold text-[#B8FF3B]">
                <TrendingUp className="h-3.5 w-3.5" /> +34%
              </span>
            </div>
            <div className="flex h-24 items-end gap-2">
              {BARS.map((h, i) => (
                <motion.div
                  key={i}
                  initial={reduce ? false : { height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.7, ease, delay: 0.5 + i * 0.07 }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-[#D8B76A]/20 to-[#D8B76A]"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* floating badge */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease, delay: 1 }}
        className="absolute -right-3 -top-4 hidden rounded-xl border border-white/10 bg-[#141414]/95 px-3 py-2 shadow-soft backdrop-blur sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B8FF3B]/15">
            <Check className="h-4 w-4 text-[#B8FF3B]" />
          </span>
          <div>
            <div className="text-xs font-semibold text-white">Neuer Termin</div>
            <div className="text-[10px] text-[#A3A3A3]">automatisch gebucht</div>
          </div>
        </div>
      </motion.div>

      {/* floating lead card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease, delay: 1.2 }}
        className="absolute -bottom-5 -left-3 hidden rounded-xl border border-white/10 bg-[#141414]/95 px-3 py-2 shadow-soft backdrop-blur sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D8B76A]/15">
            <Users className="h-4 w-4 text-[#D8B76A]" />
          </span>
          <div>
            <div className="text-xs font-semibold text-white">+3 Leads heute</div>
            <div className="text-[10px] text-[#A3A3A3]">qualifiziert</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
