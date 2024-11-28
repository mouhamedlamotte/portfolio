"use client";

import { X } from "lucide-react";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useImagePreviewStore } from "@/stores/useImagePreviewStore";
import { Button } from "../ui/button";

export const ImgPreview = () => {
  const { imgs, setSrc, index } = useImagePreviewStore();

  if (!imgs) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black/75 flex justify-center items-center flex-col gap-2  z-50 h-screen overflow-y-auto">
      <div className="w-full flex justify-end px-8">
        <Button variant="ghost" onClick={() => setSrc(null)}>
          <X />
        </Button>
      </div>
      <div className="max-w-md md:max-w-4xl px-6 md:px-0">
        <Swiper
          initialSlide={index}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper rounded-sm"
        >
          {imgs.map((src) => (
            <SwiperSlide key={src} className="rounded-sm" >
              {src.endsWith(".mp4") || src.endsWith(".webm") ? (
                    <video className="h-full object-contain rounded-sm" autoPlay controls muted>
                    <source src={src} />
                  </video>
                ) : <img
                src={src}
                className="h-full w-full rounded-sm"
                alt="preview"
              /> }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
