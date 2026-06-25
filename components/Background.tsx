"use client";

import { useEffect, useRef } from "react";

/**
 * Layered ambient background:
 *  - very slow drifting green particles on a canvas (premium, barely visible)
 *  - large blurred floating shapes (CSS)
 *  - cursor-following glow that lerps toward the mouse
 * All extremely subtle and GPU-light. Respects reduced-motion.
 */
export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // theme-aware particle tint (lime on dark, deep green on light)
    const isLight = () => document.documentElement.classList.contains("light");
    let dot = isLight() ? "63,122,0" : "184,255,59";
    const themeObserver = new MutationObserver(() => {
      dot = isLight() ? "63,122,0" : "184,255,59";
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // ---- Cursor glow (lerped) ----
    const glow = glowRef.current;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight * 0.3;
    let gx = mx;
    let gy = my;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    if (!reduce) window.addEventListener("mousemove", onMove, { passive: true });

    // ---- Particle canvas ----
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = 0;
    let h = 0;
    let dpr = 1;
    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let particles: P[] = [];

    const seed = (n: number) => {
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.08,
        vy: -0.04 - Math.random() * 0.07,
        r: 0.6 + Math.random() * 1.6,
        a: 0.04 + Math.random() * 0.12,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.round((w * h) / 26000));
      seed(count);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dot},${p.a})`;
        ctx.fill();
      }

      // glow lerp
      if (glow) {
        gx += (mx - gx) * 0.06;
        gy += (my - gy) * 0.06;
        glow.style.transform = `translate3d(${gx - 300}px, ${gy - 300}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    if (!reduce) raf = requestAnimationFrame(tick);
    else {
      // draw one static frame
      tick();
      cancelAnimationFrame(raf);
    }

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base vignette */}
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(184,255,59,0.05),transparent_55%)]" />

      {/* floating blurred shapes */}
      <div className="absolute -left-40 top-[12%] h-[34rem] w-[34rem] rounded-full bg-accent/[0.05] blur-[120px] animate-float" />
      <div
        className="absolute right-[-10rem] top-[120%] h-[40rem] w-[40rem] rounded-full bg-accent/[0.04] blur-[140px] animate-float"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute left-[40%] top-[220%] h-[30rem] w-[30rem] rounded-full bg-[var(--shape)] blur-[130px] animate-float"
        style={{ animationDelay: "-10s" }}
      />

      {/* particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* cursor glow */}
      <div
        ref={glowRef}
        className="absolute h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(184,255,59,0.07),transparent_60%)] will-change-transform"
      />

      {/* subtle noise/grain via gradient mask top + bottom */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent" />
    </div>
  );
}
