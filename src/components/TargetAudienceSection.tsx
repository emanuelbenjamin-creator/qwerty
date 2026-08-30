import React from 'react';
import { Droplet, Brain, Send } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const problems = [
    {
      id: 'trauma',
      icon: Droplet,
      title: 'El peso del trauma',
      description:
        'Si sientes que las experiencias dolorosas del pasado dictan tu presente y limitan tu futuro, impidiéndote avanzar.',
    },
    {
      id: 'dudas',
      icon: Brain,
      title: 'Dudas constantes',
      description:
        'Si luchas contra el síndrome del impostor, la falta de autoestima o una voz interna que te dice que no eres suficiente.',
    },
    {
      id: 'vuelo',
      icon: Send,
      title: 'Miedo al vuelo',
      description:
        'Si tienes grandes sueños pero el miedo al fracaso (o al éxito) te paraliza justo antes de dar el salto decisivo.',
    },
  ];

  return (
    <section id="para-quien" className="py-20 sm:py-28 px-6 sm:px-8 bg-[#F7F0F2] border-y border-[#ECE5F9]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="font-mono-label text-xs sm:text-sm text-[#b41a2e] font-semibold uppercase tracking-widest mb-3 block">
            ¿Para quién es este libro?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1c1c] tracking-tight">
            ¿Te sientes atrapado en el pasado?
          </h2>
        </div>

        {/* 3 Identification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white p-8 sm:p-9 rounded-2xl border border-[#ECE5F9] card-shadow hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#ffd9e2]/60 flex items-center justify-center mb-6 text-[#b41a2e]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1a1c1c] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#5a4040] text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
