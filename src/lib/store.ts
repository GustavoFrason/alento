import type { StoreInfo } from "@/lib/types";

/**
 * Retorna as informações principais da loja Alento.
 * Usado em Footer, SEO e contato via WhatsApp.
 */
export function getStore(): StoreInfo {
  return {
    name: "Alento",
    slogan: "Guirlandas que acolhem o espírito do Natal",
    whatsapp: "5541996384529",
    instagram: "https://instagram.com/alentodecor",
    address: "Curitiba – PR",
    email: "contato@alento.com.br",
  };
}

/**
 * Gera um link de WhatsApp com mensagem personalizada.
 * Se nenhuma mensagem for informada, usa um texto padrão.
 */
export function getWaLink(
  message: string = "Olá! Gostaria de saber mais sobre as guirlandas da Alento 🌿"
): string {
  const store = getStore();
  return `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(message)}`;
}
