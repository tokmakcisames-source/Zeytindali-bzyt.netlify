import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        olive: { 900: "#0a1f0a", 800: "#1a3a1a", 700: "#2d5a2d", 600: "#4a7c59", 500: "#6b9e6b", 400: "#8fbc8f", 300: "#b8d4b8" },
        gold: { DEFAULT: "#d4af37", light: "#e5c158", dark: "#b8941d", muted: "rgba(212,175,55,0.1)" },
      },
      fontFamily: { serif: ["var(--font-playfair)", "serif"], sans: ["var(--font-inter)", "sans-serif"] },
      animation: { rise: "rise 12s linear infinite", "pulse-glow": "pulse-glow 3s ease-in-out infinite" },
      keyframes: {
        rise: { "0%": { transform: "translateY(0) scale(1)", opacity: "0" }, "10%": { opacity: "1" }, "90%": { opacity: "1" }, "100%": { transform: "translateY(-110vh) scale(0.5)", opacity: "0" } },
        "pulse-glow": { "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.1)" }, "50%": { boxShadow: "0 0 40px rgba(212,175,55,0.25)" } },
      },
    },
  },
  plugins: [],
};
export default config;
