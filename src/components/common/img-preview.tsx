"use client";

import { ChevronsLeft, ChevronsRight, X } from "lucide-react";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import { Keyboard, Navigation, Pagination } from "swiper/modules";
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
      <div className="max-w-md md:max-w-4xl px-6 md:px-0 relative">
        <Swiper
          initialSlide={index}
          pagination={true}
          spaceBetween={10}
          modules={[Pagination, Keyboard, Navigation]}
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
          <SlideButtons />
        </Swiper>
      </div>
    </div>
  );
};

// n
function SlideButtons() {
  const swiper = useSwiper();
  return (
      <div className='w-full flex inset-0 pointer-events-none z-20 absolute justify-between items-end pb-2 px-2'>
                  <Button  title='Previous'  className='pointer-events-auto  ' size="lg" variant="secondary"
                  onClick={() => swiper.slidePrev()}
                  >
                      <ChevronsLeft className='stroke-muted-foreground' />
                  </Button>
                  <Button title='Next' className='pointer-events-auto ' size="lg" variant="secondary"
                  onClick={() => swiper.slideNext()}
                  >
                      <ChevronsRight className='stroke-muted-foreground' />
                  </Button>
              </div>
          
  )
}