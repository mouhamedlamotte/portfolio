import { TictactoePlate } from "@/app/game/components/tictactoePlate";
import React from "react";
import { ContactForm } from "./forms/contact-form";

export const Contacts = () => {
  return (
    <section id="contact" className="xl:px-40 scroll-mt-16">
      <div className="grid gap-6 md:grid-cols-2 overflow-hidden w-full md:px-16">
        <TictactoePlate />
        <ContactForm />
      </div>
    </section>
  );
};
