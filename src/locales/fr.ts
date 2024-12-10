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
    common: {
      see_more: "Voir plus",
    },
    footer : {
      contact : {
        title : "Contactez-moi",
      },
      navigation : {
        title : "Naviguer",
        home : "Accueil",
        portfolio : "Portfolio",
        blog : "Blog",
      },
      social : {
        title : "Suivez-moi",
      }
    }
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Decouvrez les projets que j'ai pu realiser en cours, en entreprise ou en autodidacte",
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
  }
} as const;
