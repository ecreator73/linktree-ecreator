import { Reveal } from "@/components/Reveal";
import { Container, GoldButton, GhostButton } from "@/components/finance/ui";
import HeroVisual from "@/components/finance/HeroVisual";
import { BRAND, r } from "@/lib/finance";
import { Check, Star } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative z-10 overflow-hidden pb-10 pt-32 sm:pt-40">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[#cfcfcf]">
                <span className="flex gap-0.5 text-[#D8B76A]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled className="h-3 w-3" />
                  ))}
                </span>
                Spezialisiert auf die Finanz- &amp; Versicherungsbranche
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl">
                Mehr qualifizierte{" "}
                <span className="bg-gradient-to-r from-[#E7CE94] via-[#D8B76A] to-[#C9A659] bg-clip-text text-transparent">
                  Beratungstermine
                </span>{" "}
                für Finanzberater und Broker.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A3A3A3] sm:text-lg">
                Wir bauen digitale Akquise-Systeme, die dich online sichtbar machen, Interessenten
                sauber erfassen und mehr Beratungsgespräche ermöglichen.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <GoldButton href={r("/analyse")}>{BRAND.primaryCta}</GoldButton>
                <GhostButton href="#loesung" withArrow>
                  System ansehen
                </GhostButton>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {["Keine Garantieversprechen – nur saubere Systeme", "Schweizer Team", "Branchenfokus"].map(
                  (t) => (
                    <span key={t} className="inline-flex items-center gap-1.5 text-xs text-[#A3A3A3]">
                      <Check className="h-3.5 w-3.5 text-[#B8FF3B]" /> {t}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
