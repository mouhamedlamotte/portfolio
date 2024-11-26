import { PropsWithChildren } from "react";


export const Provider = (props : PropsWithChildren) => {
    return (
        // <ThemeProvider 
        //     attribute="class"
        //     defaultTheme="system"
        //     enableSystem
        //     disableTransitionOnChange
        //     >
        <>
            {props.children}
        </>
        // </ThemeProvider>
    )
}