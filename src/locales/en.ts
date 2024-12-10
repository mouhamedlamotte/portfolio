export default {
  hello: "Hello",
  desc: "Hello, I am a passionate developer specializing in web, data, and artificial intelligence.",
  landing: {
    header: {
      navbar: {
        home: "Home",
        devis: "Devis",
        portfolio: "Portfolio",
        blog: "Blog",
        buttons : {
          ask_for_devis: "Ask for devis",
        }
      },
      hero: {
        title: "Mouhameth Lamotte",
        subtitle:
          "I am a web developer passionate about data and artificial intelligence",
        buttons: {
          see_my_projects: "See my projects",
          download_cv: "Download my resume",
        },
      },
    },
    about: {
      title: "About Me",
      content: `# 🎉 Mouhamed Lamotte!

A **code lover** based in Dakar 🌍, always in **creative mode**, crafting **impactful web solutions** that solve real-world problems. 🛠️ Passionate about blending modern tools with real challenges, I thrive on every line of code I write. 🚀

Trained at **Sonatel Academy** 🎓, I bring a **dual expertise** in backend and frontend development while exploring exciting areas like data management 📊, AI 🤖, and indexing 🔍. My motto? **Learn by building meaningful tools for the community.** 🙌

## 🌟 What drives me?
- Creating **sleek and seamless interfaces** 🎨  
- Building **rock-solid APIs** 🧱  
- Diving into **massive data mountains** 📈 (and loving it 🤓)

💡 **Ultimate goal?** Combine **simplicity and efficiency** to deliver projects that truly **make a difference**!

---

**Let’s code, collaborate, and create magic ✨.**

      `,
      main_skills_title: "Technical Skills",
    },
    experience: {
      title: "My Journey Timeline",
      subtitle: "I have been building and learning as a developer for 3 years. Here's a timeline of my journey.",
      buttons: {
        experience: "Experience",
        education: "Education",
      },
    },
    recent_projects: {
      title: "Recent Projects",
      subtitle: "Here are some of my most recent projects",
    },
    recent_posts: {
      title: "Recent Posts",
      subtitle: "Here are some of my most recent articles",
    },
    common: {
      see_more: "See More",
    },
    footer : {
      contact : {
        title : "Contact",
      },
      navigation : {
        title : "Navigation",
        home : "Home",
        portfolio : "Portfolio",
        blog : "Blog",
      },
      social : {
        title : "Follow Me",
      }
    }
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Discover the projects I have completed during courses, in companies, or through self-learning",
    categories: {
      all: "All projects",
      saas: "SaaS projects",
      chat: "Messaging projects",
      data: "Data Engineering",
      course: "Course projects",
      integration: "Web integration",
      mobile: "Mobile application projects",
      web: "Web projects",
    },
  }
} as const;
