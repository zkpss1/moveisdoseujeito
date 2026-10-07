import { CategoryItem, ProjectItem, BenefitItem, TestimonialItem } from '../types';

// Importação das imagens como módulos ES para garantir empacotamento completo pelo Vite no Deploy (Vercel, Netlify, GitHub Pages)
import logoImg from '../assets/images/logo_official.png';
import heroQuartoImg from '../assets/images/hero_quarto_ripado_enhanced.jpg';
import heroCozinhaImg from '../assets/images/hero_cozinha_fendi_enhanced.jpg';
import heroGuardaRoupaImg from '../assets/images/hero_guarda_roupa_enhanced.jpg';
import heroGourmetImg from '../assets/images/hero_gourmet_enhanced.jpg';
import carouselBanheiroImg from '../assets/images/carousel_banheiro_madeira_led_1791386830507.jpg';

export const COMPANY_INFO = {
  name: 'Móveis do Seu Jeito',
  tagline: 'Marcenaria de Alto Padrão & Móveis Planejados',
  phone: '(22) 98848-1131',
  phoneRaw: '5522988481131',
  email: 'moveisdoseujeito@gmail.com',
  address: 'Rua Estácio de Sá, 336 - Araruama, RJ',
  cep: '28970-000',
  instagram: '@moveisdoseujeito',
  instagramUrl: 'https://instagram.com/moveisdoseujeito',
  facebook: 'Móveis do seu jeito',
  cityRegion: 'Araruama e Região dos Lagos (Cabo Frio, Saquarema, Iguaba Grande, São Pedro da Aldeia, Búzios)',
  openingHours: 'Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00',
};

