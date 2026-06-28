import type { Metadata } from "next";
import PageHeader from "@/components/finance/sections/PageHeader";
import { ServicesFull } from "@/components/finance/sections/Services";
import { SolutionSection } from "@/components/finance/sections/ProblemSolution";
import Faq from "@/components/finance/sections/Faq";
import FinalCta from "@/components/finance/sections/Cta";
import { FaqJsonLd } from "@/components/finance/JsonLd";
import { BRAND, FAQ, r } from "@/lib/finance";

export const metadata: Metadata = {
  title: "Leistungen – Website, Ads, Funnel, CRM & Automationen",
  description:
    "Alle Leistungen von Finance Growth: Personal Branding Website, Meta & Google Ads, Lead Funnel, CRM, Follow-up Automationen, Reporting und Content Produktion für Finanzberater und Broker.",
  alternates: { canonical: BRAND.url + r("/leistungen") + "/" },
};

export default function LeistungenPage() {
  return (
    <>
      <FaqJsonLd items={FAQ as unknown as { q: string; a: string }[]} />
      <PageHeader
        eyebrow="Leistungen"
        title="Ein System aus Bausteinen, die zusammen wirken."
        sub="Jeder Baustein ist für sich stark – ihr volles Potenzial entfalten sie als zusammenhängendes Akquise-System für deine Beratung."
      />
      <ServicesFull />
      <SolutionSection />
      <Faq />
      <FinalCta />
    </>
  );
}
