"use client"

import React from 'react'
import { Card, CardContent,  CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { ContactformSchema } from '../../schemas/contactFormSchema';
import { useToast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';


export const ContactForm = () => {

const { toast } = useToast();
  const form = useForm<z.infer<typeof ContactformSchema>>({
    resolver: zodResolver(ContactformSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit() {
    toast({
      title: "Message envoyé !",
      description: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
    });
    form.reset();
  }
  return (
    <Card>
    <CardHeader>
      <CardTitle>Formulaire de contact</CardTitle>
    </CardHeader>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    <CardContent className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Votre nom" {...field} />
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
                  <Input placeholder="votre@email.com" {...field} />
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
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Votre message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

    </CardContent>
    <CardFooter className="flex justify-end">
          <Button type="submit" className="">Envoyer</Button>
      </CardFooter>
          </form>
          </Form>
  </Card>
  )
}