// Imagens dos projetos reais do cliente e a logo oficial em 3D
export const IMAGES = {
  logo: logoImg,
  carouselQuartoRipado: heroQuartoImg,
  carouselCozinha: heroCozinhaImg,
  carouselGuardaRoupa: heroGuardaRoupaImg,
  carouselGourmet: heroGourmetImg,
  hero: heroCozinhaImg,
  kitchen: heroCozinhaImg,
  bedroom: heroGuardaRoupaImg,
  bathroom: carouselBanheiroImg,
  gourmet: heroGourmetImg,
  living: heroQuartoImg,
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'cozinha',
    name: 'Cozinhas Planejadas',
    subtitle: 'Funcionalidade, torres quentes e ilhas integradas',
    image: IMAGES.kitchen,
    itemCount: 42,
    highlight: '100% MDF Naval anti-umidade',
  },
  {
    id: 'dormitorio',
    name: 'Dormitórios & Closets',
    subtitle: 'Armários embutidos, cabeceiras ripadas e penteadeiras',
    image: IMAGES.bedroom,
    itemCount: 38,
    highlight: 'Portas de correr com amortecedor',
  },
  {
    id: 'sala',
    name: 'Salas & Home Theater',
    subtitle: 'Painéis ripados, racks suspensos e divisórias elegantes',
    image: IMAGES.living,
    itemCount: 29,
    highlight: 'Passagem oculta de fiação & fitas LED',
  },
  {
    id: 'banheiro',
    name: 'Banheiros & Lavabos',
    subtitle: 'Gabinetes flutuantes, nichos e espelheiras com LED',
    image: IMAGES.bathroom,
    itemCount: 25,
    highlight: 'MDF Ultra resistente à água',
  },
  {
    id: 'gourmet',
    name: 'Espaços Gourmet',
    subtitle: 'Bancadas de churrasqueira, cristaleiras e adegas',
    image: IMAGES.gourmet,
    itemCount: 19,
    highlight: 'Ferragens inox para áreas abertas',
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: '1',
    title: '100% MDF Premium',
    description: 'Chapas certificadas de alta densidade e proteção contra umidade.',
    icon: 'ShieldCheck',
  },
  {
    id: '2',
    title: 'Projeto 3D Exclusivo',
    description: 'Renderização realista para você visualizar antes de produzir.',
    icon: 'Layers',
  },
  {
    id: '3',
    title: 'Montagem Própria & Limpa',
    description: 'Equipe especializada com acabamento cirúrgico e pontualidade.',
    icon: 'Hammer',
  },
  {
    id: '4',
    title: 'Garantia & Pós-Venda',
    description: 'Acompanhamento dedicado em toda a Região dos Lagos.',
    icon: 'Sparkles',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Cozinha Planejada em Fendi com Cristaleira & Torre Quente',
    category: 'cozinha',
    categoryLabel: 'Cozinha Planejada',
    image: IMAGES.carouselCozinha,
    priceEstimate: 'Sob Consulta',
    description: 'Armários do chão ao teto em MDF Fendi com cristaleira elegante em perfis de alumínio e vidro reflecta. Nicho sob medida para geladeira inox e torre de fornos embutida.',
    details: {
      material: '100% MDF Naval Fendi Matt + Detalhes em Vidro Reflecta',
      hardware: 'Corrediças telescópicas invisíveis com amortecimento e pistões a gás',
      finish: 'Fita de borda PUR resistente à vapor e calor',
      features: [
        'Cristaleira com iluminação de LED embutida',
        'Nicho milimétrico para refrigerador duplex',
        'Torre quente integrada com forno e micro-ondas',
        'Gavetões reforçados com extração suave'
      ],
      location: 'Residencial Alphaville, Araruama - RJ'
    }
  },
  {
    id: 'proj-2',
    title: 'Guarda-Roupa Suíte Casal com Moldura Amadeirada & Escrivaninha',
    category: 'dormitorio',
    categoryLabel: 'Dormitório & Closet',
    image: IMAGES.carouselGuardaRoupa,
    priceEstimate: 'Sob Consulta',
    description: 'Armário planejado de 6 portas em MDF fendi off-white com caixaria em madeira carvalho natural. Puxadores retos em inox escovado e escrivaninha de estudos integrada na lateral com nichos superiores.',
    details: {
      material: 'MDF Nude Veludo 18mm com moldura em Carvalho Natural',
      hardware: 'Puxadores retos inox escovado 40cm e dobradiças slow click',
      finish: 'Acabamento acetinado anti-marcas de digitais',
      features: [
        'Cabideiros com acabamento silicone anti-ruído',
        'Gavetas internas com corrediças telescópicas',
        'Nichos abertos na lateral para livros e decoração',
        'Bancada com passa-fios embutido para notebook'
      ],
      location: 'Centro, Araruama - RJ'
    }
  },
  {
    id: 'proj-3',
    title: 'Gabinete Suspenso de Banheiro com Espelho Iluminado',
    category: 'banheiro',
    categoryLabel: 'Banheiro & Lavabo',
    image: IMAGES.bathroom,
    priceEstimate: 'Sob Consulta',
    description: 'Móvel de banheiro suspenso em padrão amadeirado rústico, gavetas com usinagem especial para o sifão da pia e nicho metálico superior com prateleiras e espelho bisotado com LED frontal.',
    details: {
      material: 'MDF Ultra Verde Hidrófugo (especial para ambientes úmidos)',
      hardware: 'Corrediças slow motion com extração total e anti-oxidação',
      finish: 'Textura poro sincronizado Carvalho Catedral',
      features: [
        'Gavetão duplo com organizadores em acrílico',
        'Estrutura em metalon preto fosco automotivo',
        'Espelheira com abertura de toque (fecho-toque)',
        'Resistente a respingos diretos de água'
      ],
      location: 'Praia Seca, Araruama - RJ'
    }
  },
  {
    id: 'proj-4',
    title: 'Área Gourmet Rústico-Moderna com Churrasqueira',
    category: 'gourmet',
    categoryLabel: 'Espaço Gourmet',
    image: IMAGES.gourmet,
    priceEstimate: 'Sob Consulta',
    description: 'Móveis planejados sob a bancada de granito da churrasqueira, armários superiores com portas de correr e nichos abertos para canecas e temperos, harmonizando alvenaria de tijolinho e marcenaria.',
    details: {
      material: 'MDF Imbuia Catedral com proteção contra intempéries',
      hardware: 'Dobradiças de aço inox 304 com amortecedor integrado',
      finish: 'Tratamento selante de alta resistência à fumaça e gordura',
      features: [
        'Nicho ventilado para gás com veneziana técnica',
        'Gavetão térmico para carnes e utensílios longos',
        'Prateleiras reforçadas com capacidade para 40kg',
        'Puxadores lineares tipo gola em alumínio preto'
      ],
      location: 'Iguaba Grande, RJ'
    }
  },
  {
    id: 'proj-5',
    title: 'Cabeceira com Painel Ripado do Chão ao Teto & Globos de Luz',
    category: 'dormitorio',
    categoryLabel: 'Dormitório Casal',
    image: IMAGES.carouselQuartoRipado,
    priceEstimate: 'Sob Consulta',
    description: 'Painel ripado em madeira clara cobrindo toda a parede de cabeceira com espelho vertical integrado na lateral, iluminação indireta com pendentes em globos de luz e mesa de cabeceira flutuante.',
    details: {
      material: 'Ripado autêntico usinado em MDF 25mm Carvalho Claro + Espelho Cristal',
      hardware: 'Fixação oculta tipo mão-amiga e corrediças telescópicas invisíveis',
      finish: 'Verniz poliuretano acetinado com proteção anti-riscos',
      features: [
        'Painel cobrindo do chão ao teto sem emendas visíveis',
        'Espelho lateral que duplica a iluminação natural',
        'Passa-fios embutido para pendentes e tomadas de cabeceira',
        'Gaveta suspensa com abertura por cava inferior'
      ],
      location: 'Braga, Cabo Frio - RJ'
    }
  },
  {
    id: 'proj-6',
    title: 'Estação Home Office Funcional com Nichos Suspensos',
    category: 'sala',
    categoryLabel: 'Home Office & Estudos',
    image: IMAGES.hero,
    priceEstimate: 'Sob Consulta',
    description: 'Bancada ampla para trabalho ergonômico com painel traseiro em padrão cimento suave, torre de armário lateral com nichos decorativos e duas prateleiras flutuantes superiores robustas.',
    details: {
      material: 'MDF Cinza Sagrado + Louro Freijó',
      hardware: 'Suportes invisíveis de prateleira em barra maciça',
      finish: 'Bordas de 2mm com alta resistência a impacto',
      features: [
        'Bancada com 2,40m contínuos sem coluna central',
        'Gaveteiro volante com rodízios de silicone',
        'Caixa de tomadas e conectores USB embutida na bancada',
        'Nichos planejados para livros e impressora multifuncional'
      ],
      location: 'Itaúna, Saquarema - RJ'
    }
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Mariana Drummond',
    neighborhood: 'Centro',
    city: 'Araruama',
    projectType: 'Cozinha Planejada e Banheiros',
    text: 'A equipe da Móveis do Seu Jeito foi impecável do início ao fim! Fizeram o 3D exatamente como sonhei e a montagem foi super rápida e limpa. O acabamento dos puxadores e das gavetas é de um capricho raro.',
    rating: 5,
    date: 'Setembro 2026'
  },
  {
    id: 'test-2',
    clientName: 'Carlos Eduardo Mendes',
    neighborhood: 'Praia Seca',
    city: 'Araruama',
    projectType: 'Área Gourmet e Armários da Varanda',
    text: 'Precisava de uma marcenaria que soubesse trabalhar com MDF adequado para a maresia da nossa região. O material usado e as ferragens em inox estão impecáveis. Recomendo de olhos fechados!',
    rating: 5,
    date: 'Agosto 2026'
  },
  {
    id: 'test-3',
    clientName: 'Patrícia Alencar',
    neighborhood: 'Passagem',
    city: 'Cabo Frio',
    projectType: 'Apartamento Completo (Quarto, Sala e Cozinha)',
    text: 'Fiz 4 orçamentos na Região dos Lagos e o atendimento deles foi o mais transparente e detalhado. Entregaram antes do prazo e ajustaram cada detalhe com toda paciência. Meu apartamento ficou lindo!',
    rating: 5,
    date: 'Outubro 2026'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Contato & Briefing',
    description: 'Você nos conta suas ideias, necessidades do espaço e compartilha as medidas da planta ou fotos do local.'
  },
  {
    step: '02',
    title: 'Visita Técnica & Projeto 3D',
    description: 'Vamos até o seu imóvel para medição milimétrica a laser e apresentamos o projeto tridimensional fotorealista.'
  },
  {
    step: '03',
    title: 'Fabricação de Precisão',
    description: 'Produzimos cada módulo em nossa marcenaria com corte computadorizado, fitamento resistente e matéria-prima 100% MDF.'
  },
  {
    step: '04',
    title: 'Montagem Cuidadosa & Garantia',
    description: 'Nossa equipe própria instala tudo com limpeza e rigor técnico, entregando o termo de garantia com suporte dedicado.'
  }
];
