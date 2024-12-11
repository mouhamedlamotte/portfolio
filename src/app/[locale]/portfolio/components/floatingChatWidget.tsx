'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { Loader, MessageSquare, X, Send, Minimize2, Maximize2 } from 'lucide-react'
import { useToast } from '../../hooks/use-toast'
import { useMutation } from '@tanstack/react-query'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader } from '../../components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'
import { ScrollArea } from '../../components/ui/scroll-area'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/[locale]/components/ui/form";
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { IconMarkdown } from '@tabler/icons-react'
import Markdown from 'react-markdown'



const ChatSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message cannot be empty"),
})

type ChatMessage = {
  id: string
  content: string
  sender: 'user' | 'bot'
}

export const FloatingChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [userInfo, setUserInfo] = useState<{ name: string; email: string } | null>(null)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof ChatSchema>>({
    resolver: zodResolver(ChatSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const sendMessageMutation = useMutation({
    mutationKey: ["sendMessage"],
    mutationFn: async (data: z.infer<typeof ChatSchema>) => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      if (!userInfo) {
        setUserInfo({ name: data.name, email: data.email })
      }
      const newMessage: ChatMessage = { id: Date.now().toString(), content: data.message, sender: 'user' }
      setMessages(prev => [...prev, newMessage])
      
      setTimeout(() => {
        const botMessage: ChatMessage = { id: (Date.now() + 1).toString(), content: `Thank you, ${data.name}! How can I assist you further?`, sender: 'bot' }
        setMessages(prev => [...prev, botMessage])
      }, 1500)

      form.reset({ name: data.name, email: data.email, message: "" })
    }
  })

  const onSubmit = (values: z.infer<typeof ChatSchema>) => {
    sendMessageMutation.mutate(values)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-12 w-12 rounded-full  shadow shadow-primary focus-ring-0 hover:scale-110 focus-visible:scale-90  transform active:scale-75 transition-transform"
          size="icon"
        >
          <MessageSquare  />
        </Button>
      )}
      {isOpen && (
        <Card className={`w-96 shadow-xl transition-all duration-300 ${isMinimized ? 'h-14' : 'h-[36rem]'}`}>
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-primary rounded-t-lg">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/me.jpeg" alt="Chat Support" />
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-semibold">Mouhamed baba</h2>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" onClick={() => setIsMinimized(!isMinimized)} className="">
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          {!isMinimized && (
            <>
              <CardContent className="p-4 space-y-4 flex flex-col h-[32rem] overflow-hidden">
                <ScrollArea className="w-full pr-4 h-[28rem]">
                  {messages.map((msg) => (
                    <Markdown
                      key={msg.id}
                      className={`mb-4 p-3 rounded-lg <Markdown className="p-4 text-wrap overflow-hidden break-words whitespace-normal"> ${
                        msg.sender === 'user' ? 'bg-primary  ml-auto' : 'bg-secondary'
                      } max-w-[80%] ${msg.sender === 'user' ? 'float-right clear-both' : 'float-left clear-both'}`}
                    >
                      {msg.content}
                    </Markdown>
                  ))}
                </ScrollArea>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {!userInfo && (
                      <>
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex space-x-2 items-end">
                              <Textarea className='resize-none' placeholder="Type your message..." {...field} />
                              <Button 
                                type="submit" 
                                size="icon"
                                disabled={sendMessageMutation.isLoading ?? form.getValues("message") === ""}
                                className="bg-primary hover:bg-primary/90"
                              >
                                {sendMessageMutation.isLoading ? <Loader className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                              </Button>
                            </div>
                          </FormControl>
                          <div className='flex'>
                          <span className='text-xs inline-flex items-center gap-1 w-full'>Markdown <IconMarkdown className='size-5' /></span>
                          <FormMessage className='w-full ml-auto' />
                          </div>
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </CardContent>
            </>
          )}
        </Card>
      )}
    </div>
  )
}

