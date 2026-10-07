import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { ProjectItem } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProjectRef?: ProjectItem | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedProjectRef
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Araruama');
  const [neighborhood, setNeighborhood] = useState('');
  const [rooms, setRooms] = useState<string[]>(
    selectedProjectRef ? [selectedProjectRef.categoryLabel] : ['Cozinha Planejada']
  );
  const [stage, setStage] = useState('Planta / Obra em andamento');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const roomOptions = [
    'Cozinha Planejada',
    'Dormitório / Closet',
    'Sala de Estar / Jantar',
    'Banheiro / Lavabo',
    'Área Gourmet',
    'Home Office / Comercial',
  ];

  const handleToggleRoom = (r: string) => {
    if (rooms.includes(r)) {
      setRooms(rooms.filter((item) => item !== r));
    } else {
      setRooms([...rooms, r]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const message = `*Olá! Gostaria de solicitar um orçamento para Móveis Planejados:*
👤 *Nome:* ${name}
📞 *WhatsApp:* ${phone}
📍 *Local:* ${city} - ${neighborhood || 'Região dos Lagos'}
🛋️ *Ambientes:* ${rooms.join(', ') || 'A definir'}
⏳ *Estágio do Imóvel:* ${stage}
${selectedProjectRef ? `📌 *Referência de Projeto:* ${selectedProjectRef.title}\n` : ''}${notes ? `📝 *Observações:* ${notes}\n` : ''}
Gostaria de agendar uma visita para medição ou receber contato da equipe!`;

    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-[#FCFAF7] border border-[#DED7D0] rounded-[8px] max-w-xl w-full p-6 sm:p-8 shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#DED7D0]">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-[#8A817A] uppercase">
              Orçamento Sob Medida
            </span>
            <h3 className="text-xl font-bold text-[#24150E] tracking-tight font-['Montserrat'] mt-1">
              Solicitar Projeto & Visita Técnica
            </h3>
            {selectedProjectRef && (
              <p className="text-xs text-[#875D41] mt-1">
                Referência selecionada: <strong>{selectedProjectRef.title}</strong>
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#665B52] hover:text-[#24150E] rounded-full hover:bg-[#E6DDD6]/40 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="text-xs font-semibold text-[#24150E] block mb-1">
              Nome Completo *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Roberto Santana"
              className="w-full text-xs px-3.5 py-2.5 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-[#24150E] block mb-1">
                WhatsApp com DDD *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(22) 99999-9999"
                className="w-full text-xs px-3.5 py-2.5 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#24150E] block mb-1">
                Cidade na Região
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full text-xs px-3 py-2.5 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none"
              >
                <option value="Araruama">Araruama</option>
                <option value="Cabo Frio">Cabo Frio</option>
                <option value="Saquarema">Saquarema</option>
                <option value="Iguaba Grande">Iguaba Grande</option>
                <option value="São Pedro da Aldeia">São Pedro da Aldeia</option>
                <option value="Búzios">Búzios</option>
                <option value="Outra localidade">Outra localidade</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-[#24150E] block mb-1">
              Bairro / Condomínio
            </label>
            <input
              type="text"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              placeholder="Ex: Praia Seca, Centro, Iguabinha..."
              className="w-full text-xs px-3.5 py-2.5 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#24150E] block mb-1.5">
              Quais ambientes você deseja planejar?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {roomOptions.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => handleToggleRoom(opt)}
                  className={`p-2 text-left text-xs rounded-[3px] border transition-colors cursor-pointer flex items-center justify-between ${
                    rooms.includes(opt)
                      ? 'border-[#24150E] bg-[#24150E] text-white'
                      : 'border-[#DED7D0] bg-white text-[#665B52] hover:border-[#875D41]'
                  }`}
                >
                  <span className="truncate">{opt}</span>
                  {rooms.includes(opt) && <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A484] shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-[#24150E] block mb-1">
              Estágio do Imóvel
            </label>
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="w-full text-xs px-3 py-2.5 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none"
            >
              <option value="Pronto para morar / reforma">Pronto para morar / reforma</option>
              <option value="Planta / Obra em andamento">Planta / Obra em andamento</option>
              <option value="Apenas pesquisando valores">Apenas pesquisando valores</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-[#24150E] block mb-1">
              Detalhes adicionais (opcional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Gostaria de bancada com ilha, armário com portas ripadas..."
              className="w-full text-xs p-3 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 text-xs font-bold tracking-wider text-white bg-[#24150E] hover:bg-[#39271D] active:bg-[#170D08] rounded-[4px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm uppercase"
            >
              <Send className="w-3.5 h-3.5 text-[#C8A484]" />
              <span>Enviar para a Marcenaria no WhatsApp</span>
            </button>
            <span className="text-[11px] text-[#8A817A] text-center block mt-2">
              Atendimento direto pelos mestres marceneiros da Móveis do SG.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
