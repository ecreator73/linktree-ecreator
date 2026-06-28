"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function formatValue(v: number, decimals: number, thousand: boolean) {
  if (thousand) {
    // Swiss thousands separator (apostrophe)
    return Math.round(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  }
  return v.toFixed(decimals);
}

export default function Counter({
  value,
  suffix = "",
  decimals = 0,
  thousand = false,
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  thousand?: boolean;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {formatValue(display, decimals, thousand)}
      {suffix}
    </span>
  );
}
