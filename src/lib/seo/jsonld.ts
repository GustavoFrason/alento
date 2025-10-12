import type { Product } from "@/lib/types";
import { getStore } from "@/lib/store";

export function buildWebPageJsonLd(products: Product[]) {
  const { siteUrl, name } = getStore();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${name} – Guirlandas de Natal`,
    url: siteUrl,
    description: "Guirlandas artesanais com materiais naturais. Compre pelo WhatsApp.",
    publisher: { "@type": "Organization", name },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Guirlandas de Natal" }
      ]
    },
    mainEntity: products.map(buildProductJsonLd),
  } as const;
}

export function buildProductJsonLd(p: Product) {
  const { siteUrl, name } = getStore();
  return {
    "@type": "Product",
    name: p.name,
    image: new URL(p.image, siteUrl).toString(),
    brand: name,
    sku: p.sku,
    offers: {
      "@type": "Offer",
      price: p.price,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: siteUrl
    }
  } as const;
}