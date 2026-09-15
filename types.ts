export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon: string;
  tag: string;
}

export interface ArchitecturePrinciple {
  id: string;
  title: string;
  description: string;
  standard: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  clientSector: string;
  title: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
}

export interface ContactFormState {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  timeline: string;
  message: string;
}
