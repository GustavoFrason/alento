// src/components/common/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getStore, getWaLink } from "@/lib/store";
import { trackWhatsAppClick } from "@/lib/analytics";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const OLIVE = "#3F5A3A";

export function Header() {
  const STORE = getStore();
  const waLink = getWaLink("Olá! Vim do site e quero comprar uma guirlanda de Natal.");
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const body = document.body;
    if (open) {
      const prev = body.style.overflow;
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 text-white transition-shadow border-b border-white/10 bg-[#3F5A3A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#3F5A3A]/90 ${elevated ? "shadow-md" : ""}`}
      style={{ backgroundColor: `${OLIVE}E6` }}
    >
      <div className="mx-auto max-w-6xl px-4 h-14 md:h-16 grid items-center gap-3 md:[grid-template-columns:auto_1fr_auto] grid-cols-3">
        {/* Logo */}
        <div className="flex md:justify-start justify-center">
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm"
            aria-label={`${STORE.name} – ${STORE.slogan}`}
          >
            <span className="font-serif text-[21px] sm:text-[23px] md:text-[25px] lg:text-[26px] tracking-[0.14em] md:tracking-[0.18em] font-semibold text-gold-soft">
              ALENTO
            </span>
          </Link>
        </div>

        {/* Nav central (desktop) */}
        <nav
          className="hidden md:flex justify-center items-center gap-9 text-[15px]"
          role="navigation"
          aria-label="Navegação principal"
        >
          <a href="#colecoes" className="text-white/90 hover:text-white">Kits Natal</a>
          <a href="#como-funciona" className="text-white/90 hover:text-white">Como funciona</a>
          <a href="#faq" className="text-white/90 hover:text-white">Dúvidas</a>
          <a href="#contato" className="text-white/90 hover:text-white">Contato</a>
        </nav>

        {/* CTA + menu */}
        <div className="flex justify-end items-center gap-3">
          {/* Desktop: botão completo */}
          <WhatsAppButton
            href={waLink}
            label="Comprar no WhatsApp"
            ariaLabel="Ir para o WhatsApp para comprar"
            variant="solid"
            size="sm"
            onClick={() => trackWhatsAppClick("header")}
            className="hidden md:inline-flex"
          />

          {/* Mobile: ícone-only */}
          <WhatsAppButton
            href={waLink}
            label=""
            ariaLabel="Comprar no WhatsApp"
            variant="solid"
            size="sm"
            onClick={() => trackWhatsAppClick("header_mobile_icon")}
            className="md:hidden !px-2"
          />

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            onClick={() => setOpen(v => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* overlay mobile */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px]" aria-hidden="true" />
      )}

      {/* painel mobile */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`md:hidden z-50 text-white border-t border-white/15 transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[60dvh] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
        style={{ backgroundColor: OLIVE }}
      >
        <nav
          className="mx-auto max-w-6xl px-4 py-3 grid gap-3 text-sm"
          role="navigation"
          aria-label="Navegação móvel"
        >
          <a onClick={() => setOpen(false)} href="#colecoes" className="text-white/90 hover:text-white">Kits Natal</a>
          <a onClick={() => setOpen(false)} href="#como-funciona" className="text-white/90 hover:text-white">Como funciona</a>
          <a onClick={() => setOpen(false)} href="#faq" className="text-white/90 hover:text-white">Dúvidas</a>
          <a onClick={() => setOpen(false)} href="#contato" className="text-white/90 hover:text-white">Contato</a>
          <div className="mt-2">
            <WhatsAppButton
              href={waLink}
              label="Comprar no WhatsApp"
              ariaLabel="Ir para o WhatsApp para comprar"
              variant="solid"
              size="md"
              onClick={() => { trackWhatsAppClick("header_mobile_panel"); setOpen(false); }}
              className="w-full justify-center"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}