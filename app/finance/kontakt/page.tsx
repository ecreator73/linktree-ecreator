import type { Metadata } from "next";
import PageHeader from "@/components/finance/sections/PageHeader";
import LeadForm from "@/components/finance/LeadForm";
import { Reveal } from "@/components/Reveal";
import { Container, Section, Card } from "@/components/finance/ui";
import { BRAND, SOCIALS, r } from "@/lib/finance";
import { Mail, Phone, Clock, Briefcase } from "@/components/icons";

export const metadata: Metadata = {
  title: "Kontakt – Beratungsgespräch für Finanzberater & Broker",
  description:
    "Kontaktiere Finance Growth by eCreator für ein unverbindliches Beratungsgespräch. Telefon, E-Mail und kostenlose Potenzialanalyse für Finanzberater, Broker und Versicherungsberater.",
  alternates: { canonical: BRAND.url + r("/kontakt") + "/" },
};

const CONTACTS = [
  { icon: Mail, label: "E-Mail", value: BRAND.email, href: `mailto:${BRAND.email}` },
  { icon: Phone, label: "Telefon", value: BRAND.phone, href: BRAND.phoneHref },
  { icon: Clock, label: "Reaktionszeit", value: "Innerhalb von 1–2 Werktagen", href: null },
  { icon: Briefcase, label: "Muttermarke", value: "eCreator · ecreator.ch", href: "https://ecreator.ch" },
];

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Lass uns über dein Wachstum sprechen."
        sub="Ob konkrete Frage oder unverbindliches Beratungsgespräch – wir freuen uns auf den Austausch. Am schnellsten geht es über das Formular."
      />

      <Section className="pt-6">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              {CONTACTS.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.06}>
                  <Card hover={false} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D8B76A]/25 bg-[#D8B76A]/10 text-[#D8B76A]">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#A3A3A3]">{c.label}</div>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-white transition-colors hover:text-[#D8B76A]"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <div className="text-base font-semibold text-white">{c.value}</div>
                      )}
                    </div>
                  </Card>
                </Reveal>
              ))}

              <Reveal delay={0.3}>
                <Card hover={false}>
                  <div className="text-xs uppercase tracking-wider text-[#A3A3A3]">Social</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#cfcfcf] transition-colors hover:border-[#D8B76A]/40 hover:text-white"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </Card>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <LeadForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
