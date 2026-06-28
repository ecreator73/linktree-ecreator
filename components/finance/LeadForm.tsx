"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ROLE_OPTIONS, CHALLENGE_OPTIONS, BRAND } from "@/lib/finance";
import {
  buildFinancePayload,
  submitFinanceLead,
  type FinanceLeadInput,
} from "@/lib/financeLeads";
import { Check, ArrowRight } from "@/components/icons";

const EMPTY: FinanceLeadInput = {
  firstName: "",
  lastName: "",
  company: "",
  website: "",
  email: "",
  phone: "",
  role: "",
  challenge: "",
};

const inputCls =
  "w-full rounded-xl border border-white/[0.09] bg-[#0d0d0d] px-4 py-3 text-sm text-white placeholder-[#666] outline-none transition-colors focus:border-[#D8B76A]/60 focus:bg-[#111]";
const labelCls = "mb-1.5 block text-xs font-medium text-[#A3A3A3]";

export default function LeadForm() {
  const [data, setData] = useState<FinanceLeadInput>(EMPTY);
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FinanceLeadInput, boolean>>>({});

  const set = (k: keyof FinanceLeadInput) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: false }));
  };

  const validate = () => {
    const req: (keyof FinanceLeadInput)[] = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "role",
      "challenge",
    ];
    const next: Partial<Record<keyof FinanceLeadInput, boolean>> = {};
    req.forEach((k) => {
      if (!data[k].trim()) next[k] = true;
    });
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = true;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState("loading");
    try {
      const res = await submitFinanceLead(buildFinancePayload(data));
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-[#B8FF3B]/25 bg-[#0d0d0d] p-8 text-center sm:p-12"
      >
        <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#B8FF3B]/15">
          <Check className="h-7 w-7 text-[#B8FF3B]" />
        </span>
        <h3 className="font-display text-2xl font-semibold text-white">Danke, {data.firstName}!</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#A3A3A3]">
          Deine Anfrage für die kostenlose Potenzialanalyse ist eingegangen. Wir prüfen deine
          Angaben und <span className="text-white">melden uns persönlich</span> – in der Regel
          innerhalb von 1–2 Werktagen.
        </p>
        <p className="mt-6 text-xs text-[#666]">
          Dringend? Schreib uns direkt an{" "}
          <a href={`mailto:${BRAND.email}`} className="text-[#D8B76A] hover:underline">
            {BRAND.email}
          </a>
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d]/80 p-6 backdrop-blur sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="firstName">Vorname *</label>
          <input id="firstName" className={`${inputCls} ${errors.firstName ? "border-red-500/60" : ""}`} value={data.firstName} onChange={set("firstName")} placeholder="Max" />
        </div>
        <div>
          <label className={labelCls} htmlFor="lastName">Nachname *</label>
          <input id="lastName" className={`${inputCls} ${errors.lastName ? "border-red-500/60" : ""}`} value={data.lastName} onChange={set("lastName")} placeholder="Muster" />
        </div>
        <div>
          <label className={labelCls} htmlFor="company">Unternehmen</label>
          <input id="company" className={inputCls} value={data.company} onChange={set("company")} placeholder="Muster Finanz AG" />
        </div>
        <div>
          <label className={labelCls} htmlFor="website">Website</label>
          <input id="website" className={inputCls} value={data.website} onChange={set("website")} placeholder="www.beispiel.ch" />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">E-Mail *</label>
          <input id="email" type="email" className={`${inputCls} ${errors.email ? "border-red-500/60" : ""}`} value={data.email} onChange={set("email")} placeholder="max@beispiel.ch" />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Telefon *</label>
          <input id="phone" type="tel" className={`${inputCls} ${errors.phone ? "border-red-500/60" : ""}`} value={data.phone} onChange={set("phone")} placeholder="+41 79 000 00 00" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="role">Tätigkeit *</label>
          <select id="role" className={`${inputCls} ${errors.role ? "border-red-500/60" : ""} ${data.role ? "" : "text-[#666]"}`} value={data.role} onChange={set("role")}>
            <option value="" disabled>Bitte wählen …</option>
            {ROLE_OPTIONS.map((o) => (
              <option key={o} value={o} className="text-white">{o}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="challenge">Was ist aktuell deine grösste Herausforderung? *</label>
          <select id="challenge" className={`${inputCls} ${errors.challenge ? "border-red-500/60" : ""} ${data.challenge ? "" : "text-[#666]"}`} value={data.challenge} onChange={set("challenge")}>
            <option value="" disabled>Bitte wählen …</option>
            {CHALLENGE_OPTIONS.map((o) => (
              <option key={o} value={o} className="text-white">{o}</option>
            ))}
          </select>
        </div>
      </div>

      <AnimatePresence>
        {state === "error" && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 text-sm text-red-400"
          >
            Etwas ist schiefgelaufen. Bitte versuch es erneut oder schreib uns an {BRAND.email}.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={state === "loading"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#E7CE94] to-[#C9A659] px-6 py-4 text-sm font-semibold text-[#0A0A0A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-12px_rgba(216,183,106,0.7)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state === "loading" ? "Wird gesendet …" : "Kostenlose Analyse anfordern"}
        {state !== "loading" && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>

      <p className="mt-4 text-center text-xs text-[#666]">
        100% unverbindlich · Keine Kosten · Wir melden uns persönlich
      </p>
    </form>
  );
}
