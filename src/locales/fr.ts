export default {
  hello: "Salut",
  desc: "Salut, je suis un développeur passionné de web, de données et d'intelligence artificielle.",
  landing: {
    header: {
      navbar: {
        home: "Accueil",
        devis: "Devis",
        portfolio: "Portfolio",
        blog: "Blog",
        buttons: {
          ask_for_devis: "Demander un devis",
        },
      },
      hero: {
        title: "Mouhameth Lamotte",
        subtitle:
          "Je suis un developpeur web passionne de donnees et d'intelligence artificielle",
        available: "Disponible pour de nouveaux projets",
        job: "Full Stack Developer",
        buttons: {
          see_my_projects: "Voir mes projets",
          download_cv: "Télécharger mon CV",
        },
      },
    },
    about: {
      title: "À propos de moi",
      content: `# 🎉 Mouhamed Lamotte !

Un **code lover** basé à Dakar 🌍, toujours en **mode créatif**, imaginant des **solutions web percutantes** qui répondent à des besoins concrets. 🛠️ Passionné par le mélange des outils modernes et des défis réels, chaque ligne de code est une nouvelle aventure. 🚀

Formé à **Sonatel Academy** 🎓, j’ai une **double expertise** en développement backend et frontend, tout en explorant des domaines passionnants comme la gestion de données 📊, l’IA 🤖 et l’indexation 🔍. Mon credo ? **Apprendre en créant des outils utiles pour la communauté.** 🙌

## 🌟 Ce qui me motive ?
- Développer des **interfaces élégantes et fluides** 🎨  
- Construire des **APIs ultra-fiables** 🧱  
- Plonger dans des **montagnes de données** 📈 (et adorer ça 🤓)

💡 **Objectif ultime ?** Allier **simplicité et efficacité** pour livrer des projets qui **font la différence** !

---

**Codons, collaborons et créons de la magie ✨.**
`,
      main_skills_title: "Compétences techniques",
    },
    experience: {
      title: "Journal de Mon Parcours",
      subtitle:
        "Cela fait 3 ans que je construis et apprends en tant que développeur. Voici une chronologie de mon parcours.",
      buttons: {
        experience: "Experience",
        education: "Education",
      },
    },
    recent_projects: {
      title: "Projets Recents",
      subtitle: "Voici quelques-uns de mes projets les plus recents",
    },
    recent_posts: {
      title: "Articles Recents",
      subtitle: "Voici quelques-uns de mes articles les plus recents",
    },
    get_in_touch: {
      title: "Joue & Prends contact",
      subtitle:
        "J'ai créé un petit jeu pour toi ! Relève le défi et tente de battre le niveau impossible.",
      game: {
        levels: {
          easy: "Facile",
          hard: "Impossible",
        },
        your_turn: "C'est à ton tour !",
        show_me: "Tu as battu le niveau Impossible ? 🥵 Montre-moi ça !",
        congrats: "Bravo ! 🎉",
        you_won: "Tu as gagné ! 🏆",
        pc_won: "La machine t'a battu ! Reprends ta revanche ! 🤖",
        play_again: "Rejouer",
      },
      contact_form: {
        title: "Formulaire de contact",
        name: {
          label: "Nom",
          placeholder: "Saisis ton nom",
          error_message: "Le nom doit contenir au moins 2 caractères.",
        },
        email: {
          label: "Email",
          placeholder: "Saisis ton email",
          error_message: "Email invalide.",
        },
        message: {
          label: "Message",
          placeholder: "Ton message...",
          error_message: "Le message doit contenir au moins 10 caractères.",
        },
        send: "Envoyer",
        tost_messages: {
          success: {
            title: "Merci pour votre message 💫",
            description: "Je vous reviendrai très vite 🔥.",
          },
          error: {
            title: "Une erreur est survenue.",
            description: "Votre message n'a pas pu être envoyé.",
          },
        },
      },
    },
    common: {
      see_more: "Voir plus",
      return: "Retour",
    },
    footer: {
      contact: {
        title: "Contactez-moi",
      },
      navigation: {
        title: "Naviguer",
        home: "Accueil",
        portfolio: "Portfolio",
        blog: "Blog",
      },
      social: {
        title: "Suivez-moi",
      },
    },
  },
  portfolio: {
    title: "Portfolio",
    subtitle:
      "Decouvrez les projets que j'ai pu realiser en cours, en entreprise ou en autodidacte",
    categories: {
      all: "Tous les projets",
      saas: "Projets de SaaS",
      chat: "Projets de messagerie",
      data: "Data Engineering",
      course: "Projets de cours",
      integration: "Integration web",
      mobile: "Projets d'applications mobiles",
      web: "Projets web",
    },
    detail: {
      more_such_project: "Autres projets du genre",
    },
  },
  quoteRequest :{
    title :"Demande de devis",
    subtitle : "Remplissez ce formulaire pour recevoir un devis personnalisé pour votre projet.",
    form : {
        name : {
          label : "Nom complet",
          placeholder : "Entrez votre nom"
        },
        email : {
          label : "Email",
          placeholder : "lamotte@gmail.com"
        },
        company : {
          label : "Entreprise (optionnel)",
          placeholder : "Nom de votre entreprise"
        },
        projectType :{
          label : "Type de projet",
          placeholder : "Sellectionnez un type de projet",
          types : {
              website : "Site web",
              webapp : "Application web",
              mobileapp : "Application mobile",
              ecommerce : "E-commerce",
              api_back : "API Backend",
              other : "Autre"
          }
        },
        budget : {
          label : "Budget",
          placeholder : "Entrez votre budget"
        },
        doc : {
          label : "Cahier des charges ou document de projet",
          placeholder : "Entrez votre message"
        },
        desc : {
          label : "Description du projet",
          placeholder : "Decrivez votre projet en detail" 
        },
        send : "Demander un devis",
        toast: {
          success: {
            title: "Merci pour votre demande de devis 💫",
            description: "Je vous reviendrai rapidement 🔥.",
          },
          error: {
            title: "Une erreur est survenue.",
            description: "Votre demande de devis n'a pas pu etre envoyee.",
          }
        }
    }
  }
} as const;
