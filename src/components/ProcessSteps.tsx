import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface ProcessStepsProps {
  onOpenQuote: () => void;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ onOpenQuote }) => {
  return (
    <section id="processo" className="py-16 lg:py-24 bg-[#FCFAF7] border-b border-[#DED7D0]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#8A817A] uppercase mb-2">
            Metodologia & Compromisso
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#24150E] tracking-tight font-['Montserrat']">
            Como Funciona Seu Projeto
          </h2>
          <p className="text-xs sm:text-sm text-[#665B52] mt-2">
            Da primeira ideia até a última porta ajustada: transparência, prazo rigoroso e respeito ao seu lar.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-[6px] bg-[#F8F5F0] border border-[#DED7D0] flex flex-col justify-between group hover:border-[#875D41] transition-all"
            >
              <div>
                {/* Clean Editorial Numbering (Conforme regra de design) */}
                <span className="text-2xl font-extrabold text-[#C8A484] font-mono tracking-tight block mb-4">
                  {step.step}
                </span>

                <h3 className="text-base font-semibold text-[#24150E] tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#665B52] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DED7D0]/60 flex items-center text-xs font-semibold text-[#875D41]">
                <span>Etapa {idx + 1} de 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-[#E6DDD6]/30 rounded-[6px] border border-[#DED7D0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#24150E]">
              Já tem a planta ou rascunho do seu imóvel?
            </h4>
            <p className="text-xs text-[#665B52] mt-1">
              Envie fotos ou o PDF da planta para agilizarmos a medição e o estudo volumétrico preliminar.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="px-5 py-3 text-xs font-semibold tracking-wider text-white bg-[#24150E] hover:bg-[#39271D] rounded-[4px] whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0 uppercase"
          >
            <span>Agendar Visita Técnica</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
