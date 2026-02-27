"use client";

import type { ImportedProduct } from "@/lib/types";
import Link from "next/link";
import { FaWhatsapp, FaShieldAlt, FaTruck, FaCheckCircle, FaSearch, FaFingerprint, FaRegGem } from "react-icons/fa";
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
            <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/40 mb-8 transition-colors duration-500">
              <Link href="/" className="hover:text-navy dark:hover:text-brand-gold transition-colors">Início</Link>
              <span>/</span>
              <Link href="/#products" className="hover:text-navy dark:hover:text-brand-gold transition-colors">Produtos</Link>
              <span>/</span>
              <span className="text-navy dark:text-brand-gold font-medium">{product.title}</span>
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

                <h1 className="font-serif text-4xl sm:text-5xl text-navy dark:text-brand-champagne mb-4 leading-tight font-bold transition-colors duration-500">
                  {product.title}
                </h1>

                {/* Condition & Tags */}
                <div className="flex gap-2 flex-wrap mb-6">
                  {product.condition === "pre-owned" ? (
                    <>
                      <Badge variant="navy" className="bg-brand-forest text-white border-none py-1.5 px-3">
                        Seminovo de Luxo
                      </Badge>
                      {product.conditionDetail && (
                        <Badge variant="white" className="border-brand-gold text-brand-forest dark:text-brand-gold py-1.5 px-3 dark:bg-navy/50">
                          Estado: {product.conditionDetail}
                        </Badge>
                      )}
                    </>
                  ) : (
                    <Badge variant="white" className="bg-brand-gold/10 text-brand-forest dark:text-brand-gold border-brand-gold/20 py-1.5 px-3">
                      Produto Novo
                    </Badge>
                  )}
                  
                  {product.tags && product.tags.length > 0 && product.tags.map((tag) => (
                    <Badge key={tag} variant="white" className="bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-white/40 border-gray-200 dark:border-white/10 py-1.5 px-3 italic transition-colors">
                      {tag.replace("-", " ")}
                    </Badge>
                  ))}
                </div>

                {product.description && (
                  <p className="text-gray-600 dark:text-white/60 text-lg leading-relaxed mb-8 transition-colors duration-500">
                    {product.description}
                  </p>
                )}

                {/* Price Box */}
                <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 mb-6 transition-colors duration-500 border border-transparent dark:border-white/10">
                  <PriceDisplay 
                    price={product.price}
                    compareAtPrice={product.compareAtPrice}
                    size="xl"
                    showInstallments
                  />
                  {discountPercentage > 0 && (
                    <p className="text-green-600 dark:text-green-400 text-sm font-semibold mt-2 transition-colors">
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
                  className="w-full py-4 text-lg rounded-2xl mb-6 shadow-lg dark:shadow-green-500/10 hover:shadow-xl hover:scale-[1.02] transition-all"
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
                    <div key={i} className="flex flex-col items-center text-center p-3 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10 transition-colors">
                      <badge.icon className={`${badge.color} text-lg mb-1`} />
                      <span className="text-xs text-gray-600 dark:text-white/60 font-medium transition-colors">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Authenticity Section */}
          <Reveal delay={0.2}>
            <div className="bg-brand-champagne/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 border border-brand-gold/10 dark:border-white/10 transition-colors duration-500">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-1 text-center md:text-left">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold mb-4 block">Confiança Alento</span>
                  <h2 className="font-playfair text-3xl md:text-4xl text-navy dark:text-brand-gold mb-6 transition-colors font-bold">Trilha de Autenticidade</h2>
                  <p className="text-gray-600 dark:text-white/60 leading-relaxed mb-8 max-w-xl transition-colors">
                    Cada peça em nosso catálogo passa por um processo rigoroso de inspeção. Desde a origem nos EUA até a entrega em suas mãos, garantimos a procedência e o estado impecável de cada item.
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="bg-white/60 dark:bg-navy/40 p-5 rounded-2xl border border-white/40 dark:border-white/5 transition-colors">
                      <div className="w-10 h-10 bg-brand-forest/10 rounded-xl flex items-center justify-center text-brand-forest dark:text-brand-gold mb-4">
                        <FaSearch className="text-xl" />
                      </div>
                      <h4 className="font-bold text-navy dark:text-brand-champagne text-sm mb-2">Curadoria</h4>
                      <p className="text-[11px] text-gray-500 dark:text-white/40 leading-normal">Seleção criteriosa direto das boutiques e outlets oficiais nos EUA.</p>
                    </div>
                    <div className="bg-white/60 dark:bg-navy/40 p-5 rounded-2xl border border-white/40 dark:border-white/5 transition-colors">
                      <div className="w-10 h-10 bg-brand-forest/10 rounded-xl flex items-center justify-center text-brand-forest dark:text-brand-gold mb-4">
                        <FaFingerprint className="text-xl" />
                      </div>
                      <h4 className="font-bold text-navy dark:text-brand-champagne text-sm mb-2">Inspeção</h4>
                      <p className="text-[11px] text-gray-500 dark:text-white/40 leading-normal">Verificação técnica de hardware, tecidos, costuras e códigos de série.</p>
                    </div>
                    <div className="bg-white/60 dark:bg-navy/40 p-5 rounded-2xl border border-white/40 dark:border-white/5 transition-colors">
                      <div className="w-10 h-10 bg-brand-forest/10 rounded-xl flex items-center justify-center text-brand-forest dark:text-brand-gold mb-4">
                        <FaRegGem className="text-xl" />
                      </div>
                      <h4 className="font-bold text-navy dark:text-brand-champagne text-sm mb-2">Originalidade</h4>
                      <p className="text-[11px] text-gray-500 dark:text-white/40 leading-normal">Selo Alento de procedência garantida para itens Novos e Seminovos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Related Products */}
          {related.length > 0 && (
            <section>
              <h2 className="font-playfair text-2xl text-navy dark:text-brand-gold mb-8 transition-colors font-bold">
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
