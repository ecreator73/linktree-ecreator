import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/icons";

// ── Layout ──────────────────────────────────────────────────────────────────
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

// ── Text ────────────────────────────────────────────────────────────────────
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[#D8B76A]">
      <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#D8B76A]/70" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display mt-4 text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-[2.6rem]">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-base leading-relaxed text-[#A3A3A3] sm:text-lg">
          {sub}
        </p>
      )}
    </div>
  );
}

// ── Buttons ─────────────────────────────────────────────────────────────────
type BtnProps = {
  href: string;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
};

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:|#)/.test(href);
}

export function GoldButton({ href, children, className = "", withArrow = true }: BtnProps) {
  const cls =
    "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#E7CE94] to-[#C9A659] px-6 py-3.5 text-sm font-semibold text-[#0A0A0A] shadow-[0_10px_40px_-12px_rgba(216,183,106,0.55)] transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(216,183,106,0.7)] hover:-translate-y-0.5 " +
    className;
  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );
  return isExternal(href) ? (
    <a href={href} className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}

export function GhostButton({ href, children, className = "", withArrow = false }: BtnProps) {
  const cls =
    "group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-[#D8B76A]/50 hover:bg-white/[0.06] " +
    className;
  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );
  return isExternal(href) ? (
    <a href={href} className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}

// ── Card ────────────────────────────────────────────────────────────────────
export function Card({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101010] p-6 transition-all duration-300 ${
        hover ? "hover:-translate-y-1 hover:border-[#D8B76A]/30 hover:bg-[#141414]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function PlaceholderTag({ children = "Beispiel" }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[#A3A3A3]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#D8B76A]" />
      {children}
    </span>
  );
}
