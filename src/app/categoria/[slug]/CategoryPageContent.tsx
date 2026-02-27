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
  const [filterCondition, setFilterCondition] = useState<"all" | "new" | "pre-owned">("all");

  const filteredAndSortedProducts = useMemo(() => {
    let list = [...products];
    
    // Filter
    if (filterCondition !== "all") {
      list = list.filter(p => p.condition === filterCondition);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "newest":
        return list.reverse();
      default:
        return list;
    }
  }, [products, sortBy, filterCondition]);

  return (
    <>
      <main className="pt-20 md:pt-24 pb-16">
        <Container>
          {/* Breadcrumb */}
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/40 mb-6 transition-colors duration-500">
              <Link href="/" className="hover:text-navy dark:hover:text-brand-gold transition-colors">Início</Link>
              <span>/</span>
              <Link href="/#categories" className="hover:text-navy dark:hover:text-brand-gold transition-colors">Categorias</Link>
              <span>/</span>
              <span className="text-navy dark:text-brand-gold font-medium">{label}</span>
            </nav>
          </Reveal>

          {/* Header & Sorting */}
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <SectionTitle title={label} subtitle={description} centered={false} />
                <p className="text-sm text-gray-400 dark:text-white/30 mt-2 font-sans transition-colors">
                  Mostrando {filteredAndSortedProducts.length} {filterCondition === "pre-owned" ? "itens seminovos" : filterCondition === "new" ? "itens novos" : "produtos premium"}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Condition Filter */}
                <div className="flex bg-gray-100 dark:bg-white/5 p-1 rounded-xl border border-gray-200 dark:border-white/10 transition-colors">
                  <button 
                    onClick={() => setFilterCondition("all")}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                      filterCondition === "all" ? "bg-white dark:bg-brand-gold text-navy dark:text-brand-forest shadow-sm" : "text-gray-500 dark:text-white/40 hover:text-navy dark:hover:text-white"
                    }`}
                  >
                    Todos
                  </button>
                  <button 
                    onClick={() => setFilterCondition("new")}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                      filterCondition === "new" ? "bg-white dark:bg-brand-gold text-navy dark:text-brand-forest shadow-sm" : "text-gray-500 dark:text-white/40 hover:text-navy dark:hover:text-white"
                    }`}
                  >
                    Novos
                  </button>
                  <button 
                    onClick={() => setFilterCondition("pre-owned")}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                      filterCondition === "pre-owned" ? "bg-white dark:bg-brand-gold text-navy dark:text-brand-forest shadow-sm" : "text-gray-500 dark:text-white/40 hover:text-navy dark:hover:text-white"
                    }`}
                  >
                    Seminovos
                  </button>
                </div>

                {/* Sort */}
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/20">
                    <FaSortAmountDown />
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="appearance-none bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-12 pr-10 text-sm font-medium text-navy dark:text-brand-champagne focus:outline-none focus:ring-2 focus:ring-accent/20 dark:focus:ring-brand-gold/20 focus:border-accent dark:focus:border-brand-gold transition-all cursor-pointer hover:border-gray-300 dark:hover:border-white/20"
                  >
                    <option value="featured" className="dark:bg-navy">Destaques</option>
                    <option value="price-asc" className="dark:bg-navy">Menor Preço</option>
                    <option value="price-desc" className="dark:bg-navy">Maior Preço</option>
                    <option value="newest" className="dark:bg-navy">Novidades</option>
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
            {filteredAndSortedProducts.map((product, index) => (
              <ImportedProductCard key={product.id} product={product} delay={index * 0.08} />
            ))}
          </div>

          {/* Back */}
          <div className="mt-12 text-center">
            <Link
              href="/#categories"
              className="inline-flex items-center gap-2 text-navy dark:text-brand-gold hover:text-accent dark:hover:opacity-80 font-medium transition-all"
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
