"use client";
import { useState } from "react";
import { Reveal } from "@/components/common/Reveal";
import { FaArrowRight } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export function HeroHome() {
  const [hoveredSide, setHoveredSide] = useState<"new" | "used" | null>(null);

  // Smooth mouse movement for subtle parallax
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const springX = useSpring(x, { stiffness: 40, damping: 20 });
  const springY = useSpring(y, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const valX = (e.clientX - rect.left) / rect.width;
    const valY = (e.clientY - rect.top) / rect.height;
    x.set(valX);
    y.set(valY);
  };

  const moveX = useTransform(springX, [0, 1], [-15, 15]);
  const moveY = useTransform(springY, [0, 1], [-15, 15]);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex flex-col pt-16 md:pt-20 bg-brand-champagne dark:bg-navy transition-colors duration-500 overflow-hidden"
    >
      <div className="flex-1 flex flex-col md:flex-row h-full">
        {/* LADO ESQUERDO: PRODUTOS NOVOS */}
        <div 
          className={`relative flex-1 transition-all duration-700 ease-in-out group overflow-hidden cursor-pointer ${
            hoveredSide === "new" ? "md:flex-[1.2]" : hoveredSide === "used" ? "md:flex-[0.8]" : "md:flex-1"
          }`}
          onMouseEnter={() => setHoveredSide("new")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          {/* Imagem de Fundo - New Luxury */}
          <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105">
            <Image 
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop" 
              alt="Produtos Importados Novos"
              fill
              className={`object-cover mix-blend-multiply transition-opacity duration-500 ${
                hoveredSide === "new" ? "opacity-100" : "opacity-80"
              }`}
            />
            <div className={`absolute inset-0 transition-colors duration-500 ${
              hoveredSide === "new" ? "bg-brand-forest/10" : "bg-brand-forest/40"
            }`} />
          </div>

          <Container className="relative z-10 h-full flex flex-col justify-center py-20">
            <motion.div style={{ x: moveX, y: moveY }}>
              <Reveal>
                <span className="inline-block text-brand-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">
                  New Arrival
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.9]">
                  Importados <br /> <span className="italic">Direto dos EUA</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <button className="group/btn flex items-center gap-4 text-white hover:text-brand-gold transition-colors">
                  <span className="text-xl border-b border-white/30 group-hover/btn:border-brand-gold pb-1">Ver Coleção Nova</span>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:border-brand-gold group-hover/btn:bg-brand-gold group-hover/btn:text-brand-forest transition-all">
                    <FaArrowRight />
                  </div>
                </button>
              </Reveal>
            </motion.div>
          </Container>

          {/* Efeito de Bloom no Hover */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_white_0%,transparent_70%)]" />
        </div>

        {/* LINHA DIVISORA (EDITORIAL) */}
        <div className="hidden md:block w-px bg-brand-forest/10 relative z-20" />

          {/* LADO DIREITO: SEMINOVOS */}
          <div 
            className={`relative flex-1 transition-all duration-700 ease-in-out group overflow-hidden cursor-pointer ${
              hoveredSide === "used" ? "md:flex-[1.2]" : hoveredSide === "new" ? "md:flex-[0.8]" : "md:flex-1"
            }`}
            onMouseEnter={() => setHoveredSide("used")}
            onMouseLeave={() => setHoveredSide(null)}
          >
            {/* Imagem de Fundo - Seminovos */}
            <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105">
              <Image 
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop" 
                alt="Seminovos de Luxo"
                fill
              className={`object-cover mix-blend-multiply transition-opacity duration-500 ${
                hoveredSide === "used" ? "opacity-100" : "opacity-80"
              }`}
            />
            <div className={`absolute inset-0 transition-colors duration-500 ${
              hoveredSide === "used" ? "bg-brand-sage/10" : "bg-brand-sage/40"
            }`} />
          </div>

          <Container className="relative z-10 h-full flex flex-col justify-center py-20">
            <motion.div style={{ x: useTransform(springX, [0, 1], [15, -15]), y: moveY }}>
              <Reveal>
                <span className="inline-block text-brand-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">
                  Curated Luxury
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.9]">
                  Seminovos <br /> <span className="italic">de Luxo</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <button className="group/btn flex items-center gap-4 text-white hover:text-brand-gold transition-colors">
                  <span className="text-xl border-b border-white/30 group-hover/btn:border-brand-gold pb-1">Explorar Curadoria</span>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:border-brand-gold group-hover/btn:bg-brand-gold group-hover/btn:text-brand-forest transition-all">
                    <FaArrowRight />
                  </div>
                </button>
              </Reveal>
            </motion.div>
          </Container>

          {/* Efeito de Bloom no Hover */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_white_0%,transparent_70%)]" />
        </div>
      </div>

      {/* RODAPÉ DO HERO (STATS) */}
      <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md border-t border-brand-forest/5 dark:border-white/10 py-8 transition-colors duration-500">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <span className="block text-brand-forest dark:text-brand-champagne font-playfair text-2xl mb-1">100% Original</span>
              <span className="text-brand-forest/60 dark:text-white/40 text-xs uppercase tracking-widest font-bold">Autenticidade Garantida</span>
            </div>
            <div className="text-center md:text-left border-l border-brand-forest/10 dark:border-white/10 pl-8">
              <span className="block text-brand-forest dark:text-brand-champagne font-playfair text-2xl mb-1">Seminovos</span>
              <span className="text-brand-forest/60 dark:text-white/40 text-xs uppercase tracking-widest font-bold">Curadoria de Luxo</span>
            </div>
            <div className="hidden md:block border-l border-brand-forest/10 dark:border-white/10 pl-8">
              <span className="block text-brand-forest dark:text-brand-champagne font-playfair text-2xl mb-1">Fast Delivery</span>
              <span className="text-brand-forest/60 dark:text-white/40 text-xs uppercase tracking-widest font-bold">Direto de Orlando/EUA</span>
            </div>
            <div className="hidden md:block border-l border-brand-forest/10 dark:border-white/10 pl-8">
              <span className="block text-brand-forest dark:text-brand-champagne font-playfair text-2xl mb-1">Personal Shopper</span>
              <span className="text-brand-forest/60 dark:text-white/40 text-xs uppercase tracking-widest font-bold">Assessoria Exclusiva</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white/10 pointer-events-none z-30" />
      <div className="absolute right-[10%] top-0 bottom-0 w-px bg-white/10 pointer-events-none z-30" />
    </section>
  );
}
