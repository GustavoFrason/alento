import { IMPORTED_PRODUCTS } from "@/lib/data/imported-products";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductDetail } from "./ProductDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return IMPORTED_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = IMPORTED_PRODUCTS.find((p) => p.id === id);
  if (!product) return { title: "Produto não encontrado" };

  return {
    title: `${product.title} | ALENTO`,
    description: product.description || `${product.title} — Importado dos EUA. ${product.brand || ""}`,
    openGraph: {
      title: `${product.title} | ALENTO`,
      description: product.description || `Produto importado dos EUA`,
      url: `https://alentostore.com.br/produto/${product.id}`,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = IMPORTED_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Related products — same category, excluding current
  const related = IMPORTED_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return <ProductDetail product={product} related={related} />;
}
