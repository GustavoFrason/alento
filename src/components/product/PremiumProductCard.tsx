"use client";

import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";
import Image from "next/image";
import type { ImportedProduct } from "@/lib/types";

interface PremiumProductCardProps {
  product: ImportedProduct;
  delay?: number;
}

export function PremiumProductCard({ product, delay = 0 }: PremiumProductCardProps) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/produto/${product.id}`}
        className="group relative flex flex-col items-center text-center overflow-hidden"
      >
        {/* Couture Image Container (4:5 Ratio) */}
        <div className="relative w-full aspect-[4/5] bg-brand-champagne dark:bg-navy overflow-hidden mb-6 transition-colors duration-500">
          <Image
            src={product.imageSrc}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-1000 scale-[1.01] group-hover:scale-110"
          />
          
          {/* Subtle Contrast Overlay */}
          <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-500" />

          {/* Couture Badges (Minimalist) */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
             {product.condition === "pre-owned" && (
                <span className="bg-brand-forest text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm shadow-xl">
                  Curadoria
                </span>
             )}
          </div>

          {/* Elegant Price Floating */}
          <div className="absolute bottom-6 right-0 translate-x-1/2 group-hover:translate-x-0 transition-transform duration-700">
             <div className="bg-brand-gold text-brand-forest px-6 py-2 shadow-2xl skew-x-[-12deg]">
                <div className="skew-x-[12deg] font-black tracking-tighter">
                   {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                </div>
             </div>
          </div>
        </div>

        {/* Couture Content */}
        <div className="flex flex-col items-center px-4">
          {product.brand && (
            <span className="text-[10px] text-brand-gold font-black uppercase tracking-[0.4em] mb-2 scale-90 group-hover:scale-100 transition-transform duration-500">
              {product.brand}
            </span>
          )}
          <h3 className="font-serif text-xl md:text-2xl text-navy dark:text-brand-champagne mb-2 leading-tight transition-colors duration-500 group-hover:italic group-hover:text-accent">
            {product.title}
          </h3>
          
          <div className="w-8 h-px bg-brand-forest/10 dark:bg-white/10 group-hover:w-20 group-hover:bg-brand-gold transition-all duration-500 mb-3" />
          
          <p className="text-[10px] text-gray-400 dark:text-white/20 uppercase font-black tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            {product.condition === 'pre-owned' ? 'Peça Única' : 'Coleção Atual'}
          </p>
        </div>

        {/* Decorative corner (luxury detail) */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-gold/0 group-hover:border-brand-gold/30 transition-all duration-700" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-brand-gold/0 group-hover:border-brand-gold/30 transition-all duration-700" />
      </Link>
    </Reveal>
  );
}
