"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { useScroll } from "@/hooks/useScroll";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const scrolled = useScroll(10);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Consider moving these constants to a config file eventually
  const whatsappNumber = "5541996384529";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os produtos importados da ALENTO";

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/categoria/roupas", label: "Roupas" },
    { href: "/categoria/bolsas", label: "Bolsas" },
    { href: "/categoria/acessorios", label: "Acessórios" },
    { href: "/categoria/eletronicos", label: "Eletrônicos" },
    { href: "/guirlandas", label: "🎄 Guirlandas" },
  ];

  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-navy"
      }`}
    >
      <Container className="flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-playfair text-2xl md:text-3xl text-accent hover:text-accent/80 transition-colors tracking-wide"
        >
          ALENTO
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-accent transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Button 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="whatsapp"
            className="px-5 py-2.5 text-sm rounded-xl"
          >
            <FaWhatsapp />
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white hover:text-accent transition-colors p-3 touch-manipulation"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-navy/98 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-accent hover:bg-white/5 transition-colors text-base font-medium py-3 px-4 rounded-lg touch-manipulation"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 px-2">
            <Button
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              variant="whatsapp"
              className="w-full py-4 rounded-xl"
            >
              <FaWhatsapp />
              WhatsApp
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
