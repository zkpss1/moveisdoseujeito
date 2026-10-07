import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { ProjectItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (proj: ProjectItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProject
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? PROJECTS.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        p.details.material.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    : PROJECTS.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-center pt-20 p-4">
      <div 
        className="bg-[#FCFAF7] border border-[#DED7D0] rounded-[8px] max-w-2xl w-full p-6 shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#DED7D0]">
          <div className="flex items-center gap-2 flex-1">
            <Search className="w-4 h-4 text-[#875D41]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por cozinha, ripado, fendi, granito, banheiro..."
              className="w-full text-sm bg-transparent border-none text-[#24150E] focus:outline-none placeholder:text-[#8A817A]"
            />
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#665B52] hover:text-[#24150E] rounded cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 max-h-[60vh] overflow-y-auto space-y-3">
          <p className="text-[11px] font-semibold text-[#8A817A] uppercase tracking-wider">
            {query.trim() ? `Resultados (${results.length})` : 'Sugestões de Destaque'}
          </p>

          {results.length === 0 ? (
            <p className="text-xs text-[#665B52] py-4 text-center">
              Nenhum projeto encontrado com "{query}". Tente buscar por cozinha, quarto, ripado ou banheiro.
            </p>
          ) : (
            results.map((proj) => (
              <div
                key={proj.id}
                onClick={() => {
                  onSelectProject(proj);
                  onClose();
                }}
                className="flex items-center gap-3 p-2.5 rounded-[4px] hover:bg-[#E6DDD6]/30 transition-colors cursor-pointer border border-transparent hover:border-[#DED7D0]"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-12 h-12 rounded-[3px] object-cover bg-[#E6DDD6]"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-[#24150E] truncate">
                    {proj.title}
                  </h4>
                  <p className="text-[11px] text-[#665B52] truncate">
                    {proj.categoryLabel} · {proj.details.material}
                  </p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#875D41] shrink-0" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
