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
    subtitle: "High Fashion",
    href: "/categoria/roupas",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: "bolsas",
    title: "Bolsas",
    subtitle: "Premium Leather",
    href: "/categoria/bolsas",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "acessorios",
    title: "Acessórios",
    subtitle: "Exquisite Details",
    href: "/categoria/acessorios",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "eletronicos",
    title: "Eletrônicos",
    subtitle: "Next Gen Tech",
    href: "/categoria/eletronicos",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

export function CategoriesBento() {
  return (
    <section id="categories-bento" className="py-20 md:py-32 bg-cream/30">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <SectionTitle
            title="Nossas Coleções"
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-auto md:h-[900px]">
          {categories.map((cat, index) => (
            <Reveal key={cat.id} delay={index * 0.1} className={`h-full ${cat.gridClass}`}>
              <Link
                href={cat.href}
                className="group relative flex flex-col justify-end h-full w-full overflow-hidden rounded-3xl shadow-lg transition-all duration-700"
              >
                {/* Image Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-colors duration-500" />

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10">
                  <span className="block text-xs font-sans tracking-[0.3em] text-brand-gold uppercase mb-2 font-bold">
                    {cat.subtitle}
                  </span>

                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-none italic">
                    {cat.title}
                  </h3>

                  <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors text-sm font-medium tracking-wide">
                    Ver produtos <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
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
