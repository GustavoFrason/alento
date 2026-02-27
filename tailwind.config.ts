import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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
        // Identidade Alento (Verde & Dourado) - Proposta Refinada
        brand: {
          sage: "#A3B18A",
          forest: "#1B3022",
          gold: "#D4AF37",
          champagne: "#FAFAF8",
          // Paleta Cetim (Satin Silk)
          silk: {
            deep: "#0A3D1A",
            medium: "#2E5C3A",
            light: "#4A7C4A",
          }
        },
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
        "gradient-shift": "gradientShift 15s ease-in-out infinite",
        "pulse-slow": "pulseSlow 8s ease-in-out infinite",
        "glint": "glint 3s ease-in-out infinite",
        "drift": "drift 10s ease-in-out infinite",
        "float": "float 15s ease-in-out infinite",
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
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.1)" },
        },
        glint: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(30px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-40px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
