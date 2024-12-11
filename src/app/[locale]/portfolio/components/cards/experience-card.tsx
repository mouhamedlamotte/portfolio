"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/[locale]/components/ui/card";
import { Badge } from "@/app/[locale]/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from '@/app/[locale]/components/ui/avatar';
import Markdown from 'react-markdown';
import { LiveIndicator } from '@/app/[locale]/components/common/live-indicator';
import { useCurrentLocale } from '@/locales/client';

export type ExperienceType = {
    company: {
      en: string;
      fr: string;
    };
    story: {
      en: string;
      fr: string;
    };
    role: {
      en: string;
      fr: string;
    };
    year: string;
    description: {
      en: string;
      fr: string;
    };
    technologies: string[];
    logo?: string;
    ongoing?: boolean;
};

export const ExperienceCard = ({ exp }: { exp: ExperienceType }) => {

  const locale = useCurrentLocale();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <CardTitle className='inline-flex items-center gap-2'>
            <Avatar className='rounded-md'>
              <AvatarFallback>
                {exp.company[locale].charAt(0).toUpperCase()}
              </AvatarFallback>
              <AvatarImage src={exp.logo} />
            </Avatar>
            {exp.company[locale]}
            {
              exp.ongoing && <LiveIndicator />
            }
          </CardTitle>
          <Badge variant="outline">{exp.story[locale]}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">{exp.role[locale]}</h3>
          <Markdown className="text-muted-foreground text-justify md:text-start text-xs md:text-base">{exp.description[locale]}</Markdown>
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
  );
};
