"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTimes, FaArrowRight } from "react-icons/fa";
import { IMPORTED_PRODUCTS } from "@/lib/data/imported-products";
import { searchProducts } from "@/utils/search";
import type { ImportedProduct } from "@/lib/types";
import Link from "next/link";
import { PriceDisplay } from "@/components/ui/PriceDisplay";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ImportedProduct[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const filtered = searchProducts(IMPORTED_PRODUCTS, query);
    setResults(filtered.slice(0, 5)); // Limit to top 5 results
  }, [query]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-lg flex flex-col items-center pt-24 px-4 sm:px-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2"
          >
            <FaTimes className="text-2xl" />
          </button>

          <div className="w-full max-w-2xl">
            {/* Search Input */}
            <div className="relative group">
              <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-accent text-xl" />
              <input
                ref={inputRef}
                type="text"
                placeholder="O que você está procurando?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white/5 border-b-2 border-white/10 py-6 pl-16 pr-6 text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all rounded-t-2xl"
              />
            </div>

            {/* Results */}
            <div className="mt-8">
              {query.trim() !== "" && results.length > 0 ? (
                <div className="space-y-4">
                  <p className="text-white/40 text-sm tracking-widest uppercase mb-6">
                    Resultados Sugeridos
                  </p>
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/produto/${product.id}`}
                      onClick={onClose}
                      className="group flex items-center gap-4 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all border border-transparent hover:border-white/10"
                    >
                      <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-2xl shrink-0">
                        {product.category === "roupas" && "👔"}
                        {product.category === "bolsas" && "👜"}
                        {product.category === "acessorios" && "⌚"}
                        {product.category === "eletronicos" && "🎧"}
                      </div>
                      <div className="flex-grow">
                        <span className="text-accent text-[10px] font-bold uppercase tracking-wider block mb-1">
                          {product.brand}
                        </span>
                        <h4 className="text-white font-medium group-hover:text-accent transition-colors">
                          {product.title}
                        </h4>
                        <div className="mt-1">
                          <PriceDisplay
                            price={product.price}
                            compareAtPrice={product.compareAtPrice}
                            size="sm"
                            invertColors
                          />
                        </div>
                      </div>
                      <FaArrowRight className="text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                  <div className="pt-4 text-center">
                    <p className="text-white/40 text-xs italic">
                      Pressione Enter para ver todos os resultados (em breve)
                    </p>
                  </div>
                </div>
              ) : query.trim() !== "" ? (
                <div className="text-center py-12">
                  <p className="text-white/60 text-lg">
                    Nenhum produto encontrado para &quot;{query}&quot;
                  </p>
                  <p className="text-white/40 text-sm mt-2">
                    Tente usar termos mais genéricos como &quot;Nike&quot; ou &quot;Bolsa&quot;.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {/* Quick Links Suggestions */}
                   {['Nike', 'Apple', 'Bolsas', 'Promoções'].map(term => (
                     <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="bg-white/5 py-3 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all text-sm border border-white/10"
                     >
                       {term}
                     </button>
                   ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
