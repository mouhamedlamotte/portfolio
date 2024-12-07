"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import React from 'react';

interface ThemeProviderProps extends React.ComponentProps<typeof NextThemeProvider> {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
  return <NextThemeProvider {...props} defaultTheme="dark">{children}</NextThemeProvider>;
};