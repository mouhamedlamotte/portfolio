"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
            {props.children}
        </QueryClientProvider>
        // </ThemeProvider>
    )
}