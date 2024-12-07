/* eslint-disable @next/next/no-img-element */
import NotFound from "@/app/[local]/not-found";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { resume } from "@/data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { ProjectCard } from "../components/cards/project-card";
import React from "react";
import { projectCardType, ProjectDetails } from "./components/project-details";
import { Section } from "../components/section";


export default async function Page({ params }: { params: Promise<{ name: string }> }) {
  const name = (await params).name;

  const project = resume.projects.find((project) => project.name === name);


  if (!project) {
    return <NotFound />;
  }

  const preview = project.video ? project.video : project.image;
  const imgs = [preview, ...project.images];

  const sameTypeProjects = resume.projects.filter((pj) => {
    return pj.type === project.type && pj.name !== project.name;
  });

  return (
    <Section >
      <div className="pb-10 flex  items-start">
        <div>
          <h2 className="text-lg md:text-4xl mb-4 max-w-4xl uppercase font-bold">
            {project.title}
          </h2>
          <Markdown className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base  max-w-lg">
            {project.description}
          </Markdown>
        </div>
        <Button
          variant="link"
          className="ml-auto  hover:text-muted-foreground"

        >
          <Link prefetch={false} href="/portfolio">
          <AnimatedShinyText className="inline-flex items-center">
            <ArrowLeft className="me-2" size={16} />
            Retour
          </AnimatedShinyText>
          </Link>
        </Button>
      </div>
    
    <ProjectDetails project={project as unknown as  projectCardType} imgs={imgs} />
      {sameTypeProjects.length > 0 ? (
        <>
          <div className="  pb-10 flex  items-start">
            <div>
              <h2 className="text-lg md:text-4xl mb-4 max-w-4xl  font-bold">
                Autres projets du genre
              </h2>
            </div>
            <Button
              variant="link"
              className="ml-auto  hover:text-muted-foreground"
            >
              <AnimatedShinyText className="inline-flex items-center">
                <Link prefetch={false} href="/projects">Voir tous les projets</Link>
                <ArrowRight className="ms-2" size={16} />
              </AnimatedShinyText>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  mb-20">
            {sameTypeProjects.map((project) => (
              <ProjectCard key={project.title} project={project} stack={true} />
            ))}
          </div>
        </>
      ) : null}
    </Section>
  );
}
