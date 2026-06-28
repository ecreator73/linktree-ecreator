import { Reveal } from "@/components/Reveal";
import { Container, GoldButton, GhostButton } from "@/components/finance/ui";
import { BRAND, r, type Vertical } from "@/lib/finance";
import { Check } from "@/components/icons";

export default function VerticalHero({ v }: { v: Vertical }) {
  return (
    <section className="relative z-10 overflow-hidden pb-8 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,183,106,0.10),transparent_65%)] blur-2xl" />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D8B76A]/30 bg-[#D8B76A]/10 px-4 py-1.5 text-xs font-medium text-[#D8B76A]">
              <v.icon className="h-4 w-4" />
              {v.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              {v.h1}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#A3A3A3] sm:text-lg">
              {v.sub}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <GoldButton href={r("/analyse")}>{BRAND.primaryCta}</GoldButton>
              <GhostButton href={r("/case-studies")} withArrow>
                {BRAND.secondaryCta}
              </GhostButton>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
              {v.audience.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-[#cfcfcf]"
                >
                  <Check className="h-3.5 w-3.5 text-[#B8FF3B]" /> {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

// Pain + benefit blocks shared by vertical pages
export function VerticalBody({ v }: { v: Vertical }) {
  return (
    <>
      <section className="relative z-10 py-20 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="font-display text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Kommt dir das bekannt vor?
            </h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {v.pains.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/[0.07] bg-[#101010] p-6">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/5 text-red-400">
                    ✕
                  </div>
                  <h3 className="text-base font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A3A3A3]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative z-10 py-20 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D8B76A]/30 to-transparent" />
        <Container>
          <Reveal>
            <h2 className="font-display text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              So sieht dein System aus.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-base text-[#A3A3A3]">
              Massgeschneidert auf deine Tätigkeit – nicht von der Stange.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {v.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="flex h-full gap-4 rounded-2xl border border-white/[0.07] bg-[#101010] p-6 transition-colors hover:border-[#D8B76A]/30">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D8B76A]/25 bg-[#D8B76A]/10 text-[#D8B76A]">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{b.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#A3A3A3]">{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
