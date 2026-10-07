import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { NavView } from '../types';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (view: NavView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24150E] text-[#F8F5F0] pt-14 pb-10 border-t border-[#39271D]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#39271D]">
          
          {/* Col 1: Brand Info & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => onNavigate('inicio')}
              className="inline-block rounded-[4px] bg-[#FCFAF7] px-2 py-1 text-left cursor-pointer"
              aria-label="Móveis do Seu Jeito - Voltar ao início"
            >
              <BrandLogo className="w-[165px] h-[78px] sm:w-[190px] sm:h-[88px]" />
            </button>
            
            <p className="text-xs text-[#E6DDD6]/80 leading-relaxed max-w-sm">
              Móveis planejados sob medida com acabamento artesanal e tecnologia de ponta em Araruama e em toda a Região dos Lagos.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-[4px] bg-[#39271D] hover:bg-[#C8A484] hover:text-[#24150E] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Móveis do Seu Jeito"
                title="Instagram @moveisdoseujeito"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-[4px] bg-[#39271D] hover:bg-[#C8A484] hover:text-[#24150E] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook Móveis do Seu Jeito"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (Sem scroll longo, navegação direta de tela) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8A484]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-[#E6DDD6]/80">
              <li>
                <button 
                  onClick={() => onNavigate('inicio')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Página Inicial
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ambientes')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ambientes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projetos')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Portfólio de Obras
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('simulador')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Simulador 3D
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('processo')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contato')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contato & Oficina
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Ambientes Planejados */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8A484]">
              Soluções Sob Medida
            </h4>
            <ul className="space-y-2 text-xs text-[#E6DDD6]/80">
              <li>
                <button onClick={() => onNavigate('ambientes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cozinhas Planejadas 100% MDF
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ambientes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Dormitórios, Cabeceiras & Closets
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ambientes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Salas com Painéis Ripados & Racks
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ambientes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Gabinetes de Banheiro & Lavabo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ambientes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Áreas Gourmet & Churrasqueiras
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8A484]">
              Atendimento em Araruama
            </h4>
            
            <div className="space-y-2 text-xs text-[#E6DDD6]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C8A484] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address}<br />
                  CEP: {COMPANY_INFO.cep}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C8A484] shrink-0" />
                <a 
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors tabular-nums font-mono"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C8A484] shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="hover:text-white transition-colors truncate"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#A89F97] border-t border-[#39271D]">
                <span>{COMPANY_INFO.openingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8A817A]">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Araruama e Região dos Lagos - RJ.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#E6DDD6]/80 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C8A484]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
