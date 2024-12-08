'use client';

import { Button } from "@/app/[locale]/components/ui/button";
import Link from "next/link";


import { Avatar, AvatarFallback, AvatarImage } from "@/app/[locale]/components/ui/avatar";
import { Boxes } from "@/app/[locale]/components/ui/background-boxes";
import { resume } from "@/app/[locale]/data";
import { Icons } from "@/app/[locale]/icons";
import { DownloadCV } from "./download-cv-buttons";
import { useScopedI18n } from "@/locales/client";


export  function HomeHero() {



  const t = useScopedI18n("landing.header.hero")

  return (
      <div className="relative bg-background w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg py-40 " >
        <div className="absolute bg-background inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none space-y-6" />

        <Boxes />
        <Avatar className="z-20 h-32 w-32">
          <AvatarFallback className="font-bold text-3xl">{resume.initials.toUpperCase()}</AvatarFallback>
          <AvatarImage
            src={resume.avatarUrl}
            className="object-fill rotate-3"
          />
        </Avatar>

        <h1 className="z-20 text-4xl font-bold tracking-tight sm:text-6xl text-center mb-6">
          {t('title')}
        </h1>

        <p className="z-20 px-2 mx-auto max-w-2xl text-lg text-muted-foreground text-center mb-6">
          {t('subtitle')}
        </p>

        <div className="z-20 flex flex-wrap justify-center gap-4 mb-6">
          <Button asChild>
            <Link prefetch={false} href="/portfolio">{t('buttons.see_my_projects')}</Link>
          </Button>
          <DownloadCV />
        </div>

        <div className="z-20 flex justify-center gap-4 mb-6">
          <Button variant="ghost" size="icon" asChild>
            <Link prefetch={false} href="https://x.com/MouhamedLamotly" target="_blank">
              <Icons.x className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link prefetch={false} href="https://github.com/mouhamedlamotte" target="_blank">
              <Icons.github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link prefetch={false}
              href="https://www.linkedin.com/in/mouhamed-baba-lamotte-876291252/"
              target="_blank"
            >
              <Icons.linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
  );
}


