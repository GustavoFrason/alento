import type { Metadata } from "next";
import { HeroHome } from "@/components/sections/HeroHome";
import { Categories } from "@/components/sections/Categories";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { WhyImport } from "@/components/sections/WhyImport";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "ALENTO | Produtos Importados dos EUA",
  description:
    "Roupas, bolsas, acessórios e eletrônicos importados dos Estados Unidos. Produtos 100% originais com garantia de qualidade e envio para todo Brasil.",
  openGraph: {
    title: "ALENTO | Produtos Importados dos EUA",
    description:
      "As melhores marcas americanas com preço justo e garantia de originalidade. Nike, Michael Kors, Ray-Ban, Apple e muito mais.",
    url: "https://alentostore.com.br",
    siteName: "ALENTO",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "ALENTO",
    url: "https://alentostore.com.br",
    telephone: "+55 41 99638-4529",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    description:
      "Loja de produtos importados dos Estados Unidos. Roupas, bolsas, acessórios e eletrônicos 100% originais.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroHome />
        <Categories />
        <FeaturedProducts />
        <WhyImport />
      </main>

      <Footer />
    </>
  );
}
