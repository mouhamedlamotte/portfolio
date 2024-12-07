"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "@/lib/axios";


export const DownloadCV = () => {
  

    const english = "EN_CV_MOUHAMED_LAMOTTE_DEV_DATA.pdf";
    const french = "FR_CV_MOUHAMED_LAMOTTE_DEV_DATA.pdf";
  
    const addDownloadMutation = useMutation({
      mutationKey: ["addDownload"],
      mutationFn: async (data: {
        downloadedItem: string;
      }) => {
          return await AxiosInstance.post('/downloads', data).then((res) => res.data)
      },
    })
  
    const handleDownload = async (name: string) => {
      const link = document.createElement("a");
      link.href = `/cv/${name}`;
      link.download = name;
      link.click();
  
  
      await addDownloadMutation.mutateAsync({
        downloadedItem: name
      });
    }
  
    return (
      <Popover>
      <PopoverTrigger className="" asChild>
        <Button variant="secondary">
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out ">
          <Download className="mr-2 h-4 w-4" />
          Télécharger CV
        </AnimatedShinyText>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-2">
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {handleDownload(french);}}
          >
            Francais
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              handleDownload(english);}}
          >
            Anglais
          </Button>
        </div>
      </PopoverContent>
    </Popover>
    )
  }