import { TictactoePlate } from "@/app/[locale]/game/components/tictactoePlate";
import React from "react";
import { ContactForm } from "./forms/contact-form";
import { Section } from "./section";
import { getScopedI18n } from "@/locales/server";

export const Contacts = async () => {

  const t = await getScopedI18n("landing.get_in_touch")

  return (
    <Section>
      <div className="py-4 md:py-10 lg:py-20">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
          {t("title")}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
           {t("subtitle")}
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 overflow-hidden w-full">
        <TictactoePlate />
        <ContactForm />
      </div>
    </Section>
  );
};
