export const SUPPORTED_LOCALES = ['pt', 'en', 'es', 'it'] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export type LocalizedText = Record<SupportedLocale, string>;
export type IdeaLevel = 'concept' | 'mvp' | 'planned';

export interface MetricItem {
  value: string;
  label: LocalizedText;
}

export interface ServiceItem {
  title: LocalizedText;
  description: LocalizedText;
}

export interface PrincipleItem {
  title: LocalizedText;
  description: LocalizedText;
}

export interface ProcessItem {
  step: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface SkillGroup {
  category: LocalizedText;
  items: string[];
}

export interface Profile {
  name: string;
  role: LocalizedText;
  microTitle: LocalizedText;
  headline: LocalizedText;
  subheadline: LocalizedText;
  longBio: LocalizedText;
  availability: LocalizedText;
  location: LocalizedText;
  responseTime: LocalizedText;
  stackHighlights: string[];
  highlights: LocalizedText[];
  commandSamples: LocalizedText[];
  metrics: MetricItem[];
  services: ServiceItem[];
  principles: PrincipleItem[];
  process: ProcessItem[];
  skills: SkillGroup[];
}

export interface Contacts {
  whatsapp: string;
  instagram: string;
  email: string;
  emailAddress: string;
}

export interface ProjectChallenge {
  title: LocalizedText;
  description: LocalizedText;
}

export interface ProjectArchitectureItem {
  label: LocalizedText;
  value: LocalizedText;
}

export interface Project {
  slug: string;
  name: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  industry: LocalizedText;
  image: string;
  gallery: string[];
  stack: string[];
  status: LocalizedText;
  badges: string[];
  demoUrl?: string;
  relevanceScore: number;
  features: LocalizedText[];
  challenges: ProjectChallenge[];
  architecture: ProjectArchitectureItem[];
  outcomes: LocalizedText[];
}

export interface Idea {
  slug: string;
  name: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  opportunity: LocalizedText;
  stackFocus: string[];
  image: string;
  level: IdeaLevel;
  relevanceScore: number;
}

export interface PortfolioData {
  profile: Profile;
  contacts: Contacts;
  projects: Project[];
  ideas: Idea[];
}
