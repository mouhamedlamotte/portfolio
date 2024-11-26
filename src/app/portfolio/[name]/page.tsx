/* eslint-disable @next/next/no-img-element */
"use client";

import NotFound from "@/app/not-found";
import { useImagePreviewStore } from "@/stores/useImagePreviewStore";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { resume } from "@/data";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { ProjectCard } from "../components/cards/project-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";


export default  function Page({ params }: { params: { name: string } }) {
  const name = params.name;

  const project = resume.projects.find((project) => project.name === name);
  const setSrc = useImagePreviewStore((state) => state.setSrc);

  if (!project) {
    return <NotFound />;
  }

  const preview = project.video ? project.video : project.image;
  const imgs = [preview, ...project.images];

  const sameTypeProjects = resume.projects.filter((pj) => {
    return pj.type === project.type && pj.name !== project.name;
  });

  return (
    <div className="w-full md:px-16 max-w-7xl mx-auto">
      <div className=" pt-20 pb-10 flex  items-start">
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
          onClick={() => window.history.back()}
        >
          <AnimatedShinyText className="inline-flex items-center">
            <ArrowLeft className="me-2" size={16} />
            Retour
          </AnimatedShinyText>
        </Button>
      </div>
      <div className="pb-20">
        <div className="md:px:16  mr-auto  gap-4 flex flex-col md:flex-row">
          <div className="p-2 border  overflow-hidden rounded-md max-w-xl">
            {project.video ? (
              <video
                className="rounded-md cursor-pointer"
                autoPlay
                controls
                muted
                onClick={() => setSrc(imgs, 0)}
              >
                <source src={project.video} />
              </video>
            ) : (
              <img
                alt="project preview"
                onClick={() => setSrc(imgs, 0)}
                src={project.image}
                className="rounded-md cursor-pointer"
              />
            )}
            <div>
              <ScrollArea className="mt-2">
                <div className="flex w-max space-x-2 p-0 mt-4 pb-4 border-b">
                  {project.images.map((img, index) => (
                    <a
                      href="#"
                      className={cn(
                        "rounded-lg border overflow-hidden  max-w-[230px]"
                      )}
                      key={img}
                      onClick={() => setSrc(imgs, index + 1)}
                    >
                      {img.endsWith(".mp4") || img.endsWith(".webm") ? (
                        <video
                          className="h-full object-contain rounded-lg"
                          controls
                        >
                          <source src={img} />
                        </video>
                      ) : (
                        <img
                          src={img}
                          className="h-full object-contain rounded-lg"
                        />
                      )}
                    </a>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
          {/* Project Details Section */}
          <div className="flex flex-col gap-6 px-2">
            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-gray-800 py-2 px-4 text-gray-300 border border-gray-700 hover:bg-gray-700 rounded-lg"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {project.links.map((link, idx) => (
                  <Link href={link.href} key={idx} target="_blank">
                    <div className="group flex items-center justify-center rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-800 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800">
                      <AnimatedShinyText className="inline-flex items-center gap-2">
                        {link.icon}
                        <span>{link.type}</span>
                      </AnimatedShinyText>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

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
              onClick={() => window.history.back()}
            >
              <AnimatedShinyText className="inline-flex items-center">
                <Link href="/projects">Voir tous les projets</Link>
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
    </div>
  );
}
