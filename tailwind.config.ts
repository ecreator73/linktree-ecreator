import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        card: "#101010",
        secondary: "#181818",
        ink: "#FFFFFF",
        muted: "#A3A3A3",
        accent: "#B8FF3B",
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
      },
      animation: {
        float: "float 14s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
