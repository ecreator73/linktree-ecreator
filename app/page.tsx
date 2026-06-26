import Background from "@/components/Background";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import LinkCards from "@/components/sections/LinkCards";
import CaseStudies from "@/components/sections/CaseStudies";
import Reels from "@/components/sections/Reels";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Why from "@/components/sections/Why";
import Socials from "@/components/sections/Socials";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />
      <Hero />
      <Stats />
      <Clients />
      <LinkCards />
      <CaseStudies />
      <Reels />
      <Services />
      <Testimonials />
      <Why />
      <Socials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
