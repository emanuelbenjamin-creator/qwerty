import React from 'react';
import { EDITIONS } from '../data/bookData';
import { Check, Zap, Book } from 'lucide-react';

interface EditionsSectionProps {
  onSelectEdition?: (editionId?: string) => void;
}

export const EditionsSection: React.FC<EditionsSectionProps> = () => {
  return (
    <section id="formatos" className="py-20 sm:py-28 px-6 sm:px-8 max-w-[1000px] mx-auto">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="font-mono-label text-xs sm:text-sm text-[#b41a2e] font-semibold uppercase tracking-widest mb-3 block">
          Formatos Disponibles
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1c1c] tracking-tight mb-4">
          Elige la edición ideal para ti
        </h2>
        <p className="text-base sm:text-lg text-[#5a4040]">
          Todas las versiones incluyen material complementario exclusivo para tu proceso de crecimiento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-3xl mx-auto">
        {EDITIONS.map((edition) => {
          const isPrint = edition.id === 'print';

          return (
            <div
              key={edition.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                isPrint
                  ? 'bg-white border-2 border-[#FA505A] shadow-xl shadow-[#FA505A]/10 md:scale-[1.02] z-10'
                  : 'bg-white border border-[#ECE5F9] card-shadow hover:border-[#ffd9e2]'
              }`}
            >
              {/* Badge for Popular Edition */}
              {edition.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    isPrint
                      ? 'bg-[#FA505A] text-white shadow-sm'
                      : 'bg-[#ffd9e2] text-[#b41a2e]'
                  }`}
                >
                  {edition.badge}
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-3">
                  {edition.id === 'digital' && <Zap className="w-5 h-5 text-[#FA505A]" />}
                  {edition.id === 'print' && <Book className="w-5 h-5 text-[#FA505A]" />}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1a1c1c]">
                    {edition.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5a4040] mb-6">
                  {edition.subtitle}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#ECE5F9]">
                  <span className="text-4xl font-extrabold text-[#1a1c1c] tracking-tight">
                    {edition.price}
                  </span>
                  {edition.originalPrice && (
                    <span className="text-base text-gray-400 line-through">
                      {edition.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#5a4040] mb-6 leading-relaxed">
                  {edition.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {edition.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#1a1c1c]">
                      <div className="w-5 h-5 rounded-full bg-[#ffd9e2]/70 text-[#b41a2e] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className={`w-full py-4 rounded-full font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                  isPrint
                    ? 'bg-[#FA505A] hover:bg-[#d73644] text-white shadow-md shadow-[#FA505A]/20'
                    : 'bg-[#F7F0F2] hover:bg-[#ECE5F9] text-[#1a1c1c] border border-[#ECE5F9]'
                }`}
              >
                {edition.ctaText}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
