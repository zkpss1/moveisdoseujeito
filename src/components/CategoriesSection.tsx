import React from 'react';
import { CATEGORIES } from '../data/content';
import { Utensils, Bed, Tv, Bath, Flame, ArrowUpRight } from 'lucide-react';
import { RoomCategory } from '../types';

interface CategoriesSectionProps {
  onSelectCategory: (category: RoomCategory) => void;
  selectedCategory: RoomCategory | 'todos';
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  selectedCategory
}) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'cozinha':
        return Utensils;
      case 'dormitorio':
        return Bed;
      case 'sala':
        return Tv;
      case 'banheiro':
        return Bath;
      case 'gourmet':
        return Flame;
      default:
        return Utensils;
    }
  };

  return (
    <section id="ambientes" className="py-16 lg:py-20 bg-[#F8F5F0] border-b border-[#DED7D0]/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Exactly in the style of the design doc: uppercase label, clean heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#8A817A] uppercase mb-2">
            Ambientes Sob Medida
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#24150E] tracking-tight font-['Montserrat']">
            Explore por Cômodo
          </h2>
          <p className="text-xs sm:text-sm text-[#665B52] mt-2">
            Soluções inteligentes de marcenaria desenhadas para valorizar cada centímetro do seu espaço.
          </p>
        </div>

        {/* 5 Cards Row - Exactly matching "SHOP BY CATEGORY" in reference */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group flex flex-col text-left bg-[#FCFAF7] border rounded-[6px] overflow-hidden transition-all duration-300 hover:border-[#875D41] hover:shadow-[0_4px_16px_rgba(36,21,14,0.06)] cursor-pointer ${
                  isSelected ? 'border-[#24150E] ring-1 ring-[#24150E]' : 'border-[#DED7D0]'
                }`}
              >
                {/* Photo container with subtle zoom on hover */}
                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#E6DDD6]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#24150E]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#FCFAF7] p-1 rounded-sm text-[#24150E] shadow-sm">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Bottom: Icon + Title centered */}
                <div className="p-4 flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-full bg-[#E6DDD6]/60 border border-[#DED7D0] flex items-center justify-center text-[#24150E] mb-2.5 group-hover:bg-[#C8A484]/30 transition-colors">
                    <Icon className="w-4 h-4 text-[#24150E]" />
                  </div>
                  
                  <h3 className="text-xs sm:text-sm font-semibold text-[#24150E] tracking-tight">
                    {cat.name}
                  </h3>
                  
                  <span className="text-[11px] text-[#8A817A] mt-1 line-clamp-1">
                    {cat.highlight}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Action to open full Ambientes View */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onSelectCategory('cozinha')}
            className="text-xs font-semibold text-[#24150E] hover:text-[#875D41] inline-flex items-center gap-1.5 underline underline-offset-4 cursor-pointer"
          >
            <span>Ver Ficha Completa e Padrões Construtivos de Cada Ambiente</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
