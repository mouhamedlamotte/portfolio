"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { AxiosInstance } from "@/lib/axios"
import { IconSend } from "@tabler/icons-react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Eye, Loader } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { useMessagePreviewStore } from "../stores/messagePreviewStore"

export const SendMessageBox = () => {

    const {toast} = useToast()

    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const queryClient = useQueryClient()

    
    const [message , setMessage] = useState<string>('')
    
    const sendMessageMutation = useMutation({
        mutationFn: async (data: {
            content: string
        }) => {
            return await AxiosInstance.post(`/messages/${id}/reply`, {
                ...data,
                via : "ADMIN"
            }).then(()=>{
                queryClient.invalidateQueries(['reply', id])
                setMessage('')
            }).catch(() => {
                toast({
                    title: "Une erreur est survenue",
                    variant: "destructive",
                    description: "Le message n'a pas pu etre envoyé"
                })
            })
        }
    })

    const preview = useMessagePreviewStore((state) => state.preview)
    const setPreview = useMessagePreviewStore((state) => state.setPreview)

    setPreview({
        ...preview,
        recipient_name : "Mouhamed",
    })
    
    if(!id) return null
    return (
        <Card className='group w-full h-[8rem] rounded-sm '>
            <CardContent className="flex items-end p-0 h-full">
                    <Textarea className="resize-none rounded-sm border-0 border-r rounded-r-none focus-visible:ring-0" rows={5} placeholder='Envoyer un message' value={message} onChange={(e) => setMessage(e.target.value)}
                        onKeyUp={(e) => {
                            if((e.key === 'Enter' && e.ctrlKey) && message.length > 0) {
                                sendMessageMutation.mutate({
                                    content: message
                                })
                            }
                        }}
                    />
                    <div className="p-1 h-full flex flex-col space-y-2">
                    <Button className="flex-1" variant="outline">
                            <span className="sr-only">Send</span>
                            <Eye />
                        </Button>
                        <Button className="flex-1" variant="secondary"
                        onClick={() => {
                            if(message.length === 0) return
                            sendMessageMutation.mutate({
                                content: message
                            })
                        }}
                        >
                            <span className="sr-only">Send</span>
                            {
                                sendMessageMutation.isLoading ? <Loader className='animate-spin' /> : <IconSend />
                            }
                            
                        </Button>

                    </div>
            </CardContent>
        </Card>
    )
}