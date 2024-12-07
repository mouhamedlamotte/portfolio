"use client"

import { Card, CardContent } from '@/app/[locale]/components/ui/card'
import React from 'react'
import { useMessagePreviewStore } from '../stores/messagePreviewStore'
import { ReplyMessageTemplate } from '@/templates/ReplyMessageTemplate'

export const PreviewMessage = () => {

    const preview = useMessagePreviewStore((state) => state.preview)


  return (
    <Card className='w-full overflow-hidden h-full flex flex-col justify-center'>
        <CardContent className='p-4 pb-32 overflow-y-auto h-full overflow-x-hidden'>
            <ReplyMessageTemplate recipientName={preview.recipient_name} message={preview.message} />
        </CardContent>
    </Card>
  )
}
