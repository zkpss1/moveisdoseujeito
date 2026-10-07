export type NavView = 'inicio' | 'ambientes' | 'projetos' | 'simulador' | 'processo' | 'contato';

export type RoomCategory = 'cozinha' | 'dormitorio' | 'sala' | 'banheiro' | 'gourmet' | 'office';

export interface CategoryItem {
  id: RoomCategory;
  name: string;
  subtitle: string;
  image: string;
  itemCount: number;
  highlight: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: RoomCategory;
  categoryLabel: string;
  image: string;
  imageFallback?: string;
  priceEstimate?: string;
  description: string;
  details: {
    material: string;
    hardware: string;
    finish: string;
    features: string[];
    location: string;
  };
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  neighborhood: string;
  city: string;
  projectType: string;
  text: string;
  rating: number;
  date: string;
}

export interface SimulatorSelection {
  rooms: {
    [key in RoomCategory]?: boolean;
  };
  finishTier: 'standard' | 'premium' | 'luxo';
  estimatedSquareMeters: number;
  hasAppliancesIntegration: boolean;
  needsDemolition: boolean;
  clientName: string;
  clientPhone: string;
  clientCity: string;
  notes: string;
}
