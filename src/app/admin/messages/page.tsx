import React from 'react'
import { MessageSidebar } from './components/message-sidebar'
import { MessageContent } from './components/message-content'

export default function Messages() {
  return (
    <div className='flex space-x-4 w-full h-full'>
        <MessageSidebar />
        <MessageContent />
    </div>
  )
}
