// src/app/page.tsx
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { FeaturesBar } from "@/components/sections/FeaturesBar";
import ProductGrid from "@/components/product/ProductGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CustomCTA } from "@/components/sections/CustomCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { InstagramBar } from "@/components/sections/InstagramBar";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { products } from "@/lib/data/products";
import { buildWebPageJsonLd } from "@/lib/seo/jsonld";

export const revalidate = 3600; // 1h – LP estática com refresh periódico
export default function Page() {
  const jsonLd = buildWebPageJsonLd(products);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only fixed top-2 left-2 z-[9999] rounded bg-white px-3 py-2 text-sm text-black shadow"
      >
        Pular para o conteúdo
      </a>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <main id="conteudo">
        <Hero />
        <FeaturesBar />
        <section
          id="colecoes"
          className="container mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12"
          aria-label="Coleções Especiais de Natal"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-[#3F5A3A] text-center">
            Coleções Especiais de Natal
          </h2>
          <p className="mt-2 text-center text-neutral-700">
            Prontas para enviar. <strong>Personalizamos</strong> o laço e a mensagem.
          </p>
          <div className="mt-6">
            <ProductGrid />
          </div>
        </section>
        <HowItWorks />
        <CustomCTA />
        <Testimonials />
        <FAQ />
        <InstagramBar />
        <BottomCTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}