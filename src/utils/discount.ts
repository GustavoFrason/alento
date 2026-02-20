/**
 * Calcula a porcentagem de desconto entre um preço original e um preço promocional.
 * @param price Preço atual.
 * @param compareAtPrice Preço original (anterior).
 * @returns Quantidade inteira de porcentagem de desconto (ex: 20). Retorna 0 se não houver desconto válido.
 */
export function calculateDiscountPercentage(price: number, compareAtPrice?: number): number {
  if (!compareAtPrice || compareAtPrice <= price) return 0;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}
