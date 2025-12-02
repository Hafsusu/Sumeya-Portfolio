export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Qualification {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tool' | 'language';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}