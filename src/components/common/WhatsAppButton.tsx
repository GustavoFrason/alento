// src/components/common/WhatsAppButton.tsx
"use client";

import type { ComponentProps } from "react";
import clsx from "clsx";

type Variant = "solid" | "outline" | "glass";

type Props = {
  href: string;
  label?: string;
  ariaLabel?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
} & Omit<ComponentProps<"a">, "href">;

const sizes = {
  sm: "h-9 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

export default function WhatsAppButton({
  href,
  label = "Comprar no WhatsApp",
  ariaLabel,
  onClick,
  variant = "solid",
  size = "md",
  className,
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9A86A] " +
    "disabled:opacity-50 disabled:pointer-events-none select-none";

  const variants: Record<Variant, string> = {
    solid:
      "text-white bg-gradient-to-b from-[#466548] to-[#334833] " +
      "shadow-sm ring-1 ring-inset ring-white/10 hover:opacity-95 active:opacity-90",
    outline:
      "text-[#3F5A3A] border border-[#3F5A3A]/40 bg-white/70 hover:bg-white " +
      "backdrop-blur supports-[backdrop-filter]:bg-white/60",
    glass:
      "text-white bg-white/10 hover:bg-white/15 border border-white/30 " +
      "backdrop-blur supports-[backdrop-filter]:bg-white/20",
  };

  return (
    <a
      href={href}
      aria-label={ariaLabel ?? label}
      onClick={onClick}
      target="_blank"
      rel="noopener nofollow"
      className={clsx(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-5 shrink-0"
        fill="currentColor"
      >
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.6 0 .35 5.25.35 11.7c0 2.06.54 4.06 1.56 5.84L0 24l6.65-1.94a11.6 11.6 0 0 0 5.4 1.37h.01c6.44 0 11.69-5.25 11.69-11.7 0-3.12-1.22-6.05-3.23-8.25Zm-8.47 18.3h-.01c-1.73 0-3.43-.46-4.92-1.33l-.35-.2-3.95 1.15 1.13-3.85-.23-.4A9.73 9.73 0 0 1 2.2 11.7c0-5.37 4.37-9.74 9.77-9.74 2.61 0 5.07 1.02 6.92 2.86a9.66 9.66 0 0 1 2.85 6.88c0 5.38-4.38 9.75-9.72 9.75Zm5.3-7.29c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.68.14-.2.29-.78.96-.96 1.16-.18.2-.36.22-.66.08-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.7-1.61-1.99-.17-.29-.02-.46.13-.6.13-.12.3-.33.45-.5.15-.17.2-.29.3-.48.1-.2.05-.36-.02-.5-.07-.14-.68-1.64-.94-2.25-.25-.6-.51-.52-.68-.53l-.58-.01c-.2 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.44 1.03 2.83 1.18 3.02.15.2 2.03 3.09 4.93 4.33.69.3 1.22.47 1.64.6.69.22 1.31.19 1.8.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34Z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
