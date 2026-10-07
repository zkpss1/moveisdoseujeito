import React from 'react';
import { X, Trash2, Send } from 'lucide-react';
import { ProjectItem } from '../types';
import { PROJECTS, COMPANY_INFO } from '../data/content';

interface SavedProjectsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  onRemove: (id: string) => void;
  onSelectProject: (proj: ProjectItem) => void;
}

export const SavedProjectsDrawer: React.FC<SavedProjectsDrawerProps> = ({
  isOpen,
  onClose,
  savedIds,
  onRemove,
  onSelectProject
}) => {
  if (!isOpen) return null;

  const savedProjects = PROJECTS.filter((p) => savedIds.includes(p.id));

  const handleSendAllToWhatsApp = () => {
    const list = savedProjects.map((p, idx) => `${idx + 1}. *${p.title}* (${p.categoryLabel})`).join('\n');
    const msg = `*Olá! Salvei os seguintes projetos de referência no site da Móveis do SG:*\n\n${list}\n\nGostaria de saber como ficaria um projeto nesses padrões para o meu espaço!`;
    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-[#FCFAF7] h-full shadow-2xl flex flex-col justify-between border-l border-[#DED7D0] animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#DED7D0] flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-[#24150E] font-['Montserrat']">
              Meus Projetos Salvos
            </h3>
            <span className="text-xs text-[#8A817A]">
              {savedProjects.length} referências selecionadas
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#665B52] hover:text-[#24150E] rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {savedProjects.length === 0 ? (
            <div className="text-center py-12 text-[#8A817A] text-xs">
              Você ainda não salvou nenhum projeto. Clique no ícone de marcador nos cards para criar sua pasta de inspiração!
            </div>
          ) : (
            savedProjects.map((proj) => (
              <div
                key={proj.id}
                className="flex items-center gap-3 p-3 bg-white rounded-[4px] border border-[#DED7D0]"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-14 h-14 rounded-[3px] object-cover bg-[#E6DDD6] shrink-0 cursor-pointer"
                  onClick={() => {
                    onSelectProject(proj);
                    onClose();
                  }}
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 min-w-0">
                  <h4 
                    onClick={() => {
                      onSelectProject(proj);
                      onClose();
                    }}
                    className="text-xs font-semibold text-[#24150E] truncate cursor-pointer hover:underline"
                  >
                    {proj.title}
                  </h4>
                  <p className="text-[11px] text-[#8A817A]">
                    {proj.categoryLabel}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(proj.id)}
                  className="p-1.5 text-[#8A817A] hover:text-[#9B4039] rounded transition-colors cursor-pointer"
                  title="Remover"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {savedProjects.length > 0 && (
          <div className="p-5 border-t border-[#DED7D0] bg-[#F8F5F0]">
            <button
              onClick={handleSendAllToWhatsApp}
              className="w-full py-3 px-4 text-xs font-semibold bg-[#24150E] hover:bg-[#39271D] text-white rounded-[4px] flex items-center justify-center gap-2 cursor-pointer shadow-sm uppercase"
            >
              <Send className="w-3.5 h-3.5 text-[#C8A484]" />
              <span>Enviar Referências no WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
