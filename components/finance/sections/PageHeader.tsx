import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow } from "@/components/finance/ui";

export default function PageHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <section className="relative z-10 overflow-hidden pb-6 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-16 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,183,106,0.10),transparent_65%)] blur-2xl" />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          {sub && (
            <Reveal delay={0.16}>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#A3A3A3] sm:text-lg">
                {sub}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
