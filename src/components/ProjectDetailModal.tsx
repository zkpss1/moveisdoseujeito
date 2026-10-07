import React from 'react';
import { ProjectItem } from '../types';
import { X, Check, MapPin, Wrench, Layers, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuoteWithProject: (project: ProjectItem) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenQuoteWithProject
}) => {
  if (!project) return null;

  const handleSendToWhatsApp = () => {
    const message = `*Olá! Me interessei pelo seguinte projeto no site da Móveis do SG:*
📌 *Projeto:* ${project.title} (${project.categoryLabel})
📍 *Referência:* ${project.details.location}
🧱 *Material:* ${project.details.material}

Gostaria de saber mais e solicitar uma proposta personalizada para o meu espaço!`;

    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-[#FCFAF7] border border-[#DED7D0] rounded-[8px] max-w-4xl w-full overflow-hidden shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#FCFAF7]/90 hover:bg-white text-[#24150E] rounded-full border border-[#DED7D0] transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left: Project Image */}
          <div className="md:col-span-6 bg-[#E6DDD6] relative min-h-[300px] md:min-h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-[#FCFAF7]/95 backdrop-blur-xs px-3 py-1 rounded-[3px] border border-[#DED7D0]/60 text-xs font-semibold text-[#24150E]">
              {project.categoryLabel}
            </div>
          </div>

          {/* Right: Technical Specs */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-[#8A817A] mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#C8A484]" />
                <span>{project.details.location}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#24150E] tracking-tight font-['Montserrat']">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#665B52] mt-3 leading-relaxed">
                {project.description}
              </p>

              {/* Technical Specifications */}
              <div className="mt-6 space-y-3.5 pt-6 border-t border-[#DED7D0]">
                <h4 className="text-xs font-bold text-[#24150E] uppercase tracking-wider">
                  Ficha Técnica da Marcenaria
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#875D41] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#24150E]">MDF & Acabamento: </span>
                      <span className="text-[#665B52]">{project.details.material}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Wrench className="w-3.5 h-3.5 text-[#875D41] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#24150E]">Ferragens: </span>
                      <span className="text-[#665B52]">{project.details.hardware}</span>
                    </div>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="pt-3">
                  <span className="text-[11px] font-semibold text-[#8A817A] uppercase tracking-wider block mb-2">
                    Destaques Construtivos
                  </span>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {project.details.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#665B52]">
                        <Check className="w-3.5 h-3.5 text-[#47664F] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#DED7D0] flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={handleSendToWhatsApp}
                className="flex-1 py-3 px-4 text-xs font-semibold bg-[#24150E] hover:bg-[#39271D] text-white rounded-[4px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#C8A484]" />
                <span>Conversar no WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteWithProject(project);
                }}
                className="py-3 px-4 text-xs font-semibold bg-[#E6DDD6]/60 hover:bg-[#DED7D0] text-[#24150E] rounded-[4px] transition-colors cursor-pointer"
              >
                Solicitar Visita Técnica
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
