import { SectionTitle } from "@/components/common/SectionTitle";
import { Reveal } from "@/components/common/Reveal";
import { FaStar } from "react-icons/fa";

interface TestimonialProps {
  nome: string;
  texto: string;
  rating?: number;
}

function Testimonial({ nome, texto, rating = 5 }: TestimonialProps) {
  return (
    <Reveal>
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${
                i < rating ? "text-gold fill-gold" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Comment */}
        <blockquote className="text-gray-700 flex-grow">
          <p className="text-sm leading-relaxed mb-4">&ldquo;{texto}&rdquo;</p>
        </blockquote>

        {/* Author */}
        <figcaption className="text-sm font-semibold text-olive mt-auto">
          {nome}
        </figcaption>
      </div>
    </Reveal>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      nome: "Carme Garasto",
      texto: "Renovou a magia do meu Natal! A guirlanda chegou lindamente embalada e encantou toda a família. A qualidade é excepcional e os detalhes são perfeitos.",
      rating: 5,
    },
    {
      nome: "Daniela Azevedo",
      texto: "Atendimento atencioso e produto de altíssima qualidade. A entrega foi rápida e a embalagem especial para presente foi um toque muito cuidadoso.",
      rating: 5,
    },
    {
      nome: "Marcelo Nunes",
      texto: "Comprei uma guirlanda personalizada para minha esposa. Ela amou! O acabamento é impecável e o processo de personalização foi super simples pelo WhatsApp.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cream">
      <div className="container">
        <SectionTitle
          title="O que nossos clientes dizem"
          subtitle="Depoimentos reais de quem já recebeu um Alento"
          centered={true}
        />

        <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              nome={testimonial.nome}
              texto={testimonial.texto}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
