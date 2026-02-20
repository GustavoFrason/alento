"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Reveal } from "@/components/common/Reveal";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { Button } from "@/components/ui/Button";
import { calculateDiscountPercentage } from "@/utils/discount";
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
        className="group bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 cursor-pointer"
      >
        {/* Image placeholder with gradient */}
        <div className="relative overflow-hidden h-56 sm:h-64 bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Category badge */}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="navy">{categoryLabels[product.category]}</Badge>
          </div>

          {/* Discount badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-3 right-3 z-10">
              <Badge variant="red">-{discountPercentage}%</Badge>
            </div>
          )}

          {/* Placeholder visual */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate/5 to-navy/10 group-hover:scale-105 transition-transform duration-500">
            <div className="text-center">
              <span className="text-5xl">{categoryEmoji[product.category]}</span>
              <p className="text-xs text-gray-400 mt-2 font-medium">{product.brand}</p>
            </div>
          </div>

          {/* USA badge */}
          <div className="absolute bottom-3 left-3 z-10">
            <Badge variant="white">🇺🇸 Importado</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          {product.brand && (
            <span className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">
              {product.brand}
            </span>
          )}
          <h3 className="font-serif text-lg font-bold text-navy mb-2 line-clamp-2 leading-snug group-hover:text-accent transition-colors">
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
