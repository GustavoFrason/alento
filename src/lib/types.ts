export type Product = {
  id: string;
  name: string;
  slug: string;
  sku?: string;
  price: number;
  image: string;
  alt: string;
  badges?: string[];
  /** Ajusta o foco do crop, ex.: "50% 45%" */
  objectPosition?: string;
};