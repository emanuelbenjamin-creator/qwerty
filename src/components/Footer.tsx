import React from 'react';

interface FooterProps {
  onOpenInfo: (type: 'privacy' | 'terms' | 'contact' | 'press') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInfo }) => {
  return (
    <footer className="w-full bg-[#f3f3f4] border-t border-[#ECE5F9] transition-colors">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto px-6 sm:px-8 py-12 gap-8">
        <div className="font-bold text-lg sm:text-xl tracking-tight text-[#1a1c1c]">
          RICARDO MADRID MENDOZA
        </div>

        <div className="flex flex-wrap justify-center gap-6 font-mono-label text-xs uppercase tracking-wider text-[#5a4040]">
          <button
            onClick={() => onOpenInfo('privacy')}
            className="hover:text-[#b41a2e] transition-colors cursor-pointer"
          >
            Privacidad
          </button>
          <button
            onClick={() => onOpenInfo('terms')}
            className="hover:text-[#b41a2e] transition-colors cursor-pointer"
          >
            Términos
          </button>
          <button
            onClick={() => onOpenInfo('contact')}
            className="hover:text-[#b41a2e] transition-colors cursor-pointer"
          >
            Contacto
          </button>
          <button
            onClick={() => onOpenInfo('press')}
            className="hover:text-[#b41a2e] transition-colors cursor-pointer"
          >
            Prensa
          </button>
        </div>

        <div className="text-xs sm:text-sm text-[#5a4040] text-center md:text-right">
          © {new Date().getFullYear()} Ricardo Madrid Mendoza. Heridas que se convirtieron en alas.
        </div>
      </div>
    </footer>
  );
};
