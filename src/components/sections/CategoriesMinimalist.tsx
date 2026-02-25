"use client";
import { Reveal } from "@/components/common/Reveal";
import { SectionTitle } from "@/components/common/SectionTitle";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const categories = [
  {
    id: "roupas",
    title: "Roupas",
    href: "/categoria/roupas",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    count: "12 Itens",
  },
  {
    id: "bolsas",
    title: "Bolsas",
    href: "/categoria/bolsas",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1920&auto=format&fit=crop",
    count: "08 Itens",
  },
  {
    id: "acessorios",
    title: "Acessórios",
    href: "/categoria/acessorios",
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop",
    count: "15 Itens",
  },
  {
    id: "eletronicos",
    title: "Eletrônicos",
    href: "/categoria/eletronicos",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1920&auto=format&fit=crop",
    count: "05 Itens",
  },
];

export function CategoriesMinimalist() {
  return (
    <section id="categories-minimalist" className="py-20 md:py-32 bg-white">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <SectionTitle
            title="Nossas Coleções"
            subtitle="OPÇÃO B — CLEAN MINIMALIST"
            centered
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((cat, index) => (
            <Reveal key={cat.id} delay={index * 0.1}>
              <Link href={cat.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-cream mb-6 rounded-2xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    style={{ backgroundImage: `url(${cat.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  
                  <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                        <FaPlus className="text-navy" />
                     </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-2xl text-navy mb-1 group-hover:text-accent transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-xs font-sans tracking-widest text-gray-400 uppercase font-medium">
                    {cat.count}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
