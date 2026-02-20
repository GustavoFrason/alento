"use client";
import { Reveal } from "@/components/common/Reveal";
import { SectionTitle } from "@/components/common/SectionTitle";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const categories = [
  {
    id: "roupas",
    title: "Roupas",
    subtitle: "Moda & Estilo",
    description: "Peças exclusivas das melhores marcas americanas.",
    href: "/categoria/roupas",
    gradient: "from-blue-900/80 to-slate-900/90", 
    accent: "bg-blue-500",
  },
  {
    id: "bolsas",
    title: "Bolsas",
    subtitle: "Luxo & Design",
    description: "Ícones de design que transformam qualquer look.",
    href: "/categoria/bolsas",
    gradient: "from-rose-900/80 to-pink-900/90",
    accent: "bg-rose-500",
  },
  {
    id: "acessorios",
    title: "Acessórios",
    subtitle: "Detalhes Únicos",
    description: "Óculos, relógios e joias para finalizar sua produção.",
    href: "/categoria/acessorios",
    gradient: "from-amber-900/80 to-yellow-900/90",
    accent: "bg-amber-500",
  },
  {
    id: "eletronicos",
    title: "Eletrônicos",
    subtitle: "Tech & Inovação",
    description: "A tecnologia mais avançada ao seu alcance.",
    href: "/categoria/eletronicos",
    gradient: "from-emerald-900/80 to-teal-900/90",
    accent: "bg-emerald-500",
  },
];

export function Categories() {
  return (
    <section id="categories" className="py-20 md:py-32 bg-white">
      <Container>
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <SectionTitle
            title="Nossas Coleções"
            subtitle="Curadoria Exclusiva USA"
            centered
          />
          <p className="mt-6 text-lg text-gray-500 font-light font-sans max-w-2xl mx-auto leading-relaxed">
            Navegue por nossa seleção premium de produtos importados, escolhidos a dedo para trazer
            o melhor do estilo americano até você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {categories.map((cat, index) => (
            <Reveal key={cat.id} delay={index * 0.1} className="h-full">
              <Link
                href={cat.href}
                className="group relative flex flex-col justify-end h-[400px] md:h-[500px] w-full overflow-hidden rounded-none md:rounded-sm shadow-2xl transition-all duration-700 hover:shadow-3xl"
              >
                {/* Background (Gradient) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} transition-transform duration-1000 group-hover:scale-110`} />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-20 h-px bg-white/30 group-hover:w-32 transition-all duration-500" />
                <div className={`absolute top-8 right-8 w-1 h-1 ${cat.accent} rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100`} />

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12">
                  <span className={`inline-block w-8 h-1 ${cat.accent} mb-6`} />
                  
                  <span className="block text-xs md:text-sm font-sans tracking-[0.2em] text-white/80 uppercase mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {cat.subtitle}
                  </span>

                  <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-none italic">
                    {cat.title}
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                    <p className="text-gray-300 font-light text-base md:text-lg mb-6 leading-relaxed border-l-2 border-white/20 pl-4">
                      {cat.description}
                    </p>
                    
                    <div className="flex items-center gap-3 text-white font-medium tracking-wide uppercase text-sm group/btn">
                      Explorar Coleção
                      <span className="bg-white/20 p-2 rounded-full group-hover/btn:bg-white group-hover/btn:text-black transition-colors duration-300">
                         <FaArrowRight className="text-xs" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
