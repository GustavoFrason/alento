"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  return (
    <section className="py-20 md:py-32 bg-cream dark:bg-navy transition-colors duration-500">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden bg-white dark:bg-navy/40 rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 lg:p-24 shadow-2xl border border-brand-gold/10 dark:border-white/5 group transition-all duration-700 hover:border-brand-gold/30">
            {/* background decoration - refined */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[80px] -mr-48 -mt-48 rounded-full animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-forest/5 dark:bg-brand-gold/5 blur-[80px] -ml-48 -mb-48 rounded-full" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-brand-gold mb-8 opacity-70">
                Alento Circle
              </span>
              
              <h2 className="font-serif text-4xl md:text-7xl text-navy dark:text-brand-champagne mb-8 leading-[1.1] transition-colors duration-500">
                Receba novidades <br /> 
                <span className="italic font-light opacity-80 decoration-brand-gold/30 decoration-1 underline-offset-8 underline">direto na fonte</span>
              </h2>
              
              <p className="font-playfair text-gray-400 dark:text-white/30 text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Junte-se ao Alento Circle e receba curadorias exclusivas, 
                avisos de reposição e promoções antecipadas via WhatsApp.
              </p>

              <div className="flex justify-center">
                <Button 
                  href="https://wa.me/5541996384529"
                  target="_blank"
                  className="group relative overflow-hidden px-10 py-5 bg-brand-gold text-brand-forest rounded-sm font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-brand-gold/90 transition-all duration-500 scale-100 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="flex items-center gap-3 relative z-10">
                    <FaWhatsapp className="text-lg" />
                    Entrar para o Grupo
                  </span>
                </Button>
              </div>
              
              <div className="mt-12 flex flex-col items-center gap-4">
                 <div className="w-12 h-px bg-brand-gold/20" />
                 <p className="text-[9px] text-gray-300 dark:text-white/10 uppercase font-black tracking-[0.3em]">
                   Privacidade Absolute • Zero Spam
                 </p>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-brand-gold/20" />
            <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-brand-gold/20" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
