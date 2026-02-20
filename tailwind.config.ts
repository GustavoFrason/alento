import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        outfit: ["Outfit", "sans-serif"],
        sans: ["Outfit", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      colors: {
        // Nova paleta — sofisticada e moderna
        navy: "#0F172A",
        charcoal: "#1E293B",
        slate: "#334155",
        accent: "#C8A951",
        cream: "#FAFAF8",
        // Legado (usado em /guirlandas)
        brown: "#4b3b2a",
        olive: "#3f5a3a",
        gold: "#c2a052",
        gray: "#6b6b6b",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        slideUp: "slideUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
