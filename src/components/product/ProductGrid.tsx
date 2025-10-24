// src/components/product/ProductGrid.tsx
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/lib/data/products";
import ViewListTracker from "./ViewListTracker";
import { Reveal } from "@/components/common/Reveal"; // <- named export

const WPP = "5541999999999";

export default function ProductGrid() {
  const listId = "catalogo-produtos";

  // Ordenação por score (desc); itens sem score vão ao final
  const ordered = [...PRODUCTS].sort((a, b) => (b.score ?? -1) - (a.score ?? -1));

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": ordered.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://alentostore.com.br/#produto-${p.id}`
    }))
  };

  return (
    <>
      <div
        id={listId}
        className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 content-stretch [contain:content]"
        aria-label="Catálogo de produtos"
      >
        {ordered.map((p, idx) => (
          <Reveal key={p.id} delay={Math.min(0.05 * idx, 0.25)}>
            <div id={`produto-${p.id}`}>
              <ProductCard {...p} waNumber={WPP} />
            </div>
          </Reveal>
        ))}
      </div>

      <p className="text-center text-xs text-neutral-600 mt-4">
        Entrega 1–3 dias em Curitiba. Personalizamos laço e mensagem. Fotos ilustrativas; estoque sujeito à disponibilidade.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* GA: dispara "view_item_list" quando 50% do grid aparece */}
      <ViewListTracker listId={listId} />
    </>
  );
}