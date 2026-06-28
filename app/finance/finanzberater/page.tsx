import type { Metadata } from "next";
import VerticalHero, { VerticalBody } from "@/components/finance/sections/VerticalHero";
import { SolutionSection } from "@/components/finance/sections/ProblemSolution";
import { CaseStudiesTeaser } from "@/components/finance/sections/Cases";
import Testimonials from "@/components/finance/sections/Testimonials";
import Faq from "@/components/finance/sections/Faq";
import FinalCta from "@/components/finance/sections/Cta";
import { FaqJsonLd } from "@/components/finance/JsonLd";
import { BRAND, FAQ, VERTICALS, r } from "@/lib/finance";

const v = VERTICALS.finanzberater;

export const metadata: Metadata = {
  title: v.meta.title,
  description: v.meta.description,
  alternates: { canonical: BRAND.url + r("/finanzberater") + "/" },
  openGraph: { title: v.meta.title, description: v.meta.description },
};

export default function FinanzberaterPage() {
  return (
    <>
      <FaqJsonLd items={FAQ as unknown as { q: string; a: string }[]} />
      <VerticalHero v={v} />
      <VerticalBody v={v} />
      <SolutionSection />
      <CaseStudiesTeaser />
      <Testimonials />
      <Faq title="Fragen von Finanzberatern" />
      <FinalCta
        title="Vorsorge, Vermögen, Hypothek – digital sichtbar machen."
        sub="Sichere dir deine kostenlose Potenzialanalyse. Wir zeigen dir, wie du dein Know-how in planbare Beratungstermine verwandelst."
      />
    </>
  );
}
