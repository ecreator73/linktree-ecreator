import { Reveal } from "@/components/Reveal";
import { Container, Section, SectionHeading, Card } from "@/components/finance/ui";
import Funnel from "@/components/finance/Funnel";
import { PROBLEMS, SOLUTION } from "@/lib/finance";

export function ProblemSection() {
  return (
    <Section id="problem">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Das Problem"
            title="Empfehlungen allein reichen nicht mehr."
            sub="Die besten Finanzberater verlieren Termine nicht an mangelnder Kompetenz – sondern an fehlender Sichtbarkeit, unklaren Prozessen und verlorenen Follow-ups."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <Card className="h-full">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/5 text-red-400">
                  ✕
                </div>
                <h3 className="text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A3A3A3]">{p.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function SolutionSection() {
  return (
    <Section id="loesung" className="overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D8B76A]/30 to-transparent" />
      <Container>
        <Reveal>
          <SectionHeading
            center
            eyebrow="Die Lösung"
            title="Ein System, das aus Interesse Beratungsgespräche macht."
            sub="Kein Sammelsurium aus Einzelmassnahmen – sondern ein zusammenhängendes System, in dem jeder Baustein auf das nächste Beratungsgespräch einzahlt."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTION.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <Card className="h-full">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#D8B76A]/25 bg-[#D8B76A]/10 text-[#D8B76A]">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#D8B76A]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-base font-semibold text-white">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#A3A3A3]">{s.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Animated funnel */}
        <div className="mt-20">
          <Reveal>
            <p className="mb-10 text-center text-sm uppercase tracking-[0.2em] text-[#666]">
              So entsteht aus Sichtbarkeit ein Abschluss
            </p>
          </Reveal>
          <Funnel />
        </div>
      </Container>
    </Section>
  );
}
