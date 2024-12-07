"use client"

import { I18nProviderClient } from "@/locales/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient()



export const Provider = (props : PropsWithChildren<{local : string}>) => {

    return (
        // <ThemeProvider 
        //     attribute="class"
        //     defaultTheme="system"
        //     enableSystem
        //     disableTransitionOnChange
        //     >
        <I18nProviderClient locale={props.local}>

        <QueryClientProvider client={queryClient}>
            <SessionProvider>
            {props.children}
            </SessionProvider>
        </QueryClientProvider>
        </I18nProviderClient>
    )
}