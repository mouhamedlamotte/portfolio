"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MoonStarIcon, SunMediumIcon } from "lucide-react"
import { Button } from "../ui/button"


export function ThemeToggle() {
  const { theme, setTheme } = useTheme()


  return (
    <Button
      variant="outline"
      size="icon"
      className="relative rounded-full bg-background hover:bg-accent hover:text-accent-foreground overflow-hidden group"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={`Basculer vers le thème ${theme === "dark" ? "clair" : "sombre"}`}
    >

          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full">
            <div className="flex items-center">
              {theme === "dark" ? (
                <MoonStarIcon className="h-4 w-4" />
              ) : (
                <SunMediumIcon className="h-4 w-4" />
              )}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <div className="flex items-center">
              {theme === "dark" ? (
                <SunMediumIcon className="h-4 w-4" />
              ) : (
                <MoonStarIcon className="h-4 w-4" />
              )}
            </div>
          </div>
        
      
      <span className="sr-only">
            `Basculer vers le thème ${theme === "dark" ? "clair" : "sombre"}`
      </span>
    </Button>
  )
}

