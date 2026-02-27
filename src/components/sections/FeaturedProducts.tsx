"use client";
import { SectionTitle } from "@/components/common/SectionTitle";
import { IMPORTED_PRODUCTS } from "@/lib/data/imported-products";
import type { ImportedProductCategory } from "@/lib/types";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { PremiumProductCard } from "@/components/product/PremiumProductCard";

/* ──────────────────────────────────────────────
   Filtro de Categorias (Tabs)
   ────────────────────────────────────────────── */
type FilterTab = "todos" | ImportedProductCategory;

const tabs: { key: FilterTab; label: string }[] = [
  { key: "todos", label: "Tudo" },
  { key: "roupas", label: "Roupas" },
  { key: "bolsas", label: "Bolsas" },
  { key: "acessorios", label: "Acessórios" },
  { key: "eletronicos", label: "Eletrônicos" },
];

/* ──────────────────────────────────────────────
   Seção de Produtos em Destaque
   ────────────────────────────────────────────── */
export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<FilterTab>("todos");

  const filtered = useMemo(() => {
    if (activeTab === "todos") return IMPORTED_PRODUCTS;
    return IMPORTED_PRODUCTS.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 bg-cream dark:bg-navy transition-colors duration-500">
      <div className="container">
        <SectionTitle
          title="Produtos em Destaque"
          subtitle="Os mais procurados pelos nossos clientes"
          centered
        />

        {/* Category Tabs - Editorial Serif Design */}
        <div className="w-full flex flex-col items-center mb-10 md:mb-16 px-4">
          <nav className="w-full flex overflow-x-auto md:flex-wrap md:justify-center gap-x-6 md:gap-x-12 gap-y-4 no-scrollbar pb-2 md:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative py-2 text-[10px] md:text-[11px] font-serif uppercase tracking-[0.2em] md:tracking-[0.3em] transition-colors duration-500 whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab.key
                    ? "text-navy dark:text-brand-gold font-bold"
                    : "text-gray-400 dark:text-white/20 hover:text-navy dark:hover:text-brand-gold"
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-px bg-brand-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Results count */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 dark:text-white/30 transition-colors duration-500">
            {filtered.length} produto{filtered.length !== 1 ? "s" : ""}{" "}
            {activeTab !== "todos" ? `em ${tabs.find((t) => t.key === activeTab)?.label}` : "disponíveis"}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16">
          {filtered.map((product, index) => (
            <PremiumProductCard
              key={product.id}
              product={product}
              delay={index * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
