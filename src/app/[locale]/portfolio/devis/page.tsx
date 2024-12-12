"use client"

import AnimatedShinyText from '@/app/[locale]/components/ui/animated-shiny-text'
import { Button } from '@/app/[locale]/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import DevisForm from '../components/forms/devis-form'
import { Section } from '../components/section'
import { useScopedI18n } from '@/locales/client'

export default function Devis ()  {


  const t = useScopedI18n("quoteRequest")

  return (
    <Section>
    <div className="pb-10 flex  items-start">
      <div>
        <h2 className="text-lg md:text-4xl mb-4 max-w-4xl uppercase font-bold">
          {t("title")}
        </h2>
        <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base  max-w-lg">
          {t("subtitle")}
        </div>
      </div>
      <Button
        variant="link"
        className="ml-auto  hover:text-muted-foreground"
        onClick={() => window.history.back()

        }
      >
        <AnimatedShinyText className="inline-flex items-center">
          <ArrowLeft className="me-2" size={16} />
          Retour
        </AnimatedShinyText>
      </Button>
    </div>
    <div className="pb-20">
        <DevisForm />
    </div>
  </Section>
  )
}
