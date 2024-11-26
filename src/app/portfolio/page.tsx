import React from 'react'
import { ProjectCard } from './components/cards/project-card'
import { resume } from '@/data'

const Portfolio = () => {
  return (
    <div className="w-full md:px-16">
    <div className="max-w-7xl mx-auto pt-8 pb-20">
      <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
        Projects
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
        Decouvrez les projets que j&apos;ai pu realiser en cours, en
        entreprise ou en autodidacte
      </p>
    </div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 md:px-24 mb-20">
      {resume.projects.map((project) => (
        <ProjectCard key={project.title} project={project} stack={true} />
      ))}
    </div>
  </div>
  )
}

export default Portfolio