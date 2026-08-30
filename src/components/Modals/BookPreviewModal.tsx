import React, { useState } from 'react';
import { SAMPLE_CHAPTER } from '../../data/bookData';
import { X, BookOpen, ShoppingBag, Plus, Minus } from 'lucide-react';

interface BookPreviewModalProps {
  onClose: () => void;
  onOpenPurchase: () => void;
}

export const BookPreviewModal: React.FC<BookPreviewModalProps> = ({ onClose, onOpenPurchase }) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg sm:text-xl leading-relaxed';
      case 'xlarge':
        return 'text-xl sm:text-2xl leading-relaxed';
      default:
        return 'text-base sm:text-lg leading-relaxed';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#fcfaf7] text-[#2c2420] w-full max-w-3xl rounded-3xl shadow-2xl border border-[#ECE5F9] overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#f3eee8] border-b border-[#e5ddd3] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#b41a2e]" />
            <span className="font-bold text-sm sm:text-base text-[#1a1c1c]">
              Muestra Gratuita de Lectura
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Font Size Adjusters */}
            <div className="hidden sm:flex items-center bg-white rounded-lg border border-[#e5ddd3] p-0.5 text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded ${fontSize === 'normal' ? 'bg-[#ffd9e2] font-bold text-[#b41a2e]' : 'text-gray-600'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded text-sm ${fontSize === 'large' ? 'bg-[#ffd9e2] font-bold text-[#b41a2e]' : 'text-gray-600'}`}
              >
                A+
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reader Content Body */}
        <div className="p-8 sm:p-12 overflow-y-auto font-serif">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10 pb-6 border-b border-[#e5ddd3]">
              <span className="font-mono-label text-xs uppercase tracking-widest text-[#b41a2e] block mb-2">
                Fragmento Oficial
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#1a1c1c] mb-2">
                {SAMPLE_CHAPTER.title}
              </h2>
              <p className="text-sm font-sans text-gray-500">
                Por {SAMPLE_CHAPTER.author}
              </p>
            </div>

            <div className={`space-y-6 text-[#2d2522] ${getFontSizeClass()}`}>
              {SAMPLE_CHAPTER.paragraphs.map((p, idx) => (
                <p key={idx} className="indent-4 sm:indent-8">
                  {p}
                </p>
              ))}
            </div>

            {/* End of Excerpt Callout */}
            <div className="mt-12 p-8 rounded-2xl bg-white border border-[#e5ddd3] shadow-sm text-center font-sans">
              <span className="font-mono-label text-xs uppercase tracking-widest text-[#FA505A] font-semibold block mb-2">
                ¿Listo para continuar la lectura?
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1c1c] mb-3">
                Continúa este viaje de sanación y libertad
              </h3>
              <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
                Adquiere el libro completo en formato Digital, Impreso o Audiolibro y accede a todos los capítulos y guías de ejercicio.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenPurchase();
                }}
                className="bg-[#FA505A] hover:bg-[#d73644] text-white font-bold px-8 py-3.5 rounded-full text-base transition-all duration-200 hover:scale-[1.02] shadow-md flex items-center justify-center gap-2 mx-auto cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Adquirir el Libro Completo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
