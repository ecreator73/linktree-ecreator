"use client";

import { useEffect, useState } from "react";
import { runAnalysis } from "@/lib/analysis";
import { generateCreatives } from "@/lib/report";
import { LogoMark, SiteShot } from "@/components/SmartImage";

/**
 * A REAL, freshly designed website preview rendered live for any company.
 * Reads ?c=Company&d=domain from the URL (client-side, works on static export)
 * and renders a bespoke eCreator-style redesign using the real logo + a live
 * screenshot of the current site. Embedded as a live iframe in the report.
 */
export default function VorschauPage() {
  const [params, setParams] = useState<{ c: string; d: string } | null>(null);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    setParams({
      c: sp.get("c") || "Dein Unternehmen",
      d: sp.get("d") || "deine-firma.ch",
    });
  }, []);

  if (!params) {
    return <div className="min-h-screen bg-[#070707]" />;
  }

  const result = runAnalysis(params.c, params.d);
  const c = generateCreatives(result);
  const initials = c.brand.slice(0, 2).toUpperCase();

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      {/* nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2.5">
          <LogoMark sources={result.logoSources} initials={initials} size={30} />
          <span className="text-base font-semibold">{c.brand}</span>
        </div>
        <nav className="hidden items-center gap-7 text-sm text-white/60 md:flex">
          {c.website.nav.map((n) => (
            <span key={n} className="transition-colors hover:text-white">
              {n}
            </span>
          ))}
        </nav>
        <span className="rounded-xl bg-[#7C6CF5] px-4 py-2 text-sm font-semibold text-black">
          {c.website.cta}
        </span>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-[#7C6CF5]/10 blur-[120px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7C6CF5]" />
              Neuer Markenauftritt
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {c.website.headline}
            </h1>
            <p className="mt-5 max-w-md text-lg text-white/60">{c.website.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-2xl bg-[#7C6CF5] px-6 py-3.5 text-[0.95rem] font-semibold text-black">
                {c.website.cta}
              </span>
              <span className="rounded-2xl border border-white/20 px-6 py-3.5 text-[0.95rem] font-semibold text-white">
                Mehr erfahren
              </span>
            </div>
            <div className="mt-9 flex items-center gap-6 text-sm text-white/50">
              <span>★★★★★ 5.0</span>
              <span>500+ zufriedene Kunden</span>
            </div>
          </div>

          {/* current site shown in a device frame */}
          <div className="relative">
            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#0c0c0c] shadow-2xl">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </div>
              <SiteShot
                domain={result.domain}
                alt={result.domain}
                className="aspect-[16/11] w-full"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#101010] px-4 py-3 shadow-xl">
              <div className="text-2xl font-semibold text-[#7C6CF5]">+230%</div>
              <div className="text-[0.7rem] text-white/50">mehr Anfragen</div>
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { t: "Modernes Design", d: "Ein Auftritt, der Vertrauen schafft und verkauft." },
            { t: "Mehr Conversions", d: "Klare CTAs & Struktur, die Besucher zu Kunden macht." },
            { t: "Sichtbar bei Google", d: "SEO-optimiert für nachhaltige Reichweite." },
          ].map((f) => (
            <div key={f.t} className="rounded-[22px] border border-white/10 bg-[#101010] p-6">
              <div className="mb-4 h-10 w-10 rounded-xl bg-[#7C6CF5]/15" />
              <h3 className="text-lg font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-white/55">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-[28px] border border-[#7C6CF5]/20 bg-[#101010] p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-[#7C6CF5]/15 blur-[90px]" />
          <h2 className="relative text-3xl font-semibold tracking-tight sm:text-4xl">
            Bereit für mehr Kunden?
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-white/60">
            Lass uns {c.brand} gemeinsam auf das nächste Level bringen.
          </p>
          <span className="relative mt-7 inline-block rounded-2xl bg-[#7C6CF5] px-8 py-4 font-semibold text-black">
            {c.flyer.offer}
          </span>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        {c.brand} · Designvorschlag von eCreator · {result.domain}
      </footer>
    </div>
  );
}
