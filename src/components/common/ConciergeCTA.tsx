"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "@/utils/whatsapp";

export function ConciergeCTA() {
  const waMessage = "Olá! Gostaria de solicitar o serviço de Concierge Alento para uma curadoria personalizada.";
  const waLink = getWhatsAppLink("5541996384529", waMessage);

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-3 bg-brand-forest text-white p-4 rounded-2xl shadow-2xl overflow-hidden border border-white/10"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/20 to-brand-gold/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        <div className="relative flex items-center justify-center w-10 h-10 bg-brand-gold rounded-xl text-brand-forest shadow-inner">
          <FaUserTie className="text-xl" />
        </div>
        
        <div className="relative flex flex-col pr-2">
          <span className="text-[10px] uppercase tracking-widest font-black text-brand-gold/80 mb-0.5">Serviço Exclusivo</span>
          <span className="text-sm font-serif font-bold">Concierge Alento</span>
        </div>

        <motion.div 
          className="relative flex items-center justify-center w-10 h-10 bg-white/10 rounded-xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaWhatsapp className="text-xl" />
        </motion.div>
      </motion.a>

      {/* Popover Hint (desktop only) */}
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 pointer-events-none hidden md:block w-[300px]">
        <div className="bg-white/95 dark:bg-navy/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10">
          <p className="text-sm text-brand-forest dark:text-brand-champagne font-medium leading-relaxed">
            Olá! 👋 Precisa de ajuda ou procura algo exclusivo? Nosso <span className="text-accent font-bold">Concierge</span> está pronto para te atender.
          </p>
          <div className="absolute bottom-[-6px] right-8 w-3 h-3 bg-white dark:bg-navy border-r border-b border-gray-100 dark:border-white/10 transform rotate-45" />
        </div>
      </div>
    </div>
  );
}
