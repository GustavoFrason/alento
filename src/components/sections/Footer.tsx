"use client";

import { FaInstagram, FaWhatsapp, FaHeart } from "react-icons/fa";

export function Footer() {
  const whatsappNumber = "5511999999999";
  const instagramHandle = "@alento";

  return (
    <footer className="bg-olive text-white">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair text-2xl text-gold mb-4">Alento</h3>
            <p className="text-sm text-gray-200 leading-relaxed mb-4">
              Guirlandas artesanais que trazem aconchego, tradição e beleza para
              o seu lar. Feitas à mão com amor e cuidado.
            </p>
            <p className="text-xs text-gray-300">
              Política de devolução de 7 dias • Envios para todo Brasil
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4 uppercase tracking-wide text-sm">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#hero" className="hover:text-gold transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-gold transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold mb-4 uppercase tracking-wide text-sm">Contato</h4>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-200 hover:text-gold transition-colors group"
              >
                <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
              <a
                href={`https://instagram.com/${instagramHandle.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-200 hover:text-gold transition-colors group"
              >
                <FaInstagram className="text-lg group-hover:scale-110 transition-transform" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Alento. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gold mt-2 flex items-center justify-center gap-2">
            Feito com <FaHeart className="text-red-400" /> para seu lar
          </p>
        </div>
      </div>
    </footer>
  );
}
