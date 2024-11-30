"use client";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebare";
import { cn } from "@/lib/utils";
import {
  IconAddressBook,
  IconArrowLeft,
  IconBrandTabler,
  IconMessage,
  IconSettings,
  IconUserBolt,
  IconWorld,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, useState } from "react";
import { motion } from "framer-motion";
import { resume } from "@/data";
import { signOut, useSession } from "next-auth/react";


const links = [
  {
    label: "Dashboard",
    href: "#",
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Profile",
    href: "/admin/profile",
    icon: (
      <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Contacts",
    href: "/admin/contacts",
    icon: (
      <IconAddressBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Messages",
    href: "/admin/messages",
    icon: (
      <IconMessage className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Portfolio",
    href: "/",
    icon: (
      <IconWorld className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Settings",
    href: "#",
    icon: (
      <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

export const AdminLayout = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  const { data: session, status } = useSession()

  const user = session?.user

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row w-full flex-1  mx-auto border  overflow-hidden bg-secondary",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link}  />
              ))}
              <SidebarLink
                link={{
                  label: "Logout",
                  href: "#",
                  icon: (
                    <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                  ),
                }}
                onClick={() => signOut()}
              />
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: resume.name.split(" ")[0],
                href: "#",
                icon: (
                  <Image
                    src={resume.avatarUrl}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1">
        <div className="p-2 md:p-10 rounded-tl-2xl border  flex flex-col gap-2 flex-1 w-full h-full bg-background">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <div className="h-5 w-6 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium  whitespace-pre"
      >
        {resume.name}
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm  py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
