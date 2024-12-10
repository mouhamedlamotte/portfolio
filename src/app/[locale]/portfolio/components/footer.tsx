import { Icons } from "@/app/[locale]/icons";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Section } from "./section";
import { Button } from "@/app/[locale]/components/ui/button";
import { getScopedI18n } from "@/locales/server";

export async function Footer () {

  const t = await getScopedI18n("landing.footer")

  return (
    <footer className="py-8 border-t">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-2">{t("contact.title")}</h3>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:lamottelymouhamed@gmail.com"
                className=" transition-colors"
              >
                lamottelymouhamed@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:mouhamedlamotte.dev@gmail.com"
                className=" transition-colors"
              >
                mouhamedlamotte.dev@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Mariste Dakar, 11500</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("navigation.title")}</h3>
            <nav className="space-y-2 text-muted-foreground">
              <Link
                prefetch={false}
                href="/"
                className="block  transition-colors"
              >
                {t("navigation.home")}
              </Link>
              <Link
                prefetch={false}
                href="/portfolio"
                className="block  transition-colors"
              >
                {t("navigation.portfolio")}
              </Link>
              <Link
                prefetch={false}
                href="/blog"
                className="block  transition-colors"
              >
                {t("navigation.blog")}
              </Link>
            </nav>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("social.title")}</h3>
            <div className="z-20 flex  gap-4 mb-6">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  prefetch={false}
                  href="https://x.com/MouhamedLamotly"
                  target="_blank"
                >
                  <Icons.x className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  prefetch={false}
                  href="https://github.com/mouhamedlamotte"
                  target="_blank"
                >
                  <Icons.github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  prefetch={false}
                  href="https://www.linkedin.com/in/mouhamed-baba-lamotte-876291252/"
                  target="_blank"
                >
                  <Icons.linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-muted-foreground text-center text-sm">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <Link prefetch={false} href="/" className="font-bold italic">
              @Mouhameth Lamotte
            </Link>
          </p>
        </div>
      </Section>
    </footer>
  );
}
