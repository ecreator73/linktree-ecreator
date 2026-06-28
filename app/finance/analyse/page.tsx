import type { Metadata } from "next";
import PageHeader from "@/components/finance/sections/PageHeader";
import LeadForm from "@/components/finance/LeadForm";
import { Reveal } from "@/components/Reveal";
import { Container, Section } from "@/components/finance/ui";
import Faq from "@/components/finance/sections/Faq";
import { FaqJsonLd } from "@/components/finance/JsonLd";
import { BRAND, FAQ, r } from "@/lib/finance";
import { Check, Clock, Shield, BarChart } from "@/components/icons";

export const metadata: Metadata = {
  title: "Kostenlose Potenzialanalyse für Finanzberater & Broker",
  description:
    "Fordere deine kostenlose Broker-Analyse an. Wir prüfen deine Ausgangslage und zeigen dir konkret, wie du mehr qualifizierte Beratungstermine gewinnst. Unverbindlich.",
  alternates: { canonical: BRAND.url + r("/analyse") + "/" },
};

const STEPS = [
  { icon: Check, title: "Du sendest deine Angaben", desc: "In unter zwei Minuten – wir brauchen nur das Wesentliche." },
  { icon: BarChart, title: "Wir analysieren dein Potenzial", desc: "Website, Sichtbarkeit, Funnel und Prozesse im Überblick." },
  { icon: Clock, title: "Persönliches Gespräch", desc: "Wir melden uns innerhalb von 1–2 Werktagen mit konkreten Hebeln." },
];

const INCLUDED = [
  "Einschätzung deiner aktuellen Online-Sichtbarkeit",
  "Wo qualifizierte Leads für dich verloren gehen",
  "Konkrete Quick Wins für mehr Beratungstermine",
  "Empfehlung für dein passendes System",
];

export default function AnalysePage() {
  return (
    <>
      <FaqJsonLd items={FAQ as unknown as { q: string; a: string }[]} />
      <PageHeader
        eyebrow="Kostenlose Potenzialanalyse"
        title="Kostenlose Broker-Analyse sichern."
        sub="Erzähl uns kurz, wo du stehst. Wir analysieren dein Potenzial und melden uns persönlich – kostenlos und unverbindlich."
      />

      <Section className="pt-6">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            {/* left: value */}
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <h2 className="font-display text-2xl font-semibold text-white">So läuft es ab</h2>
                <div className="mt-6 space-y-5">
                  {STEPS.map((s, i) => (
                    <div key={s.title} className="flex gap-4">
                      <div className="relative flex flex-col items-center">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8B76A]/30 bg-[#D8B76A]/10 text-[#D8B76A]">
                          <s.icon className="h-5 w-5" />
                        </span>
                        {i < STEPS.length - 1 && <span className="mt-1 h-8 w-px bg-white/10" />}
                      </div>
                      <div className="pt-1.5">
                        <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#A3A3A3]">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 rounded-2xl border border-white/[0.07] bg-[#101010] p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Shield className="h-4 w-4 text-[#B8FF3B]" /> Das bekommst du
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {INCLUDED.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-[#cfcfcf]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D8B76A]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-white/[0.06] pt-4 text-xs text-[#777]">
                    Wir machen keine Garantieversprechen – nur eine ehrliche Einschätzung und ein
                    sauberes System.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* right: form */}
            <Reveal delay={0.15}>
              <LeadForm />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Faq />
    </>
  );
}
