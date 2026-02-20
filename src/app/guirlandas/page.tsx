import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Products } from "@/components/sections/Products";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "ALENTO | Guirlandas Artesanais de Natal",
  description:
    "Guirlandas artesanais que encantam. Feitas à mão com materiais nobres, cada peça ALENTO traz aconchego, tradição e beleza para sua casa neste Natal.",
  openGraph: {
    title: "ALENTO | Guirlandas Artesanais de Natal",
    description:
      "A arte de celebrar com afeto. Conheça nossas guirlandas exclusivas ALENTO.",
    url: "https://alentostore.com.br/guirlandas",
    siteName: "ALENTO",
    locale: "pt_BR",
    type: "website",
  },
};

export default function GuirlandasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guirlandas Artesanais ALENTO",
    url: "https://alentostore.com.br/guirlandas",
    description:
      "Guirlandas de Natal artesanais feitas à mão. Tradição, aconchego e beleza em cada detalhe.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <Hero />
        <HowItWorks />
        <Products />
        <About />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}
