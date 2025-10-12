import Image from "next/image";
import { getWaLink } from "@/lib/store";

export function CustomCTA() {
  const wa = getWaLink();
  return (
    <section id="personalizada" className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-serif text-3xl">Monte a sua Guirlanda Personalizada</h2>
          <p className="mt-2 text-zinc-600">Quer algo único? Criamos sob medida para combinar com a sua porta, paleta de cores e estilo.</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 list-disc pl-5">
            <li>Diâmetros de 35 a 60 cm</li>
            <li>Laços em tecidos nobres (veludo, linho, cetim)</li>
            <li>Mensagem personalizada gravada no aplique</li>
          </ul>
          <div className="mt-6">
            <a href={wa} className="rounded-lg bg-emerald-800 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-emerald-700">
              Falar com um especialista
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-zinc-200">
          <Image src="/images/personalizada.jpg" alt="Detalhe artesanal de laço em guirlanda personalizada" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}