import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  Container,
  Section,
  SectionHeading,
  Card,
  GhostButton,
  PlaceholderTag,
} from "@/components/finance/ui";
import { CASE_STUDIES, r } from "@/lib/finance";
import { ArrowRight } from "@/components/icons";

function PlayCard() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-br from-[#161616] to-[#0c0c0c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(216,183,106,0.10),transparent_60%)]" />
      <div className="absolute right-3 top-3">
        <PlaceholderTag>Video folgt</PlaceholderTag>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D8B76A]/40 bg-[#D8B76A]/15 backdrop-blur transition-transform duration-300 group-hover:scale-110">
          <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-[#D8B76A]" />
        </span>
      </div>
    </div>
  );
}

export function CaseStudiesTeaser() {
  const items = CASE_STUDIES.slice(0, 4);
  return (
    <Section id="case-studies">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Case Studies"
              title="Beispiele, wie ein System wirkt."
              sub="Anschauungsbeispiele aus der Finanz- und Versicherungsbranche. Sobald echte Kundendaten freigegeben sind, ersetzen wir sie hier."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <GhostButton href={r("/case-studies")} withArrow>
              Alle Case Studies
            </GhostButton>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <Card className="group h-full" hover={false}>
                <PlayCard />
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#D8B76A]">
                    {c.industry}
                  </span>
                  <PlaceholderTag />
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-semibold text-white">{c.metric}</span>
                  <span className="text-sm text-[#A3A3A3]">{c.metricLabel} · {c.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#A3A3A3]">{c.result}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function CaseStudiesFull() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.06}>
              <Card className="group" hover={false}>
                <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr] lg:items-center">
                  <PlayCard />
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-[#D8B76A]/30 bg-[#D8B76A]/10 px-3 py-1 text-xs font-medium text-[#D8B76A]">
                        {c.industry}
                      </span>
                      <PlaceholderTag />
                    </div>
                    <h3 className="font-display mt-4 text-2xl font-semibold text-white">{c.title}</h3>
                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                      <Detail label="Ausgangslage" value={c.situation} />
                      <Detail label="Lösung" value={c.solution} />
                      <Detail label="Resultat" value={c.result} />
                    </div>
                    <Link
                      href={r("/analyse")}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#D8B76A] transition-colors hover:text-[#E7CE94]"
                    >
                      Ähnliches System für dich <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0d0d0d] p-3.5">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-[#D8B76A]">{label}</div>
      <p className="mt-1.5 text-xs leading-relaxed text-[#bdbdbd]">{value}</p>
    </div>
  );
}
