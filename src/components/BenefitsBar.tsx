import React from 'react';
import { ShieldCheck, Box, Hammer, Headphones } from 'lucide-react';

export const BenefitsBar: React.FC = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: '100% MDF de Primeira Linha',
      description: 'Chapas certificadas, resistentes à umidade e empenamento.'
    },
    {
      icon: Box,
      title: 'Projeto 3D Fotorealista',
      description: 'Visualize cada gaveta, nicho e iluminação em detalhes.'
    },
    {
      icon: Hammer,
      title: 'Marcenaria & Montagem Própria',
      description: 'Fabricação sob medida e equipe técnica de instalação.'
    },
    {
      icon: Headphones,
      title: 'Suporte & Pós-Venda Dedicado',
      description: 'Atendimento direto com os marceneiros em Araruama e região.'
    }
  ];

  return (
    <section id="diferenciais" className="bg-[#FCFAF7] border-b border-[#DED7D0] py-8 lg:py-10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-2 transition-colors"
              >
                <div className="w-10 h-10 shrink-0 rounded-[4px] bg-[#E6DDD6]/40 flex items-center justify-center text-[#24150E] border border-[#DED7D0]">
                  <Icon className="w-5 h-5 text-[#875D41]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#24150E] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#665B52] mt-1 leading-relaxed">
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
