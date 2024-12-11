
"use client"

import React, { useState } from "react";
import { ProjectCard } from "./components/cards/project-card";
import { resume } from "@/app/[locale]/data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/[locale]/components/ui/select";
import { projectCardType } from "./[name]/components/project-details";
import { Section } from "./components/section";
import { useScopedI18n } from "@/locales/client";




const Portfolio = () => {

  const t = useScopedI18n("portfolio")

  const categories : {type:string, name:string}[] = [
    {
      type : "all",
      name : t("categories.all"),
    },
    {
      type : "saas",
      name : t("categories.saas"),
    },
    {
      type: "chat",
      name: t("categories.chat")
    },
    {
      type: "data",
      name: t("categories.data")
    },
    {
      type: "cours",
      name: t("categories.course")
    },
    {
      type: "integration",
      name: t("categories.integration")
    },
    {
      type: "mobile",
      name: t("categories.mobile")
    }
  ]

  const [projects, setProjets] = useState<projectCardType[]>(resume.projects as unknown as projectCardType[])

  const handleChangeCategory = (c : string) =>{
      if (c === "all" ) {
        setProjets(resume.projects as unknown as projectCardType[])
        return
      }
      const filteredProject = resume.projects.filter((project)=> project.type === c)
      setProjets(filteredProject as unknown as projectCardType[])
  }

  return (
    <Section>
      <div className="py-4 md:pt-8 md:pb-20 flex">
        <div className="flex-1">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            {t("title")}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
              {t("subtitle")}
          </p>
        </div>
        <div className="ml-auto flex-1 max-w-md">
        <Select onValueChange={(value)=>handleChangeCategory(value)} >
          <SelectTrigger className="py-6">
          <SelectValue placeholder={t("categories.all")} />
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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-20 sm:mx-20 md:mx-0">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} stack={true} />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
