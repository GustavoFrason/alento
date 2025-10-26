"use client";
import Image from "next/image";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/common/Button";

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-14 sm:pt-16 md:pt-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-guirlanda.png"
          alt="Guirlanda de Natal decorando uma porta com luzes ao fundo"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container py-12 sm:py-16 md:py-24 lg:py-28 flex justify-start">
        <div className="max-w-2xl">
          <Reveal>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl">
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-white">
                Decore com amor e tradição
              </h1>
              <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed">
                Guirlandas artesanais que trazem encanto, aconchego e significado para o seu lar.
              </p>
              <Button href="#products">Ver modelos</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
