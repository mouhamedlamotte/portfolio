"use client"

import { Card, CardContent } from '@/components/ui/card'
import { resume } from '@/data'
import { replyMessageTemplate } from '@/templates/replymessage'
import React from 'react'
import { useMessagePreviewStore } from '../stores/messagePreviewStore'

export const PreviewMessage = () => {

    const preview = useMessagePreviewStore((state) => state.preview)



    const html =replyMessageTemplate
        .replace('{{portfolio_name}}', resume.name)
        .replace('{{portfolio_name}}', resume.name)
        .replace('{{recipient_name}}', preview.recipient_name)
        .replace('{{message}}', preview.message)
        .replace('{{devis_link}}', "http://localhost:3000/portfolio/devis")
        .replace('{{recipient_name}}', preview.recipient_name)
        .replace('{{reply_email}}', 'mouhamedlamotte.dev')
        .replace('{{reply_email}}', 'mouhamedlamotte.dev')

  return (
    <Card className='w-full overflow-hidden h-full flex flex-col justify-center'>
        <CardContent>
            <div dangerouslySetInnerHTML={{__html: html}} />
        </CardContent>
    </Card>
  )
}
