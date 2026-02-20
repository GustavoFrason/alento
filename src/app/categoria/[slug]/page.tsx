import { IMPORTED_PRODUCTS } from "@/lib/data/imported-products";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CategoryPageContent } from "./CategoryPageContent";
import type { ImportedProductCategory } from "@/lib/types";

const validCategories: Record<string, { label: string; description: string }> = {
  roupas: {
    label: "Roupas",
    description: "Jaquetas, moletons, camisetas e mais das melhores marcas americanas.",
  },
  bolsas: {
    label: "Bolsas",
    description: "Bolsas, mochilas e carteiras de marcas premium importadas dos EUA.",
  },
  acessorios: {
    label: "Acessórios",
    description: "Óculos, relógios, perfumes e acessórios de luxo importados.",
  },
  eletronicos: {
    label: "Eletrônicos",
    description: "Fones, speakers, e-readers e gadgets direto dos Estados Unidos.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(validCategories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cat = validCategories[slug];
  if (!cat) return { title: "Categoria não encontrada" };

  return {
    title: `${cat.label} | ALENTO — Produtos Importados`,
    description: cat.description,
    openGraph: {
      title: `${cat.label} | ALENTO`,
      description: cat.description,
      url: `https://alentostore.com.br/categoria/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const cat = validCategories[slug];

  if (!cat) {
    notFound();
  }

  const products = IMPORTED_PRODUCTS.filter(
    (p) => p.category === (slug as ImportedProductCategory)
  );

  return <CategoryPageContent label={cat.label} description={cat.description} products={products} />;
}
