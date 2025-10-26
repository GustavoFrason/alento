// src/lib/seo/jsonld.ts
import type { Product } from "@/lib/types";

const BASE = "https://alentostore.com.br";

export function buildWebPageJsonLd(products: Product[]) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE}/#produto-${p.id}`,
    })),
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ALENTO — Guirlandas de Natal Artesanais",
    url: `${BASE}/`,
    inLanguage: "pt-BR",
    about: "Guirlandas de Natal artesanais com toque sofisticado e natural.",
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ALENTO",
    url: BASE,
    logo: `${BASE}/apple-touch-icon.png`,
    sameAs: ["https://www.instagram.com/alentostore"],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Coleções", item: `${BASE}/#colecoes` },
    ],
  };

  return [webPage, organization, breadcrumb, itemList];
}
