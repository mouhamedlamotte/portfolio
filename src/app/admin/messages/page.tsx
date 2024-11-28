"use client"


import React from 'react'
import { MessageSidebar } from './components/message-sidebar'
import { SendMessageBox } from './components/send-message-box'
import { MessageContent } from './components/message-content'
import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'


export default function Messages() {


  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  return (
    <div className='flex space-x-4 w-full h-full'>
        <MessageSidebar />
        <div className={cn('w-full overflow-hidden h-full flex flex-col gap-2',
        !id && "hidden md:flex" 
        )}>
         <MessageContent />
         <SendMessageBox />
        </div>
    </div>
  )
}
