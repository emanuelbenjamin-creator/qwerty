import React, { useState } from 'react';
import { EDITIONS } from '../../data/bookData';
import { X, CheckCircle, ShieldCheck, CreditCard, Lock, Download, Truck, Headphones } from 'lucide-react';

interface PurchaseModalProps {
  initialEdition?: 'digital' | 'print' | 'audio';
  onClose: () => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({
  initialEdition = 'digital',
  onClose,
}) => {
  const [selectedEditionId, setSelectedEditionId] = useState<'digital' | 'print' | 'audio'>(initialEdition);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentEdition = EDITIONS.find((e) => e.id === selectedEditionId) || EDITIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-[#ECE5F9] overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#ECE5F9] flex items-center justify-between bg-[#F7F0F2]">
          <div>
            <span className="font-mono-label text-xs uppercase tracking-wider text-[#b41a2e] font-semibold">
              Proceso de Compra Seguro
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1c1c]">
              {isCompleted ? '¡Orden Confirmada!' : 'Adquirir el Libro'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isCompleted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#1a1c1c] mb-2">
                ¡Gracias por tu compra, {name || 'Lector'}!
              </h4>
              <p className="text-[#5a4040] mb-6 max-w-md mx-auto">
                Hemos enviado la confirmación y los detalles de acceso a <strong className="text-[#1a1c1c]">{email}</strong>.
              </p>

              <div className="bg-[#F7F0F2] rounded-2xl p-6 mb-6 text-left border border-[#ECE5F9]">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-[#1a1c1c]">{currentEdition.name}</span>
                  <span className="font-mono-label font-bold text-[#b41a2e]">{currentEdition.price}</span>
                </div>
                <p className="text-xs text-[#5a4040] mb-4">
                  Número de orden: #HERIDAS-{Math.floor(100000 + Math.random() * 900000)}
                </p>

                {selectedEditionId === 'digital' && (
                  <div className="bg-white p-4 rounded-xl border border-emerald-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Download className="w-6 h-6 text-emerald-600" />
                      <div>
                        <div className="font-bold text-sm text-[#1a1c1c]">Descarga Inmediata</div>
                        <div className="text-xs text-gray-500">PDF + ePub + Cuaderno de ejercicios</div>
                      </div>
                    </div>
                    <button
                      onClick={() => alert('Iniciando descarga de tu ejemplar digital...')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                    >
                      Descargar
                    </button>
                  </div>
                )}

                {selectedEditionId === 'print' && (
                  <div className="bg-white p-4 rounded-xl border border-blue-200 flex items-center gap-3">
                    <Truck className="w-6 h-6 text-blue-600 shrink-0" />
                    <div className="text-xs text-gray-600">
                      Tu copia impresa está siendo preparada para despacho. Recibirás tu código de seguimiento vía correo electrónico.
                    </div>
                  </div>
                )}

                {selectedEditionId === 'audio' && (
                  <div className="bg-white p-4 rounded-xl border border-purple-200 flex items-center gap-3">
                    <Headphones className="w-6 h-6 text-purple-600 shrink-0" />
                    <div className="text-xs text-gray-600">
                      Tus archivos de audio en alta fidelidad y el reproductor online ya están habilitados en tu cuenta.
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={onClose}
                className="bg-[#FA505A] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d73644] transition-colors cursor-pointer"
              >
                Volver a la Página Principal
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Edition Selector Tabs */}
              <div className="grid grid-cols-3 gap-2.5 mb-6 p-1.5 bg-[#F7F0F2] rounded-2xl border border-[#ECE5F9]">
                {EDITIONS.map((ed) => (
                  <button
                    key={ed.id}
                    type="button"
                    onClick={() => setSelectedEditionId(ed.id as 'digital' | 'print' | 'audio')}
                    className={`py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                      selectedEditionId === ed.id
                        ? 'bg-white text-[#b41a2e] shadow-sm'
                        : 'text-[#5a4040] hover:text-[#1a1c1c]'
                    }`}
                  >
                    <div>{ed.name.split(' ')[0]} {ed.name.split(' ')[1] || ''}</div>
                    <div className="text-xs font-mono-label font-normal opacity-80">{ed.price}</div>
                  </button>
                ))}
              </div>

              {/* Selected Edition Summary Box */}
              <div className="bg-[#ffd9e2]/30 rounded-2xl p-4.5 border border-[#ffd9e2] mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm text-[#1a1c1c]">{currentEdition.name}</span>
                  <span className="font-bold font-mono-label text-base text-[#b41a2e]">{currentEdition.price}</span>
                </div>
                <p className="text-xs text-[#5a4040] mb-2">{currentEdition.subtitle}</p>
                <div className="text-xs text-[#1a1c1c] space-y-1">
                  {currentEdition.features.slice(0, 2).map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#b41a2e]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5a4040] mb-1.5 font-mono-label">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carmen Ruiz"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#ECE5F9] focus:outline-none focus:border-[#FA505A] text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5a4040] mb-1.5 font-mono-label">
                    Correo Electrónico (para entrega y acceso)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#ECE5F9] focus:outline-none focus:border-[#FA505A] text-sm bg-white"
                  />
                </div>

                {selectedEditionId === 'print' && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5a4040] mb-1.5 font-mono-label">
                      Dirección de Envío y País
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Calle, Número, Ciudad, Código Postal, País"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#ECE5F9] focus:outline-none focus:border-[#FA505A] text-sm bg-white"
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#FA505A] hover:bg-[#d73644] text-white font-bold py-4 rounded-full text-base transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-[#FA505A]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Procesando orden segura...</span>
                  </span>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>Confirmar y Pagar {currentEdition.price}</span>
                  </>
                )}
              </button>

              {/* Security guarantee footer */}
              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Pago Encriptado SSL 256-bit</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Garantía de 30 días</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
