import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import { Button } from "@/components/ui/button"
import { resume } from "@/data"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ProjectCard } from "./cards/project-card"
import { Section } from "./section"


export const RecentProjects = () => {
  return (
    <Section>
   <div className="w-full  max-auto">
      <div className="flex  items-start">
        <div>
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Projects Recent
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Voici quelques-uns de mes projets les plus résents
        </p>
        </div>
            <Button variant="link" className="ml-auto  hover:text-muted-foreground">
              <AnimatedShinyText className="inline-flex items-center" >
              <Link prefetch={false} href="/portfolio" className="hover:underline-none" >
              Voir plus
              </Link>
              <ArrowRight className="ml-2" size={16} />
              </AnimatedShinyText>
            </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {resume.projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} project={project} stack={false} />
        ))}
      </div>
    </div>
  </Section>
  )
}
