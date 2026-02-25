"use client";

import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden bg-brand-green-dark rounded-[2.5rem] p-8 md:p-16 lg:p-24 shadow-2xl border border-white/5">
            {/* background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green-light/20 blur-3xl -mr-32 -mt-32 rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 blur-3xl -ml-32 -mb-32 rounded-full" />
            
            {/* Subtle grain */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Alento Circle
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
                Receba novidades <br /> <span className="italic text-brand-gold">direto na fonte</span>
              </h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Junte-se ao Alento Circle e receba curadorias exclusivas, <br className="hidden md:block" />
                avisos de reposição e promoções antecipadas via WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="whatsapp" 
                  className="px-8 py-4 text-lg rounded-2xl shadow-xl hover:scale-105 transition-transform"
                  href="https://wa.me/5541996384529"
                  target="_blank"
                >
                  <FaWhatsapp className="text-xl" />
                  Entrar para o Grupo
                </Button>
                <button className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors font-medium">
                  Ver como funciona <FaArrowRight className="text-xs" />
                </button>
              </div>
              
              <p className="mt-8 text-white/30 text-xs">
                Zero spam. Apenas o que há de melhor nos EUA para você.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
