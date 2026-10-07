import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenefitsBar } from './components/BenefitsBar';
import { CategoriesSection } from './components/CategoriesSection';
import { PromoBanner } from './components/PromoBanner';
import { ProjectsGallery } from './components/ProjectsGallery';
import { BudgetSimulator } from './components/BudgetSimulator';
import { ProcessSteps } from './components/ProcessSteps';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AmbientesView } from './components/views/AmbientesView';
import { ProcessoView } from './components/views/ProcessoView';
import { ContatoView } from './components/views/ContatoView';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';
import { SavedProjectsDrawer } from './components/SavedProjectsDrawer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ProjectItem, RoomCategory, NavView } from './types';

export default function App() {
  const [activeView, setActiveView] = useState<NavView>('inicio');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [quoteProjectRef, setQuoteProjectRef] = useState<ProjectItem | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<RoomCategory | 'todos'>('todos');
  const [savedProjectIds, setSavedProjectIds] = useState<string[]>(['proj-1', 'proj-3']);

  // Troca de tela/aba imediata com rolagem suave ao topo (sem scroll longo infinito)
  const handleNavigate = (view: NavView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleToggleSaveProject = (projectId: string) => {
    setSavedProjectIds((prev) =>
      prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId]
    );
  };

  const handleSelectCategoryFromHome = (cat: RoomCategory) => {
    setSelectedCategory(cat);
    handleNavigate('ambientes');
  };

  const handleSelectCategoryForProjects = (cat: RoomCategory) => {
    setSelectedCategory(cat);
    handleNavigate('projetos');
  };

  const handleOpenQuoteWithProject = (project: ProjectItem) => {
    setQuoteProjectRef(project);
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithRoom = (roomName: string) => {
    setQuoteProjectRef(null);
    setIsQuoteOpen(true);
  };

  const handleOpenGeneralQuote = () => {
    setQuoteProjectRef(null);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#24150E] flex flex-col font-sans selection:bg-[#C8A484]/30 selection:text-[#24150E]">
      
      {/* 1. Header (Logo em imagem + Navegação de telas instantânea + Ações) */}
      <Header
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenGeneralQuote}
        onOpenSearch={() => setIsSearchOpen(true)}
        savedProjectsCount={savedProjectIds.length}
        onOpenSavedProjects={() => setIsSavedDrawerOpen(true)}
      />

      {/* 2. Main Content - Telas Dinâmicas Imediatas */}
      <main className="flex-1">
        
        {/* VIEW: INÍCIO (Home com visão executiva elegante) */}
        {activeView === 'inicio' && (
          <div className="animate-fade-in">
            {/* Hero com atalhos de navegação direta */}
            <Hero
              onOpenQuote={handleOpenGeneralQuote}
              onNavigate={handleNavigate}
            />

            {/* Faixa de Benefícios */}
            <BenefitsBar />

            {/* Grade de 5 Ambientes com clique que abre tela de ambientes */}
            <CategoriesSection
              onSelectCategory={handleSelectCategoryFromHome}
              selectedCategory={selectedCategory}
            />

            {/* Banner Promocional para Ambientes Integrados */}
            <PromoBanner onOpenQuote={handleOpenGeneralQuote} />

            {/* Prévia de Projetos Realizados */}
            <ProjectsGallery
              onSelectProject={(proj) => setSelectedProject(proj)}
              selectedCategory={selectedCategory}
              onFilterChange={(cat) => setSelectedCategory(cat)}
              savedProjectIds={savedProjectIds}
              onToggleSaveProject={handleToggleSaveProject}
              onOpenQuoteWithProject={handleOpenQuoteWithProject}
            />

            {/* Prévia / Chamada para o Simulador */}
            <BudgetSimulator />

            {/* Resumo do Processo de Atendimento */}
            <ProcessSteps onOpenQuote={handleOpenGeneralQuote} />

            {/* Avaliações de Clientes Reais em Araruama */}
            <Testimonials />
          </div>
        )}

        {/* VIEW: AMBIENTES (Página dedicada para cada cômodo e especificações) */}
        {activeView === 'ambientes' && (
          <AmbientesView
            onSelectCategoryForProjects={handleSelectCategoryForProjects}
            onOpenQuoteWithRoom={handleOpenQuoteWithRoom}
          />
        )}

        {/* VIEW: PROJETOS (Portfólio completo com busca e filtros) */}
        {activeView === 'projetos' && (
          <div className="py-6 animate-fade-in">
            <ProjectsGallery
              onSelectProject={(proj) => setSelectedProject(proj)}
              selectedCategory={selectedCategory}
              onFilterChange={(cat) => setSelectedCategory(cat)}
              savedProjectIds={savedProjectIds}
              onToggleSaveProject={handleToggleSaveProject}
              onOpenQuoteWithProject={handleOpenQuoteWithProject}
            />
          </div>
        )}

        {/* VIEW: SIMULADOR 3D (Calculadora de investimento com WhatsApp) */}
        {activeView === 'simulador' && (
          <div className="py-6 animate-fade-in">
            <BudgetSimulator />
          </div>
        )}

        {/* VIEW: COMO FUNCIONA (Processo detalhado, materiais e FAQ) */}
        {activeView === 'processo' && (
          <ProcessoView onOpenQuote={handleOpenGeneralQuote} />
        )}

        {/* VIEW: CONTATO (Oficina em Araruama, endereço, telefone, mapa) */}
        {activeView === 'contato' && (
          <ContatoView />
        )}

      </main>

      {/* 3. Rodapé com navegação instantânea de telas */}
      <Footer onNavigate={handleNavigate} />

      {/* Modais & Interações */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuoteWithProject={handleOpenQuoteWithProject}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => {
          setIsQuoteOpen(false);
          setQuoteProjectRef(null);
        }}
        selectedProjectRef={quoteProjectRef}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      <SavedProjectsDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedIds={savedProjectIds}
        onRemove={(id) => handleToggleSaveProject(id)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppFloatingButton />

    </div>
  );
}
