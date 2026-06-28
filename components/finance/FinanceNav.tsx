"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BRAND, NAV, r } from "@/lib/finance";
import { ArrowRight } from "@/components/icons";

function Wordmark() {
  return (
    <Link href={r()} className="group flex items-center gap-2.5" aria-label={BRAND.name}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#E7CE94] to-[#C9A659] text-sm font-bold text-[#0A0A0A] shadow-[0_6px_20px_-8px_rgba(216,183,106,0.6)]">
        F
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-white">
          {BRAND.name}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#D8B76A]/90">
          {BRAND.badge}
        </span>
      </span>
    </Link>
  );
}

export default function FinanceNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.07] bg-[#050505]/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Wordmark />

          <div className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.href || pathname === item.href + "/";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors duration-200 ${
                    active ? "text-white" : "text-[#A3A3A3] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={r("/analyse")}
              className="hidden items-center gap-2 rounded-full bg-gradient-to-b from-[#E7CE94] to-[#C9A659] px-4 py-2 text-sm font-semibold text-[#0A0A0A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-12px_rgba(216,183,106,0.6)] sm:inline-flex"
            >
              Broker-Analyse
              <ArrowRight className="h-4 w-4" />
            </Link>

            <button
              aria-label="Menü"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 bg-white transition-all ${open ? "translate-y-2 rotate-45" : ""}`}
                />
                <span className={`h-0.5 w-5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
                <span
                  className={`h-0.5 w-5 bg-white transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-white/[0.07] bg-[#0a0a0a]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#cfcfcf] transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={r("/analyse")}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#E7CE94] to-[#C9A659] px-4 py-3 text-sm font-semibold text-[#0A0A0A]"
              >
                {BRAND.primaryCta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
