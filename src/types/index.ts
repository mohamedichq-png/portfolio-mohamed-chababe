export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  website?: string;
  ctaText: string;
  isConcept?: boolean;
  tags: string[];
  year: string;
  imageAlt: string;
  role: string;
  conceptViews?: {
    id: string;
    title: string;
    description: string;
    tag: string;
  }[];
}

export interface Service {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}
