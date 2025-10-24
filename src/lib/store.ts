// src/lib/store.ts
export function getStore() {
  return {
    name: "ALENTO",
    slogan: "Guirlandas de Natal Artesanais",
    phone: "5541999999999",
    instagram: "https://www.instagram.com/alentostore", // <- adicionado
  };
}

/**
 * Gera link de WhatsApp com UTM. Mensagem é opcional (default segura).
 */
export function getWaLink(
  message: string = "Olá! Vim pelo site ALENTO e quero comprar uma guirlanda."
) {
  const { phone } = getStore();
  const text = encodeURIComponent(message);
  const utm = "utm_source=site&utm_medium=cta&utm_campaign=alento_lp";
  return `https://wa.me/${phone}?text=${text}&${utm}`;
}