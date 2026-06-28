import type { Metadata } from "next";
import Hero from "@/components/finance/sections/Hero";
import Proof from "@/components/finance/sections/Proof";
import { ProblemSection, SolutionSection } from "@/components/finance/sections/ProblemSolution";
import { ServicesTeaser } from "@/components/finance/sections/Services";
import { CaseStudiesTeaser } from "@/components/finance/sections/Cases";
import Testimonials from "@/components/finance/sections/Testimonials";
import Faq from "@/components/finance/sections/Faq";
import FinalCta from "@/components/finance/sections/Cta";
import { FaqJsonLd } from "@/components/finance/JsonLd";
import { BRAND, FAQ, r } from "@/lib/finance";

export const metadata: Metadata = {
  title: {
    absolute: `${BRAND.name} by eCreator — Mehr Beratungstermine für Finanzberater & Broker`,
  },
  description: BRAND.subclaim,
  alternates: { canonical: BRAND.url + r() + "/" },
};

export default function FinanceHome() {
  return (
    <>
      <FaqJsonLd items={FAQ as unknown as { q: string; a: string }[]} />
      <Hero />
      <Proof />
      <ProblemSection />
      <SolutionSection />
      <ServicesTeaser />
      <CaseStudiesTeaser />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
