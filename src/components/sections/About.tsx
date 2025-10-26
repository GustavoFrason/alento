import { SectionTitle } from "@/components/common/SectionTitle";
import { Reveal } from "@/components/common/Reveal";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <Reveal y={40}>
          <Image
            src="/images/about.png"
            alt="Guirlanda artesanal Alento"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </Reveal>
        <Reveal delay={0.2}>
          <div>
            <SectionTitle
              title="Sobre a Alento"
              subtitle="Guirlandas feitas à mão com significado e propósito"
              centered={false}
            />
            <p className="mb-4">
              Cada peça da <strong>Alento</strong> é criada com amor, cuidado e uma curadoria
              que valoriza o artesanal. Nosso propósito é levar aconchego e simbolismo
              para a decoração de fim de ano.
            </p>
            <p>
              Usamos materiais selecionados e designs exclusivos que unem tradição e elegância.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
