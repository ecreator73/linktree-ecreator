"use client";

import { useEffect, useRef } from "react";

// Ambient premium background: fixed gold grain glow + a soft cursor-tracking
// light. Pointer-events none, GPU-cheap, respects reduced motion.
export default function FinanceBackground() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || window.matchMedia("(hover: none)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (glow.current) {
          glow.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
        }
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* base radial vignettes */}
      <div className="absolute -top-40 left-1/2 h-[640px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,183,106,0.10),transparent_62%)] blur-2xl" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] translate-x-1/4 translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(216,183,106,0.06),transparent_60%)] blur-2xl" />
      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 50% 30%, #000 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 30%, #000 0%, transparent 75%)",
        }}
      />
      {/* cursor glow */}
      <div
        ref={glow}
        className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(216,183,106,0.07),transparent_60%)] will-change-transform"
      />
    </div>
  );
}
