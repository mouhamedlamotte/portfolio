export default {
  hello: "Hello",
  desc: "Hello, I am a passionate developer specializing in web, data, and artificial intelligence.",
  landing: {
    header: {
      navbar: {
        home: "Home",
        devis: "Quote",
        portfolio: "Portfolio",
        blog: "Blog",
        buttons : {
          ask_for_devis: "Request a quote",
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
    get_in_touch : {
      title : "Play & Get in touch",
      subtitle : "I made a little game for you! I challenge you to win against the impossible level.",
      game : {
        levels : {
          easy : "Easy",
          hard : "Impossible"
        },
        your_turn : "It's your turn ",
        show_me : "You beat the Impossible level? 🥵 Show me!",
        congrats : "Congratulations !  🎉",
        you_won : "You won ! 🏆",
        pc_won : "The machine won! Take your revenge! 🤖",
        play_again : "Play again"
      },
      contact_form : {
        title : "Leave me a message ",
          name : {
            label : "Name",
            placeholder : "Enter your name",
            error_message :  "The name must contain at least 2 characters."
          },
          email : {
            label : "Email",
            placeholder : "Enter your Email",
            error_message : "Invalid email."
          },
          message : {
            label : "Message",
            placeholder : "Your message...",
            error_message : "The message must contain at least 10 characters."
          },
          send : "Send",
          tost_messages : {
              sucess : {
                title : "Thank you for your message 💫",
                description: "I'll get back to you very soon 🔥.",
              },
              error :{
                title : "An error occurred.",
                description: "Your message could not be sent.",
              }
          }
      }
    },
    common: {
      see_more: "See More",
      return : "Back"
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
    detail :{
      more_such_project : "More projects like this"
    }
  },
  quoteRequest: {
    title: "Request a Quote",
    subtitle: "Fill out this form to receive a personalized quote for your project.",
    form: {
      name: {
        label: "Full Name",
        placeholder: "Enter your name"
      },
      email: {
        label: "Email",
        placeholder: "lamotte@gmail.com"
      },
      company: {
        label: "Company (optional)",
        placeholder: "Enter your company name"
      },
      projectType: {
        label: "Project Type",
        placeholder: "Select a project type",
        types: {
          website: "Website",
          webapp: "Web Application",
          mobileapp: "Mobile Application",
          ecommerce: "E-commerce",
          api_back: "Backend API",
          other: "Other"
        }
      },
      budget: {
        label: "Budget",
        placeholder: "Enter your budget"
      },
      doc: {
        label: "Project Brief or Document",
        placeholder: "Enter your message"
      },
      desc: {
        label: "Project Description",
        placeholder: "Describe your project in detail"
      },
      send: "Request a Quote"
    }
  }
  
} as const;
