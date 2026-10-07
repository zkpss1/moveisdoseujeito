import React from 'react';
import { IMAGES } from '../data/content';
import { ArrowRight, Tag } from 'lucide-react';

interface PromoBannerProps {
  onOpenQuote: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-12 lg:py-16 bg-[#F8F5F0]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-[8px] overflow-hidden border border-[#DED7D0] shadow-sm bg-[#C8A484]/20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px] lg:min-h-[420px]">
            
            {/* Left Content Box */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-[#C8A484]/30 backdrop-blur-sm z-10">
              
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#24150E] mb-3">
                <Tag className="w-3.5 h-3.5 text-[#875D41]" />
                <span>Condição Especial para Ambientes Integrados</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24150E] tracking-tight leading-tight font-['Montserrat'] [text-wrap:balance]">
                Até 15% OFF no Projeto Completo
              </h2>

              <p className="text-xs sm:text-sm text-[#39271D] mt-3 mb-6 max-w-md leading-relaxed">
                Ao fechar mais de um cômodo (ex: Cozinha + Sala ou Dormitório Casal), você ganha renderização 3D executiva sem custo e condições facilitadas de parcelamento.
              </p>

              <div>
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3.5 text-xs sm:text-[13px] font-semibold tracking-wider text-white bg-[#24150E] hover:bg-[#39271D] active:bg-[#170D08] rounded-[4px] transition-all inline-flex items-center gap-2.5 shadow-sm group cursor-pointer"
                >
                  <span>GARANTIR CONDIÇÃO</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

            {/* Right Image Banner (Composição elegante com iluminação natural) */}
            <div className="lg:col-span-6 relative min-h-[260px] lg:min-h-full">
              <img
                src={IMAGES.living}
                alt="Ambiente planejado com marcenaria em madeira e iluminação aconchegante"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#C8A484]/40 via-transparent to-transparent lg:block hidden" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
