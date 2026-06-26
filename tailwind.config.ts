import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--card)",
        secondary: "var(--secondary)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        // foreground accent — legible on both themes (deep lime on light)
        "accent-fg": "var(--accent-fg)",
        "accent-ink": "var(--accent-ink)",
        // semantic hairlines & overlays (theme-aware)
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        overlay: "var(--overlay)",
        "overlay-strong": "var(--overlay-strong)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "24px",
        xl3: "28px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.7)",
        glow: "0 0 0 1px rgba(184,255,59,0.25), 0 20px 60px -10px rgba(184,255,59,0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-22px) translateX(10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 14s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
