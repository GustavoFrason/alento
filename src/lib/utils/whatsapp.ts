import type { Product } from "@/lib/types";

/**
 * Gera uma mensagem personalizada para WhatsApp com informações do produto
 */
export function generateWhatsAppMessage(product: Product): string {
  try {
    const {
      title = "Guirlanda",
      price = 0,
      compareAtPrice,
      sizeCm = "N/A",
      color = "N/A",
      style = "N/A",
      tags = []
    } = product;

    // Formatação do preço
    const priceFormatted = `R$ ${price.toFixed(2).replace(".", ",")}`;
    const originalPrice = compareAtPrice 
      ? ` (de R$ ${compareAtPrice.toFixed(2).replace(".", ",")})`
      : "";

    // Tags relevantes
    const relevantTags = Array.isArray(tags) ? tags.filter(tag => 
      ["promoção", "novidade", "mais-vendido"].includes(tag)
    ) : [];

    const tagsText = relevantTags.length > 0 
      ? `\n🏷️ *Destaques:* ${relevantTags.map(tag => {
          switch(tag) {
            case "promoção": return "🔥 Promoção";
            case "novidade": return "✨ Novidade";
            case "mais-vendido": return "⭐ Mais Vendido";
            default: return tag;
          }
        }).join(" • ")}`
      : "";

    // Mensagem personalizada
    const message = `🎄 *Olá! Tenho interesse nesta guirlanda personalizada:*\n\n` +
      `*${title}*\n` +
      `💰 *Investimento:* ${priceFormatted}${originalPrice}\n` +
      `📏 *Tamanho:* ${sizeCm}\n` +
      `🎨 *Cor:* ${color?.charAt(0).toUpperCase()}${color?.slice(1)}\n` +
      `✨ *Estilo:* ${style?.charAt(0).toUpperCase()}${style?.slice(1)}${tagsText}\n\n` +
      `💬 *Gostaria de saber mais sobre:*\n` +
      `• Personalização do laço e mensagem\n` +
      `• Formas de pagamento\n` +
      `• Prazo de entrega\n` +
      `• Garantia de qualidade\n\n` +
      `🚚 *Entrega em todo Brasil*\n` +
      `🎁 *Embalagem especial para presente*`;

    return encodeURIComponent(message);
  } catch (error) {
    console.error('Erro ao gerar mensagem do WhatsApp:', error);
    return encodeURIComponent('🎄 Olá! Gostaria de comprar uma guirlanda personalizada!');
  }
}

/**
 * Gera o link do WhatsApp com a mensagem personalizada
 */
export function generateWhatsAppLink(product: Product, phoneNumber: string = "5511999999999"): string {
  const message = generateWhatsAppMessage(product);
  return `https://wa.me/${phoneNumber}?text=${message}`;
}
