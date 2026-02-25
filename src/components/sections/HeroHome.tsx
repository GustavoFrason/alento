"use client";
import { useState } from "react";
import { Reveal } from "@/components/common/Reveal";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function HeroHome() {
  const waLink = "https://wa.me/5541996384529?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20importados%20da%20Alento";

  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Antigravity Fluidity: Spring-based positions
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  
  const springConfig = { stiffness: 60, damping: 30, mass: 1 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const slides = [
    { title: "Pure Satin", desc: "Base clássica com spotlight interativo." },
    { title: "Golden Dust", desc: "Partículas douradas que flutuam no ar." },
    { title: "Silk Parallax", desc: "Profundidade 3D nas dobras do cetim." },
    { title: "Alento Royale", desc: "Experiência completa de luxo e brilho." },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const valX = ((e.clientX - rect.left) / rect.width) * 100;
    const valY = ((e.clientY - rect.top) / rect.height) * 100;
    x.set(valX);
    y.set(valY);
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Transform spring values to percentage strings for CSS
  const spotlightX = useTransform(mouseX, (v) => `${v}%`);
  const spotlightY = useTransform(mouseY, (v) => `${v}%`);

  // top-level transforms to avoid hook-rules violations
  const parallaxX1 = useTransform(mouseX, (v) => (v - 50) * 0.15);
  const parallaxY1 = useTransform(mouseY, (v) => (v - 50) * 0.15);
  const parallaxX2 = useTransform(mouseX, (v) => (v - 50) * 0.08);
  const parallaxY2 = useTransform(mouseY, (v) => (v - 50) * 0.08);

  // Dust Layers (different depths)
  const dustX1 = useTransform(mouseX, (v) => (v - 50) * 0.2);
  const dustY1 = useTransform(mouseY, (v) => (v - 50) * 0.2);
  const dustX2 = useTransform(mouseX, (v) => (v - 50) * 0.4);
  const dustY2 = useTransform(mouseY, (v) => (v - 50) * 0.4);
  const dustX3 = useTransform(mouseX, (v) => (v - 50) * 0.6);
  const dustY3 = useTransform(mouseY, (v) => (v - 50) * 0.6);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative isolate overflow-hidden pt-16 md:pt-20 group/hero min-h-[85vh] flex items-center"
    >
      {/* 1. LAYER BASE (Comum a todos) */}
      <div 
        className="absolute inset-0 -z-30 transition-all duration-1000"
        style={{
          background: "linear-gradient(135deg, #0A3D1A 0%, #2E5C3A 50%, #4A7C4A 100%)"
        }}
      />
      
      {/* 2. LAYER SILK TEXTURE (Comum) */}
      <div className="absolute inset-0 -z-20 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/pinstripe.png')] mix-blend-overlay" />
      <div className="absolute inset-0 -z-20 opacity-40 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]" />

      {/* 3. EXPERIMENTAL LAYERS (Condicionais) */}
      
      {/* ATMOSPHERIC BLOOM (Antigravity Style) */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([sx, sy]) => `
              radial-gradient(120px circle at ${sx} ${sy}, rgba(255,255,255,0.18), transparent 80%),
              radial-gradient(500px circle at ${sx} ${sy}, rgba(255,255,255,0.1), transparent 65%),
              radial-gradient(1100px circle at ${sx} ${sy}, rgba(255,255,255,0.04), transparent 45%)
            `
          )
        }}
      />

      {/* GOLDEN DUST (Slides 1 e 3) */}
      {(currentSlide === 1 || currentSlide === 3) && (
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          {[...Array(40)].map((_, i) => {
            const size = (i % 3) + 1; // 1px, 2px, 3px
            const opacityValue = (i % 5) * 0.1 + 0.1; // 0.1 to 0.5
            const delayValue = (i % 10) * 0.5;
            const driftSpeed = 10 + (i % 10);
            const floatSpeed = 15 + (i % 10);
            const depth = i % 3; // Use pre-calculated depth layers

            return (
              <motion.div 
                key={i}
                className={`absolute rounded-full bg-brand-gold/60 blur-[1px]
                  ${size === 3 ? 'w-1.5 h-1.5 shadow-[0_0_8px_rgba(212,175,55,0.4)]' : size === 2 ? 'w-1 h-1' : 'w-0.5 h-0.5'}
                `}
                style={{
                  top: `${((i * 7.7) % 100)}%`,
                  left: `${((i * 13.3) % 100)}%`,
                  opacity: opacityValue,
                  x: depth === 0 ? dustX1 : depth === 1 ? dustX2 : dustX3,
                  y: depth === 0 ? dustY1 : depth === 1 ? dustY2 : dustY3,
                  animation: `
                    pulseSlow 8s ease-in-out infinite ${delayValue}s,
                    drift ${driftSpeed}s ease-in-out infinite ${delayValue}s,
                    float ${floatSpeed}s ease-in-out infinite ${delayValue}s
                  `
                }}
              />
            );
          })}
        </div>
      )}

      {/* SILK PARALLAX (Slides 2 e 3) */}
      {(currentSlide === 2 || currentSlide === 3) && (
        <>
          <motion.div 
            className="absolute inset-0 -z-15 opacity-20 pointer-events-none"
            style={{ 
              x: parallaxX1,
              y: parallaxY1,
              scale: 1.1,
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, transparent 70%)"
            }}
          />
          <motion.div 
            className="absolute inset-0 -z-15 opacity-10 pointer-events-none"
            style={{ 
              x: parallaxX2,
              y: parallaxY2,
              scale: 1.05,
              background: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 40%)"
            }}
          />
        </>
      )}

      {/* CONTENT */}
      <Container className="py-20">
        <div className="max-w-3xl">
          <Reveal key={currentSlide}>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Slide {currentSlide + 1}: {slides[currentSlide].title}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} key={`h1-${currentSlide}`}>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              {currentSlide === 3 ? (
                <span className="relative inline-block">
                  Alento Royale
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_100%] animate-glint bg-clip-text text-transparent" aria-hidden="true">
                    Alento Royale
                  </span>
                </span>
              ) : "Produtos importados com"}
              {" "}
              <span className="text-brand-gold">qualidade</span> e{" "}
              <span className="text-brand-gold">confiança</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} key={`p-${currentSlide}`}>
            <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
              {slides[currentSlide].desc} Roupas, bolsas e eletrônicos das melhores marcas entregues com garantia de originalidade.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#categories" variant="primary" className="px-8 py-4 text-base shadow-lg shadow-brand-gold/25">
                Ver Categorias
                <FaArrowRight className="text-sm" />
              </Button>
              <Button 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="outline" 
                className="px-8 py-4 text-base border-white/20 text-white hover:bg-white/10"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* NAVIGATION CONTROLS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 z-20">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all"
          aria-label="Slide anterior"
        >
          <FaArrowLeft className="rotate-180" />
        </button>
        
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === i ? "w-8 bg-brand-gold" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="p-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all"
          aria-label="Próximo slide"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Side Label */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 vertical-text">
        <span className="text-[10px] text-white/20 uppercase tracking-[1em] font-bold">
          LABORATÓRIO DE EFEITOS PREMIUM
        </span>
      </div>
    </section>
  );
}
