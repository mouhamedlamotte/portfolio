"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/[locale]/components/ui/card";
import { Badge } from "@/app/[locale]/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from '@/app/[locale]/components/ui/avatar';
import Markdown from 'react-markdown';
import { useCurrentLocale } from '@/locales/client';

export type EducationType = {
  school: {
    en: string;
    fr: string;
  };
  story?: {
    en: string;
    fr: string;
  };
  degree: {
    en: string;
    fr: string;
  };
  year: string;
  description: {
    en: string;
    fr: string;
  };
  technologies?: string[];
  logo?: string;
};

export const EducationCard = ({ exp }: { exp: EducationType }) => {
  const locale = useCurrentLocale();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <CardTitle className='inline-flex items-center gap-2'>
            <Avatar className='rounded-full'>
              <AvatarFallback>
                {exp.school[locale].charAt(0).toUpperCase()}
              </AvatarFallback>
              <AvatarImage src={exp.logo} />
            </Avatar>
            {exp.school[locale]}
          </CardTitle>
          {exp.story && <Badge variant="outline">{exp.story[locale]}</Badge>}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">{exp.degree[locale]}</h3>
          <Markdown className="text-muted-foreground text-justify md:text-pretty text-xs md:text-base">{exp.description[locale]}</Markdown>
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
  );
};
