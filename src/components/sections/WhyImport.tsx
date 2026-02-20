"use client";
import { Reveal } from "@/components/common/Reveal";
import { SectionTitle } from "@/components/common/SectionTitle";
import { FaCheckCircle, FaShieldAlt, FaGlobeAmericas, FaTruck } from "react-icons/fa";

const benefits = [
  {
    icon: FaCheckCircle,
    title: "Produtos 100% Originais",
    description:
      "Todos os nossos produtos são adquiridos diretamente de lojas autorizadas nos Estados Unidos.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: FaGlobeAmericas,
    title: "Direto dos EUA",
    description:
      "Importação própria para garantir os melhores preços e autenticidade total dos produtos.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: FaShieldAlt,
    title: "Garantia e Confiança",
    description:
      "Garantia de 30 dias em todos os produtos. Compre com segurança e tranquilidade.",
    color: "text-accent",
    bgColor: "bg-amber-50",
  },
  {
    icon: FaTruck,
    title: "Envio para Todo Brasil",
    description:
      "Entregamos em todo o território nacional com embalagem segura e rastreamento completo.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
];

export function WhyImport() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-cream">
      <div className="container">
        <SectionTitle
          title="Por que comprar conosco?"
          subtitle="A Alento garante a melhor experiência em produtos importados"
          centered
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.15}>
              <div className="group text-center p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${benefit.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className={`text-2xl ${benefit.color}`} />
                </div>

                <h3 className="font-inter text-lg font-semibold text-navy mb-3">
                  {benefit.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
