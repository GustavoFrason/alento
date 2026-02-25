"use client";

import { useState, useMemo } from "react";
import { FaArrowLeft, FaSortAmountDown } from "react-icons/fa";
import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { ImportedProductCard } from "@/components/product/ImportedProductCard";
import type { ImportedProduct } from "@/lib/types";

type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

interface CategoryPageContentProps {
  label: string;
  description: string;
  products: ImportedProduct[];
}

export function CategoryPageContent({ label, description, products }: CategoryPageContentProps) {
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const sortedProducts = useMemo(() => {
    const list = [...products];
    switch (sortBy) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "newest":
        // Assuming higher ID or later in list is "newer" for this mock data
        return list.reverse();
      default:
        return list;
    }
  }, [products, sortBy]);

  return (
    <>
      <main className="pt-20 md:pt-24 pb-16">
        <Container>
          {/* Breadcrumb */}
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-navy transition-colors">Início</Link>
              <span>/</span>
              <Link href="/#categories" className="hover:text-navy transition-colors">Categorias</Link>
              <span>/</span>
              <span className="text-navy font-medium">{label}</span>
            </nav>
          </Reveal>

          {/* Header & Sorting */}
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <SectionTitle title={label} subtitle={description} centered={false} />
                <p className="text-sm text-gray-400 mt-2 font-sans">
                  Mostrando {products.length} produtos premium
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaSortAmountDown />
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="appearance-none bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-10 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all cursor-pointer hover:border-gray-300"
                  >
                    <option value="featured">Destaques</option>
                    <option value="price-asc">Menor Preço</option>
                    <option value="price-desc">Maior Preço</option>
                    <option value="newest">Novidades</option>
                  </select>
                  <div className="absolute right-4 top-0 bottom-0 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {sortedProducts.map((product, index) => (
              <ImportedProductCard key={product.id} product={product} delay={index * 0.08} />
            ))}
          </div>

          {/* Back */}
          <div className="mt-12 text-center">
            <Link
              href="/#categories"
              className="inline-flex items-center gap-2 text-navy hover:text-accent font-medium transition-colors"
            >
              <FaArrowLeft className="text-sm" />
              Voltar para Categorias
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
