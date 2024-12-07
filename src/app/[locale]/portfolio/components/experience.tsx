"use client";

import { Timeline } from "@/app/[locale]/components/ui/timeline";
import { ExperienceCard, ExperienceType } from "./cards/experience-card";
import { Section } from "./section";
import { work } from "@/app/[locale]/data/work";
import { useSearchParams } from "next/navigation";
import { educations } from "@/app/[locale]/data/education";
import { EducationCard } from "./cards/education-card";



export default function Experience() {

  const params = useSearchParams();
  const tab = params.get("timeline-tab") ?? "experience";

  const works = work.map((experience) => ({
    title: experience.year,
    logo : experience.logo,
    content: (
      <ExperienceCard exp={experience as unknown as ExperienceType} />
    ),
  }));

  const education = educations.map((education) => ({
    title: education.year,
    logo : education.logo,
    content: (
      <EducationCard exp={education} />
    ),
  }));

  return (
    <Section>
      <Timeline data={tab === "experience" ? works : education} />
    </Section>
  );
}
