import type { IconType } from 'react-icons';

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
  hoverClass?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  icon?: IconType;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: IconType;
  accent: 'primary' | 'secondary' | 'accent';
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  location?: string;
  description: string;
  highlights: string[];
  type: 'work' | 'leadership' | 'education';
}

export type ProjectCategory = 'AI/ML' | 'Web' | 'Python' | 'Data' | 'All';

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: Exclude<ProjectCategory, 'All'>[];
  github?: string;
  demo?: string;
  highlights: string[];
  featured?: boolean;
  gradient: string;
  emoji: string;
}

export interface Achievement {
  label: string;
  value: number;
  suffix?: string;
  icon: IconType;
  accent: 'primary' | 'secondary' | 'accent';
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  icon: IconType;
  description: string;
  skills: string[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
  url: string;
  emoji: string;
}

export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  message: string;
  initials: string;
}
