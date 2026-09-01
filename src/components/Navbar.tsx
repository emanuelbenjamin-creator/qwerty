import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, BookOpen } from 'lucide-react';
import { LINKS } from '../data/bookData';

interface NavbarProps {
  onOpenPurchase: () => void;
  onOpenReader: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPurchase, onOpenReader }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'El Libro', href: '#el-libro' },
    { name: '¿Para quién es?', href: '#para-quien' },
    { name: 'El Método', href: '#metodo' },
    { name: 'Sobre el Autor', href: '#sobre-el-autor' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f9f9f9]/90 backdrop-blur-md border-b border-[#ECE5F9] shadow-sm py-3'
          : 'bg-[#f9f9f9]/80 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#el-libro"
          className="text-lg sm:text-2xl font-bold tracking-tight text-[#1a1c1c] hover:opacity-90 transition-opacity"
        >
          RICARDO MADRID MENDOZA
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#5a4040] hover:text-[#b41a2e] text-sm font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenReader}
            className="flex items-center gap-1.5 text-sm font-medium text-[#b41a2e] hover:text-[#92001e] transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Leer muestra</span>
          </button>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            id="nav-buy-button"
            href={LINKS.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FA505A] hover:bg-[#d73644] text-white font-bold px-6 py-2.5 rounded-full text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 hidden sm:inline-block" />
            <span>Comprar</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="lg:hidden p-2 rounded-lg text-[#1a1c1c] hover:bg-[#ECE5F9]/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#ECE5F9] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1a1c1c] hover:text-[#b41a2e] font-medium text-base py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReader();
              }}
              className="flex items-center gap-2 text-[#b41a2e] font-semibold text-base py-1.5 text-left"
            >
              <BookOpen className="w-5 h-5" />
              <span>Leer fragmento gratis</span>
            </button>
            <a
              href={LINKS.amazon}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full bg-[#FA505A] text-white font-bold py-3 rounded-full text-center hover:bg-[#d73644] transition-colors"
            >
              Comprar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
