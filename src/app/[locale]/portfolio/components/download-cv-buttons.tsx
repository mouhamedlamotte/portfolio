"use client";

import { Button } from "@/app/[locale]/components/ui/button";
import { Download } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/[locale]/components/ui/popover";

import AnimatedShinyText from "@/app/[locale]/components/ui/animated-shiny-text";
import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "@/lib/axios";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";

export const DownloadCV = () => {
  const english = "EN_CV_MOUHAMED_LAMOTTE_DEV_DATA.pdf";
  const french = "FR_CV_MOUHAMED_LAMOTTE_DEV_DATA.pdf";

  const addDownloadMutation = useMutation({
    mutationKey: ["addDownload"],
    mutationFn: async (data: { downloadedItem: string }) => {
      return await AxiosInstance.post("/downloads", data).then(
        (res) => res.data
      );
    },
  });

  const handleDownload = async (name: string) => {
    const link = document.createElement("a");
    link.href = `/cv/${name}`;
    link.download = name;
    link.click();

    await addDownloadMutation.mutateAsync({
      downloadedItem: name,
    });
  };

  const l = useCurrentLocale();
  const t = useScopedI18n("landing.header.hero.buttons");

  return (
    <Button
      size="lg"
      variant="outline"
      className="group border-2 border-slate-700 hover:border-blue-500 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 text-white font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
      onClick={() => handleDownload(l === "en" ? english : french)}
    >
      <AnimatedShinyText className="inline-flex items-center">
        <Download className="mr-2 h-5 w-5" />
        {t("download_cv")}
      </AnimatedShinyText>
    </Button>
  );
};
