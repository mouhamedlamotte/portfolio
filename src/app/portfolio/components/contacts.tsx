import { TictactoePlate } from "@/app/game/components/tictactoePlate";
import React from "react";
import { ContactForm } from "./forms/contact-form";
import { Section } from "./section";

export const Contacts = () => {
  return (
    <Section>
      <div className="py-4 md:py-10 lg:py-20">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
          Jeux & Contact
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            J&apos;ai fait un petit jeu pour toi ! Je te defis de gagner contre le niveau impossible 
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 overflow-hidden w-full">
        <TictactoePlate />
        <ContactForm />
      </div>
    </Section>
  );
};
