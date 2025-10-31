import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'


interface SectionProps {
  children: React.ReactNode
  className?: string
}

export  const Section = (props: PropsWithChildren<SectionProps>) => {
  return (
    <div className={cn('px-2 md:px-16 max-w-7xl mx-auto', props.className)}>
            {props.children}
    </div>
  )
}

