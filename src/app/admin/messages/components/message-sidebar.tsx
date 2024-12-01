"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { ComponentProps } from 'react'
import { MessageType } from '../types/message'
import Link from 'next/link'
import { cn, formatDate } from '@/lib/utils'
import Markdown from 'react-markdown'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosInstance } from '@/lib/axios'
import {  Loader } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useSearchParams } from 'next/navigation'


  

export const MessageSidebar = () => {

  const searchParams = useSearchParams()
  const id = searchParams.get('id')

    const {data : messages, isLoading} = useQuery<MessageType[]>({
        queryKey: ['messages'],
        queryFn: async() => {
            return await AxiosInstance.get('/messages').then((res) => res.data)
        }
    })

  return (
    <Card className={cn('md:max-w-[25rem] w-full h-full rounded-sm overflow-hidden',
        id  && "hidden md:block"
    )}>
            <CardHeader className='space-y-4'>
                <CardTitle>Messages</CardTitle>
                <Input placeholder='Rechercher' />
            </CardHeader>
            <Separator />
            <CardContent className='flex flex-col p-0 overflow-y-auto h-full pb-[7.4rem]'>
                    {
                        messages?.map((message) => (
                            <MessagesItem key={message.id} message={message as unknown as MessageType}  />
                        ))
                    }
                    {
                        isLoading && <div className='h-full w-full flex items-center justify-center'>
                            <Loader className='animate-spin' />
                        </div>
                    }
            </CardContent>
    </Card>
  )
}

type MessagesItemProps = {
    message: MessageType;
  } & Omit<ComponentProps<typeof Link>, 'href'>; 
  
  const MessagesItem = ({ message, ...props }: MessagesItemProps) => {

    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const updateMessageMutation = useMutation({
        mutationFn: async (data: MessageType) => {
            return await AxiosInstance.put(`/messages/${message.id}`, data).then((res) => res.data)
        }
    })


    const handleClick = () => {
        message.read = true
        updateMessageMutation.mutate({
          ...message,
          read: true
        })
    }
    

    return (
      <Link prefetch={false} 
      onClick={handleClick}
        {...props} 
        href={`/admin/messages?id=${message.id}`} 
        className={cn(
          "flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-accent hover:text-accent-foreground h-fit",
          message.read && "bg-muted/50 text-muted-foreground",
          message.id === id && "bg-accent text-accent-foreground"
        )}
      >
        <div className='flex w-full items-center gap-2'>
                <span className='capitalize'>{message.name}</span>
                <span className='ml-auto text-xs'>{formatDate(message.createdAt)}</span>
        </div>
        <div className='w-full flex items-end'>
            <Markdown className='line-clamp-2 w-[300px] whitespace-break-spaces text-xs'>{message.message}</Markdown>
            {
              message.replied && (
                  <Badge className='ml-auto bg-green-500' variant="outline">{message.replied ? "Repondu" : "Non repondu"}</Badge>   
              )
            }
        </div>
      </Link>
    );
  };