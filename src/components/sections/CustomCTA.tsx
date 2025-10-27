"use client";

import { getWaLink } from "@/lib/store";

export function CustomCTA() {
  const wa = getWaLink("Gostaria de personalizar minha guirlanda 🎄");

  return (
    <section
      id="personalizada"
      className="mx-auto max-w-6xl rounded-2xl bg-gradient-to-r from-green-800 to-green-600 px-4 py-20 text-center text-white shadow-md"
    >
      <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
        Personalize a sua guirlanda
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-base opacity-90 md:text-lg">
        Escolha cores, tamanhos e detalhes que combinam com o seu lar. Faça sua encomenda
        e receba um toque de encanto neste Natal.
      </p>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-green-800 transition hover:bg-gray-100"
      >
        Falar com a Alento 🌿
      </a>
    </section>
  );
}
