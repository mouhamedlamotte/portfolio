"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/app/[locale]/components/ui/button";
import { Menu, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/[locale]/components/ui/dropdown-menu";
import { Section } from "./section";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/[locale]/components/ui/avatar";
import { resume } from "@/app/[locale]/data";
import { useScopedI18n } from "@/locales/client";
import { LanguageSwitcher } from "../../components/common/toggle-lang";
import { ThemeToggle } from "../../components/common/toggle-theme";



export function Navbar() {
  const pathname = usePathname();
  const session = useSession();
  const t = useScopedI18n("landing.header.navbar");

  const mainNavigation = [
    { name: t("home"), href: "/" },
    { name: t("portfolio"), href: "/portfolio" },
    { name: t("blog"), href: "/portfolio/blog" },
    { name: t("devis"), href: "/portfolio/devis" },
  ];
  
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <Section>
        <div className="container flex h-16 items-center justify-between w-full">
          <div className="hidden md:flex md:gap-x-6">
            {mainNavigation.map((item) => (
              <Link prefetch={true}
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[200px]">
                {mainNavigation.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link prefetch={true}
                      href={item.href}
                      className={cn(
                        pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-4">
          <LanguageSwitcher />
            <Button asChild variant="default">
              <Link prefetch={true} href="/portfolio/devis">{t("buttons.ask_for_devis")}</Link>
            </Button>
            {session.status === "authenticated" && (
                <Link prefetch={true} href="/admin">
                <Avatar>
                  <AvatarImage
                  className="rotate-3"
                    src={resume.avatarUrl}
                    />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                </Link>
            )}
          </div>
        </div>
    </Section>
      </nav>
  );
}
