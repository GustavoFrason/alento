"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  const whatsappNumber = "5541996384529";
  const message = "Olá! Vim pelo site da Alento e gostaria de saber mais sobre os produtos importados 🇺🇸";

  useEffect(() => {
    // Show after 2 seconds
    const showTimer = setTimeout(() => setVisible(true), 2000);

    // Stop pulse after 10 seconds
    const pulseTimer = setTimeout(() => setPulse(false), 12000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <div className="hidden sm:block bg-white rounded-2xl shadow-xl p-4 max-w-[240px] border border-gray-100 animate-fadeIn">
        <p className="text-sm text-navy font-medium leading-snug">
          Olá! 👋 Precisa de ajuda? Fale com a gente pelo WhatsApp.
        </p>
        <div className="absolute bottom-[-6px] right-8 w-3 h-3 bg-white border-r border-b border-gray-100 transform rotate-45" />
      </div>

      {/* Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`group relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 ${
          pulse ? "animate-bounce" : ""
        }`}
      >
        <FaWhatsapp className="text-3xl" />

        {/* Ping animation */}
        {pulse && (
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
        )}
      </a>
    </div>
  );
}
