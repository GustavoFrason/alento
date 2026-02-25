import type { Metadata } from "next";
import { HeroHome } from "@/components/sections/HeroHome";
import { CategoriesBento } from "@/components/sections/CategoriesBento";
import { CategoriesMinimalist } from "@/components/sections/CategoriesMinimalist";
// import { CategoriesSlider } from "@/components/sections/CategoriesSlider";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { WhyImport } from "@/components/sections/WhyImport";
import { FAQ } from "@/components/sections/FAQ";
import { Newsletter } from "@/components/sections/Newsletter";
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
        
        {/* Layout escolhido: Bento Grid */}
        <CategoriesBento />

        {/* Opção B (Minimalista) arquivada para uso futuro se necessário */}
        {/* <CategoriesMinimalist /> */}
        
        <FeaturedProducts />
        <WhyImport />
        <FAQ />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
