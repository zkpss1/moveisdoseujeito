import React, { useState, useEffect } from 'react';
import { IMAGES } from '../data/content';
import { ArrowRight, Compass, CheckCircle2, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { NavView } from '../types';

interface HeroProps {
  onOpenQuote: () => void;
  onNavigate: (view: NavView) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuote,
  onNavigate
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // As 4 fotos de projetos reais enviadas pelo usuário
  const heroSlides = [
    {
      image: IMAGES.carouselQuartoRipado,
      tag: 'Dormitório Casal com Cabeceira Ripada',
      title: 'Cabeceira em Painel Ripado com Espelho e Globos de Luz',
      subtitle: 'Revestimento completo em madeira clara com espelho vertical integrado, mesa de cabeceira flutuante e pendentes decorativos.'
    },
    {
      image: IMAGES.carouselCozinha,
      tag: 'Cozinha Planejada Fendi com Cristaleira',
      title: 'Cozinha Planejada Fendi com Cristaleira & Torre de Eletros',
      subtitle: 'Armários do chão ao teto em MDF Fendi com nicho sob medida para geladeira inox, cristaleira e iluminação de sanca.'
    },
    {
      image: IMAGES.carouselGuardaRoupa,
      tag: 'Guarda-Roupa Suíte com Escrivaninha',
      title: 'Guarda-Roupa Planejado de 6 Portas com Moldura Amadeirada',
      subtitle: 'Armário sob medida em MDF off-white com caixaria amadeirada, puxadores em inox e escrivaninha integrada.'
    },
    {
      image: IMAGES.carouselGourmet,
      tag: 'Área Gourmet com Churrasqueira',
      title: 'Espaço Gourmet Rústico-Moderno Sob Medida',
      subtitle: 'Bancada em granito com armários aéreos e inferiores em madeira escura, nichos organizadores e pergolado em bambu.'
    }
  ];

  // Rotação suave automática a cada 6 segundos se o usuário não estiver com o mouse em cima
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  const current = heroSlides[activeSlide];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section 
      className="relative overflow-hidden bg-[#F8F5F0] pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 border-b border-[#DED7D0]/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna Esquerda: Textos, Títulos e CTAs de Navegação Direta */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 sm:space-y-6">
            
            {/* Kicker Editorial */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#665B52]">
              <span className="w-2.5 h-0.5 bg-[#C8A484]" />
              <span>Projetos Reais Entregues · Araruama e Região</span>
            </div>

            {/* Título Principal Dinâmico por Projeto */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#24150E] tracking-tight leading-[1.12] font-['Montserrat'] [text-wrap:balance]">
              {current.title}
            </h1>

            {/* Descrição Detalhada da Obra */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-[#665B52] leading-relaxed max-w-xl font-normal">
              {current.subtitle} Produzimos tudo em marcenaria própria sob medida para sua residência ou empresa.
            </p>

            {/* Ações Primárias */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onOpenQuote}
                className="px-5 sm:px-6 py-3.5 text-xs sm:text-[13px] font-semibold tracking-wider text-white bg-[#24150E] hover:bg-[#39271D] active:bg-[#170D08] rounded-[4px] transition-all flex items-center justify-center gap-2.5 shadow-xs group cursor-pointer"
              >
                <span>SOLICITAR ORÇAMENTO</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('simulador')}
                className="px-4 sm:px-5 py-3.5 text-xs sm:text-[13px] font-semibold tracking-wide text-[#24150E] bg-[#FCFAF7] hover:bg-[#E6DDD6]/60 border border-[#DED7D0] rounded-[4px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Compass className="w-4 h-4 text-[#875D41]" />
                <span>Simulador 3D</span>
              </button>
            </div>

            {/* Atalhos Rápidos para Outras Telas */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#665B52]">
              <span className="text-[11px] font-semibold text-[#8A817A] uppercase tracking-wide">
                Navegar:
              </span>
              <button
                onClick={() => onNavigate('ambientes')}
                className="text-xs font-semibold text-[#24150E] hover:text-[#875D41] underline underline-offset-4 cursor-pointer"
              >
                Todos os Ambientes
              </button>
              <span className="text-[#DED7D0]">·</span>
              <button
                onClick={() => onNavigate('projetos')}
                className="text-xs font-semibold text-[#24150E] hover:text-[#875D41] underline underline-offset-4 cursor-pointer"
              >
                Ver Portfólio de Obras
              </button>
            </div>

            {/* Selos de Confiança da Marcenaria */}
            <div className="pt-4 border-t border-[#DED7D0] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#665B52]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#47664F]" />
                <span>100% MDF Certificado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#47664F]" />
                <span>Medição Gratuita</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#47664F]" />
                <span>Fabricação Própria em Araruama</span>
              </div>
            </div>

          </div>

          {/* Coluna Direita: O Carrossel com as Fotos dos Projetos Reais da Marcenaria */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-[8px] overflow-hidden bg-[#E6DDD6] shadow-sm border border-[#DED7D0] aspect-[16/10]">
              
              {/* Imagem do Projeto Real */}
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Selo de "Projeto Real da Marcenaria" */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                <span className="bg-[#24150E]/90 text-white backdrop-blur-xs px-3 py-1.5 rounded-[4px] border border-[#C8A484]/40 text-[11px] sm:text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
                  <Award className="w-3.5 h-3.5 text-[#C8A484]" />
                  <span>Obra Real Entregue</span>
                </span>
                
                <span className="hidden sm:inline-block bg-[#FCFAF7]/90 text-[#24150E] px-2.5 py-1.5 rounded-[4px] border border-[#DED7D0] text-[11px] font-semibold">
                  {current.tag.split('&')[0].trim()}
                </span>
              </div>

              {/* Botões de Navegação Anterior / Próximo (Chevrons) */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FCFAF7]/90 hover:bg-white text-[#24150E] border border-[#DED7D0] flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-md cursor-pointer"
                aria-label="Ver projeto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FCFAF7]/90 hover:bg-white text-[#24150E] border border-[#DED7D0] flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-md cursor-pointer"
                aria-label="Ver próximo projeto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Barra Inferior com Indicadores (Dots) e Legenda */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#24150E]/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/20">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeSlide === idx ? 'w-6 bg-[#C8A484]' : 'w-2 bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Ir para projeto ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

            {/* Contador numérico de projetos */}
            <div className="mt-2.5 flex items-center justify-between text-xs text-[#8A817A] px-1">
              <span>{current.tag}</span>
              <span className="font-mono tabular-nums font-semibold text-[#24150E]">
                0{activeSlide + 1} / 0{heroSlides.length}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
