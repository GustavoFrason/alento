// src/lib/analytics.ts

// Tipagem do gtag no Window (GA4)
declare global {
  interface Window {
    gtag?: (command: "config" | "event", targetIdOrName: string, params?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

/** Dispara pageview no GA4 */
export function pageview(url: string) {
  if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("config", GA_ID, { page_path: url });
}

/** Dispara um evento genérico no GA4 */
export function eventGA(action: string, params: Record<string, unknown> = {}) {
  if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", action, params);
}

/** Evento semântico para clique no WhatsApp */
export function trackWhatsAppClick(context: string, product?: string) {
  eventGA("whatsapp_click", {
    context,            // ex.: "header", "floating", "product_card"
    product_name: product ?? null,
  });
}