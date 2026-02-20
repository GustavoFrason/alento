/**
 * Gera um link direto para o WhatsApp com uma mensagem pré-definida.
 * @param phone Número do telefone (com DDD, somente números ou com formatação básica).
 * @param message Mensagem inicial a ser enviada.
 * @returns URL completa para o WhatsApp API.
 */
export function getWhatsAppLink(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^\d]/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
