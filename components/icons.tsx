import type { SVGProps } from "react";

type I = SVGProps<SVGSVGElement>;
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ChevronRight = (p: I) => (
  <svg {...base} {...p}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const Sparkles = (p: I) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M5 12H3M21 12h-2M6.3 6.3 4.8 4.8M19.2 19.2l-1.5-1.5M17.7 6.3l1.5-1.5M4.8 19.2l1.5-1.5" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>
);

export const Calendar = (p: I) => (
  <svg {...base} {...p}>
    <rect x="3" y="4.5" width="18" height="16" rx="3" />
    <path d="M3 9h18M8 2.5v4M16 2.5v4" />
  </svg>
);

export const Layers = (p: I) => (
  <svg {...base} {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5M3 16l9 5 9-5" opacity={0.5} />
  </svg>
);

export const Trophy = (p: I) => (
  <svg {...base} {...p}>
    <path d="M6 4h12v4a6 6 0 0 1-12 0V4Z" />
    <path d="M6 6H3.5A2.5 2.5 0 0 0 6 9.5M18 6h2.5A2.5 2.5 0 0 1 18 9.5M9 20h6M12 14v6" />
  </svg>
);

export const Instagram = (p: I) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
  </svg>
);

export const TikTok = (p: I) => (
  <svg {...base} {...p}>
    <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5c.4 0 .8.06 1.1.18" />
    <path d="M14 3c.4 2.2 2 3.8 4.5 4.1" />
  </svg>
);

export const LinkedIn = (p: I) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M7 10v7M7 7.2v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" />
  </svg>
);

export const WhatsApp = (p: I) => (
  <svg {...base} {...p}>
    <path d="M3.5 20.5l1.3-4.2A8 8 0 1 1 8 19.4l-4.5 1.1Z" />
    <path d="M9 9.5c.2 2 2.5 4.3 4.5 4.5.6.05 1.2-.5 1.4-1 .1-.3 0-.6-.3-.8l-1.2-.7c-.3-.15-.6-.1-.8.15l-.3.35c-.7-.35-1.3-.95-1.65-1.65l.35-.3c.25-.2.3-.5.15-.8l-.7-1.2c-.2-.3-.5-.4-.8-.3-.5.2-1.05.8-1 1.4Z" />
  </svg>
);

export const Globe = (p: I) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </svg>
);

export const YouTube = (p: I) => (
  <svg {...base} {...p}>
    <rect x="3" y="6" width="18" height="12" rx="4" />
    <path d="m10.5 9.5 4 2.5-4 2.5v-5Z" fill="currentColor" stroke="none" />
  </svg>
);

export const Cpu = (p: I) => (
  <svg {...base} {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2.5" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
    <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
  </svg>
);

export const Database = (p: I) => (
  <svg {...base} {...p}>
    <ellipse cx="12" cy="5.5" rx="7" ry="2.7" />
    <path d="M5 5.5v6c0 1.5 3.1 2.7 7 2.7s7-1.2 7-2.7v-6M5 11.5v6c0 1.5 3.1 2.7 7 2.7s7-1.2 7-2.7v-6" />
  </svg>
);

export const Target = (p: I) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.8" />
    <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);

export const Workflow = (p: I) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="7" height="7" rx="2" />
    <rect x="14" y="14" width="7" height="7" rx="2" />
    <path d="M6.5 10v3a3 3 0 0 0 3 3H14" />
  </svg>
);

export const Search = (p: I) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
);

export const Film = (p: I) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" />
  </svg>
);

export const Check = (p: I) => (
  <svg {...base} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Star = (p: I & { filled?: boolean }) => (
  <svg
    {...base}
    {...p}
    fill={p.filled ? "currentColor" : "none"}
    strokeWidth={p.filled ? 0 : 1.5}
  >
    <path d="m12 2.5 2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.9l-5.8 3.05 1.1-6.45-4.7-4.6 6.5-.95L12 2.5Z" />
  </svg>
);

export const ArrowRight = (p: I) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Lock = (p: I) => (
  <svg {...base} {...p}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15.3" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const Shield = (p: I) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5c0 4.4-3 8-7 10-4-2-7-5.6-7-10V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

