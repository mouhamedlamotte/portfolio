"use client"

import { useState, useEffect } from "react"
import { useChangeLocale, useCurrentLocale } from "@/locales/client"
import { Button } from "../ui/button"
import { Icons } from "../../icons"

type Language = "fr" | "en"

export function LanguageSwitcher() {
  const currentLocale = useCurrentLocale()
  const changeLocale = useChangeLocale()
  const [language, setLanguage] = useState<Language>(currentLocale as Language)

  useEffect(() => {
    setLanguage(currentLocale as Language)
  }, [currentLocale])

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "en" : "fr"
    setLanguage(newLanguage)
    changeLocale(newLanguage)
  }

  return (
    <Button
      variant="outline"
      className="relative w-20 h-10 px-2 rounded-full bg-background hover:bg-accent hover:text-accent-foreground overflow-hidden group"
      onClick={toggleLanguage}
      aria-label={`Changer la langue en ${language === "fr" ? "anglais" : "français"}`}
    >
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full">
        <div className="flex items-center gap-2">
          {language === "fr" ? (
            <Icons.french className="h-4 w-4" />
          ) : (
            <Icons.english className="h-4 w-4" />
          )}
          <span className="text-sm font-medium">{language.toUpperCase()}</span>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
        <div className="flex items-center gap-2">
          {language === "fr" ? (
            <Icons.english className="h-4 w-4" />
          ) : (
            <Icons.french className="h-4 w-4" />
          )}
          <span className="text-sm font-medium">{language === "fr" ? "EN" : "FR"}</span>
        </div>
      </div>
      <span className="sr-only">
        {language === "fr" ? "Switch to English" : "Passer au français"}
      </span>
    </Button>
  )
}

