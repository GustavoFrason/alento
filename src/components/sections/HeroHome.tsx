"use client";
import { Reveal } from "@/components/common/Reveal";
import { FaArrowRight } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroHome() {
  const waLink = "https://wa.me/5541996384529?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20importados%20da%20Alento";

  return (
    <section className="relative isolate overflow-hidden pt-16 md:pt-20">
      {/* Background — gradient base */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy via-charcoal to-slate" />
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent" />
      
      {/* Optional Hero Image Placeholder */}
      {/* <Image src="/images/hero-imports.jpg" alt="Produtos importados" fill priority className="object-cover -z-20 opacity-30" /> */}

      <Container className="py-20 sm:py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-accent/15 text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              🇺🇸 Direto dos Estados Unidos
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Produtos importados com{" "}
              <span className="text-accent">qualidade</span> e{" "}
              <span className="text-accent">confiança</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Roupas, bolsas, acessórios e eletrônicos das melhores marcas
              americanas, entregues na sua porta com garantia de originalidade.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#categories" variant="primary" className="px-8 py-4 text-base shadow-lg shadow-accent/25">
                Ver Categorias
                <FaArrowRight className="text-sm" />
              </Button>
              <Button 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="outline" 
                className="px-8 py-4 text-base"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </Reveal>

          {/* Trust badges */}
          <Reveal delay={0.5}>
            <div className="mt-16 flex flex-wrap gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">✓</span> 100% Original
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">✓</span> Envio Seguro
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">✓</span> Garantia de 30 dias
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
