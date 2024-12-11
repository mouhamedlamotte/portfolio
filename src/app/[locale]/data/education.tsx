import { EducationType } from "../portfolio/components/cards/education-card";

export const educations: EducationType[] = [
  {
    school: {
      en: "Sonatel Academy (Orange Digital Center)",
      fr: "Sonatel Academy (Orange Digital Center)",
    },
    degree: {
      en: "Data Developer Certification",
      fr: "Certification Développeur Data",
    },
    year: "2024",
    description: {
      en: "Intensive professional training focused on practical skills in data development and analysis.",
      fr: "Formation professionnelle intensive axée sur les compétences pratiques en développement et analyse de données.",
    },
    technologies: ["Django", "Elasticsearch", "Kibana", "Next.js", "MongoDB", "Redis"],
    logo: "/img/logo/sa.jpg",
  },
  {
    school: {
      en: "Cheikh Anta Diop University (UCAD)",
      fr: "Université Cheikh Anta Diop (UCAD)",
    },
    degree: {
      en: "Bachelor's (unfinished)",
      fr: "Licence (non terminée)",
    },
    year: "2023",
    description: {
      en: "University studies interrupted due to protests related to the presidential elections in Senegal. This experience led me to join Sonatel Academy for more practical training.",
      fr: "Études universitaires interrompues en raison des manifestations liées aux élections présidentielles au Sénégal. Cette expérience m'a poussé à rejoindre la Sonatel Academy pour une formation plus pragmatique.",
    },
    technologies: [],
    logo: "/img/logo/ucad.jpg",
  },
  {
    school: {
      en: "Lycée de PETE",
      fr: "Lycée de PETE",
    },
    degree: {
      en: "Baccalaureate S2",
      fr: "Baccalauréat S2",
    },
    year: "2022",
    description: {
      en: "Baccalaureate in Experimental Sciences (S2).",
      fr: "Baccalauréat en Sciences Expérimentales (S2).",
    },
    technologies: [],
    logo: "/img/logo/default.jpg",
  },
] as const;
