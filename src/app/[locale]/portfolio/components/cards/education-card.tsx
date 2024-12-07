import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/[locale]/components/ui/card";
import { Badge } from "@/app/[locale]/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from '@/app/[locale]/components/ui/avatar';
import Markdown from 'react-markdown';


export type EducationType = {
    school: string;
    story?: string;
    degree: string;
    year: string;
    description: string;
    technologies?: string[];
    logo? : string
};


export const EducationCard = ({ exp  }: { exp: EducationType}) => {
  return (
    <Card >
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <CardTitle className='inline-flex items-center gap-2'>
                <Avatar className='rounded-full'>
                  <AvatarFallback>
                    {exp.school.charAt(0).toUpperCase()}
                  </AvatarFallback>
                  <AvatarImage src={exp.logo} />
                </Avatar>
                {exp.school}
                </CardTitle>
                {exp.story && <Badge variant="outline">{exp.story}</Badge>}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">{exp.degree}</h3>
              <Markdown className="text-muted-foreground text-justify md:text-pretty text-xs md:text-base">{exp.description}</Markdown>
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.technologies?.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
  )
}
