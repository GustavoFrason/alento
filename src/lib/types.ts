// src/lib/types.ts
export type ProductTag =
  | "promocao"
  | "novidade"
  | "mais-vendido"
  | "limitado"
  | "pronta";

export type Product = {
  id: string;
  title: string;
  imageSrc: string;
  price: number;
  compareAtPrice?: number;
  tags?: ProductTag[];
  color?: "dourado" | "branco" | "verde" | "vermelho" | "rose";
  style?: "clássico" | "moderno" | "rústico";
  score?: number;
  /** Diâmetro aproximado da guirlanda, ex.: "40 cm", "45 cm" */
  sizeCm?: string;
};