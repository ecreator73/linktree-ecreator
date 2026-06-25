import { Reveal } from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={
        centered ? "mx-auto max-w-xl text-center" : "max-w-xl text-left"
      }
    >
      {eyebrow && (
        <span
          className={`mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-1 w-1 rounded-full bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-[2rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
