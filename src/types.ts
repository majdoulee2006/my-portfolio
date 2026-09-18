export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription?: string;
  grade?: string;
  badgeText?: string;
  category: 'Full-Stack Mobile' | 'Desktop System' | 'Backend API' | 'AI & Web';
  featured: boolean;
  bentoSpan?: string; // CSS grid column/row span classes
  techStack: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  demoType?: 'mobile' | 'desktop' | 'web';
  accentColor?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string; // e.g. 'Advanced', 'Intermediate', 'Expert'
    icon?: string;
    highlight?: boolean;
    description?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  description: string;
  highlights: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  githubUrl: string;
  status: string;
  avatarUrl: string;
  resumeUrl?: string;
}
