import { Icons } from "@/icons";

export const projects = [
    {
      type : "saas",
      video : "",
      images: [
        "/img/nexcom/1.png",
        "/img/nexcom/2.png",
        "/img/nexcom/3.png",
      ] as string[],
      name: "nexcom",
      title: "NexCom",
      href: "/portfolio/nexcom",
      description:
        "NexCom est une plateforme de communication centralisée qui aide les entreprises à gérer leurs interactions client sur plusieurs canaux (WhatsApp, Facebook Messenger, Twitter, etc.). Son objectif est de simplifier les échanges, d'améliorer la réactivité et d'offrir une expérience client optimale grâce à une gestion unifiée et en temps réel des messages.",
      dates: "2024 - en cours",
      tags: [
        "Django REST",
        "Django Channels",
        "websocket",
        "PostgreSQL",
        "Redis",
        "Elasticsearch",
        "React.js",
        "Next.js",
        "Docker",
      ],
      image: "/img/preview/nexcom-light.png",
      links: [
        {
          type: "Landing Page",
          href: "https://nexcom-sn.vercel.app/",
          icon: <Icons.globe className="size-4" />,
        },
      ],
    },
    {
      type : "chat",
      video : "",
      images: [
        "/img/windam/1.png",
        "/img/windam/2.png",
        "/img/windam/3.png",
      ] as string[],
      name: "windam",
      title: "Windam pro",
      href: "/portfolio/windam",
      description:
        "Windam pre (refonte de **[windam-v1](/portfolio/windam-v1)** est une application de chat moderne offrant des fonctionnalités telles que la messagerie en temps réel, la gestion d'amis, des publications (feed) et la recherche utilisateur en collaboration avec **[@Helicia Tsika](https://heli2805.github.io/Personal-Portfolio/)**. Conçue pour être rapide, intuitive et évolutive, elle utilise des technologies modernes pour une expérience fluide.",
      dates: "2024 - en cours",
      tags: [
        "Django",
        "Django Channels",
        "Next.js",
        "React.js",
        "WebSocket",
        "PostgreSQL",
        "Redis",
      ],
      image: "/img/preview/windam.png",
      links: [
        {
          icon: <Icons.globe className="size-4" />,
          type: "WebApp",
          href: "https://windampro.vercel.app/",
        },
        {
          icon: <Icons.github className="size-4" />,
          type: "Code",
          href: "https://github.com/mouhamedlamotte/windam-v2-frontend",
        },
      ],
    },
    {
      type : "data",
      video : "/img/preview/indexation.mp4",
      images: [
        "/img/indexation/1.png",
        "/img/indexation/2.png",
        "/img/indexation/3.png",
        "/img/indexation/4.png",
      ] as string[],
      name: "indexation",
      title: "Indexation et Recherche de Données",
      href: "/portfolio/indexation",
      description:
        "Projet de création d'un moteur de recherche spécialisé basé sur Elasticsearch et Kibana, permettant la collecte, l'analyse et la visualisation des données pour identifier les tendances et extraire des insights exploitables.",
      dates: "2024",
      image: "",
      tags: [
        "Elasticsearch",
        "Kibana",
        "Python",
        "Django",
        "Scraping",
        "Data Visualization",
      ],
      links: [
        {
          icon: <Icons.github className="size-a" />,
          type: "Code",
          href: "https://github.com/mouhamedlamotte/search_engine",
        },
      ],
    },
    {
      type : "chat",
      video : "/img/preview/demo-windam-1.mp4",
      images: [] as string[],
      name: "windam-v1",
      title: "Windam Chat V1",
      href: "/portfolio/windam-v1",
      description:
        "Windam Chat V1 est une application de messagerie conçue comme un projet d'apprentissage pour expérimenter des technologies modernes comme React, Next.js, Tailwind CSS, et Firebase. L'accent est mis sur l'authentification utilisateur sécurisée, mais le système de messagerie n'est pas destiné à des communications sensibles. Ce projet vise à démontrer des compétences techniques.",
      dates: "2023",
      tags: [
        "React",
        "Next.js",
        "Firebase",
        "Tailwind CSS",
        "Chat Application",
        "Frontend",
      ],
      image: "",
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "code",
          href: "https://windam.vercel.app/",
        },
      ],
    },
    {
      type : "cours",
      video : "",
      images: [
        "/img/boblioloan/1.png",
      ] as string[],
      name: "boblioloan",
      title: "Boblioloan",
      href: "/portfolio/boblioloan",
      description:
        "Boblioloan (projet de cours) est une plateforme de gestion de prêts en collaboration avec **[@Kamal moustoifa](https://www.linkedin.com/in/moustoifa-ben-kamal-moussa-38a698236/)** qui facilite le suivi des emprunts et des remboursements pour les bibliothèques et autres institutions. Conçue pour être intuitive, elle permet une gestion efficace des membres, des prêts et des retours grâce à une interface moderne et une intégration d'outils de reporting.",
      dates: "2024 - en cours",
      tags: ["Flask", "Next.js", "React.js", "PostgreSQL", "Tailwind CSS"],
      image: "/img/preview/biblio.png",
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "backend",
          href: "https://github.com/mouhamedlamotte/biblio",
        },
        {
          icon: <Icons.github className="size-4" />,
          type: "API",
          href: "https://github.com/mouhamedlamotte/biblio_api",
        },
      ],
    },
    {
      type : "cours",
      video : "",
      images: [
        "/img/promptmaster/1.png",
        "/img/promptmaster/2.png",
      ] as string[],
      name: "promptmaster",
      title: "PromptMaster",
      href: "/portfolio/promptmaster",
      description:
        "PromptMaster est un projet de cours où une API REST est développée avec Flask pour gérer des utilisateurs et des propositions de textes (Prompts). Le système inclut des rôles différents pour les utilisateurs, comme administrateurs et membres, et propose des mécanismes pour gérer les connexions, autorisations, ainsi que la notation et l'activation des Prompts en fonction des votes.",
      dates: "2024 - en cours",
      tags: [
        "Flask",
        "PostgreSQL",
        "JWT",
        "API REST",
        "Gestion des utilisateurs",
        "Gestion des Prompts",
        "Notations",
        "Votes",
      ],
      image: "/img/preview/promptmaster.png",
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "API",
          href: "https://github.com/mouhamedlamotte/api-prompt",
        },
      ],
    },
    {
      type : "cours",
      video : "",
      images: [
        "/img/odc-inside/1.png",
        "/img/odc-inside/2.png",
        "/img/odc-inside/3.png",
        "/img/odc-inside/4.png",
        "/img/odc-inside/5.png",
      ] as string[],
      name: "odc-inside",
      title: "Odc Inside",
      href: "/portfolio/odc-inside",
      description:
        "Un site comprenant deux parties principales : une section 'Inside' permettant de tirer au sort aléatoirement un étudiant de Sonatel Academy pour aller à la table, et une section présentant les alumni de la Sonatel Academy avec des filtres par niveau et d'autres critères pour les recruteurs.",
      dates: "2024",
      tags: ["Firebase", "Next.js", "ODC", "Alumni", "Random Selection"],
      image: "/img/preview/odc-inside.png",
      links: [
        {
          icon: <Icons.globe className="size-4" />,
          type: "demo",
          href: "https://odc-dev-data.vercel.app/",
        },
        {
          icon: <Icons.github className="size-4" />,
          type: "github",
          href: "https://github.com/mouhamedlamotte/odc-dev-data",
        },
        {
          icon: <Icons.notion className="size-4" />,
          type: "notion",
          href: "https://www.notion.so/invite/8dabcc1560363cea85ebb60b58ccbea52543dc6a",
        },
      ],
    },
    {
      type : "integration",
      video : "",
      images: [
        "/img/mysubito-landing-clone/1.png",
        "/img/mysubito-landing-clone/2.png",
        "/img/mysubito-landing-clone/3.png",
      ] as string[],
      name: "mysubito-landing-clone",
      title: "MySubito Landing Page Clone",
      href: "/portfolio/mysubito-landing-clone",
      description:
        "Le clone de la landing page de MySubito est une reproduction réalisée pour apprendre React. Cette version permet de présenter les fonctionnalités de l'application de réservation de voitures avec un design réactif, tout en intégrant des pratiques modernes de développement frontend avec React et Tailwind CSS.",
      dates: "2024",
      tags: ["React", "Tailwind CSS", "Landing Page", "Frontend", "Web Design"],
      image: "/img/preview/subito-web-clone.png",
      links: [
        
      ]
    },
    {
      type : "mobile",
      video : "",
      images: [
        "/img/aora/1.png",
      ]  as string[],
      name: "aora",
      title: "Aora",
      href: "/portfolio/aora",
      description:
        "Aora est une application mobile de partage de vidéos et de création de contenu, développée avec React Native, Appwrite et NativeWind. L'application permet aux utilisateurs de créer, partager et interagir avec des vidéos tout en offrant des outils intuitifs de création de contenu et une interface fluide.",
      dates: "2024",
      tags: [
        "React Native",
        "Appwrite",
        "NativeWind",
        "Mobile App",
        "Video Sharing",
        "Content Creation",
      ],
      image: "/img/preview/aora.png",
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "landing page",
          href: "https://aora-app.vercel.app/",
        },
      ],
    },
    {
      type : "mobile",
      video : "",
      images: [
        "/img/subitoapp/1.png",
        "/img/subitoapp/2.png",
        "/img/subitoapp/3.png",
        "/img/subitoapp/4.png",
        "/img/subitoapp/5.png",
      ] as string[],
      name: "mysubito",
      title: "MySubito app",
      href: "/portfolio/mysubito",
      description:
        "MySubito est une refonte de l'application Subito, développée avec React Native. L'application permet aux utilisateurs de réserver des voitures de manière simple et rapide, avec des fonctionnalités comme la gestion des réservations, le suivi en temps réel et des notifications pour une expérience utilisateur fluide.",
      dates: "2024 - en cours",
      tags: [
        "React Native",
        "Mobile App",
        "Car Reservation",
        "Tailwind CSS",
        "Firebase",
      ],
      image: "/img/preview/subitoapp.png",
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "code",
          href: "https://github.com/mouhamedlamotte/mysubito/",
        },
      ],
    },
    {
      type : "data",
      video : "",
      images: [
        "/img/gestion-fichiers/1.png",
        "/img/gestion-fichiers/2.png",
        "/img/gestion-fichiers/3.png",
        "/img/gestion-fichiers/4.png",
        "/img/gestion-fichiers/5.png",
        "/img/gestion-fichiers/6.png",
        "/img/gestion-fichiers/7.png",
      ] as string[],
      name: "gestion-fichiers",
      title: "Gestion de Fichiers",
      href: "/portfolio/gestion-fichiers",
      description:
        "Ce projet permet de gérer des fichiers au format JSON, YAML, XLSX, CSV, et plus. Il dispose d'une version desktop, développée avec Tkinter, et d'une version web utilisant Flask, Tailwind CSS et JavaScript. Les utilisateurs peuvent importer des fichiers dans l'un de ces formats et les convertir dans un autre format, grâce à une interface intuitive et fluide.",
      dates: "2024",
      tags: [
        "Flask",
        "Tkinter",
        "Tailwind CSS",
        "JavaScript",
        "File Management",
        "JSON",
        "YAML",
        "XLSX",
        "CSV",
      ],
      image: "/img/preview/gestion-fichier.png",
      links: [
        {
          icon: <Icons.github className="size-4" />,
          type: "Code",
          href: "https://github.com/mouhamedlamotte/gestion_fichier",
        },
      ],
    },
    {
      type : "integration",
      video : "",
      images: [] as string[],
      name: "organick",
      title: "Organick",
      href: "/portfolio/organick",
      description:
        "Une intégration web basée sur une maquette fournie, réalisée avec Tailwind CSS. Cet exercice met en avant les compétences en design réactif et en structuration moderne.",
      dates: "2024",
      tags: [
        "Tailwind CSS",
        "Frontend",
        "Web Integration",
        "Responsive Design",
      ],
      image: "/img/preview/organick.png",
      links: [
        {
          icon: <Icons.globe className="size-4" />,
          type: "demo",
          href: "https://organick-v2.vercel.app/",
        },
        {
          icon: <Icons.github className="size-4" />,
          type: "github",
          href: "https://github.com/mouhamedbaba/organick-2",
        },
      ],
    },
    {
      type : "integration",
      video : "",
      images: [] as string[],
      name: "golio",
      href: "/portfolio/golio",
      title: "Golio",
      description:
        "Une intégration web réalisée uniquement avec HTML et CSS, basée sur une maquette fournie. Cet exercice se concentre sur la structuration propre et le design fidèle aux maquettes.",
      dates: "2024",
      tags: ["HTML", "CSS", "Frontend", "Web Integration"],
      image: "/img/preview/golio.png",
      links: [
        {
          icon: <Icons.globe className="size-4" />,
          type: "demo",
          href: "https://golio.vercel.app/",
        },
        {
          icon: <Icons.github className="size-4" />,
          type: "github",
          href: "https://github.com/mouhamedbaba/golio",
        },
      ],
    },
    {
      type : "integration",
      video : "",
      images: [] as string[],
      name: "bella",
      href: "/portfolio/bella",
      title: "Bella Ojene",
      description:
        "Une intégration web fidèle à une maquette fournie, réalisée exclusivement avec HTML et CSS. L'objectif est de perfectionner les compétences de base en intégration et en design statique.",
      dates: "2024 - en cours",
      tags: ["HTML", "CSS", "Frontend", "Web Integration"],
      image: "/img/preview/bella.png",
      links: [
        {
          icon: <Icons.globe className="size-4" />,
          type: "demo",
          href: "https://bella-ojene-sa.vercel.app/Bella_Onoji/index.html",
        },
        {
          icon: <Icons.github className="size-4" />,
          type: "github",
          href: "https://github.com/mouhamedbaba/bella-Ojene-sa",
        },
      ],
    },
  ] as const;