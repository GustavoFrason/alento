"use client";
import { Reveal } from "@/components/common/Reveal";

function Pill({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#3F5A3A] font-semibold ring-1 ring-black/10">
        {n}
      </span>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-zinc-600 text-sm">{text}</p>
      </div>
    </div>
  );
}

export function FeaturesBar() {
  return (
    <section className="bg-white border-y border-black/5">
      <Reveal>
        <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <Pill n={1} title="Design Exclusivo" text="Curadoria própria e laços impecáveis" />
          <Pill n={2} title="Materiais Naturais" text="Pinhas, ramos e texturas reais" />
          <Pill n={3} title="Toque Artesanal" text="Acabamento premium e durável" />
        </div>
      </Reveal>
    </section>
  );
}