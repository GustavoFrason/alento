// src/components/product/ProductCard.tsx
"use client";

import Image from "next/image";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { trackWhatsAppClick } from "@/lib/analytics";
import type { Product, ProductTag } from "@/lib/types";

type Props = Product & { waNumber: string };

const BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

const BADGE_PRIORITY: ProductTag[] = ["promocao", "novidade", "mais-vendido", "limitado", "pronta"];
const PRIMARY_STYLES: Record<ProductTag, string> = {
  promocao: "bg-rose-600 text-white",
  novidade: "bg-gold-soft text-white",
  "mais-vendido": "bg-olive/90 text-white",
  limitado: "bg-black/80 text-white",
  pronta: "bg-white/90 text-olive ring-1 ring-olive/20",
};
const CHIP_STYLES: Record<ProductTag, string> = {
  promocao: "bg-rose-50 text-rose-700 border-rose-200",
  novidade: "bg-amber-50 text-amber-700 border-amber-200",
  "mais-vendido": "bg-emerald-50 text-emerald-700 border-emerald-200",
  limitado: "bg-zinc-50 text-zinc-700 border-zinc-200",
  pronta: "bg-white text-olive border-olive/30",
};

export default function ProductCard({
  id, title, imageSrc, price, compareAtPrice, tags = [], sizeCm, waNumber,
}: Props) {
  const msg = encodeURIComponent(`Olá! Tenho interesse no modelo ${title} (ID: ${id}).`);
  const href = `https://wa.me/${waNumber}?text=${msg}&utm_source=site&utm_medium=grid_card&utm_campaign=alento_lp`;

  const primary = [...tags].sort((a, b) => BADGE_PRIORITY.indexOf(a) - BADGE_PRIORITY.indexOf(b))[0];

  const discount =
    typeof compareAtPrice === "number" && compareAtPrice > price
      ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
      : 0;

  // tenta extrair "nn" de "nn cm" p/ JSON-LD de dimensões
  const sizeNumeric =
    typeof sizeCm === "string"
      ? Number.parseFloat(sizeCm.replace(/[^\d.,]/g, "").replace(",", "."))
      : undefined;

  return (
    <article
      itemScope
      itemType="https://schema.org/Product"
      className="group rounded-2xl border bg-white/80 hover:bg-white transition-colors overflow-hidden shadow-[0_2px_10px_rgba(63,90,58,0.08)] hover:shadow-[0_6px_20px_rgba(63,90,58,0.16)]"
    >
      {/* imagem */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 360px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          itemProp="image"
        />
        {/* gradiente sutil nas bordas superiores */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/10 to-transparent" />

        {primary && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium shadow-sm ${PRIMARY_STYLES[primary]}`}
            aria-label={primary}
          >
            {primary === "promocao" ? "Promoção" :
             primary === "novidade" ? "Novidade" :
             primary === "mais-vendido" ? "+ Vendido" :
             primary === "limitado" ? "Edição Limitada" : "Pronta entrega"}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold bg-rose-600 text-white shadow-sm">
            -{discount}%
          </span>
        )}

        {/* chips inferiores inspiracionais */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {tags.filter(t => t !== primary).map((t) => (
            <span key={t} className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] ${CHIP_STYLES[t]}`}>
              {t === "promocao" ? "Promoção" :
               t === "novidade" ? "Novidade" :
               t === "mais-vendido" ? "+ vendido" :
               t === "limitado" ? "Limitada" : "Pronta entrega"}
            </span>
          ))}
        </div>
      </div>

      {/* conteúdo */}
      <div className="p-4">
        <h3 className="text-[17px] font-semibold text-olive tracking-wide line-clamp-2" itemProp="name">
          {title}
        </h3>
        {sizeCm && (
          <p className="text-xs text-neutral-500 mt-0.5">≈ {sizeCm} de diâmetro</p>
        )}

        <div className="mt-2">
          {compareAtPrice && compareAtPrice > price && (
            <span className="mr-2 text-sm text-neutral-400 line-through">
              {BRL.format(compareAtPrice)}
            </span>
          )}
          <span
            className="text-[18px] font-semibold text-[#B9862A]"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <span itemProp="price" content={price.toFixed(2)}>{BRL.format(price)}</span>
            <meta itemProp="priceCurrency" content="BRL" />
            <link itemProp="availability" href="https://schema.org/InStock" />
            <meta itemProp="itemCondition" content="https://schema.org/NewCondition" />
            {sizeNumeric ? (
              <>
                <meta itemProp="width" content={`${sizeNumeric} cm`} />
                <meta itemProp="height" content={`${sizeNumeric} cm`} />
                <meta itemProp="depth" content="0 cm" />
              </>
            ) : null}
          </span>
        </div>

        <div className="mt-3 flex gap-2">
          <WhatsAppButton
            href={href}
            label="Comprar no WhatsApp"
            ariaLabel={`Comprar ${title} no WhatsApp`}
            variant="solid"
            size="md"
            onClick={() => trackWhatsAppClick("grid_card", id)}
            className="flex-1 justify-center"
          />
          <a
            href={`${href}&intent=custom`}
            onClick={() => trackWhatsAppClick("grid_personalizar", id)}
            className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm hover:bg-white/60 flex-1"
            target="_blank"
            rel="noopener nofollow"
          >
            Personalizar
          </a>
        </div>
      </div>

      <meta itemProp="sku" content={id} />
      <meta itemProp="brand" content="ALENTO" />
    </article>
  );
}