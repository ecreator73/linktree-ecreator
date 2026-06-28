import { Reveal } from "@/components/Reveal";
import { Container, Section, GoldButton, GhostButton } from "@/components/finance/ui";
import { BRAND, r } from "@/lib/finance";
import { Check } from "@/components/icons";

const TRUST = ["100% unverbindlich", "Persönliche Auswertung", "Schweizer Team"];

export default function FinalCta({
  title = "Bereit für planbare Beratungstermine?",
  sub = "Sichere dir deine kostenlose Potenzialanalyse. Wir schauen uns deine Ausgangslage an und zeigen dir konkret, wo dein grösster Hebel liegt.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#D8B76A]/20 bg-gradient-to-b from-[#121005] to-[#0a0a0a] px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,183,106,0.18),transparent_60%)]" />
            <div className="relative">
              <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#A3A3A3]">{sub}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <GoldButton href={r("/analyse")}>{BRAND.primaryCta}</GoldButton>
                <GhostButton href={r("/case-studies")} withArrow>
                  {BRAND.secondaryCta}
                </GhostButton>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {TRUST.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 text-xs text-[#A3A3A3]">
                    <Check className="h-3.5 w-3.5 text-[#B8FF3B]" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
