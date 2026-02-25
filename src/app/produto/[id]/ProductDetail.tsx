"use client";

import type { ImportedProduct } from "@/lib/types";
import Link from "next/link";
import { FaWhatsapp, FaShieldAlt, FaTruck, FaCheckCircle } from "react-icons/fa";
import { Reveal } from "@/components/common/Reveal";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/utils/whatsapp";
import { calculateDiscountPercentage } from "@/utils/discount";
import { ImportedProductCard } from "@/components/product/ImportedProductCard";
import { ProductGallery } from "@/components/product/ProductGallery";

interface ProductDetailProps {
  product: ImportedProduct;
  related: ImportedProduct[];
}

export function ProductDetail({ product, related }: ProductDetailProps) {
  const discountPercentage = calculateDiscountPercentage(product.price, product.compareAtPrice);
  const waMessage = `Olá! Tenho interesse no produto: ${product.title} (${product.id}) - R$ ${product.price.toFixed(2)}`;
  const waLink = getWhatsAppLink("5541996384529", waMessage);

  return (
    <>
      <main className="pt-20 md:pt-24 pb-16">
        <Container>
          {/* Breadcrumb */}
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-navy transition-colors">Início</Link>
              <span>/</span>
              <Link href="/#products" className="hover:text-navy transition-colors">Produtos</Link>
              <span>/</span>
              <span className="text-navy font-medium">{product.title}</span>
            </nav>
          </Reveal>

          {/* Product Detail Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
            {/* Gallery */}
            <Reveal>
              <ProductGallery 
                images={product.images || [product.imageSrc]} 
                category={product.category}
                brand={product.brand}
                discountPercentage={discountPercentage}
              />
            </Reveal>

            {/* Info */}
            <Reveal delay={0.15}>
              <div className="flex flex-col">
                {product.brand && (
                  <span className="text-sm text-accent font-semibold uppercase tracking-wider mb-2">
                    {product.brand}
                  </span>
                )}

                <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-4 leading-tight font-bold">
                  {product.title}
                </h1>

                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap mb-6">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="white" className="bg-navy/5 text-navy border border-navy/10">
                        {tag.replace("-", " ")}
                      </Badge>
                    ))}
                  </div>
                )}

                {product.description && (
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {product.description}
                  </p>
                )}

                {/* Price Box */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <PriceDisplay 
                    price={product.price}
                    compareAtPrice={product.compareAtPrice}
                    size="xl"
                    showInstallments
                  />
                  {discountPercentage > 0 && (
                    <p className="text-green-600 text-sm font-semibold mt-2">
                      Você economiza R$ {((product.compareAtPrice! - product.price).toFixed(2)).replace(".", ",")}
                    </p>
                  )}
                </div>

                {/* Buy CTA */}
                <Button 
                  href={waLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="whatsapp"
                  className="w-full py-4 text-lg rounded-2xl mb-6 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  <FaWhatsapp className="text-xl" />
                  Comprar via WhatsApp
                </Button>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: FaCheckCircle, text: "100% Original", color: "text-emerald-500" },
                    { icon: FaTruck, text: "Envio Seguro", color: "text-blue-500" },
                    { icon: FaShieldAlt, text: "Garantia 30 dias", color: "text-accent" },
                  ].map((badge, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-3 bg-white rounded-xl border border-gray-100">
                      <badge.icon className={`${badge.color} text-lg mb-1`} />
                      <span className="text-xs text-gray-600 font-medium">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <section>
              <h2 className="font-playfair text-2xl text-navy mb-8">
                Produtos Relacionados
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {related.map((relProduct, i) => (
                  <ImportedProductCard key={relProduct.id} product={relProduct} delay={i * 0.05} />
                ))}
              </div>
            </section>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
