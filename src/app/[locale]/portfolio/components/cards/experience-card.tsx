import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/[locale]/components/ui/card";
import { Badge } from "@/app/[locale]/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from '@/app/[locale]/components/ui/avatar';
import Markdown from 'react-markdown';
import { LiveIndicator } from '@/app/[locale]/components/common/live-indicator';


export type ExperienceType = {
    company: string;
    story: string;
    role: string;
    year: string;
    description: string;
    technologies: string[];
    logo? : string;
    ongoing? : boolean

};


export const ExperienceCard = ({ exp  }: { exp: ExperienceType}) => {
  return (
    <Card >
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <CardTitle className='inline-flex items-center gap-2'>
                <Avatar className='rounded-md'>
                  <AvatarFallback>
                    {exp.company.charAt(0).toUpperCase()}
                  </AvatarFallback>
                  <AvatarImage src={exp.logo} />
                </Avatar>
                {exp.company}
                {
                  exp.ongoing && <LiveIndicator />
                }
                </CardTitle>
              <Badge variant="outline">{exp.story}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">{exp.role}</h3>
              <Markdown className="text-muted-foreground text-justify md:text-start text-xs md:text-base">{exp.description}</Markdown>
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
  )
}
