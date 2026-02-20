"use client";
import { Reveal } from "@/components/common/Reveal";
import { SectionTitle } from "@/components/common/SectionTitle";
import { IMPORTED_PRODUCTS } from "@/lib/data/imported-products";
import type { ImportedProduct, ImportedProductCategory } from "@/lib/types";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useMemo } from "react";
import Link from "next/link";

/* ──────────────────────────────────────────────
   Card de Produto Importado
   ────────────────────────────────────────────── */
function ImportedProductCard({ product, delay = 0 }: { product: ImportedProduct; delay?: number }) {
  const discountPercentage = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  const categoryLabels: Record<string, string> = {
    roupas: "Roupas",
    bolsas: "Bolsas",
    acessorios: "Acessórios",
    eletronicos: "Eletrônicos",
  };

  const categoryEmoji: Record<string, string> = {
    roupas: "👔",
    bolsas: "👜",
    acessorios: "⌚",
    eletronicos: "🎧",
  };

  return (
    <Reveal delay={delay}>
      <Link
        href={`/produto/${product.id}`}
        className="group bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 cursor-pointer"
      >
        {/* Image placeholder with gradient */}
        <div className="relative overflow-hidden h-56 sm:h-64 bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Category badge */}
          <span className="absolute top-3 left-3 z-10 bg-navy/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {categoryLabels[product.category]}
          </span>

          {/* Discount badge */}
          {discountPercentage > 0 && (
            <span className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
              -{discountPercentage}%
            </span>
          )}

          {/* Placeholder visual */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate/5 to-navy/10 group-hover:scale-105 transition-transform duration-500">
            <div className="text-center">
              <span className="text-5xl">{categoryEmoji[product.category]}</span>
              <p className="text-xs text-gray-400 mt-2 font-medium">{product.brand}</p>
            </div>
          </div>

          {/* USA badge */}
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-navy text-xs font-semibold px-2.5 py-1 rounded-full">
            🇺🇸 Importado
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          {product.brand && (
            <span className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">
              {product.brand}
            </span>
          )}
          <h3 className="font-inter text-base font-semibold text-navy mb-2 line-clamp-2 leading-snug group-hover:text-accent transition-colors">
            {product.title}
          </h3>

          {product.description && (
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
          )}

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex gap-1.5 flex-wrap mb-3">
              {product.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full capitalize font-medium"
                >
                  {tag.replace("-", " ")}
                </span>
              ))}
            </div>
          )}

          {/* Price */}
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-bold text-navy">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-gray-400 line-through">
                  R$ {product.compareAtPrice.toFixed(2).replace(".", ",")}
                </span>
              )}
            </div>

            {/* CTA */}
            <span className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700 text-white text-sm font-semibold rounded-xl shadow-sm group-hover:shadow-md transition-all duration-200">
              <FaWhatsapp className="text-base" />
              <span>Ver Detalhes</span>
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* ──────────────────────────────────────────────
   Filtro de Categorias (Tabs)
   ────────────────────────────────────────────── */
type FilterTab = "todos" | ImportedProductCategory;

const tabs: { key: FilterTab; label: string; emoji: string }[] = [
  { key: "todos", label: "Todos", emoji: "🌟" },
  { key: "roupas", label: "Roupas", emoji: "👔" },
  { key: "bolsas", label: "Bolsas", emoji: "👜" },
  { key: "acessorios", label: "Acessórios", emoji: "⌚" },
  { key: "eletronicos", label: "Eletrônicos", emoji: "🎧" },
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
    <section id="products" className="py-16 sm:py-20 md:py-24 bg-cream">
      <div className="container">
        <SectionTitle
          title="Produtos em Destaque"
          subtitle="Os mais procurados pelos nossos clientes"
          centered
        />

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white rounded-2xl shadow-sm border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-navy text-white shadow-md"
                    : "text-gray-600 hover:text-navy hover:bg-gray-50"
                }`}
              >
                <span className="text-base">{tab.emoji}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500">
            {filtered.length} produto{filtered.length !== 1 ? "s" : ""}{" "}
            {activeTab !== "todos" ? `em ${tabs.find((t) => t.key === activeTab)?.label}` : "disponíveis"}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((product, index) => (
            <ImportedProductCard
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
