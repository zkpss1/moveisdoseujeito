import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/content';
import { MapPin, Phone, Mail, Instagram, Facebook, Send, Clock, CheckCircle2 } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';

export const ContatoView: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Orçamento de Marcenaria');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const text = `*Contato através do site da Móveis do SG:*
👤 *Nome:* ${name}
📞 *Telefone:* ${phone || 'Não informado'}
📌 *Assunto:* ${subject}
💬 *Mensagem:* ${message || 'Gostaria de agendar uma visita ou tirar dúvidas.'}`;

    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSent(true);
  };

  return (
    <div className="py-10 sm:py-14 bg-[#F8F5F0] animate-fade-in">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-[#8A817A] uppercase mb-2">
            Atendimento & Localização
          </p>
          <h1 className="text-2xl sm:text-4xl font-bold text-[#24150E] tracking-tight font-['Montserrat']">
            Fale Com Nossos Marceneiros
          </h1>
          <p className="text-xs sm:text-sm text-[#665B52] mt-2">
            Estamos prontos para atender você em Araruama e em todas as cidades da Região dos Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card com Informações Oficiais e Logo */}
          <div className="lg:col-span-5 bg-[#FCFAF7] border border-[#DED7D0] rounded-[8px] p-6 sm:p-8 space-y-6 shadow-xs">
            
            <div className="pb-5 border-b border-[#DED7D0]">
              <BrandLogo className="text-[46px] text-[#24150E]" />
              <p className="text-xs text-[#875D41] font-medium mt-2">
                {COMPANY_INFO.tagline}
              </p>
            </div>

            {/* Itens de Contato */}
            <div className="space-y-4 text-xs text-[#665B52]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#875D41] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#24150E] block">Endereço da Marcenaria:</strong>
                  <span>{COMPANY_INFO.address}</span>
                  <span className="block text-[11px] text-[#8A817A]">CEP {COMPANY_INFO.cep}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#875D41] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#24150E] block">WhatsApp & Telefone:</strong>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[#24150E] font-semibold"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#875D41] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#24150E] block">E-mail:</strong>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline text-[#24150E]">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#875D41] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#24150E] block">Horário de Funcionamento:</strong>
                  <span>{COMPANY_INFO.openingHours}</span>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="pt-4 border-t border-[#DED7D0]">
              <span className="text-[11px] font-semibold text-[#8A817A] uppercase tracking-wider block mb-2">
                Acompanhe Nossos Projetos no Instagram
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-[#E6DDD6]/50 hover:bg-[#24150E] hover:text-white rounded-[4px] text-xs font-semibold text-[#24150E] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>{COMPANY_INFO.instagram}</span>
                </a>
                
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-[#E6DDD6]/50 hover:bg-[#24150E] hover:text-white rounded-[4px] text-xs font-semibold text-[#24150E] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* Formulário Direto de Contato */}
          <div className="lg:col-span-7 bg-[#FCFAF7] border border-[#DED7D0] rounded-[8px] p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#24150E] font-['Montserrat'] mb-1">
              Envie Sua Mensagem
            </h2>
            <p className="text-xs text-[#665B52] mb-6">
              Preencha o formulário e nós entraremos em contato direto pelo WhatsApp ou telefone.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#24150E] block mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#24150E] block mb-1">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(22) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#24150E] block mb-1">
                    Assunto
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none"
                  >
                    <option value="Orçamento de Cozinha">Orçamento de Cozinha</option>
                    <option value="Orçamento de Dormitório/Closet">Orçamento de Dormitório / Closet</option>
                    <option value="Apartamento Completo">Apartamento / Casa Completa</option>
                    <option value="Área Gourmet ou Banheiro">Área Gourmet ou Banheiro</option>
                    <option value="Dúvida Geral">Outro Assunto</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#24150E] block mb-1">
                  Como podemos ajudar?
                </label>
                <textarea
                  rows={4}
                  placeholder="Conte um pouco sobre as medidas, ideias ou dúvidas..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs p-3 rounded-[4px] border border-[#DED7D0] bg-white text-[#24150E] focus:border-[#875D41] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-bold tracking-wider text-white bg-[#24150E] hover:bg-[#39271D] active:bg-[#170D08] rounded-[4px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs uppercase"
              >
                <Send className="w-3.5 h-3.5 text-[#C8A484]" />
                <span>Enviar no WhatsApp da Marcenaria</span>
              </button>

              {sent && (
                <div className="p-3 bg-[#47664F]/10 border border-[#47664F]/30 rounded-[4px] text-xs text-[#47664F] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Mensagem formatada com sucesso! Redirecionando para o WhatsApp...</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
