"use client";

import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { FeaturesBar } from "@/components/sections/FeaturesBar";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CustomCTA } from "@/components/sections/CustomCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { InstagramBar } from "@/components/sections/InstagramBar";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { products } from "@/lib/data/products";
import { buildWebPageJsonLd } from "@/lib/seo/jsonld";

export default function Page() {
  const jsonLd = buildWebPageJsonLd(products);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <FeaturesBar />
      <ProductGrid products={products} />
      <HowItWorks />
      <CustomCTA />
      <Testimonials />
      <FAQ />
      <InstagramBar />
      <BottomCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}