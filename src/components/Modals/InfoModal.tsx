import React from 'react';
import { X, Mail, Phone, MapPin, Newspaper, Shield, FileText } from 'lucide-react';

interface InfoModalProps {
  type: 'privacy' | 'terms' | 'contact' | 'press';
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose }) => {
  const getTitle = () => {
    switch (type) {
      case 'privacy':
        return 'Política de Privacidad';
      case 'terms':
        return 'Términos y Condiciones';
      case 'contact':
        return 'Contacto y Atención al Lector';
      case 'press':
        return 'Kit de Prensa y Medios';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-[#ECE5F9] overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-[#ECE5F9] flex items-center justify-between bg-[#F7F0F2]">
          <h3 className="text-xl font-bold text-[#1a1c1c] flex items-center gap-2">
            {type === 'privacy' && <Shield className="w-5 h-5 text-[#b41a2e]" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-[#b41a2e]" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-[#b41a2e]" />}
            {type === 'press' && <Newspaper className="w-5 h-5 text-[#b41a2e]" />}
            <span>{getTitle()}</span>
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto text-sm text-[#5a4040] leading-relaxed space-y-4">
          {type === 'privacy' && (
            <>
              <p>
                En cumplimiento con las normativas internacionales de protección de datos personales (RGPD y normativas locales), te informamos que los datos recopilados (nombre, correo electrónico y dirección para envíos físicos) son utilizados estrictamente para procesar tus compras, enviar actualizaciones sobre tu pedido y remitir información de interés si así lo has autorizado.
              </p>
              <p>
                No vendemos ni compartimos tu información personal con terceros para fines publicitarios ajenos a la obra de Ricardo Madrid Mendoza. Puedes solicitar la rectificación o eliminación de tus datos en cualquier momento escribiendo a <strong>contacto@ricardomadridmendoza.com</strong>.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                <strong>1. Propiedad Intelectual:</strong> Todos los textos, imágenes, audios y diseños presentados en esta plataforma son propiedad exclusiva de Ricardo Madrid Mendoza y se encuentran protegidos por las leyes de derecho de autor internacionales.
              </p>
              <p>
                <strong>2. Licencia de Uso Digital:</strong> La adquisición de la versión digital (eBook) otorga una licencia personal, intransferible y no exclusiva para uso individual. Queda terminantemente prohibida la redistribución, copia no autorizada o comercialización secundaria de los archivos.
              </p>
              <p>
                <strong>3. Devoluciones:</strong> Ofrecemos una garantía incondicional de satisfacción de 30 días naturales.
              </p>
            </>
          )}

          {type === 'contact' && (
            <div className="space-y-4">
              <p>
                ¿Tienes alguna consulta sobre tu pedido, conferencias o sesiones con Ricardo Madrid Mendoza? Nuestro equipo está disponible para ayudarte.
              </p>
              <div className="bg-[#F7F0F2] p-4 rounded-2xl space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#b41a2e]" />
                  <span className="font-semibold text-[#1a1c1c]">contacto@ricardomadridmendoza.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#b41a2e]" />
                  <span>+1 (800) 427-4327 (Atención Lunes a Viernes)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#b41a2e]" />
                  <span>Editorial Lumina • Distribución Global</span>
                </div>
              </div>
            </div>
          )}

          {type === 'press' && (
            <div className="space-y-4">
              <p>
                Para solicitudes de entrevistas, notas de prensa, ponencias en eventos corporativos y material gráfico en alta resolución para medios impresos y digitales:
              </p>
              <div className="bg-[#F7F0F2] p-4 rounded-2xl">
                <div className="font-bold text-[#1a1c1c] mb-1">Dpto. de Prensa y Relaciones Públicas</div>
                <div className="text-[#b41a2e] font-semibold">prensa@ricardomadridmendoza.com</div>
                <div className="text-xs text-gray-500 mt-2">Respuesta en menos de 24 horas hábiles.</div>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-[#ECE5F9] text-right">
            <button
              onClick={onClose}
              className="bg-[#1a1c1c] hover:bg-black text-white font-bold px-6 py-2.5 rounded-full text-xs transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
