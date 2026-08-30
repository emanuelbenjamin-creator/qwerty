import React from 'react';
import { TESTIMONIALS } from '../data/bookData';
import { Star, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 sm:py-28 px-6 sm:px-8 bg-[#F7F0F2] border-t border-[#ECE5F9]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1c1c] tracking-tight mb-4">
            Lo que dicen los lectores
          </h2>
          <p className="text-base sm:text-lg text-[#5a4040]">
            Historias reales de transformación y renacimiento tras leer el libro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-2xl border border-[#ECE5F9] card-shadow flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#F5A623] mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#F5A623]"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[#1a1c1c] text-base leading-relaxed mb-6 italic">
                  {t.text}
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#ECE5F9]">
                <div className="w-11 h-11 rounded-full bg-[#ffd9e2]/60 flex items-center justify-center font-bold text-[#b41a2e] text-base shrink-0">
                  {t.avatarLetter}
                </div>
                <div>
                  <div className="font-bold text-[#1a1c1c] text-sm sm:text-base">
                    {t.name}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-emerald-700 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
