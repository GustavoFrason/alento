/**
 * Tipos e interfaces compartilhados no projeto Alento
 * ---------------------------------------------------
 * Este arquivo centraliza as definições de tipos de domínio,
 * garantindo consistência e escalabilidade do código.
 */

/**
 * Tipos de tags aplicáveis aos produtos.
 * Usadas para filtros, SEO e destaques visuais.
 */
export type ProductTag = "promoção" | "novidade" | "mais-vendido" | "limitado" | "pronta";

/**
 * Cores padrão das guirlandas.
 * Define o tom predominante do produto.
 */
export type ProductColor = 
  | "dourado" 
  | "branco" 
  | "verde" 
  | "vermelho" 
  | "rosé" 
  | "prata" 
  | "marrom" 
  | "multicolor";

/**
 * Estilos de design das guirlandas.
 * Usado para filtros de estética e recomendações.
 */
export type ProductStyle = 
  | "clássico" 
  | "moderno" 
  | "rústico" 
  | "romântico" 
  | "minimalista" 
  | "luxo" 
  | "elegante" 
  | "festivo" 
  | "tradicional";

/**
 * Entidade base de produto.
 * Representa os dados principais exibidos no site e nas integrações.
 */
export interface Product {
  /** Identificador único do produto (ex.: "A01") */
  id: string;

  /** Nome ou título comercial do produto */
  title: string;

  /** Caminho da imagem (relativo a /public/products) */
  imageSrc: string;

  /** Preço atual do produto (em reais) */
  price: number;

  /** Preço anterior — usado para exibir descontos */
  compareAtPrice?: number;

  /** Lista de etiquetas ou categorias visuais */
  tags?: ProductTag[];

  /** Cor predominante */
  color?: ProductColor;

  /** Estilo visual predominante */
  style?: ProductStyle;

  /**
   * Score de relevância do produto (0–1)
   * Usado para ordenação e recomendação por IA.
   */
  score?: number;

  /** Diâmetro aproximado da guirlanda (ex.: "40 cm", "45 cm") */
  sizeCm?: string;
}

/**
 * Dados da loja — centralizados para exibição no rodapé e SEO.
 */
export interface StoreInfo {
  /** Nome comercial da marca */
  name: string;

  /** Slogan ou frase de impacto */
  slogan: string;

  /** Número do WhatsApp com DDI (ex.: 5541999999999) */
  whatsapp: string;

  /** Link do Instagram oficial */
  instagram: string;

  /** (opcional) Endereço físico ou link do mapa */
  address?: string;

  /** (opcional) E-mail de contato */
  email?: string;
}
