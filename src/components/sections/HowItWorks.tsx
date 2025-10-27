"use client";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/common/Button";
import { FaGift, FaTruck, FaRibbon } from "react-icons/fa";

const steps = [
  {
    icon: FaGift,
    title: "Escolha o modelo",
    description: "Selecione entre nossos modelos exclusivos de guirlandas artesanais",
    color: "text-olive",
    bgColor: "bg-olive/10",
  },
  {
    icon: FaRibbon,
    title: "Personalize sua guirlanda",
    description: "Adicione seu toque pessoal na sua guirlanda",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
  {
    icon: FaTruck,
    title: "Receba em casa",
    description: "Entregamos com cuidado e carinho diretamente na sua residência",
    color: "text-brown",
    bgColor: "bg-brown/10",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cream">
      <div className="container">
        <Reveal>
          <SectionTitle
            title="Monte a sua Guirlanda Personalizada"
            subtitle="Processo simples e personalizado para criar a guirlanda perfeita"
            centered={true}
          />
        </Reveal>

        <div className="mt-8 sm:mt-12 md:mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <div className="text-center group">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${step.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`text-3xl ${step.color}`} />
                </div>
                
                <h3 className={`font-playfair text-xl mb-4 ${step.color}`}>
                  {step.title}
                </h3>
                
                <p className="text-gray leading-relaxed mb-6">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-olive/30 to-transparent transform translate-x-6" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6}>
          <div className="text-center mt-12">
            <Button href="https://wa.me/5541996384529" variant="primary">
              Falar com um especialista
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}