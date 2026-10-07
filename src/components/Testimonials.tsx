import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F8F5F0] border-b border-[#DED7D0]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#8A817A] uppercase mb-2">
            Prova Social & Avaliações Reais
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#24150E] tracking-tight font-['Montserrat']">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xs sm:text-sm text-[#665B52] mt-2">
            Depoimentos de famílias e empreendedores que transformaram seus lares com a Móveis do Seu Jeito.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FCFAF7] border border-[#DED7D0] rounded-[6px] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#875D41] transition-all"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#C8A484]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Project Tag (unboxed metadata with subtle dot) */}
                <div className="text-xs font-semibold text-[#875D41] mb-3">
                  {item.projectType}
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-[#24150E] leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author & City Footer */}
              <div className="mt-6 pt-4 border-t border-[#DED7D0]/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#24150E]">
                    {item.clientName}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#8A817A] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#C8A484]" />
                    <span>{item.neighborhood}, {item.city} - RJ</span>
                  </div>
                </div>

                <span className="text-[11px] text-[#8A817A] tabular-nums">
                  {item.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
