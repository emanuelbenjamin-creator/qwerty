import React from 'react';
import { IMAGES } from '../data/bookData';
import { CheckCircle2 } from 'lucide-react';

export const MethodSection: React.FC = () => {
  const steps = [
    {
      title: 'Reconocimiento del dolor',
      description:
        'Aprende a mirar tus heridas sin juicio, entendiendo su origen y su impacto real en tu vida diaria.',
    },
    {
      title: 'El proceso de sanación activa',
      description:
        'Herramientas prácticas para procesar emociones reprimidas y liberar la carga emocional estancada.',
    },
    {
      title: 'Construyendo alas',
      description:
        'Cómo usar la resiliencia adquirida para impulsar nuevos propósitos y alcanzar metas que parecían imposibles.',
    },
  ];

  return (
    <section id="metodo" className="py-20 sm:py-28 px-6 sm:px-8 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[#b41a2e]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Desk Mockup Image */}
        <div className="order-2 lg:order-1">
          <div className="w-full aspect-[1.48] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group relative">
            <img
              src={IMAGES.deskBook}
              alt="Mesa de lectura con el libro Heridas que se convirtieron en alas, café y gafas"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Key Takeaways / Method */}
        <div className="order-1 lg:order-2">
          <span className="font-mono-label text-xs sm:text-sm text-[#FA505A] font-semibold uppercase tracking-widest mb-3 block">
            Lo que encontrarás
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-8 leading-tight">
            Un método claro para la transformación personal.
          </h2>

          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 -ml-4 rounded-xl hover:bg-white/5 transition-colors duration-200"
              >
                <div className="mt-1 text-[#FA505A] shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
