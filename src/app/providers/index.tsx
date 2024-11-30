"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient()



export const Provider = (props : PropsWithChildren) => {
    return (
        // <ThemeProvider 
        //     attribute="class"
        //     defaultTheme="system"
        //     enableSystem
        //     disableTransitionOnChange
        //     >
        <QueryClientProvider client={queryClient}>
            <SessionProvider>
            {props.children}
            </SessionProvider>
        </QueryClientProvider>
        // </ThemeProvider>
    )
}