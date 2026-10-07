import React, { useState } from 'react';
import { CATEGORIES } from '../../data/content';
import { RoomCategory, ProjectItem } from '../../types';
import { Utensils, Bed, Tv, Bath, Flame, Briefcase, Check, ArrowRight, Sparkles } from 'lucide-react';

interface AmbientesViewProps {
  onSelectCategoryForProjects: (cat: RoomCategory) => void;
  onOpenQuoteWithRoom: (roomName: string) => void;
}

export const AmbientesView: React.FC<AmbientesViewProps> = ({
  onSelectCategoryForProjects,
  onOpenQuoteWithRoom
}) => {
  const [activeTab, setActiveTab] = useState<RoomCategory>('cozinha');

  const detailedRooms: {
    id: RoomCategory;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    specs: string[];
    hardware: string;
    recommendation: string;
  }[] = [
    {
      id: 'cozinha',
      title: 'Cozinhas Planejadas & Ilhas Gourmet',
      subtitle: 'O coração da casa com ergonomia e durabilidade naval',
      description: 'Cozinhas sob medida pensadas para o fluxo de preparo, armazenamento e convivência. Trabalhamos com caixaria em 100% MDF Naval hidrófugo, fitamento de borda com cola PUR resistente ao vapor e ferragens com amortecimento de alta durabilidade.',
      image: CATEGORIES.find(c => c.id === 'cozinha')?.image || '',
      specs: [
        'Caixaria em MDF Naval resistente à água e gordura',
        'Gavetões com corrediças invisíveis de extração total',
        'Torre quente para micro-ondas e forno elétrico embutidos',
        'Portas superiores com pistões basculantes inversos',
        'Iluminação de bancada com canaletas de perfil LED 3000K'
      ],
      hardware: 'Dobradiças e corrediças slow motion com garantia contra corrosão',
      recommendation: 'Ideal para apartamentos e residências que buscam integração total entre sala e cozinha com acabamento contemporâneo.'
    },
    {
      id: 'dormitorio',
      title: 'Dormitórios, Closets & Cabeceiras',
      subtitle: 'Aconchego, organização inteligente e aproveitamento do chão ao teto',
      description: 'Móveis planejados para quarto que transformam seu descanso. Roupeiros de parede inteira com portas deslizantes leves ou de abrir com amortecimento, maleiros generosos, gavetas colmeia aveludadas para joias e escrivaninhas embutidas.',
      image: CATEGORIES.find(c => c.id === 'dormitorio')?.image || '',
      specs: [
        'Aproveitamento integral da altura do teto (sem espaços mortos)',
        'Painéis ripados de cabeceira com fita de LED indireta',
        'Gavetas internas com corrediças telescópicas reforçadas',
        'Cabideiros com acabamento silicone anti-ruído',
        'Nichos laterais para livros e objetos decorativos'
      ],
      hardware: 'Roldanas com molas anti-descarrilamento e fechamento suave',
      recommendation: 'Perfeito para quem precisa de máxima capacidade de armazenamento sem perder a sensação de amplitude do quarto.'
    },
    {
      id: 'sala',
      title: 'Salas de Estar, Jantar & Home Theater',
      subtitle: 'Painéis ripados elegantes e integração visual perfeita',
      description: 'A sala é o cartão de visitas da sua casa. Criamos painéis para TV que escondem 100% da fiação, racks suspensos que facilitam a limpeza do piso, cristaleiras iluminadas com portas de vidro e mesas de jantar sob medida integradas ao painel amadeirado.',
      image: CATEGORIES.find(c => c.id === 'sala')?.image || '',
      specs: [
        'Painéis ripados usinados em MDF de alta espessura',
        'Passa-fios inteligente e nichos ventilados para receptores',
        'Aparadores suspensos com gavetas de toque (fecho-toque)',
        'Divisórias de ambientes vazadas com efeito muxarabi ou ripas',
        'Integração de portas pivotantes invisíveis'
      ],
      hardware: 'Suportes de alta carga invisíveis e articulações discretas',
      recommendation: 'Cria um ambiente sofisticado de cinema em casa, unindo textura quente de madeira e acabamentos acetinados.'
    },
    {
      id: 'banheiro',
      title: 'Banheiros & Lavabos Sob Medida',
      subtitle: 'Resistência absoluta à umidade e design de spa',
      description: 'Móveis suspensos de banheiro fabricados com MDF Ultra verde (hidrófugo), imunes a respingos constantes de água. Gavetas usinadas com recorte especial para o sifão da pia, nichos embutidos e espelheiras iluminadas com toque frontal.',
      image: CATEGORIES.find(c => c.id === 'banheiro')?.image || '',
      specs: [
        '100% MDF Ultra Verde especial para áreas molhadas',
        'Recorte técnico no primeiro gavetão para sifão',
        'Espelheiras com armário embutido e abertura oculta',
        'Laterais vedadas contra umidade do piso e box',
        'Ferragens com proteção anti-ferrugem reforçada'
      ],
      hardware: 'Corrediças com tratamento eletrostático e amortecimento suave',
      recommendation: 'Garante que os armários do seu banheiro nunca inchem com o vapor do chuveiro ao longo dos anos.'
    },
    {
      id: 'gourmet',
      title: 'Áreas Gourmet & Espaços de Churrasco',
      subtitle: 'Mobiliário robusto para momentos inesquecíveis entre amigos',
      description: 'Projetos sob medida para varandas e quiosques cobertos com churrasqueira. Armários inferiores sob a bancada de granito, nichos ventilados para gás, gavetões reforçados para espetos e tábuas, e acabamentos rústico-chiques resistentes.',
      image: CATEGORIES.find(c => c.id === 'gourmet')?.image || '',
      specs: [
        'Vedação especial contra intempéries e gordura',
        'Módulos planejados sob bancadas de granito e alvenaria',
        'Gavetões longos para utensílios de churrasco',
        'Espaço ventilado com venezianas para botijão de gás',
        'Puxadores lineares em alumínio com pintura anodizada'
      ],
      hardware: 'Aço inoxidável e dobradiças com amortecedor integrado',
      recommendation: 'A escolha certa para confraternizações no clima agradável de Araruama e Região dos Lagos.'
    }
  ];

  const currentRoom = detailedRooms.find(r => r.id === activeTab) || detailedRooms[0];

  return (
    <div className="py-10 sm:py-14 bg-[#F8F5F0] animate-fade-in">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Tela */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-[#8A817A] uppercase mb-2">
            Catálogo de Ambientes
          </p>
          <h1 className="text-2xl sm:text-4xl font-bold text-[#24150E] tracking-tight font-['Montserrat']">
            Móveis Planejados Para Cada Cômodo
          </h1>
          <p className="text-xs sm:text-sm text-[#665B52] mt-2">
            Conheça as soluções de marcenaria que desenvolvemos com exclusividade para o seu estilo de vida.
          </p>
        </div>

        {/* Abas Rápidas de Seleção de Ambiente */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {detailedRooms.map((room) => {
            const isActive = activeTab === room.id;
            return (
              <button
                key={room.id}
                onClick={() => setActiveTab(room.id)}
                className={`px-4 py-2.5 rounded-[4px] text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#24150E] text-white border-[#24150E] shadow-xs'
                    : 'bg-[#FCFAF7] text-[#665B52] border-[#DED7D0] hover:text-[#24150E] hover:border-[#875D41]'
                }`}
              >
                <span>{room.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Detalhe Completo do Ambiente Selecionado */}
        <div className="bg-[#FCFAF7] border border-[#DED7D0] rounded-[8px] overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Foto Grande do Ambiente */}
            <div className="lg:col-span-6 relative bg-[#E6DDD6] min-h-[340px] lg:min-h-[500px]">
              <img
                src={currentRoom.image}
                alt={currentRoom.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#FCFAF7]/95 px-3 py-1.5 rounded-[3px] border border-[#DED7D0] text-xs font-bold text-[#24150E]">
                100% Sob Medida
              </div>
            </div>

            {/* Informações Técnicas e Diferenciais */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#875D41] uppercase tracking-wider block mb-1">
                  Soluções em Marcenaria
                </span>
                
                <h2 className="text-xl sm:text-2xl font-bold text-[#24150E] font-['Montserrat']">
                  {currentRoom.title}
                </h2>
                
                <p className="text-xs sm:text-sm text-[#665B52] mt-3 leading-relaxed">
                  {currentRoom.description}
                </p>

                {/* Especificações Construtivas */}
                <div className="mt-6 pt-6 border-t border-[#DED7D0]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#24150E] mb-3">
                    Padrões Construtivos & Detalhes:
                  </h3>
                  
                  <ul className="space-y-2">
                    {currentRoom.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#665B52]">
                        <Check className="w-4 h-4 text-[#47664F] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ferragens e Recomendação */}
                <div className="mt-5 p-3.5 bg-[#E6DDD6]/30 rounded-[4px] border border-[#DED7D0]/60 text-xs text-[#24150E]">
                  <div className="flex items-center gap-1.5 font-bold text-[#875D41] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ferragens de Precisão:</span>
                  </div>
                  <p className="text-[#665B52] leading-relaxed">
                    {currentRoom.hardware}
                  </p>
                </div>
              </div>

              {/* Ações Rápidas */}
              <div className="pt-4 border-t border-[#DED7D0] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenQuoteWithRoom(currentRoom.title)}
                  className="flex-1 py-3 px-4 text-xs font-semibold tracking-wider text-white bg-[#24150E] hover:bg-[#39271D] rounded-[4px] transition-all flex items-center justify-center gap-2 cursor-pointer uppercase shadow-xs"
                >
                  <span>Orçar Este Cômodo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectCategoryForProjects(currentRoom.id)}
                  className="py-3 px-4 text-xs font-semibold text-[#24150E] bg-[#E6DDD6]/60 hover:bg-[#DED7D0] rounded-[4px] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Ver Obras Realizadas
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
