// src/lib/analytics.ts

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

/** Tipagem segura para parâmetros de eventos GA4 */
export type GAParamValue = string | number | boolean | null | undefined;
export type GAParams = Record<string, GAParamValue>;

/** Tipos mínimos para gtag no window */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "config" | "event" | "js" | "consent",
      targetOrEventName?: string,
      paramsOrConfig?: GAParams
    ) => void;
  }
}

/** Retorna o gtag tipado se existir no runtime do browser */
function getGtag(): NonNullable<Window["gtag"]> | null {
  if (typeof globalThis === "undefined") return null;
  const w = globalThis as unknown as Window;
  return typeof w.gtag === "function" ? w.gtag : null;
}

/** Dispara eventos no GA4 de forma tipada */
export function trackEvent(action: string, params: GAParams = {}): void {
  if (!GA_ID) return;
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", action, params);
}

/** Pageview manual (útil em rotas client-side) */
export function gaPageview(url: string): void {
  trackEvent("page_view", { page_location: url });
}

/** Alias semântico para eventos genéricos */
export function gaEvent(name: string, params?: GAParams): void {
  trackEvent(name, params ?? {});
}

/** Evento específico para clique em WhatsApp */
export function trackWhatsAppClick(place: string, id?: string): void {
  trackEvent("click_whatsapp", { place, item_id: id ?? null, value: 1 });
}
