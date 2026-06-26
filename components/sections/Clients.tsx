"use client";

import { CLIENTS } from "@/lib/data";

export default function Clients() {
  const row = [...CLIENTS, ...CLIENTS]; // duplicated for seamless loop
  return (
    <section className="mt-20">
      <p className="mb-7 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
        Vertraut von 150+ Schweizer Unternehmen
      </p>
      <div className="relative overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-2xl border border-line bg-card px-5 py-3 text-sm font-medium text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-fg" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
