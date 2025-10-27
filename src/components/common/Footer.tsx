"use client";

import { getStore, getWaLink } from "@/lib/store";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const STORE = getStore();
  const waLink = getWaLink(
    "Olá! Gostaria de saber mais sobre as guirlandas da Alento 🌿"
  );

  return (
    <footer
      id="contato"
      className="border-t border-[#D4AF37]/30 bg-[#3F5A3A] py-12 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Sessão principal */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
          {/* Identidade da marca */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="font-playfair mb-2 text-2xl text-[#D4AF37] md:text-3xl">
              {STORE.name}
            </h2>
            <p className="max-w-sm text-sm text-gray-200 md:text-base">{STORE.slogan}</p>
          </motion.div>

          {/* Contato e redes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-3 md:items-end"
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2 font-semibold text-[#3F5A3A] shadow-md transition-all hover:bg-[#c19b2e]"
            >
              <FaWhatsapp className="text-lg" />
              Fale pelo WhatsApp
            </a>

            <a
              href={STORE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-all hover:text-[#D4AF37]"
            >
              <FaInstagram className="text-lg" />
              <span>@alentodecor</span>
            </a>
          </motion.div>
        </div>

        {/* Linha divisória */}
        <div className="mt-10 mb-6 border-t border-[#D4AF37]/20" />

        {/* Rodapé inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-sm text-gray-300"
        >
          <p>
            © {new Date().getFullYear()} {STORE.name}. Todos os direitos reservados.
          </p>
          <p className="mt-1 text-gray-400">
            Feito com ❤️ por{" "}
            <a
              href="https://github.com/GustavoFrason"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#D4AF37]"
            >
              Gustavo Frason
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
