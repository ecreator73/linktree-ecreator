import { Reveal } from "@/components/Reveal";
import Counter from "@/components/finance/Counter";
import { Container } from "@/components/finance/ui";
import { KPIS, TRUST_LOGOS } from "@/lib/finance";

export default function Proof() {
  return (
    <section className="relative z-10 border-y border-white/[0.06] bg-[#080808]/60 py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {KPIS.map((k, i) => (
            <Reveal key={k.label} delay={i * 0.08} className="text-center lg:text-left">
              <div className="font-display text-3xl font-semibold text-[#D8B76A] sm:text-4xl">
                <Counter
                  value={k.value}
                  suffix={k.suffix}
                  decimals={"decimals" in k ? (k.decimals as number) : 0}
                  thousand={"format" in k && k.format === "thousand"}
                />
              </div>
              <div className="mt-2 text-xs leading-snug text-[#A3A3A3] sm:text-sm">{k.label}</div>
            </Reveal>
          ))}
        </div>

        <div className="relative mt-12 overflow-hidden">
          <p className="mb-5 text-center text-xs uppercase tracking-[0.2em] text-[#666]">
            Erfahrung mit Marken & Strukturen aus der Finanz- und Versicherungsbranche
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#050505] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#050505] to-transparent" />
            <div className="flex w-max animate-marquee gap-10">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((name, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap text-sm font-medium tracking-wide text-[#5f5f5f]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
