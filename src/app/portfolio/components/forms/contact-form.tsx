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
import { Textarea } from '@/components/ui/textarea';
import { addContact } from '@/db/contacts';
import { Loader } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


export const ContactForm = () => {

const [loading, setLoading] = React.useState(false);

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
    setLoading(true);
    await addContact(values).then(() => {
      toast({
        title: "Merci pour votre message 💫",
        description: "Je vous reviendrai très vite 🔥.",
      });
      setLoading(false);
      form.reset();
    }).catch(() => {
      toast({
        title: "Une erreur est survenue",
        variant: "destructive",
        description: "Votre message n'a pas pu etre envoye.",
      });
      form.reset();
      setLoading(false);
    });
   
  }
  return (
    <Card>
    <CardHeader>
      <CardTitle>Formulaire de contact</CardTitle>
    </CardHeader>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    <CardContent className="space-y-4 pb-0">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input className='py-6' placeholder="Votre nom" {...field} />
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
                  <Input className='py-6' placeholder="votre@email.com" {...field} />
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
                  <Textarea rows={4} placeholder="Votre message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

    </CardContent>
    <CardFooter className="flex justify-end">
          <Button disabled={loading} 
          variant="outline"
          size={loading ? "icon" : "default"}
          type="submit" className="">
            {loading ? <Loader className="animate-spin" /> : "Envoyer"}
          </Button>
      </CardFooter>
          </form>
          </Form>
  </Card>
  )
}
