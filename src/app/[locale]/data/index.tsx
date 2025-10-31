import { title } from "process";
import { projects } from "./projects";
import { skills } from "./skills";
import { work } from "./work";


  
export const resume = {
    name: "Mouhamed Lamotte",
    title: "Full Stack Developer",
    initials: "ML",
    url: "https://mouhamethlamotte.com",
    location: "San Francisco, CA",
    locationLink: "https://www.google.com/maps/place/sanfrancisco",
    description:
      "Salut, je suis un développeur passionné de web, de données et d'intelligence artificielle.",
    summary:`# 🎉 Mouhamed Lamotte !

Un **code lover** basé à Dakar 🌍, toujours en mode **créa vibes** pour inventer des solutions web **qui claquent** et qui répondent à des vrais besoins. 🛠️ Passionné par le mélange des outils modernes et des challenges réels, je me régale à chaque ligne de code. 🚀

Formé à **Sonatel Academy** 🎓, j’ai une **double casquette** : backend et frontend, tout en explorant des terrains passionnants comme la gestion des données 📊, l’IA 🤖 et l’indexation 🔍. En vrai, mon crédo, c’est apprendre en **créant des trucs utiles pour la commu**. 🙌

## 🌟 Mes vibes ?
- Développer des **interfaces stylées et fluides** 🎨
- Construire des **API en béton armé** 🧱
- Jouer avec des montagnes de données 📈 (et kiffer ça 🤓)

💡 **Objectif ultime ?** Allier **simplicité et efficacité** dans des projets qui **marquent la diff’** !

---

**Let’s code, collab, and create some magic ✨.**
`,
    avatarUrl: "https://github.com/mouhamedlamotte.png",
    skills: skills,
    contact: {},
    work: work,
    projects: projects,
  } as const;
  