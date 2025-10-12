"use client";
import Image from "next/image";
import { getStore, getWaLink } from "@/lib/store";
import { Reveal } from "@/components/common/Reveal";

export function Hero() {
  const { slogan } = getStore();
  const wa = getWaLink("Quero ver modelos de guirlanda");

  return (
    <section id="top" className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-guirlanda.jpg"
          alt="Guirlanda de Natal pendurada em porta com luzes desfocadas"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 md:py-28 text-white">
        <Reveal y={32}>
          <div className="max-w-xl bg-white/80 backdrop-blur rounded-xl p-6 md:p-8 shadow-lg ring-1 ring-white/40 text-[#2a2a2a]">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#3F5A3A]">{slogan}</p>
            <h1 className="mt-2 font-serif text-3xl md:text-5xl leading-tight text-[#3F5A3A]">
              ALENTO: A Magia do Natal
            </h1>
            <p className="mt-3 text-sm md:text-base text-zinc-700">
              Guirlandas artesanais para celebrar com afeto. Materiais naturais, design atemporal e
              acabamento premium.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#colecoes" className="btn-olive">Ver Guirlandas</a>
              <a
                href={wa}
                className="rounded-lg border border-[#3F5A3A]/50 text-[#3F5A3A] px-5 py-3 text-sm font-semibold hover:bg-[#3F5A3A]/5"
              >
                Monte a sua
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}