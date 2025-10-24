// src/components/sections/Catalog.tsx
import ProductGrid from "@/components/product/ProductGrid";

export default function Catalog() {
  return (
    <section
      id="colecoes"
      className="container mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12"
      aria-labelledby="colecoes-title"
    >
      <h2
        id="colecoes-title"
        className="font-playfair text-3xl md:text-4xl text-[#3F5A3A] text-center"
      >
        Coleções Especiais de Natal
      </h2>
      <p className="mt-2 text-center text-neutral-700">
        Prontas para enviar. <strong>Personalizamos</strong> o laço e a mensagem.
      </p>

      <div className="mt-6">
        <ProductGrid />
      </div>
    </section>
  );
}