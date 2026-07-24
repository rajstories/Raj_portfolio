export type SectionId = 'home' | 'skills' | 'experience' | 'projects' | 'content' | 'connect';

export interface NavItem {
  id: SectionId;
  label: string;
}

export type ProjectStatus =
  | 'Live Prototype'
  | 'Production'
  | 'In Development'
  | 'Completed'
  | 'Open Source'
  | 'Case Study';

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  categoryValue: string;
  role: string;
  status: ProjectStatus;
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
  tags: string[];
  metrics?: Array<{
    value: string;
    label: string;
  }>;
  technologies?: string[];
  keyFeatures?: string[];
  link?: string;
  longDescription: string;
  problem: string;
  solution: string;
  audience: string;
  whyItMatters: string;
  demoVideos?: Array<{
    title: string;
    description: string;
    url: string;
  }>;
  demoVideo?: string;
  prototypeVideo?: string;
  audioDemo?: string;
  websiteLink?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}
