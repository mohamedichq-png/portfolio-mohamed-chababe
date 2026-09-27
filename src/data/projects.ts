import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "retro-qatar",
    number: "01",
    title: "RETRO QATAR",
    category: "E-commerce · Web Design · Gaming",
    description:
      "Conception d'une expérience e-commerce moderne pour une boutique spécialisée dans le gaming, les consoles, les accessoires et le rétro gaming.",
    website: "https://www.retroqatar.com/",
    ctaText: "Voir le projet →",
    isConcept: false,
    tags: ["E-commerce", "Web Design", "Direction Artistique", "Gaming"],
    year: "2024",
    role: "Web Design & Direction Artistique",
    imageAlt: "Aperçu du projet e-commerce Retro Qatar - Gaming et Rétrogaming",
  },
  {
    id: "afamia-landscape",
    number: "02",
    title: "AFAMIA LANDSCAPE",
    category: "Branding · Web Design · Landscaping",
    description:
      "Création d'une identité digitale et d'un site web moderne pour une entreprise spécialisée dans l'aménagement paysager, le jardinage et les espaces extérieurs.",
    website: "https://afamia-landscape.vercel.app/",
    ctaText: "Voir le projet →",
    isConcept: false,
    tags: ["Branding", "Web Design", "Identité Visuelle", "UI/UX"],
    year: "2024",
    role: "Identité Digitale & Web Design",
    imageAlt: "Aperçu de l'identité visuelle et du site Afamia Landscape",
  },
  {
    id: "paris-renovation",
    number: "03",
    title: "PARIS RÉNOVATION",
    category: "Concept · UI/UX · Web Design",
    description:
      "Concept de site vitrine premium destiné à une entreprise de rénovation à Paris, avec une présentation claire des services, des réalisations et une expérience pensée pour convertir les visiteurs en prospects.",
    website: "#concept-modal",
    ctaText: "Explorer le concept →",
    isConcept: true,
    tags: ["Concept", "UI/UX", "Web Design", "Architecture & Rénovation"],
    year: "2025",
    role: "Direction Artistique & Conception UI/UX",
    imageAlt: "Concept de site web vitrine haut de gamme Paris Rénovation",
    conceptViews: [
      {
        id: "homepage",
        title: "Page d'accueil (Hero & Positionnement)",
        description:
          "Hero section éditoriale mettant en lumière le savoir-faire artisanal, l'architecture haussmannienne et la prise de contact directe avec estimation claire.",
        tag: "Homepage",
      },
      {
        id: "services",
        title: "Grille des Services & Spécialités",
        description:
          "Présentation structurée de l'offre : rénovation complète, architecture d'intérieur, rénovation énergétique et suivi de chantier clé en main.",
        tag: "Services",
      },
      {
        id: "projects",
        title: "Réalisations & Galerie Projets",
        description:
          "Mise en scène photographique des chantiers livrés avec fiches détaillées, avant/après et spécifications des matériaux nobles.",
        tag: "Réalisations",
      },
      {
        id: "contact",
        title: "Demande de Devis & Conversion",
        description:
          "Formulaire d'estimation personnalisé en étapes fluides, optimisé pour qualifier les prospects et maximiser les prises de rendez-vous.",
        tag: "Contact & Devis",
      },
    ],
  },
];
