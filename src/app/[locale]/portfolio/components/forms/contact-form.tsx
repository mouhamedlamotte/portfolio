"use client"

import React from 'react'
import { Card, CardContent,  CardFooter, CardHeader, CardTitle } from "@/app/[locale]/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/[locale]/components/ui/form";
import { Input } from '@/app/[locale]/components/ui/input';
import { Button } from '@/app/[locale]/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { ContactformSchema } from '../../schemas/contactFormSchema';
import { Textarea } from '@/app/[locale]/components/ui/textarea';
import { Loader } from 'lucide-react';
import { useToast } from '@/app/[locale]/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { AxiosInstance } from '@/lib/axios';
import { playMp3 } from '@/lib/mp3';
import { useScopedI18n } from '@/locales/client';


export const ContactForm = () => {

  const t = useScopedI18n("landing.get_in_touch.contact_form")



const sendMessageMutation = useMutation({
  mutationKey: ["sendMessage"],
  mutationFn: async (data: z.infer<typeof ContactformSchema>) => {
    return await AxiosInstance.post('/contacts', data).then(() => {
      playMp3("/mp3/notif.mp3")
      toast({
        title: t("tost_messages.sucess.title"),
        description: t("tost_messages.sucess.description"),
      });
      form.reset();
    }).catch(() => {
      playMp3("/mp3/notif.mp3")
      toast({
        variant: "destructive",
        title: t("tost_messages.error.title"),
        description: t("tost_messages.error.description"),
      });
    })
  }
})

const { toast } = useToast();
  const form = useForm<z.infer<typeof ContactformSchema>>({
    resolver: zodResolver(ContactformSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values : z.infer<typeof ContactformSchema>) {
    sendMessageMutation.mutate(values)
  }
  return (
    <Card>
    <CardHeader>
      <CardTitle>{t("title")} </CardTitle>
    </CardHeader>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    <CardContent className="space-y-4 pb-0">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel> {t("name.label")} </FormLabel>
                <FormControl>
                  <Input className='py-6' placeholder={t("name.placeholder")} {...field} />
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
                <FormLabel>{t("email.label")}</FormLabel>
                <FormControl>
                  <Input className='py-6' placeholder={t("email.placeholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("message.label")}</FormLabel>
                <FormControl>
                  <Textarea rows={4} placeholder={t("message.placeholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

    </CardContent>
    <CardFooter className="flex justify-end">
          <Button disabled={sendMessageMutation.isLoading}
          className="w-full -mt-1" 
          variant="secondary"
          size={sendMessageMutation.isLoading ? "icon" : "lg"}
          type="submit" >
            {sendMessageMutation.isLoading ? <Loader className="animate-spin" /> : t("send")}
          </Button>
      </CardFooter>
          </form>
          </Form>
  </Card>
  )
}