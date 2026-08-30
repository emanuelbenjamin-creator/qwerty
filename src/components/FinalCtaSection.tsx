import React from 'react';
import { IMAGES } from '../data/bookData';
import { Sparkles, ShoppingBag } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenPurchase: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenPurchase }) => {
  return (
    <section id="comprar" className="py-20 sm:py-28 px-6 sm:px-8 text-center max-w-4xl mx-auto">
      {/* Featured Book Photography */}
      <div className="mb-12 max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[#ECE5F9] bg-white group">
        <img
          src={IMAGES.ctaBook}
          alt="Detalle de páginas abiertas del libro Heridas que se convirtieron en alas"
          className="w-full h-full object-cover aspect-[1.55] group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>

      <h2 className="text-3xl sm:text-5xl md:text-[56px] font-extrabold text-[#1a1c1c] tracking-tight mb-6 leading-tight">
        Es momento de emprender el vuelo.
      </h2>

      <p className="text-lg sm:text-xl text-[#5a4040] mb-10 max-w-2xl mx-auto leading-relaxed">
        No permitas que tus heridas definan tu destino. Convierte el dolor en tu motor más poderoso.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          id="final-cta-buy-btn"
          onClick={onOpenPurchase}
          className="bg-[#FA505A] hover:bg-[#d73644] text-white font-bold px-10 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#FA505A]/25 flex items-center gap-3 cursor-pointer"
        >
          <ShoppingBag className="w-6 h-6" />
          <span>Comprar el Libro Ahora</span>
        </button>
      </div>

      <p className="mt-6 text-sm text-[#5a4040] font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-[#FA505A]" />
        <span>Disponible en formato Físico, Digital y Audiolibro.</span>
      </p>
    </section>
  );
};
