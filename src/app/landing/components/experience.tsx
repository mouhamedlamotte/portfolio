import { Timeline } from "@/components/ui/timeline";
import { ExperienceCard } from "./cards/experience-card";


const experiences : { year: string, story: string, company: string, role: string, description: string, technologies: string[], logo? : string}[] = [
  {
    year: "Nov. 2024",
    story : "À l'ère des données avec le Groupe Sonatel 📊",
    company: "Groupe Sonatel",
    role: "Stagiaire en Data Engineering",
    description: "Stage axé sur l'optimisation des systèmes de qualité (QSO), la gestion et l’analyse des données. Utilisation de StreamSets, Kibana et ELK pour collecter, traiter et analyser les données en temps réel. Je participe à la création et à l'automatisation de pipelines en Python et VBA, tout en contribuant à la génération de rapports et de visualisations dynamiques pour améliorer la prise de décision stratégique.",
    technologies: ["Kibana", "Elasticsearch", "StreamSets", "Python", "VBA"],
    logo : "/img/sonatel.png"
  },
  {
    year: "Avril 2024",
    story : "En Plein Essor avec Subito International 🚀",
    company: "Subito International",
    role: "Front-End Développeur - Freelance",
    description: "Développement du front-end de la plateforme dédiée aux entreprises pour la réservation de voitures, avec gestion complète de l'authentification, des réservations, et des dashboards administratifs. J'ai intégré l'API existante de Subito et créé des visualisations interactives des réservations et des graphiques de suivi, offrant ainsi une expérience utilisateur fluide et un suivi détaillé pour les entreprises.",
    technologies: ["Nextjs", "Tailwind CSS", "Shadcn UI"],
    logo : "/img/subito.png"
  },
  {
    year: "Août 2024",
    story : "Sur la Route avec Jolof Taxi 🚖",
    company: "Jolof Taxi",
    role: "Intégrateur Web - Freelance",
    description: "Intégration de la landing page avec Next.js et Tailwind CSS. J'ai créé une interface simple, esthétique et réactive, en veillant à l'optimisation des performances et à l'UX pour offrir une navigation fluide aux utilisateurs.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Vercel"],
    logo : "/img/jolof.svg"
  },
  {
    year: "Juillet 2022",
    story : "Le Déclic 🌟",
    company: "Sante de Coeur",
    role: "Web & Backend Developer",
    description: "Conception et intégration de solutions de paiement en ligne avec l'API PAYTECH, développement d'une plateforme de collecte de dons et gestion des campagnes de santé avec Django.",
    technologies: ["Django", "PAYTECH API", "PostgreSQL", "Firestore"],
    logo : "/img/sdc.png"
  },
];

export default function Experience() {

  const data = experiences.map((experience) => ({
    title: experience.year,
    logo : experience.logo,
    content: (
      <ExperienceCard exp={experience} />
    ),
  }));

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
