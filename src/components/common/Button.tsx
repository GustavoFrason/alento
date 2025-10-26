"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export function Button({ children, href, variant = "primary", onClick }: ButtonProps) {
  const base = clsx(
    "inline-block px-6 py-3 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold",
    variant === "primary"
      ? "bg-olive text-white hover:bg-gold"
      : "border border-olive text-olive hover:bg-olive hover:text-white"
  );

  const Component = href ? "a" : "button";
  return (
    <motion.div whileTap={{ scale: 0.97 }}>
      <Component className={base} href={href} onClick={onClick}>
        {children}
      </Component>
    </motion.div>
  );
}
