"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { devisSchema } from "@/schemas/devisSchema";
import { FileUpload } from "@/components/ui/file-upload";
import { useState } from "react";
import { uploadFile } from "@/db/blob";
import { addDevis } from "@/db/devis";
import { useToast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";
import { kdebug } from "@/lib/kdebug";

export default function DevisForm() {
  const { toast } = useToast();


  const [files, setFiles] = useState<File[]>([])
  const [loading, setLoading] = useState(false)
  const [resetForm, setResetForm] = useState(false)


  const form = useForm<z.infer<typeof devisSchema>>({
    resolver: zodResolver(devisSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof devisSchema>) {
    setLoading(true)
   try {
    let url;
    if(files.length > 0) {
      const file = files[0]
       url = await uploadFile(file, "devis")
    }
    await addDevis({
      ...values,
      file : url
    }).then(() => {
      setLoading(false);
      toast({
        title: "Merci pour votre demande 💫",
        description: "Je vous reviendrai très vite 🔥.",
      });
      setResetForm(true)
      form.reset();
    }).catch(() => {
      setLoading(false);
      toast({
        title: "Une erreur est survenue",
        variant: "destructive",
        description: "Votre demande n'a pas pu etre envoye.",
      });
    });

   } catch (error) {
    toast({
      title: "Une erreur est survenue",
      variant: "destructive",
      description: "Votre demande n'a pas pu etre envoye.",
    })
    kdebug("Database Error:", error);
   }
  }



  return (
    <Card className="py-4">
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col lg:flex-row w-full gap-4"
          >
            <div className="flex-1 space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom complet</FormLabel>
                    <FormControl>
                      <Input
                        className="py-6"
                        placeholder="John Doe"
                        {...field}
                      />
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
                      <Input
                        className="py-6"
                        placeholder="john@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Entreprise (optionnel)</FormLabel>
                    <FormControl>
                      <Input
                        className="py-6"
                        placeholder="Nom de votre entreprise"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type de projet</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-6">
                          <SelectValue placeholder="Sélectionnez un type de projet" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="website">Site web</SelectItem>
                        <SelectItem value="webapp">Application web</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="api">API / Backend</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget estimé</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-6">
                          <SelectValue placeholder="Sélectionnez une fourchette de budget" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="small">
                          Moins de 500 000 FCFA
                        </SelectItem>
                        <SelectItem value="medium">
                          500 000 - 2 000 000 FCFA
                        </SelectItem>
                        <SelectItem value="large">
                          2 000 000 - 5 000 000 FCFA
                        </SelectItem>
                        <SelectItem value="enterprise">
                          Plus de 5 000 000 FCFA
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/*  */}
            <div className="flex-1 space-y-5">
              <div>
              <FormLabel>Cahier des charges ou document de projet</FormLabel>
              
              <div className="w-full border border-dashed rounded-lg mt-2">
                <FileUpload onChange={(files) => {setFiles(files)}} reset={resetForm} setResetForm={setResetForm} />
              </div>
              </div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description du projet</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Décrivez votre projet en détail..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size={loading ? "icon" : "lg"} className="w-full">
                {loading ? <Loader className="animate-spin" /> : "Demander un devis"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
