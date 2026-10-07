import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Search } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { NavView } from '../types';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  activeView: NavView;
  onNavigate: (view: NavView) => void;
  onOpenQuote: () => void;
  onOpenSearch: () => void;
  savedProjectsCount: number;
  onOpenSavedProjects: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigate,
  onOpenQuote,
  onOpenSearch,
  savedProjectsCount,
  onOpenSavedProjects
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { view: NavView; label: string }[] = [
    { view: 'inicio', label: 'Início' },
    { view: 'ambientes', label: 'Ambientes' },
    { view: 'projetos', label: 'Projetos' },
    { view: 'simulador', label: 'Simulador 3D' },
    { view: 'processo', label: 'Como Funciona' },
    { view: 'contato', label: 'Contato' },
  ];

  const handleLinkClick = (view: NavView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-40 bg-[#FCFAF7] border-b border-[#DED7D0]">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] sm:h-20">
          
          {/* Marca */}
          <button 
            onClick={() => handleLinkClick('inicio')} 
            className="flex shrink-0 items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#875D41] rounded-[4px] cursor-pointer"
            aria-label="Móveis do Seu Jeito - Voltar ao início"
          >
            <BrandLogo className="w-[130px] h-16 min-[360px]:w-[145px] min-[360px]:h-[68px] xl:w-[155px] xl:h-[72px]" />
          </button>

          {/* Zone 2: Navigation Links (Navegação imediata de telas/páginas, sem scroll longo) */}
          <nav className="hidden xl:flex items-center gap-7 text-[13px] tracking-wide font-medium text-[#665B52]">
            {navLinks.map((item) => {
              const isActive = activeView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleLinkClick(item.view)}
                  className={`py-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#24150E] font-bold border-[#24150E]'
                      : 'border-transparent hover:text-[#24150E] hover:border-[#C8A484]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-1 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="min-w-11 min-h-11 flex items-center justify-center text-[#665B52] hover:text-[#24150E] transition-colors hover:bg-[#E6DDD6]/30 rounded-[4px] cursor-pointer"
              aria-label="Buscar ambientes e projetos"
              title="Buscar"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Saved Projects Bookmark button if any */}
            {savedProjectsCount > 0 && (
              <button
                onClick={onOpenSavedProjects}
                className="relative min-w-11 min-h-11 p-2 text-[#24150E] hover:bg-[#E6DDD6]/40 rounded-[4px] text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                aria-label={`Meus projetos salvos: ${savedProjectsCount}`}
                title="Projetos de interesse selecionados"
              >
                <span className="hidden sm:inline">Favoritos</span>
                <span className="w-4 h-4 rounded-full bg-[#24150E] text-white text-[10px] flex items-center justify-center font-bold">
                  {savedProjectsCount}
                </span>
              </button>
            )}

            {/* Direct Phone link */}
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de informações sobre orçamento de móveis planejados.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1.5 text-xs text-[#665B52] hover:text-[#24150E] transition-colors font-medium px-2 py-1.5"
              title="Fale direto no WhatsApp"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A484]" />
              <span className="tabular-nums font-mono text-[12px]">{COMPANY_INFO.phone}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenQuote}
              className="hidden sm:flex px-4 lg:px-5 py-2.5 text-xs lg:text-[13px] font-semibold tracking-wider text-white bg-[#24150E] hover:bg-[#39271D] active:bg-[#170D08] rounded-[4px] transition-all items-center gap-2 whitespace-nowrap shadow-xs cursor-pointer"
            >
              <span className="hidden sm:inline">SOLICITAR</span>
              <span>ORÇAMENTO</span>
              <span aria-hidden="true" className="hidden sm:inline">→</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden min-w-11 min-h-11 flex items-center justify-center text-[#24150E] hover:bg-[#E6DDD6]/40 rounded-[4px] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#DED7D0] bg-[#FCFAF7] px-5 py-5 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-1.5 text-sm font-medium text-[#665B52]">
            {navLinks.map((item) => {
              const isActive = activeView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleLinkClick(item.view)}
                  className={`py-2 px-3 text-left rounded-[4px] transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#24150E] text-white font-semibold'
                      : 'text-[#24150E] hover:bg-[#E6DDD6]/40'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C8A484]" />}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#DED7D0] flex flex-col gap-3">
            <button
              onClick={() => { onOpenQuote(); setMobileMenuOpen(false); }}
              className="sm:hidden w-full py-3 px-4 text-center text-xs font-semibold bg-[#24150E] text-white rounded-[4px]"
            >
              SOLICITAR ORÇAMENTO
            </button>
            <div className="text-xs text-[#8A817A] flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C8A484]" />
              <span>{COMPANY_INFO.phone} · Araruama - RJ</span>
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de um orçamento de móveis planejados.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center text-xs font-semibold bg-[#24150E] text-white rounded-[4px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#C8A484]" />
              <span>FALAR NO WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
