export const formatBRL = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

export function Price({ value }: { value: number }) {
  return <>{formatBRL(value)}</>;
}