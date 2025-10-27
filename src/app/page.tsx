import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Products } from "@/components/sections/Products";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

// 🧠 SEO otimizado
export const metadata: Metadata = {
  title: "ALENTO | Guirlandas Artesanais de Natal",
  description:
    "Guirlandas artesanais que encantam. Feitas à mão com materiais nobres, cada peça ALENTO traz aconchego, tradição e beleza para sua casa neste Natal.",
  openGraph: {
    title: "ALENTO | Guirlandas Artesanais de Natal",
    description:
      "A arte de celebrar com afeto. Conheça nossas guirlandas exclusivas ALENTO.",
    url: "https://alento-lime.vercel.app",
    siteName: "ALENTO",
    images: [
      {
        url: "https://alento-lime.vercel.app/images/hero-guirlanda.jpg",
        width: 1200,
        height: 630,
        alt: "Guirlanda de Natal rando uma porta com luzes ao fundo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function Page() {
  // 🔖 JSON-LD estruturado para SEO (Google)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "ALENTO",
    image: "https://alento-lime.vercel.app/images/hero-guirlanda.jpg",
    url: "https://alento-lime.vercel.app",
    telephone: "+55 11 99999-9999",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    description:
      "Guirlandas de Natal artesanais feitas à mão. Tradição, aconchego e beleza em cada detalhe.",
  };

  return (
    <>
      {/* SEO avançado */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Seções do site */}
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
