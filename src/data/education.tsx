import { EducationType } from "@/app/[local]/portfolio/components/cards/education-card";


export const educations: EducationType[] = [
  {
    school: "Sonatel Academy (Orange Digital Center)",
    degree: "Certification Développeur Data",
    year: "2024",
    description: "Formation professionnelle intensive axée sur les compétences pratiques en développement et analyse de données.",
    technologies: ["Django", "Elasticsearch", "Kibana", "Next.js", "MongoDB", "Redis"],
    logo : "/img/logo/sa.jpg"
  },
  {
    school: "Université Cheikh Anta Diop (UCAD)",
    degree: "Licence (non terminée)",
    year: "2023",
    description: "Études universitaires interrompues en raison des manifestations liées aux élections présidentielles au Sénégal. Cette expérience m'a poussé à rejoindre la Sonatel Academy pour une formation plus pragmatique.",
    technologies: [],
    logo : "/img/logo/ucad.jpg"
  },
  {
    school: "Lycée de PETE",
    degree: "Baccalauréat S2",
    year: "2022",
    description: "Baccalauréat en Sciences Expérimentales (S2).",
    technologies: [],
    logo : "/img/logo/default.jpg"
  }
] as const;
  