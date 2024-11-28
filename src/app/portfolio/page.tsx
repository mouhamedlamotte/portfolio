
"use client"

import React, { useState } from "react";
import { ProjectCard } from "./components/cards/project-card";
import { resume } from "@/data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";




const Portfolio = () => {

  const categories : {type:string, name:string}[] = [
    {
      type : "all",
      name : "Tous les projets"
    },
    {
      type : "saas",
      name : "Projet de sass",
    },
    {
      type: "chat",
      name: "projet de messagerie"
    },
    {
      type: "data",
      name: "data engenering"
    },
    {
      type: "cours",
      name: "Mes projets de cours"
    },
    {
      type: "integration",
      name: "Integration web"
    },
    {
      type: "mobile",
      name: "Projets d'applications mobiles"
    }
  ]

  const [projects, setProjets] = useState(resume.projects)

  const handleChangeCategory = (c : string) =>{
      if (c === "all" ) {
        setProjets(resume.projects)
        return
      }
      const filteredProject = resume.projects.filter((project)=> project.type === c)
      setProjets(filteredProject)
  }

  return (
    <div className="w-full md:px-16">
      <div className="max-w-7xl mx-auto py-4 md:pt-8 md:pb-20 flex">
        <div className="flex-1">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            Projects
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            Decouvrez les projets que j&apos;ai pu realiser en cours, en
            entreprise ou en autodidacte
          </p>
        </div>
        <div className="ml-auto flex-1 max-w-md">
        <Select onValueChange={(value)=>handleChangeCategory(value)}>
          <SelectTrigger>
          <SelectValue placeholder="Tous les projets" />
          </SelectTrigger>
          <SelectContent>
            {
              categories.map((c)=>(
                <SelectItem key={c.name} value={c.type}>{c.name}</SelectItem>
              ))
            }
          </SelectContent>
        </Select>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 md:px-24 mb-20">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} stack={true} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
