"use client";

import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 border border-white/10 dark:border-white/5 shadow-sm hover:scale-110 transition-all duration-300"
      aria-label="Alternar Tema"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          animate={{
            scale: theme === "light" ? 1 : 0,
            opacity: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 90,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <FaSun className="text-brand-gold text-lg" />
        </motion.div>
        <motion.div
          animate={{
            scale: theme === "dark" ? 1 : 0,
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -90,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <FaMoon className="text-brand-gold text-lg" />
        </motion.div>
      </div>
    </button>
  );
}
