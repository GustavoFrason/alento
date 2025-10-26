"use client";

import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data/products";

/**
 * Grade de produtos exibida na Home.
 * Ordena por score e fornece marcação Schema.org.
 */
export function ProductGrid() {
  const ordered = [...PRODUCTS].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: ordered.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `/produto/${p.id}`,
      name: p.title,
    })),
  };

  return (
    <section id="produtos" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-10 text-center text-2xl font-semibold text-gray-800">
        Nossas Guirlandas
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((product) => (
          <Link
            key={product.id}
            href={`/produto/${product.id}`}
            className="group block overflow-hidden rounded-xl border border-gray-200 transition hover:shadow-lg"
          >
            <Image
              src={product.imageSrc}
              alt={`Guirlanda ${product.title}`}
              width={400}
              height={400}
              className="h-64 w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="bg-white p-4">
              <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{product.sizeCm}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-xl font-semibold text-green-700">
                  R$ {product.price.toFixed(2)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    R$ {product.compareAtPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </section>
  );
}
