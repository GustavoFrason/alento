import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1.25rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {
        olive: "#3F5A3A",
        gold: {
          DEFAULT: "#C9A34A",
          light: "#E6C97A",
          soft: "#E9D28A",
          dark: "#B6903B",
        },
      },
      fontFamily: {
        // usa as variáveis definidas no layout com next/font
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      dropShadow: {
        soft: "0 1px 1px rgba(0,0,0,0.12)",
      },
      boxShadow: {
        header: "0 2px 8px rgba(0,0,0,0.08)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in .35s ease-out both",
        "slide-down": "slide-down .35s ease-out both",
      },
      screens: {
        // mantém os padrões, mas você pode ajustar se quiser
      },
    },
  },
  plugins: [forms(), typography(), aspectRatio()],
};

export default config;