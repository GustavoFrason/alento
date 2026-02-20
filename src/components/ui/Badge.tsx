import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "navy" | "red" | "accent" | "white";
  className?: string;
}

export function Badge({ children, variant = "navy", className = "" }: BadgeProps) {
  const variants = {
    navy: "bg-navy/90 text-white",
    red: "bg-red-500 text-white",
    accent: "bg-accent text-navy",
    white: "bg-white/90 backdrop-blur-sm text-navy",
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-bold shadow-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
