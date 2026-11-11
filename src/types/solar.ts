export type PropertyType = 'residential' | 'commercial' | 'industrial';
export type SystemType = 'on-grid' | 'off-grid' | 'hybrid';

export interface SolarService {
  id: string;
  title: string;
  subtitle: string;
  category: 'core' | 'specialized' | 'support';
  image: string;
  description: string;
  keyBenefits: string[];
  specs: {
    label: string;
    value: string;
  }[];
  idealFor: string;
}

export interface SolarProject {
  id: string;
  title: string;
  clientType: 'Residential Villa' | 'Commercial Office' | 'Industrial Plant' | 'Healthcare Facility' | 'Educational Campus';
  category: 'residential' | 'commercial' | 'industrial' | 'hybrid';
  capacity: string;
  systemType: 'On-Grid PV' | 'Hybrid BESS' | 'Off-Grid Microgrid';
  location: string;
  completionDate: string;
  annualGeneration: string;
  co2Offset: string;
  image: string;
  summary: string;
  highlights: string[];
}

export interface TechnologyComponent {
  id: string;
  name: string;
  category: string;
  role: string;
  specifications: string[];
  lifespan: string;
  efficiencyOrRating: string;
  engineeringAdvantage: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'basics' | 'costs' | 'technical' | 'subsidies';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization?: string;
  location: string;
  systemSize: string;
  verifiedSavings: string;
  propertyType: 'Residential' | 'Commercial' | 'Industrial';
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  propertyType: PropertyType;
  monthlyBill: number;
  rooftopArea: number;
  systemType: SystemType;
  preferredCapacity?: string;
  notes?: string;
}

export interface EstimateResult {
  suggestedCapacityKw: number;
  requiredRoofAreaSqFt: number;
  panelsCount: number;
  annualGenerationKwh: number;
  annualSavingsUsd: number;
  lifetimeSavings25Yr: number;
  co2OffsetTonnes: number;
  treesEquivalent: number;
  indicativeCostRange: string;
  estimatedPaybackYears: number;
}
