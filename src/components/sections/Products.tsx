"use client";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProductCard } from "@/components/sections/ProductCard";
import { ProductFilters } from "@/components/product/ProductFilters";
import { PRODUCTS } from "@/lib/data/products";
import { useState, useCallback } from "react";
import type { Product } from "@/lib/types";

export function Products() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(8); // Mostra 8 inicialmente

  const handleFilterChange = useCallback((products: Product[]) => {
    setFilteredProducts(products);
    setVisibleCount(8); // Reset ao filtrar
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setVisibleCount(8); // Reset ao buscar
  }, []);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = filteredProducts.length > visibleCount;


  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-cream">
      <div className="container">
        <SectionTitle
          title="Coleção de Natal"
          subtitle="Guirlandas artesanais feitas à mão com detalhes únicos"
        />

        {/* Filters */}
        <ProductFilters
          products={PRODUCTS}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
        />

        {/* Results Info */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-gray-600">
            {searchQuery ? (
              <span>
                {filteredProducts.length} resultado{filteredProducts.length !== 1 ? "s" : ""} para &ldquo;{searchQuery}&rdquo;
              </span>
            ) : (
              <span>
                {filteredProducts.length} guirlanda{filteredProducts.length !== 1 ? "s" : ""} disponível{filteredProducts.length !== 1 ? "is" : ""}
              </span>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {visibleProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  delay={index * 0.1}
                />
              ))}
            </div>
            
            {/* Ver mais button */}
            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setVisibleCount(prev => prev + 8)}
                  className="px-8 py-3 bg-olive hover:bg-olive/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Ver mais produtos ({filteredProducts.length - visibleCount} restantes)
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-playfair text-gray-600 mb-2">
              Nenhuma guirlanda encontrada
            </h3>
            <p className="text-gray-500 mb-6">
              Tente ajustar os filtros ou fazer uma nova busca
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setFilteredProducts(PRODUCTS);
              }}
              className="px-6 py-3 bg-olive text-white rounded-lg hover:bg-olive/90 transition-colors"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
