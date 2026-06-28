import type { Metadata } from "next";
import VerticalHero, { VerticalBody } from "@/components/finance/sections/VerticalHero";
import { SolutionSection } from "@/components/finance/sections/ProblemSolution";
import { CaseStudiesTeaser } from "@/components/finance/sections/Cases";
import Testimonials from "@/components/finance/sections/Testimonials";
import Faq from "@/components/finance/sections/Faq";
import FinalCta from "@/components/finance/sections/Cta";
import { FaqJsonLd } from "@/components/finance/JsonLd";
import { BRAND, FAQ, VERTICALS, r } from "@/lib/finance";

const v = VERTICALS.versicherungsberater;

export const metadata: Metadata = {
  title: v.meta.title,
  description: v.meta.description,
  alternates: { canonical: BRAND.url + r("/versicherungsberater") + "/" },
  openGraph: { title: v.meta.title, description: v.meta.description },
};

export default function VersicherungsberaterPage() {
  return (
    <>
      <FaqJsonLd items={FAQ as unknown as { q: string; a: string }[]} />
      <VerticalHero v={v} />
      <VerticalBody v={v} />
      <SolutionSection />
      <CaseStudiesTeaser />
      <Testimonials />
      <Faq title="Fragen von Versicherungsberatern" />
      <FinalCta
        title="Mehr Beratungstermine – ohne auf Empfehlungen zu warten."
        sub="Sichere dir deine kostenlose Potenzialanalyse. Wir zeigen dir, wo dein grösster Hebel für mehr qualifizierte Termine liegt."
      />
    </>
  );
}
