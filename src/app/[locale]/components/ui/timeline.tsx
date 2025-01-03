"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";

export type TimelineEntry = {
  title: string;
  content: React.ReactNode;
  logo?: string;
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const router = useRouter();
  const params = useSearchParams();
  const tab = params.get("timeline-tab") ?? "experience";

  const t = useScopedI18n("landing.experience");

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data, tab]);

  return (
    <div className="font-sans" ref={containerRef}>
      <div className="md:py-20 flex flex-col gap-4 md:flex-row md:gap-0 items-start">
        <div>
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
            {t("title")}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            {t("subtitle")}
          </p>
        </div>
        <div className="md:ml-auto flex border p-1 rounded gap-1 w-full md:w-auto">
          <Button
            variant="ghost"
            className={cn("flex-1", tab === "experience" && "bg-muted text-white")}
            onClick={() => {
              router.replace("?timeline-tab=experience", {
                scroll: false,
              });
            }}
          >
            {t("buttons.experience")}
          </Button>
          <Button
            variant="ghost"
            className={cn("flex-1", tab === "education" && "bg-muted text-white")}
            onClick={() => {
              router.replace("?timeline-tab=education", {
                scroll: false,
              });
            }}
          >
            {t("buttons.education")}
          </Button>
        </div>
      </div>
      <div ref={ref} className="relative pb-20 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 lg:pt-40 lg:gap-10"
          >
            <div className="sticky flex flex-col lg:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm lg:w-full">
              <div className="h-10 absolute left-3 lg:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <Avatar className="">
                  <AvatarFallback>
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                  </AvatarFallback>
                  <AvatarImage src={item.logo} />
                </Avatar>
              </div>
              <h3 className="hidden lg:block text-xl lg:pl-20 lg:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 lg:pl-4 w-full">
              <h3 className="lg:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute lg:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
