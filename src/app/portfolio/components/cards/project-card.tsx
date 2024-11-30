import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";


interface Props {
  title: string;
  href?: string;
  description: string;
  // dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({project, stack}: {project: Props, stack?: boolean}) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={project.href || "#"}
        className={cn("block cursor-pointer", project.className)}
      >
        {project.video && (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top hover:scale-110 transition-transform ease-out duration-1000"
          />
        )}
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top hover:scale-110 transition-transform ease-out duration-1000"
          />
        )}
      </Link>
      <CardHeader className="px-2 pb-4">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{project.title}</CardTitle>
          {/* <time className="font-sans text-xs">{project.dates}</time> */}
          <div className="hidden font-sans text-xs underline print:visible">
            {project.link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert text-justify md:text-start">
            {project.description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2 p-0">
        {stack && project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 px-2 pb-2">
            {project.tags?.map((tag) => (
              <Badge
                  key={tag}
                  className="bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 rounded-lg"
                >
                  <p>{tag}</p>
                </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-4">
        {project.links && project.links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {project.links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
<div className="items-center justify-center">
      <Button variant="outline">
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out ">
          {link.icon}
          <span className="ml-1">{link.type}</span>
        </AnimatedShinyText>
      </Button>
    </div>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}