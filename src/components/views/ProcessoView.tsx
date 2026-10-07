import React, { useState } from 'react';
import { PROCESS_STEPS, COMPANY_INFO } from '../../data/content';
import { ArrowRight, Check, HelpCircle, Shield, Award, Clock } from 'lucide-react';

interface ProcessoViewProps {
  onOpenQuote: () => void;
}

export const ProcessoView: React.FC<ProcessoViewProps> = ({ onOpenQuote }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Qual o prazo médio de entrega e montagem dos móveis?',
      a: 'Nosso prazo padrão varia de 25 a 35 dias úteis a partir da aprovação final do projeto executivo 3D e medição in loco. Sempre definimos uma data exata em contrato.'
    },
    {
      q: 'Qual a diferença entre 100% MDF e aglomerado/MDP?',
      a: 'Nós utilizamos exclusivamente 100% MDF de primeira linha. O MDF é composto por fibras de madeira prensadas em altíssima densidade, permitindo usinagem perfeita, bordas retas e resistência superior à umidade quando comparado ao aglomerado convencional.'
    },
    {
      q: 'A visita técnica para medição em Araruama e região tem custo?',
      a: 'A primeira visita técnica para apresentação do projeto e alinhamento de medidas em Araruama e cidades vizinhas é gratuita e sem compromisso.'
    },
    {
      q: 'Quais formas de pagamento a Móveis do SG oferece?',
      a: 'Oferecemos pagamento facilitado, entrada e parcelamento no cartão de crédito, além de descontos especiais para quitação à vista na assinatura do contrato.'
    },
    {
      q: 'Vocês atendem quais cidades da Região dos Lagos?',
      a: 'Nossa marcenaria está sediada em Araruama e atendemos todo o município (Centro, Praia Seca, Iguabinha, Ponte dos Leites), além de Cabo Frio, Saquarema, Iguaba Grande, São Pedro da Aldeia e Búzios.'
    }
  ];

  return (
    <div className="py-10 sm:py-14 bg-[#F8F5F0] animate-fade-in">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-[#8A817A] uppercase mb-2">
            Como Trabalhamos
          </p>
          <h1 className="text-2xl sm:text-4xl font-bold text-[#24150E] tracking-tight font-['Montserrat']">
            Do Projeto 3D à Entrega Perfeita
          </h1>
          <p className="text-xs sm:text-sm text-[#665B52] mt-2">
            Conheça cada fase do nosso processo artesanal e tecnológico para transformar a sua casa.
          </p>
        </div>

        {/* 4 Etapas Detalhadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FCFAF7] border border-[#DED7D0] rounded-[6px] p-6 flex flex-col justify-between shadow-xs hover:border-[#875D41] transition-all"
            >
              <div>
                <span className="text-3xl font-extrabold text-[#C8A484] font-mono tracking-tight block mb-3">
                  {step.step}
                </span>
                
                <h3 className="text-base font-bold text-[#24150E] mb-2 font-['Montserrat']">
                  {step.title}
                </h3>
                
                <p className="text-xs text-[#665B52] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DED7D0]/60 text-[11px] font-semibold text-[#875D41] flex items-center justify-between">
                <span>Etapa {idx + 1} de 4</span>
                <Clock className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Nossos Pilares de Qualidade */}
        <div className="bg-[#FCFAF7] border border-[#DED7D0] rounded-[8px] p-6 sm:p-10 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[4px] bg-[#E6DDD6]/60 border border-[#DED7D0] flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-[#875D41]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#24150E]">100% MDF Certificado</h4>
                <p className="text-xs text-[#665B52] mt-1 leading-relaxed">
                  Não misturamos materiais de baixa densidade. Caixarias e frentes estruturadas para não empenar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[4px] bg-[#E6DDD6]/60 border border-[#DED7D0] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#875D41]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#24150E]">Montagem Própria & Limpa</h4>
                <p className="text-xs text-[#665B52] mt-1 leading-relaxed">
                  Sem terceirizados. Nossos próprios marceneiros realizam a instalação cuidando da sua casa.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[4px] bg-[#E6DDD6]/60 border border-[#DED7D0] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#875D41]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#24150E]">Prazo Rigoroso em Contrato</h4>
                <p className="text-xs text-[#665B52] mt-1 leading-relaxed">
                  Compromisso formal de data de entrega para que seu cronograma de obra seja respeitado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ - Perguntas Frequentes */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#24150E] font-['Montserrat']">
              Perguntas Frequentes
            </h2>
            <p className="text-xs text-[#665B52] mt-1">
              Tire suas dúvidas mais comuns antes de iniciar seu projeto.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FCFAF7] border border-[#DED7D0] rounded-[6px] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-[#24150E] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-base text-[#875D41] ml-2">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-[#665B52] leading-relaxed border-t border-[#DED7D0]/40 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA no final da página */}
          <div className="mt-12 text-center">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 text-xs font-bold tracking-wider text-white bg-[#24150E] hover:bg-[#39271D] rounded-[4px] inline-flex items-center gap-2 cursor-pointer shadow-sm uppercase"
            >
              <span>Solicitar Orçamento & Medição Gratuita</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
