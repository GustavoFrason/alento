import type { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "whatsapp" | "outline";
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95";

  const variants = {
    primary: "bg-accent hover:bg-accent/90 text-navy",
    secondary: "bg-white hover:bg-gray-50 text-navy border border-gray-100",
    whatsapp: "bg-green-600 hover:bg-green-700 text-white",
    outline: "border-2 border-white/20 text-white hover:bg-white/10",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} className={combinedClasses} target={target} rel={rel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
