"use client";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/common/Reveal";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section id="colecoes" className="mx-auto max-w-6xl px-4 py-14">
      <Reveal>
        <header className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-[#3F5A3A] tracking-wide">
            Coleções Especiais de Natal
          </h2>
          <p className="mt-2 text-zinc-600">
            Prontas para enviar. Personalizamos o laço e a mensagem.
          </p>
        </header>
      </Reveal>

      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ul>

      <Reveal>
        <p className="mt-6 text-center text-xs text-zinc-500">
          Fotos ilustrativas. Estoque sujeito à disponibilidade.
        </p>
      </Reveal>
    </section>
  );
}