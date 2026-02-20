"use client";

import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaHeart } from "react-icons/fa";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-playfair text-2xl text-accent mb-4 block">
              ALENTO
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Sua loja de produtos importados dos EUA. Qualidade, originalidade e confiança para você e sua família.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5541996384529"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-playfair text-lg text-white mb-6">Navegação</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Início</Link></li>
              <li><Link href="/#products" className="hover:text-accent transition-colors">Produtos</Link></li>
              <li><Link href="/#categories" className="hover:text-accent transition-colors">Categorias</Link></li>
              <li><Link href="/guirlandas" className="hover:text-accent transition-colors">Guirlandas de Natal</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-playfair text-lg text-white mb-6">Categorias</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/categoria/roupas" className="hover:text-accent transition-colors">Roupas</Link></li>
              <li><Link href="/categoria/bolsas" className="hover:text-accent transition-colors">Bolsas</Link></li>
              <li><Link href="/categoria/acessorios" className="hover:text-accent transition-colors">Acessórios</Link></li>
              <li><Link href="/categoria/eletronicos" className="hover:text-accent transition-colors">Eletrônicos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg text-white mb-6">Contato</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>WhatsApp: (41) 99638-4529</li>
              <li>Curitiba - PR</li>
              <li>Enviamos para todo o Brasil</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} ALENTO. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Feito com <FaHeart className="text-red-500" /> por Gustavo Alves
          </p>
        </div>
      </Container>
    </footer>
  );
}
