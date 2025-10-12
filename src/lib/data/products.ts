import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "festiva-perolas",
    slug: "guirlanda-festiva-perolas",
    name: "Guirlanda Festiva Pérolas",
    price: 299,
    image: "/images/guirlanda-1.jpg",
    alt: "Guirlanda de Natal com pérolas e laço verde musgo",
    sku: "ALN-001",
    objectPosition: "50% 50%",
  },
  {
    id: "classica-dourada",
    slug: "guirlanda-classica-dourada",
    name: "Guirlanda Clássica Dourada",
    price: 239,
    image: "/images/guirlanda-2.jpg",
    alt: "Guirlanda clássica com bolas douradas e pinhas",
    sku: "ALN-002",
    objectPosition: "50% 48%",
  },
  {
    id: "acolhimento-vermelho",
    slug: "guirlanda-acolhimento-vermelha",
    name: "Guirlanda Acolhimento Vermelha",
    price: 299,
    image: "/images/guirlanda-3.jpg",
    alt: "Guirlanda com laço vermelho e detalhes naturais",
    sku: "ALN-003",
    objectPosition: "50% 45%",
  },
];