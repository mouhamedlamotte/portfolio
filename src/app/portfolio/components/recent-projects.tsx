import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import { Button } from "@/components/ui/button"
import { resume } from "@/data"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ProjectCard } from "./cards/project-card"


export const RecentProjects = () => {
  return (
    <section id="projects" className=" xl:px-40 scroll-mt-16">
   <div className="w-full md:px-16">
      <div className="max-w-7xl mx-auto py-20 flex  items-start">
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
              <Link href="/portfolio" className="hover:underline-none" >
              Voir tous mes projets
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
  </section>
  )
}
