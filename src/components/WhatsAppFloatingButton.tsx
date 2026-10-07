import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá! Estava navegando no site da Móveis do SG e gostaria de tirar uma dúvida sobre móveis planejados.'
  )}`;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 bg-[#FCFAF7] border border-[#DED7D0] p-3 rounded-[6px] shadow-lg max-w-[240px] text-xs text-[#24150E] relative animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-[#8A817A] hover:text-[#24150E]"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-semibold text-[#875D41]">Marcenaria Móveis do SG</p>
          <p className="text-[11px] text-[#665B52] mt-0.5">
            Deseja tirar dúvidas ou solicitar orçamento? Estamos online no WhatsApp!
          </p>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Falar no WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
      </a>
    </div>
  );
};
