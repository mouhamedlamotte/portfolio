"use client";

import { I18nProviderClient } from "@/locales/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "./themeProvider";

const queryClient = new QueryClient();

export const Provider = (props: PropsWithChildren<{ locale: string }>) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProviderClient locale={props.locale}>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>{props.children}</SessionProvider>
        </QueryClientProvider>
      </I18nProviderClient>
    </ThemeProvider>
  );
};
