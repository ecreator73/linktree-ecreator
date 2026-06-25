"use client";

import { Reveal } from "@/components/Reveal";
import { URLS } from "@/lib/data";
import { ArrowRight, WhatsApp } from "@/components/icons";

export default function FinalCTA() {
  return (
    <section id="cta" className="mx-auto max-w-4xl px-6 pt-32">
      <Reveal className="relative overflow-hidden rounded-[28px] border border-accent/20 bg-gradient-to-b from-card to-bg px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 accent-radial" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[28rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />

        <h2 className="relative text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Bereit für planbares
          <br />
          <span className="text-accent-fg">Wachstum?</span>
        </h2>
        <p className="relative mx-auto mt-5 max-w-md text-[0.98rem] leading-relaxed text-muted">
          Sichere dir jetzt deine kostenlose Analyse. Unverbindlich, ehrlich und
          mit konkreten Empfehlungen für dein Wachstum.
        </p>

        <a
          href={URLS.analyse}
          className="group relative mt-9 inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-8 py-4 text-[1rem] font-semibold text-black shadow-[0_12px_50px_-10px_rgba(184,255,59,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_60px_-8px_rgba(184,255,59,0.75)]"
        >
          Kostenlose Analyse sichern
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <div className="relative mt-6">
          <a
            href={URLS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent-fg"
          >
            <WhatsApp className="h-4 w-4" />
            Oder schreib uns direkt auf WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
