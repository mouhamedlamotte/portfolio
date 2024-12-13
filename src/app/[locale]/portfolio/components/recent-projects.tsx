import AnimatedShinyText from "@/app/[locale]/components/ui/animated-shiny-text"
import { Button } from "@/app/[locale]/components/ui/button"
import { resume } from "@/app/[locale]/data"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ProjectCard } from "./cards/project-card"
import { Section } from "./section"
import { getScopedI18n } from "@/locales/server"


export const RecentProjects = async () => {

  const t = await getScopedI18n("landing.recent_projects")
  const common = await getScopedI18n("landing.common")

  return (
    <Section>
   <div className="w-full  mx-auto px-4 md:px-0">
      <div className="flex  items-start">
        <div>
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          {t("title")}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          {t("subtitle")}
        </p>
        </div>
            <Button variant="link" className="ml-auto  hover:text-muted-foreground">
              <AnimatedShinyText className="inline-flex items-center" >
              <Link prefetch={false} href="/portfolio" className="hover:underline-none" >
              {common("see_more")}
              </Link>
              <ArrowRight className="ml-2" size={16} />
              </AnimatedShinyText>
            </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 sm:mx-4 md:mx-0">
        {resume.projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} project={project} stack={false} />
        ))}
      </div>
    </div>
  </Section>
  )
}
