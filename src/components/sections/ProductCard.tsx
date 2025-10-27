"use client";
import type { Product } from "@/lib/types";
import { Reveal } from "@/components/common/Reveal";
import { generateWhatsAppLink } from "@/lib/utils/whatsapp";
import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaWhatsapp } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export function ProductCard({ 
  product, 
  delay = 0
}: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  
  const { 
    imageSrc, 
    title, 
    price, 
    compareAtPrice, 
    tags, 
    sizeCm, 
    color, 
    style 
  } = product;

  const discountPercentage = compareAtPrice 
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : 0;

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  const handleBuyNow = () => {
    try {
      const whatsappLink = generateWhatsAppLink(product);
      if (typeof window !== 'undefined') {
        window.open(whatsappLink, '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      console.error('Erro ao gerar link do WhatsApp:', error);
    }
  };

  return (
    <Reveal delay={delay}>
      <div 
        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative h-full flex flex-col border border-gray-100"
      >
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
              -{discountPercentage}%
            </span>
          )}
          {tags?.includes("novidade") && (
            <span className="bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
              NOVIDADE
            </span>
          )}
          {tags?.includes("mais-vendido") && (
            <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
              MAIS VENDIDO
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <FaHeart 
            className={`text-sm transition-colors ${
              isFavorited ? "text-red-500" : "text-gray-400 hover:text-red-300"
            }`} 
          />
        </button>

        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 h-72">
          <Image
            src={imageSrc}
            alt={`Guirlanda ${title}`}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-3 flex flex-col flex-grow">
          {/* Title and Attributes */}
          <div className="mb-2">
            <h3 className="font-playfair text-lg text-gray-900 mb-2 line-clamp-2 leading-tight font-semibold">
              {title}
            </h3>
            <p className="text-sm text-gray-500 capitalize mb-1">
              {color} • {style} • {sizeCm}
            </p>
          </div>

          {/* Price Section */}
          <div className="mb-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl font-bold text-gray-900">
                R$ {price.toFixed(2).replace(".", ",")}
              </span>
              {compareAtPrice && (
                <span className="text-sm text-gray-400 line-through">
                  R$ {compareAtPrice.toFixed(2).replace(".", ",")}
                </span>
              )}
            </div>
            
            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex justify-center gap-1.5 flex-wrap">
                {tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full capitalize font-medium"
                  >
                    {tag.replace("-", " ")}
                  </span>
                ))}
                {tags.length > 2 && (
                  <span className="text-xs text-gray-400 font-medium">
                    +{tags.length - 2}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Buy Button */}
          <button
            onClick={handleBuyNow}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 transform hover:scale-[1.02]"
          >
            <FaWhatsapp className="text-base" />
            <span>Falar com Especialista</span>
          </button>
        </div>
      </div>
    </Reveal>
  );
}