import Logo from "@/components/Logo";
import { URLS } from "@/lib/data";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="mx-auto mt-28 max-w-5xl px-6 pb-14">
      <div className="rounded-[28px] border border-line bg-card/50 p-8 sm:p-10">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <Logo width={240} className="h-auto w-[200px]" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We create customers,
              <br className="hidden sm:block" /> not clicks.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted">
            <a href={URLS.email} className="transition-colors hover:text-accent-fg">
              Kontakt
            </a>
            <a
              href={`${URLS.website}/impressum`}
              className="transition-colors hover:text-accent-fg"
            >
              Impressum
            </a>
            <a
              href={`${URLS.website}/datenschutz`}
              className="transition-colors hover:text-accent-fg"
            >
              Datenschutz
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-line pt-6 text-center text-xs text-muted/70 sm:text-left">
          © {year} eCreator · Schweizer Digitalagentur · info@ecreator.ch
        </div>
      </div>
    </footer>
  );
}
