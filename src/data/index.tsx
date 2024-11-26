import { contact } from "./contact";
import { projects } from "./projects";
import { skills } from "./skills";
import { work } from "./work";
  
export const resume = {
    name: "Mouhamed Lamotte",
    initials: "ML",
    url: "https://mouhamethlamotte.com",
    location: "San Francisco, CA",
    locationLink: "https://www.google.com/maps/place/sanfrancisco",
    description:
      "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
    summary:
      "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    avatarUrl: "/me.jpeg",
    skills: skills,
    contact: contact,
    work: work,
    projects: projects,
  } as const;
  