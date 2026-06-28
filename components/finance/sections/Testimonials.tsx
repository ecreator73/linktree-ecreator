import { Reveal } from "@/components/Reveal";
import { Container, Section, SectionHeading, PlaceholderTag } from "@/components/finance/ui";
import { TESTIMONIALS } from "@/lib/finance";
import { Star } from "@/components/icons";

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#D8B76A]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled className="h-4 w-4" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <Reveal>
          <SectionHeading
            center
            eyebrow="Stimmen"
            title="Was Berater über die Zusammenarbeit sagen."
            sub="Im Google-Review-Stil. Die folgenden Stimmen sind Beispiel-Inhalte und werden durch echte, freigegebene Bewertungen ersetzt."
          />
        </Reveal>

        <div className="mt-6 flex justify-center">
          <PlaceholderTag>Beispiel-Bewertungen · später ersetzbar</PlaceholderTag>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 0.06}>
              <figure className="break-inside-avoid rounded-2xl border border-white/[0.07] bg-[#101010] p-5 transition-colors duration-300 hover:border-[#D8B76A]/25">
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#555]">
                    Google
                  </span>
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-[#d6d6d6]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#E7CE94] to-[#C9A659] text-xs font-bold text-[#0A0A0A]">
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-[#A3A3A3]">{t.role} · {t.region}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
