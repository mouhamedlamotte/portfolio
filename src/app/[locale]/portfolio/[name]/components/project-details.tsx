"use client"

import AnimatedShinyText from '@/app/[locale]/components/ui/animated-shiny-text';
import { Badge } from '@/app/[locale]/components/ui/badge';
import { Button } from '@/app/[locale]/components/ui/button';
import { ScrollArea, ScrollBar } from '@/app/[locale]/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { useImagePreviewStore } from '@/stores/useImagePreviewStore';
import Link from 'next/link';
import React from 'react'

export type projectCardType = {
        title: string;
        description: string;
        type: string;
        image: string;
        video: string;
        images: string[];
        link: string;
        github: string;
        tags: string[];
        links: {
            icon: React.ReactNode;
            type: string;
            href: string;
        }[];
}

type projectDetailsProps = {
    project: {
        title: string;
        description: string;
        type: string;
        image: string;
        video: string;
        images: string[];
        link: string;
        github: string;
        tags: string[];
        links: {
            icon: React.ReactNode;
            type: string;
            href: string;
        }[];
    }
    imgs: string[]
}

export const ProjectDetails = ({project, imgs} : projectDetailsProps) => {

    const setSrc = useImagePreviewStore((state) => state.setSrc);
  return (
    <div className="pb-20">
    <div className="md:px:16  mr-auto  gap-4 flex flex-col md:flex-row">
      <div className="border  overflow-hidden rounded-md md:max-w-xl p-1">
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
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt="project preview"
            onClick={() => setSrc(imgs, 0)}
            src={project.image}
            className="rounded-md cursor-pointer"
          />
        )}
        <div>
          {
            project.images.length > 1 ? (
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
                        alt=''
                        src={img}
                        className="h-full object-contain rounded-lg"
                      />
                    )}
                  </a>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            ) : null
          }

        </div>
      </div>
      {/* Project Details Section */}
      <div className="flex flex-col gap-6">
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
                <Button variant="outline" key={idx}  asChild>
              <Link prefetch={false} href={link.href} target="_blank">
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out gap-2">
                    {link.icon}
                    <span>{link.type}</span>
                  </AnimatedShinyText>
              </Link>
                </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
  )
}
