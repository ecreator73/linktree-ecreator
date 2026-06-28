import type { Metadata } from "next";
import PageHeader from "@/components/finance/sections/PageHeader";
import { CaseStudiesFull } from "@/components/finance/sections/Cases";
import Testimonials from "@/components/finance/sections/Testimonials";
import FinalCta from "@/components/finance/sections/Cta";
import { Container } from "@/components/finance/ui";
import { PlaceholderTag } from "@/components/finance/ui";
import { BRAND, r } from "@/lib/finance";

export const metadata: Metadata = {
  title: "Case Studies – Beispiele aus der Finanz- & Versicherungsbranche",
  description:
    "Anschauungsbeispiele, wie ein Akquise-System aus Website, Ads, Funnel und CRM für Finanzberater, Broker und Versicherungsberater wirkt. Echte Daten ersetzen die Beispiele nach Freigabe.",
  alternates: { canonical: BRAND.url + r("/case-studies") + "/" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="So wirkt ein System in der Praxis."
        sub="Die folgenden Case Studies sind Anschauungsbeispiele. Sobald echte Kundendaten freigegeben sind, ersetzen wir die Platzhalter durch reale Zahlen und Video-Testimonials."
      />
      <Container>
        <div className="flex justify-center">
          <PlaceholderTag>Beispiel-Daten · werden durch echte Resultate ersetzt</PlaceholderTag>
        </div>
      </Container>
      <CaseStudiesFull />
      <Testimonials />
      <FinalCta />
    </>
  );
}
