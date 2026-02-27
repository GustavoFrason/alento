"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Reveal } from "@/components/common/Reveal";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { Button } from "@/components/ui/Button";
import { calculateDiscountPercentage } from "@/utils/discount";
import Image from "next/image";
import type { ImportedProduct } from "@/lib/types";

interface ImportedProductCardProps {
  product: ImportedProduct;
  delay?: number;
}

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

export function ImportedProductCard({ product, delay = 0 }: ImportedProductCardProps) {
  const discountPercentage = calculateDiscountPercentage(product.price, product.compareAtPrice);

  return (
    <Reveal delay={delay}>
      <Link
        href={`/produto/${product.id}`}
        className="group bg-white dark:bg-white/5 rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-gray-100 dark:border-white/10 cursor-pointer"
      >
        {/* Image placeholder with gradient */}
        <div className="relative overflow-hidden h-56 sm:h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-navy dark:to-charcoal transition-colors duration-500">
          {/* Category & Condition Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            <Badge variant="navy" className="bg-navy/80 backdrop-blur-md border-none px-3 py-1 shadow-sm">
              {categoryLabels[product.category]}
            </Badge>
            
            {product.condition === "pre-owned" ? (
              <div className="flex items-center gap-1.5 bg-brand-forest text-white px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.1em] shadow-xl border border-white/10 ring-1 ring-brand-forest/30">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse shadow-[0_0_8px_rgba(197,165,114,0.8)]" />
                Seminovo
              </div>
            ) : (
              <div className="flex items-center gap-1.5 bg-white/95 dark:bg-navy/80 backdrop-blur-sm text-brand-forest dark:text-brand-gold px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.1em] shadow-md border border-brand-gold/40">
                Novo Arrivo
              </div>
            )}
          </div>

          {/* Discount badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-3 right-3 z-10">
              <Badge variant="red">-{discountPercentage}%</Badge>
            </div>
          )}

          {/* Placeholder visual */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate/5 to-navy/10 group-hover:scale-105 transition-transform duration-500">
            {product.imageSrc.startsWith("http") || product.imageSrc.startsWith("/") ? (
              <div className="relative w-full h-full">
                 <Image 
                  src={product.imageSrc} 
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="text-center">
                <span className="text-5xl">{categoryEmoji[product.category]}</span>
                <p className="text-xs text-gray-400 dark:text-white/30 mt-2 font-medium">{product.brand}</p>
              </div>
            )}
          </div>

          {/* USA badge */}
          <div className="absolute bottom-3 left-3 z-10">
            <div className="flex items-center gap-2 bg-white/90 dark:bg-navy/80 backdrop-blur-sm px-2.5 py-1.5 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm">
              <span className="text-sm" role="img" aria-label="USA Flag">🇺🇸</span>
              <span className="text-[10px] font-bold text-navy dark:text-brand-champagne uppercase tracking-tighter">
                {product.origin === "EUA" ? "Importado" : product.origin}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-1.5">
            {product.brand && (
              <span className="text-[10px] text-accent font-black uppercase tracking-[0.12em]">
                {product.brand}
              </span>
            )}
            <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border ${
              product.condition === "pre-owned" 
                ? "text-brand-forest border-brand-forest/20 bg-brand-forest/5 dark:text-brand-gold dark:border-brand-gold/20" 
                : "text-brand-gold border-brand-gold/30 bg-brand-gold/5 dark:text-blue-400 dark:border-blue-400/20"
            }`}>
              {product.condition === "pre-owned" ? "Seminovo" : "Novo"}
            </span>
          </div>
          <h3 className="font-serif text-lg font-bold text-navy dark:text-brand-champagne mb-2 line-clamp-2 leading-snug group-hover:text-accent transition-colors">
            {product.title}
          </h3>

          {product.description && (
            <p className="text-sm text-gray-500 dark:text-white/40 mb-3 line-clamp-2">{product.description}</p>
          )}

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex gap-1.5 flex-wrap mb-3">
              {product.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/40 px-2.5 py-0.5 rounded-full capitalize font-medium"
                >
                  {tag.replace("-", " ")}
                </span>
              ))}
            </div>
          )}

          {/* Price & CTA */}
          <div className="mt-auto flex flex-col gap-3">
            <PriceDisplay 
              price={product.price} 
              compareAtPrice={product.compareAtPrice} 
              size="md" 
            />

            <Button variant="whatsapp" className="w-full py-2 text-sm rounded-xl">
              <FaWhatsapp className="text-base" />
              <span>Ver Detalhes</span>
            </Button>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
