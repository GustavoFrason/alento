"use client";

import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { ImportedProductCard } from "@/components/product/ImportedProductCard";
import type { ImportedProduct } from "@/lib/types";

interface CategoryPageContentProps {
  label: string;
  description: string;
  products: ImportedProduct[];
}

export function CategoryPageContent({ label, description, products }: CategoryPageContentProps) {
  return (
    <>
      <main className="pt-20 md:pt-24 pb-16">
        <Container>
          {/* Breadcrumb */}
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-navy transition-colors">Início</Link>
              <span>/</span>
              <Link href="/#categories" className="hover:text-navy transition-colors">Categorias</Link>
              <span>/</span>
              <span className="text-navy font-medium">{label}</span>
            </nav>
          </Reveal>

          {/* Header */}
          <Reveal>
            <div className="mb-12">
              <SectionTitle title={label} subtitle={description} centered={false} />
              <p className="text-sm text-gray-500 mt-2">
                {products.length} produto{products.length !== 1 ? "s" : ""} disponíve{products.length !== 1 ? "is" : "l"}
              </p>
            </div>
          </Reveal>

          {/* Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <ImportedProductCard key={product.id} product={product} delay={index * 0.08} />
            ))}
          </div>

          {/* Back */}
          <div className="mt-12 text-center">
            <Link
              href="/#categories"
              className="inline-flex items-center gap-2 text-navy hover:text-accent font-medium transition-colors"
            >
              <FaArrowLeft className="text-sm" />
              Voltar para Categorias
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
