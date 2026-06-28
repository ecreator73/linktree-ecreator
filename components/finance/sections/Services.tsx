import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Container, Section, SectionHeading, Card, GhostButton } from "@/components/finance/ui";
import { SERVICES, SOLUTION, r } from "@/lib/finance";
import { Check, ArrowRight } from "@/components/icons";

// Compact teaser for the home page
export function ServicesTeaser() {
  return (
    <Section id="leistungen">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Leistungen"
              title="Alles, was dein Akquise-System braucht."
              sub="Von der Website bis zum Reporting – einzeln stark, im Zusammenspiel unschlagbar."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <GhostButton href={r("/leistungen")} withArrow>
              Alle Leistungen
            </GhostButton>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTION.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <Card className="group h-full">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#D8B76A] transition-colors group-hover:border-[#D8B76A]/40">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A3A3A3]">{s.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Full, detailed services for the /leistungen page
export function ServicesFull() {
  return (
    <Section>
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08}>
              <Card className="h-full" hover={false}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D8B76A]/25 bg-[#D8B76A]/10 text-[#D8B76A]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                    <p className="text-sm text-[#D8B76A]/90">{s.tagline}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#A3A3A3]">{s.desc}</p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-[#cfcfcf]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#B8FF3B]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex justify-center">
            <Link
              href={r("/analyse")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#E7CE94] to-[#C9A659] px-7 py-4 text-sm font-semibold text-[#0A0A0A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-12px_rgba(216,183,106,0.7)]"
            >
              Kostenlose Broker-Analyse sichern
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
