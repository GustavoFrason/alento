"use client";
import { Reveal } from "@/components/common/Reveal";

function Pill({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white font-semibold text-[#3F5A3A] ring-1 ring-black/10">
        {n}
      </span>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-zinc-600">{text}</p>
      </div>
    </div>
  );
}

export function FeaturesBar() {
  return (
    <section className="border-y border-black/5 bg-white">
      <Reveal>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 text-sm sm:grid-cols-3">
          <Pill
            n={1}
            title="Design Exclusivo"
            text="Curadoria própria e laços impecáveis"
          />
          <Pill n={2} title="Materiais Naturais" text="Pinhas, ramos e texturas reais" />
          <Pill n={3} title="Toque Artesanal" text="Acabamento premium e durável" />
        </div>
      </Reveal>
    </section>
  );
}
