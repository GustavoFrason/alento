"use client";

import { getWaLink } from "@/lib/store";
import { trackWhatsAppClick } from "@/lib/analytics";

export function FloatingWhatsApp() {
  const wa = getWaLink("Olá! Vim do site da ALENTO e quero comprar uma guirlanda.");
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      onClick={() => trackWhatsAppClick("floating")}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-[#3F5A3A] text-white px-4 py-3 shadow-lg hover:opacity-90"
    >
      💬 Fale conosco
    </a>
  );
}