"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTimes, FaArrowRight } from "react-icons/fa";
import { IMPORTED_PRODUCTS } from "@/lib/data/imported-products";
import { searchProducts } from "@/utils/search";
import type { ImportedProduct } from "@/lib/types";
import Link from "next/link";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import Image from "next/image";

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
    setResults(filtered.slice(0, 8)); // Limit to top 8 results
  }, [query]);

  // Group results by condition
  const groupedResults = useMemo(() => {
    return {
      new: results.filter(p => p.condition === "new"),
      used: results.filter(p => p.condition === "pre-owned")
    };
  }, [results]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const renderProductLink = (product: ImportedProduct) => (
    <Link
      key={product.id}
      href={`/produto/${product.id}`}
      onClick={onClose}
      className="group flex items-center gap-4 bg-white/5 p-3 rounded-2xl hover:bg-white/10 transition-all border border-transparent hover:border-white/10"
    >
      <div className="relative w-14 h-14 bg-white/10 rounded-xl overflow-hidden shrink-0 border border-white/5">
        {product.imageSrc ? (
          <Image 
            src={product.imageSrc} 
            alt={product.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xl">
             {product.category === "roupas" && "👔"}
             {product.category === "bolsas" && "👜"}
             {product.category === "acessorios" && "⌚"}
             {product.category === "eletronicos" && "🎧"}
          </div>
        )}
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-brand-gold text-[9px] font-black uppercase tracking-[0.1em]">
            {product.brand}
          </span>
          <span className="w-1 h-1 bg-white/20 rounded-full" />
          <span className={`text-[8px] font-bold uppercase ${product.condition === 'pre-owned' ? 'text-brand-forest' : 'text-blue-400'}`}>
            {product.condition === 'pre-owned' ? 'Seminovo' : 'Novo'}
          </span>
        </div>
        <h4 className="text-white text-sm font-medium truncate group-hover:text-brand-gold transition-colors">
          {product.title}
        </h4>
        <div className="mt-0.5">
          <PriceDisplay
            price={product.price}
            compareAtPrice={product.compareAtPrice}
            size="sm"
            invertColors
          />
        </div>
      </div>
      <FaArrowRight className="text-white/20 group-hover:text-brand-gold group-hover:translate-x-1 transition-all text-xs" />
    </Link>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-navy/98 backdrop-blur-2xl flex flex-col items-center pt-20 px-4 sm:px-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10"
          >
            <FaTimes className="text-xl" />
          </button>

          <div className="w-full max-w-3xl">
            {/* Search Input */}
            <div className="relative mb-12">
              <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-gold text-xl" />
              <input
                ref={inputRef}
                type="text"
                placeholder="O que você deseja buscar?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white/5 border-b border-white/10 py-8 pl-18 pr-8 text-3xl font-serif text-white placeholder:text-white/10 focus:outline-none focus:border-brand-gold transition-all transition-duration-500 rounded-t-3xl"
              />
              <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent w-full opacity-0 group-focus-within:opacity-100 transition-opacity" />
            </div>

            {/* Results Grid */}
            <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
              {query.trim() !== "" && results.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Novos Area */}
                  {groupedResults.new.length > 0 && (
                    <div className="space-y-4">
                      <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-4 border-l-2 border-brand-gold pl-3">Novos Chegados</h5>
                      {groupedResults.new.map(renderProductLink)}
                    </div>
                  )}
                  {/* Seminovos Area */}
                  {groupedResults.used.length > 0 && (
                    <div className="space-y-4">
                      <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-forest/60 mb-4 border-l-2 border-brand-forest pl-3">Seminovos de Luxo</h5>
                      {groupedResults.used.map(renderProductLink)}
                    </div>
                  )}
                </div>
              ) : query.trim() !== "" ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaSearch className="text-3xl text-white/10" />
                  </div>
                  <p className="text-white/60 text-xl font-serif">
                    Nenhum tesouro encontrado para &quot;{query}&quot;
                  </p>
                  <p className="text-white/30 text-xs mt-3 uppercase tracking-widest font-black">
                    Tente marcas como Nike, Apple ou Louis Vuitton
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Sugestões de Busca</p>
                  <div className="flex flex-wrap justify-center gap-3">
                     {['Louis Vuitton', 'Nike', 'Apple', 'Gucci', 'EUA', 'Seminovo'].map(term => (
                       <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="px-6 py-2.5 rounded-full border border-white/10 text-white/60 hover:text-brand-gold hover:border-brand-gold hover:bg-brand-gold/5 transition-all text-xs font-bold tracking-widest uppercase"
                       >
                         {term}
                       </button>
                     ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
