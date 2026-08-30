import React from 'react';
import { IMAGES } from '../data/bookData';
import { Quote } from 'lucide-react';

export const AuthorSection: React.FC = () => {
  return (
    <section id="sobre-el-autor" className="py-20 sm:py-28 px-6 sm:px-8 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Author Portrait */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[380px] aspect-[0.74] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
            <img
              src={IMAGES.author}
              alt="Retrato oficial de Ricardo Madrid Mendoza, autor y conferencista"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Subtle overlay accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Bio & Mission */}
        <div className="lg:col-span-7">
          <span className="font-mono-label text-xs sm:text-sm text-[#b41a2e] font-semibold uppercase tracking-widest mb-3 block">
            Sobre el Autor
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1c1c] tracking-tight mb-6">
            Ricardo Madrid Mendoza
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-[#5a4040] leading-relaxed">
            <p>
              Ricardo Madrid Mendoza no es solo un autor, es un sobreviviente que decidió que su historia no terminaría en la tragedia. Tras enfrentar adversidades que amenazaron con quebrar su espíritu, encontró en la escritura y el auto-descubrimiento un camino hacia la redención.
            </p>
            <p>
              Con más de una década dedicada al estudio del comportamiento humano y la resiliencia, Ricardo ha ayudado a miles de personas a reescribir su propia narrativa. <em>"Heridas que se convirtieron en alas"</em> es la destilación de su experiencia personal y profesional, entregada con una honestidad brutal y compasiva.
            </p>

            <div className="pt-4 border-t border-[#ECE5F9]">
              <div className="flex items-start gap-3 text-[#1a1c1c] font-semibold text-lg sm:text-xl italic">
                <Quote className="w-8 h-8 text-[#FA505A] shrink-0 rotate-180 -mt-1" />
                <p>
                  "Mi misión es simple: que nadie tenga que atravesar la oscuridad sintiendo que es el final del camino."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
