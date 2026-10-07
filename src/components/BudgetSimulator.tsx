import React, { useState, useMemo } from 'react';
import { COMPANY_INFO } from '../data/content';
import { RoomCategory } from '../types';
import { Send, Check, Calculator, Sparkles, AlertCircle } from 'lucide-react';

export const BudgetSimulator: React.FC = () => {
  const [selectedRooms, setSelectedRooms] = useState<{ [key in RoomCategory]?: boolean }>({
    cozinha: true,
  });
  const [tier, setTier] = useState<'essencial' | 'premium' | 'luxo'>('premium');
  const [sizeTier, setSizeTier] = useState<'pequeno' | 'medio' | 'amplo'>('medio');
  const [includeLed, setIncludeLed] = useState(true);
  const [includeGlassDoors, setIncludeGlassDoors] = useState(false);

  // Form contact inputs
  const [clientName, setClientName] = useState('');
  const [clientCity, setClientCity] = useState('Araruama');
  const [clientNeighborhood, setClientNeighborhood] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const roomsList: { id: RoomCategory; name: string; baseValue: number }[] = [
    { id: 'cozinha', name: 'Cozinha Planejada', baseValue: 6800 },
    { id: 'dormitorio', name: 'Dormitório / Closet', baseValue: 5900 },
    { id: 'sala', name: 'Sala & Painel de TV', baseValue: 3400 },
    { id: 'banheiro', name: 'Banheiro / Gabinete', baseValue: 1900 },
    { id: 'gourmet', name: 'Área Gourmet / Churrasqueira', baseValue: 4600 },
    { id: 'office', name: 'Home Office / Estudos', baseValue: 2800 },
  ];

  const toggleRoom = (id: RoomCategory) => {
    setSelectedRooms((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectedRoomsCount = Object.values(selectedRooms).filter(Boolean).length;

  const estimate = useMemo(() => {
    let sum = 0;
    roomsList.forEach((r) => {
      if (selectedRooms[r.id]) {
        sum += r.baseValue;
      }
    });

    if (sum === 0) return { min: 0, max: 0 };

    // Multiplier for tier
    const tierMultiplier = tier === 'essencial' ? 1.0 : tier === 'premium' ? 1.35 : 1.75;
    
    // Multiplier for size
    const sizeMultiplier = sizeTier === 'pequeno' ? 0.8 : sizeTier === 'medio' ? 1.0 : 1.45;

    let total = sum * tierMultiplier * sizeMultiplier;
    if (includeLed) total += 600 * selectedRoomsCount;
    if (includeGlassDoors) total += 1200 * selectedRoomsCount;

    // Range: ±15%
    const min = Math.round((total * 0.9) / 100) * 100;
    const max = Math.round((total * 1.15) / 100) * 100;

    return { min, max };
  }, [selectedRooms, tier, sizeTier, includeLed, includeGlassDoors, selectedRoomsCount]);

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      alert('Por favor, informe seu nome para personalizarmos seu atendimento.');
      return;
    }

    const activeRoomsNames = roomsList
      .filter((r) => selectedRooms[r.id])
      .map((r) => r.name)
      .join(', ');

    const tierName =
      tier === 'essencial' ? 'Linha Essencial' : tier === 'premium' ? 'Linha Premium (Amortecedores & Ripados)' : 'Linha Luxo (Vidro Reflecta & Iluminação)';

    const message = `*Olá! Simulei meu projeto pelo site da Móveis do Seu Jeito:*
👤 *Nome:* ${clientName}
📍 *Cidade / Bairro:* ${clientCity} ${clientNeighborhood ? `(${clientNeighborhood})` : ''}
📞 *Contato:* ${clientPhone || 'Não informado'}

🛋️ *Ambientes Desejados:* ${activeRoomsNames || 'Nenhum selecionado'}
✨ *Padrão de Acabamento:* ${tierName}
📐 *Porte do Espaço:* ${sizeTier === 'pequeno' ? 'Apartamento / Compacto' : sizeTier === 'medio' ? 'Médio (Padrão)' : 'Amplo / Casa Grande'}
💡 *Opcionais:* ${includeLed ? 'Com LED Embutido' : 'Sem LED'} | ${includeGlassDoors ? 'Com Vidro Reflecta' : 'Sem Vidro'}

💰 *Estimativa Simulada:* R$ ${estimate.min.toLocaleString('pt-BR')} a R$ ${estimate.max.toLocaleString('pt-BR')}

Gostaria de agendar uma visita técnica gratuita ou enviar minha planta para orçamento definitivo!`;

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="simulador" className="py-16 lg:py-24 bg-[#F8F5F0] border-b border-[#DED7D0]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#8A817A] uppercase mb-2">
            <Calculator className="w-3.5 h-3.5 text-[#C8A484]" />
            <span>Simulador Interativo 3D</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#24150E] tracking-tight font-['Montserrat']">
            Planeje Seu Investimento Sob Medida
          </h2>
          <p className="text-xs sm:text-sm text-[#665B52] mt-2">
            Escolha os ambientes desejados, selecione o padrão de acabamento e receba uma estimativa em instantes com envio direto para o WhatsApp do marceneiro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Customization Controls */}
          <div className="lg:col-span-7 bg-[#FCFAF7] border border-[#DED7D0] rounded-[6px] p-6 sm:p-8 space-y-8 shadow-xs">
            
            {/* Step 1: Choose Rooms */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#24150E] block mb-3">
                1. Selecione os Cômodos que Deseja Planejar
              </label>
              <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-3 gap-2.5">
                {roomsList.map((room) => {
                  const active = !!selectedRooms[room.id];
                  return (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => toggleRoom(room.id)}
                      className={`p-3 rounded-[4px] border text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                        active
                          ? 'border-[#24150E] bg-[#24150E] text-white'
                          : 'border-[#DED7D0] bg-white text-[#665B52] hover:border-[#875D41]'
                      }`}
                    >
                      <span className="min-w-0 leading-snug">{room.name}</span>
                      {active && <Check className="w-3.5 h-3.5 shrink-0 ml-1 text-[#C8A484]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Finish Tier */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#24150E] block mb-3">
                2. Padrão de Acabamento & Ferragens
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setTier('essencial')}
                  className={`p-3.5 rounded-[4px] border text-left transition-all cursor-pointer ${
                    tier === 'essencial'
                      ? 'border-[#24150E] bg-[#E6DDD6]/30 ring-1 ring-[#24150E]'
                      : 'border-[#DED7D0] bg-white hover:border-[#875D41]'
                  }`}
                >
                  <span className="text-xs font-bold text-[#24150E] block">Linha Essencial</span>
                  <span className="text-[11px] text-[#665B52] mt-1 block leading-snug">
                    100% MDF Branco & Amadeirados, corrediças com freio, puxadores perfil.
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setTier('premium')}
                  className={`p-3.5 rounded-[4px] border text-left transition-all cursor-pointer relative ${
                    tier === 'premium'
                      ? 'border-[#24150E] bg-[#E6DDD6]/30 ring-1 ring-[#24150E]'
                      : 'border-[#DED7D0] bg-white hover:border-[#875D41]'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold text-[#875D41] absolute top-2 right-2">
                    Mais Escolhido
                  </span>
                  <span className="text-xs font-bold text-[#24150E] block">Linha Premium</span>
                  <span className="text-[11px] text-[#665B52] mt-1 block leading-snug">
                    MDF Texturizado sincro, corrediças ocultas com amortecimento e ripados.
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setTier('luxo')}
                  className={`p-3.5 rounded-[4px] border text-left transition-all cursor-pointer ${
                    tier === 'luxo'
                      ? 'border-[#24150E] bg-[#E6DDD6]/30 ring-1 ring-[#24150E]'
                      : 'border-[#DED7D0] bg-white hover:border-[#875D41]'
                  }`}
                >
                  <span className="text-xs font-bold text-[#24150E] block">Linha Luxo</span>
                  <span className="text-[11px] text-[#665B52] mt-1 block leading-snug">
                    Portas de vidro reflecta, iluminação LED integrada e gavetões premium.
                  </span>
                </button>
              </div>
            </div>

            {/* Step 3: Size & Extras */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#24150E] block mb-2">
                  Porte do Imóvel
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#E6DDD6]/40 rounded-[4px] border border-[#DED7D0]">
                  {(['pequeno', 'medio', 'amplo'] as const).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSizeTier(s)}
                      className={`py-1.5 text-xs font-semibold rounded-[3px] capitalize transition-colors cursor-pointer ${
                        sizeTier === s ? 'bg-[#24150E] text-white' : 'text-[#665B52] hover:text-[#24150E]'
                      }`}
                    >
                      {s === 'pequeno' ? 'Compacto' : s === 'medio' ? 'Médio' : 'Amplo'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#24150E] block mb-2">
                  Diferenciais de Marcenaria
                </label>
                <div className="flex flex-col gap-2 pt-1">
                  <label className="flex items-center gap-2 text-xs text-[#24150E] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeLed}
                      onChange={(e) => setIncludeLed(e.target.checked)}
                      className="rounded text-[#24150E] focus:ring-[#875D41]"
                    />
                    <span>Iluminação embutida em fita LED</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-[#24150E] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeGlassDoors}
                      onChange={(e) => setIncludeGlassDoors(e.target.checked)}
                      className="rounded text-[#24150E] focus:ring-[#875D41]"
                    />
                    <span>Portas com vidro Reflecta / bronze</span>
                  </label>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Live Calculation Card & Send to WhatsApp Form */}
          <div className="lg:col-span-5 bg-[#FCFAF7] border border-[#DED7D0] rounded-[6px] p-6 sm:p-8 space-y-6 shadow-xs sticky top-28">
            
            <div className="border-b border-[#DED7D0] pb-5">
              <span className="text-[11px] font-semibold text-[#8A817A] uppercase tracking-wider block">
                Estimativa Média de Investimento
              </span>
              
              {selectedRoomsCount === 0 ? (
                <div className="py-4 text-[#8A817A] text-xs">
                  Selecione ao menos 1 cômodo ao lado para calcular.
                </div>
              ) : (
                <div className="mt-2">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#24150E] tracking-tight font-mono tabular-nums">
                    R$ {estimate.min.toLocaleString('pt-BR')} <span className="text-base font-normal text-[#8A817A]">a</span> R$ {estimate.max.toLocaleString('pt-BR')}
                  </div>
                  <p className="text-[11px] text-[#665B52] mt-1.5 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#875D41]" />
                    <span>Inclui medição no local, projeto 3D e montagem própria.</span>
                  </p>
                </div>
              )}
            </div>

            {/* Quick Contact Form to generate WhatsApp Lead */}
            <form onSubmit={handleSendToWhatsApp} className="space-y-3.5">
              <span className="text-xs font-bold text-[#24150E] uppercase tracking-wider block">
                Receber Proposta Oficial no WhatsApp
              </span>

              <div>
                <label className="text-[11px] font-medium text-[#665B52] block mb-1">Seu Nome *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Fernanda Silva"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-medium text-[#665B52] block mb-1">Cidade</label>
                  <select
                    value={clientCity}
                    onChange={(e) => setClientCity(e.target.value)}
                    className="w-full text-xs px-2.5 py-2.5 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none"
                  >
                    <option value="Araruama">Araruama</option>
                    <option value="Cabo Frio">Cabo Frio</option>
                    <option value="Saquarema">Saquarema</option>
                    <option value="Iguaba Grande">Iguaba Grande</option>
                    <option value="São Pedro da Aldeia">São Pedro da Aldeia</option>
                    <option value="Armação dos Búzios">Búzios</option>
                    <option value="Outra">Outra Região</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-[#665B52] block mb-1">Bairro</label>
                  <input
                    type="text"
                    placeholder="Ex: Centro"
                    value={clientNeighborhood}
                    onChange={(e) => setClientNeighborhood(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-medium text-[#665B52] block mb-1">WhatsApp / Telefone</label>
                <input
                  type="tel"
                  placeholder="(22) 99999-9999"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={selectedRoomsCount === 0}
                className="w-full py-3.5 px-4 text-xs font-bold tracking-wider text-white bg-[#24150E] hover:bg-[#39271D] active:bg-[#170D08] disabled:bg-gray-400 rounded-[4px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm uppercase"
              >
                <Send className="w-3.5 h-3.5 text-[#C8A484]" />
                <span>Enviar Simulação no WhatsApp</span>
              </button>

              <div className="flex items-start gap-1.5 pt-1 text-[11px] text-[#8A817A]">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 text-[#875D41] mt-0.5" />
                <span>Valores aproximados. O orçamento exato é fechado após medição técnica ou envio da planta.</span>
              </div>
            </form>

            {submitted && (
              <div className="p-3 bg-[#47664F]/10 border border-[#47664F]/30 rounded-[4px] text-xs text-[#47664F]">
                Pronto! Abrimos o WhatsApp da Móveis do Seu Jeito com sua simulação formatada.
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
