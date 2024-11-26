import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { ComponentProps } from 'react'
import { MessageType } from '../types/message'
import Link from 'next/link'
import { getMessages } from '@/db/contacts'
import { formatDate } from '@/lib/utils'
import Markdown from 'react-markdown'


  

export const MessageSidebar = async () => {

    const messages = await getMessages()

  return (
    <Card className='max-w-[25rem] w-full h-full rounded-sm overflow-hidden'>
            <CardHeader className='space-y-4'>
                <CardTitle>Messages</CardTitle>
                <Input placeholder='Rechercher' />
            </CardHeader>
            <Separator />
            <CardContent className='grid grid-cols-1 p-0 overflow-y-auto h-full pb-32'>
                    {
                        messages.map((message) => (
                            <MessagesItem key={message.id} message={message as unknown as MessageType}  />
                        ))
                    }
            </CardContent>
    </Card>
  )
}

type MessagesItemProps = {
    message: MessageType;
  } & Omit<ComponentProps<typeof Link>, 'href'>; 
  
  const MessagesItem = ({ message, ...props }: MessagesItemProps) => {
    return (
      <Link 
        {...props} 
        href={`/admin/messages?id=${message.id}`} 
        className='flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-accent hover:text-accent-foreground'
      >
        <div className='flex w-full items-center gap-2'>
                <span className='capitalize'>@{message.name}</span>
                <span className='ml-auto text-xs'>{formatDate(message.createdAt)}</span>
        </div>
        <span className='font-medium'>{message.email}</span>
        <Markdown className='line-clamp-2 w-[300px] whitespace-break-spaces text-xs'>{message.message}</Markdown>
      </Link>
    );
  };