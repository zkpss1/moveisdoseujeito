import React, { useState } from 'react';
import { PROJECTS } from '../data/content';
import { ProjectItem, RoomCategory } from '../types';
import { Bookmark, Eye, Layers } from 'lucide-react';

interface ProjectsGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
  selectedCategory: RoomCategory | 'todos';
  onFilterChange: (cat: RoomCategory | 'todos') => void;
  savedProjectIds: string[];
  onToggleSaveProject: (projectId: string) => void;
  onOpenQuoteWithProject: (project: ProjectItem) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  onSelectProject,
  selectedCategory,
  onFilterChange,
  savedProjectIds,
  onToggleSaveProject,
  onOpenQuoteWithProject
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterTabs: { id: RoomCategory | 'todos'; label: string }[] = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'cozinha', label: 'Cozinhas' },
    { id: 'dormitorio', label: 'Dormitórios & Closets' },
    { id: 'sala', label: 'Salas & Estar' },
    { id: 'banheiro', label: 'Banheiros' },
    { id: 'gourmet', label: 'Gourmet' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'todos' || proj.category === selectedCategory;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.details.material.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projetos" className="py-16 lg:py-24 bg-[#FCFAF7] border-b border-[#DED7D0]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Segue padrão visual do design */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#8A817A] uppercase mb-2">
              Portfólio & Marcenaria
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#24150E] tracking-tight font-['Montserrat']">
              Projetos Realizados
            </h2>
            <p className="text-xs sm:text-sm text-[#665B52] mt-2 max-w-xl">
              Confira execuções recentes entregues em Araruama, Cabo Frio, Saquarema e proximidades.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons with click handlers conforme regra do design) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#E6DDD6]/40 rounded-[6px] border border-[#DED7D0] overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onFilterChange(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-[4px] transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#24150E] text-white shadow-xs'
                    : 'text-[#665B52] hover:text-[#24150E] hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (Layout de 3 colunas em desktop, mantendo consistência e ritmo visual) */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[#F8F5F0] rounded-[6px] border border-[#DED7D0]">
            <p className="text-sm text-[#665B52]">Nenhum projeto encontrado nesta categoria no momento.</p>
            <button
              onClick={() => {
                onFilterChange('todos');
                setSearchTerm('');
              }}
              className="mt-3 text-xs font-semibold text-[#24150E] underline"
            >
              Ver todos os projetos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => {
              const isSaved = savedProjectIds.includes(project.id);

              return (
                <div
                  key={project.id}
                  className="group flex flex-col bg-[#FCFAF7] border border-[#DED7D0] rounded-[6px] overflow-hidden transition-all duration-300 hover:border-[#875D41] hover:shadow-[0_4px_20px_rgba(36,21,14,0.06)]"
                >
                  {/* Image container with subtle action buttons */}
                  <div className="relative aspect-[4/3] bg-[#E6DDD6] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Category Label (clean text, no garish badge) */}
                    <div className="absolute top-3 left-3 bg-[#FCFAF7]/95 backdrop-blur-xs px-2.5 py-1 rounded-[3px] border border-[#DED7D0]/60 text-[11px] font-semibold text-[#24150E] uppercase tracking-wider">
                      {project.categoryLabel}
                    </div>

                    {/* Bookmark Favorite Button */}
                    <button
                      onClick={() => onToggleSaveProject(project.id)}
                      className={`absolute top-3 right-3 p-2 rounded-[3px] backdrop-blur-xs border transition-colors cursor-pointer ${
                        isSaved
                          ? 'bg-[#24150E] text-white border-[#24150E]'
                          : 'bg-[#FCFAF7]/90 text-[#24150E] border-[#DED7D0]/60 hover:bg-white'
                      }`}
                      aria-label={isSaved ? 'Remover dos favoritos' : 'Salvar projeto'}
                      title={isSaved ? 'Salvo' : 'Salvar como referência'}
                    >
                      <Bookmark className="w-3.5 h-3.5" fill={isSaved ? 'currentColor' : 'none'} />
                    </button>

                    {/* Hover quick inspect overlay */}
                    <div className="absolute inset-0 bg-[#24150E]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-4 py-2 bg-[#FCFAF7] text-[#24150E] rounded-[4px] text-xs font-semibold shadow-md flex items-center gap-1.5 hover:bg-white transition-transform transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#875D41]" />
                        <span>Ver Ficha Técnica</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Body - Content aligned neatly */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Location note */}
                      <span className="text-[11px] text-[#8A817A] tracking-wide block mb-1">
                        {project.details.location}
                      </span>

                      {/* Title */}
                      <h3 className="text-base font-semibold text-[#24150E] tracking-tight group-hover:text-[#875D41] transition-colors">
                        {project.title}
                      </h3>

                      {/* Brief description */}
                      <p className="text-xs text-[#665B52] mt-2 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Material Spec (unboxed text, minimal separator) */}
                      <div className="mt-3 pt-3 border-t border-[#DED7D0]/60 text-[11px] text-[#8A817A] flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#C8A484] shrink-0" />
                        <span className="truncate">{project.details.material}</span>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-4 pt-3 flex items-center justify-between border-t border-[#DED7D0]/40">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-xs font-semibold text-[#24150E] hover:text-[#875D41] transition-colors underline underline-offset-4 cursor-pointer"
                      >
                        Detalhes & Fotos
                      </button>

                      <button
                        onClick={() => onOpenQuoteWithProject(project)}
                        className="px-3 py-1.5 text-xs font-semibold bg-[#E6DDD6]/60 hover:bg-[#24150E] hover:text-white text-[#24150E] rounded-[4px] transition-colors cursor-pointer"
                      >
                        Quero um Assim
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
