"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

interface ProductGalleryProps {
  images: string[];
  category: string;
  brand?: string;
  discountPercentage?: number;
}

export function ProductGallery({ 
  images, 
  category, 
  brand, 
  discountPercentage = 0 
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const categoryEmoji: Record<string, string> = {
    roupas: "👔",
    bolsas: "👜",
    acessorios: "⌚",
    eletronicos: "🎧",
  };

  const categoryLabels: Record<string, string> = {
    roupas: "Roupas",
    bolsas: "Bolsas",
    acessorios: "Acessórios",
    eletronicos: "Eletrônicos",
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Display */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-square">
        {/* Universal Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
            <Badge variant="navy">{categoryLabels[category]}</Badge>
            <Badge variant="white" className="px-4 py-2">🇺🇸 Importado dos EUA</Badge>
        </div>
        
        {discountPercentage > 0 && (
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="red">-{discountPercentage}% OFF</Badge>
          </div>
        )}

        {/* Animated Main Image Placeholder */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate/5 to-navy/10"
          >
            <div className="text-center group-hover:scale-105 transition-transform duration-500">
              <span className="text-9xl mb-4 block animate-bounce-slow">
                {categoryEmoji[category]}
              </span>
              <p className="text-xl text-gray-400 font-medium tracking-widest uppercase">
                {brand} - Foto {activeIndex + 1}
              </p>
            </div>
            {/* 
              Note: In a real app, we would use <Image src={images[activeIndex]} ... /> here.
              For this demo, we use the placeholder visual as real image assets are missing.
            */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative min-w-[80px] h-20 rounded-xl overflow-hidden border-2 transition-all ${
                activeIndex === idx 
                  ? "border-accent shadow-md scale-105" 
                  : "border-transparent hover:border-gray-300 opacity-60 grayscale hover:grayscale-0"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-2xl">
                {categoryEmoji[category]}
              </div>
              <div className="absolute inset-0 bg-black/5" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
