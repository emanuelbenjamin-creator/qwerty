import React from 'react';
import { IMAGES } from '../data/bookData';
import { BookOpen, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onSelectEdition: (editionId?: string) => void;
  onOpenReader: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectEdition, onOpenReader }) => {
  return (
    <section id="el-libro" className="pt-32 sm:pt-40 pb-20 sm:pb-28 px-6 sm:px-8 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 pr-0 lg:pr-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd9e2]/60 text-[#b41a2e] font-mono-label text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Best Seller en Superación y Resiliencia</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-[#1a1c1c] tracking-tight leading-[1.1] mb-6">
            Heridas que se convirtieron en <span className="text-[#b41a2e] inline-block">alas</span>.
          </h1>

          <p className="text-lg sm:text-xl text-[#5a4040] leading-relaxed mb-8 max-w-2xl font-normal">
            Un viaje visceral desde el dolor más profundo hasta el empoderamiento absoluto. Descubre cómo transformar tus cicatrices en tu mayor fortaleza.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <button
              id="hero-buy-digital-btn"
              onClick={() => onSelectEdition('digital')}
              className="bg-[#FA505A] hover:bg-[#d73644] text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#FA505A]/25 text-center cursor-pointer"
            >
              Consigue una copia digital
            </button>

            <button
              id="hero-buy-print-btn"
              onClick={() => onSelectEdition('print')}
              className="bg-transparent hover:bg-[#F7F0F2] text-[#1a1c1c] border-2 border-[#2E101B] font-bold px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              Quiero una copia impresa
            </button>
          </div>

          {/* Secondary Action: Read Free Chapter */}
          <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-[#ECE5F9]/80">
            <button
              onClick={onOpenReader}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#b41a2e] hover:text-[#92001e] transition-colors group cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#FA505A] group-hover:scale-110 transition-transform" />
              <span>Leer fragmento gratis (Capítulo 1)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#5a4040]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantía de satisfacción</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Res Book Mockup */}
        <div className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-0">
          <div className="relative w-full max-w-[440px] group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FA505A]/15 to-[#b41a2e]/5 rounded-3xl blur-2xl -z-10 group-hover:scale-105 transition-all duration-500" />
            
            {/* Book Mockup Container */}
            <div className="relative aspect-[1.48] rounded-xl overflow-hidden book-shadow bg-white/40 border border-[#ECE5F9]/60 transition-transform duration-500 group-hover:-translate-y-1">
              <img
                src={IMAGES.heroBook}
                alt="Portada oficial del libro Heridas que se convirtieron en alas de Ricardo Madrid Mendoza"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quick floating badge */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#ECE5F9] shadow-md flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-[#1a1c1c]">Lanzamiento 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
