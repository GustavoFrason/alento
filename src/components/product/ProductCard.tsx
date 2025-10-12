"use client";

import Image from "next/image";
import type { Product } from "@/lib/types";
import { Price } from "@/lib/utils/currency";
import { getWaLink } from "@/lib/store";
import { trackWhatsAppClick } from "@/lib/analytics";

export function ProductCard({ product }: { product: Product }) {
  const wa = getWaLink(`Tenho interesse no produto: ${product.name}`);

  return (
    <li className="card-soft overflow-hidden group">
      {/* Moldura da imagem – quadrada, crop elegante e foco central (ajustável por produto) */}
      <div className="relative aspect-square bg-white">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover object-center"
          style={{ objectPosition: product.objectPosition ?? "50% 50%" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
          priority={false}
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10" />
      </div>

      <div className="p-5">
        <h3 className="font-medium">{product.name}</h3>

        <div className="mt-2">
          <span className="badge-gold">
            <Price value={product.price} />
          </span>
        </div>

        <div className="mt-4 flex gap-3">
          <a
            href={wa}
            onClick={() => trackWhatsAppClick("product_card", product.name)}
            className="btn-olive"
          >
            Comprar agora
          </a>
          <a
            href="#personalizada"
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm hover:bg-white/60"
          >
            Personalizar
          </a>
        </div>
      </div>
    </li>
  );
}