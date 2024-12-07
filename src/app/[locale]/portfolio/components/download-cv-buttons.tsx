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
    <Button variant="secondary"
      onClick={() => handleDownload(l === "en" ? english : french)}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out ">
        <Download className="mr-2 h-4 w-4" />
        {t("download_cv")}
      </AnimatedShinyText>
    </Button>
  );
};
