import Link from "next/link";
import { BRAND, NAV, SOCIALS, r } from "@/lib/finance";
import { Mail, Phone } from "@/components/icons";

export default function FinanceFooter() {
  return (
    <footer className="relative z-10 border-t border-white/[0.07] bg-[#070707]">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#E7CE94] to-[#C9A659] text-base font-bold text-[#0A0A0A]">
                F
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-base font-semibold text-white">{BRAND.name}</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#D8B76A]/90">
                  {BRAND.badge}
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A3A3A3]">
              Digitale Akquise-Systeme für Finanzberater, Broker und Versicherungs­vermittler –
              entwickelt mit der Erfahrung von {BRAND.parent}.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 text-[#cfcfcf] transition-colors hover:text-[#D8B76A]">
                <Mail className="h-4 w-4 text-[#D8B76A]" /> {BRAND.email}
              </a>
              <a href={BRAND.phoneHref} className="inline-flex items-center gap-2 text-[#cfcfcf] transition-colors hover:text-[#D8B76A]">
                <Phone className="h-4 w-4 text-[#D8B76A]" /> {BRAND.phone}
              </a>
            </div>
          </div>

          {/* nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A3A3A3]">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href={r()} className="text-sm text-[#cfcfcf] transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#cfcfcf] transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A3A3A3]">
              Folgen
            </h4>
            <ul className="mt-4 space-y-2.5">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#cfcfcf] transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href={r("/analyse")}
              className="mt-6 inline-flex rounded-full border border-[#D8B76A]/40 px-4 py-2 text-sm font-medium text-[#D8B76A] transition-colors hover:bg-[#D8B76A]/10"
            >
              Kostenlose Analyse →
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-[#777] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name} · <span className="text-[#A3A3A3]">{BRAND.badge}</span>
          </p>
          <p className="flex items-center gap-4">
            <a href="https://ecreator.ch" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#D8B76A]">
              ecreator.ch
            </a>
            <span className="text-[#444]">·</span>
            <span>Made in Switzerland 🇨🇭</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
