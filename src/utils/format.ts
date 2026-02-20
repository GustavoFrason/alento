/**
 * Formata um valor numérico para o formato de moeda BRL (Real Brasileiro).
 * @param value Valor numérico a ser formatado.
 * @returns String formatada (ex: R$ 1.250,00).
 */
export function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
