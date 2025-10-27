"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Início" },
    { href: "#products", label: "Produtos" },
    { href: "#about", label: "Sobre" },
    { href: "#depoimentos", label: "Depoimentos" },
  ];

  const whatsappNumber = "5541996384529";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre as guirlandas da ALENTO";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-olive/95 backdrop-blur-sm shadow-lg"
          : "bg-olive"
      }`}
    >
      <nav className="container flex items-center justify-between h-14 sm:h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="font-playfair text-xl sm:text-2xl md:text-3xl text-gold hover:text-gold/80 transition-colors">
          ALENTO
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-gold transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-gold transition-colors p-3 touch-manipulation"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-olive transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-gold transition-colors text-base font-medium py-3 px-2 touch-manipulation"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-6 py-4 rounded-lg transition-colors text-base font-semibold touch-manipulation"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
