export type SectionId = 'home' | 'skills' | 'experience' | 'projects' | 'content' | 'connect';

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  // Detailed fields for Modal
  longDescription?: string;
  problem?: string;
  solution?: string;
  audience?: string;
  demoVideo?: string;
  websiteLink?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}