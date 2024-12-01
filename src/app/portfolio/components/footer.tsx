import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <section className="xl:px-40 py-10">
      <p className="text-muted-foreground text-center text-sm">
        Copyright &copy; {new Date().getFullYear()} <Link prefetch={false} href="/" className="font-bold italic">@Mouhameth Lamotte</Link>
      </p>
    </section>
  );
};
