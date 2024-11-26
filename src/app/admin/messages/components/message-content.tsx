import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { IconMail, IconMessageOff, IconTrash } from '@tabler/icons-react'
import { headers } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import Markdown from 'react-markdown'
import { MessageType } from '../types/message'
import { getMessageById } from '@/db/message'



export const MessageContent = async () => {
    let message : MessageType | null = null;
    const headerList = await headers();
    const pathname = headerList.get("x-current-path")

    console.log(pathname?.includes("?"));
    

    if (pathname && pathname.includes("?")) {
    const urlSearchParams = new URLSearchParams(pathname.split("?")[1]); 
    const id = urlSearchParams.get("id"); 
    message = await getMessageById(id ?? "");
    } else {
    console.log("ID introuvable dans le pathname.");
    }


    
  return (
    <Card className='w-full overflow-hidden h-full'>
        {
            message ? (
                <>
        <CardHeader className='flex-row items-center'>
            <CardTitle>@{message.name}</CardTitle>
            <div className='ml-auto flex space-x-2'>
                <Button asChild>
                        <Link  href={`mailto:${message.email}`}>
                        Repondre sur Mail 
                        <IconMail />
                        </Link>
                </Button>
                <Button variant="destructive">
                        Supprimer 
                        <IconTrash />
                </Button>
            </div>
        </CardHeader>
        <Separator />
        <CardContent className='grid grid-cols-1 p-4 pb-32 overflow-y-auto h-full'>
                <Markdown className="p-4 rounded-sm bg-accent w-fit space-y-6 text-gray-300 h-fit">{message.message}</Markdown>
        </CardContent>
                </>
            ) : <CardContent className='h-full w-full flex justify-center items-center'>
                    <div className='flex flex-col gap-4 items-center'>
                        <IconMessageOff className='h-40 w-40' />
                        <span className='text-center font-bold text-xl'>Cliquer sur un message pour voir son contenu</span>
                    </div>
            </CardContent>
        }
      </Card>
  )
}
