"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getStore, getWaLink } from "@/lib/store";
import { trackWhatsAppClick } from "@/lib/analytics";

const OLIVE = "#3F5A3A";

export function Header() {
  const STORE = getStore();
  const waLink = getWaLink("Olá! Vim do site e quero comprar uma guirlanda de Natal.");
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 text-white transition-shadow ${elevated ? "shadow-md" : ""}`}
      style={{ backgroundColor: `${OLIVE}E6` }}
    >
      <div className="mx-auto max-w-6xl px-4 h-14 md:h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-wide">
          <span className="opacity-95">{STORE.name}</span>
          <span className="sr-only"> – {STORE.slogan}</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#colecoes" className="text-white/90 hover:text-white">Kits Natal</a>
          <a href="#como-funciona" className="text-white/90 hover:text-white">Como funciona</a>
          <a href="#faq" className="text-white/90 hover:text-white">Dúvidas</a>
          <a href="#contato" className="text-white/90 hover:text-white">Contato</a>
        </nav>
        <a
          href={waLink}
          onClick={() => trackWhatsAppClick("header")}
          className="rounded-full bg-white text-[#3F5A3A] px-4 py-2 text-sm font-medium shadow hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          Comprar no WhatsApp
        </a>
      </div>
    </header>
  );
}