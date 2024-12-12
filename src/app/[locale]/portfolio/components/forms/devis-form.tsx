"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/app/[locale]/components/ui/button";
import {
  Card,
  CardContent,
} from "@/app/[locale]/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/[locale]/components/ui/form";
import { Input } from "@/app/[locale]/components/ui/input";
import { Textarea } from "@/app/[locale]/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/[locale]/components/ui/select";
import { devisSchema } from "@/schemas/devisSchema";
import { FileUpload } from "@/app/[locale]/components/ui/file-upload";
import { useState } from "react";
import { uploadFile } from "@/db/blob";
import { useToast } from "@/app/[locale]/hooks/use-toast";
import { Loader } from "lucide-react";
import { kdebug } from "@/lib/kdebug";
import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "@/lib/axios";
import { playMp3 } from "@/lib/mp3";
import { useScopedI18n } from "@/locales/client";

export default function DevisForm() {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);

  const t = useScopedI18n("quoteRequest.form");

  const sendDevisMutation = useMutation({
    mutationKey: ["sendDevis"],
    mutationFn: async (data: z.infer<typeof devisSchema>) => {
      return await AxiosInstance.post('/devis', data).then((res) => {
        playMp3("/mp3/notif.mp3");
        toast({
          title: t("toast.success.title"),
          description: t("toast.success.description"),
        });
        form.reset();
        setResetForm(true);
        setIsUploading(false);
      });
    },
  });

  const [files, setFiles] = useState<File[]>([]);
  const [resetForm, setResetForm] = useState(false);

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
    try {
      setIsUploading(true);
      let url;
      if (files.length > 0) {
        const file = files[0];
        url = await uploadFile(file, "devis");
      }
      sendDevisMutation.mutate({ ...values, file: url });
    } catch (error) {
      playMp3("/mp3/notif.mp3");
      toast({
        title: t("toast.error.title"),
        variant: "destructive",
        description: t("toast.error.description"),
      });
      kdebug("Error occurred:", error);
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
                    <FormLabel>{t("name.label")}</FormLabel>
                    <FormControl>
                      <Input
                        className="py-6"
                        placeholder={t("name.placeholder")}
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
                    <FormLabel>{t("email.label")}</FormLabel>
                    <FormControl>
                      <Input
                        className="py-6"
                        placeholder={t("email.placeholder")}
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
                    <FormLabel>{t("company.label")}</FormLabel>
                    <FormControl>
                      <Input
                        className="py-6"
                        placeholder={t("company.placeholder")}
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
                    <FormLabel>{t("projectType.label")}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-6">
                          <SelectValue placeholder={t("projectType.placeholder")} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="website">{t("projectType.types.website")}</SelectItem>
                        <SelectItem value="webapp">{t("projectType.types.webapp")}</SelectItem>
                        <SelectItem value="ecommerce">{t("projectType.types.ecommerce")}</SelectItem>
                        <SelectItem value="api">{t("projectType.types.api_back")}</SelectItem>
                        <SelectItem value="other">{t("projectType.types.other")}</SelectItem>
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
                    <FormLabel>{t("budget.label")}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-6">
                          <SelectValue placeholder={t("budget.placeholder")} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="small">-100.000</SelectItem>
                        <SelectItem value="medium">100.000 - 300.000</SelectItem>
                        <SelectItem value="large">300.000 - 500.000</SelectItem>
                        <SelectItem value="enterprise">+500.000</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-5">
              <div>
                <FormLabel>{t("doc.label")}</FormLabel>
                <div className="w-full border border-dashed rounded-lg mt-2">
                  <FileUpload
                    onChange={(files) => setFiles(files)}
                    reset={resetForm}
                    setResetForm={setResetForm}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("desc.label")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("desc.placeholder")}
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size={sendDevisMutation.isLoading || isUploading ? "icon" : "lg"}
                className="w-full"
              >
                {sendDevisMutation.isLoading || isUploading ? (
                  <Loader className="animate-spin" />
                ) : (
                  t("send")
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
