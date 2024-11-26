import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Mouhameth Lamotte - Développeur Web",
  description:
    "Portfolio de Mouhameth Lamotte, développeur web passionné basé à Dakar",
  keywords: [
    "développeur web",
    "Dakar",
    "Next.js",
    "Django",
    "Firebase",
    "Mouhameth Lamotte",
    "développement web freelance",
    "création de sites web",
    "développement d'applications web",
    "développeur Next.js à Dakar",
    "solutions web sur mesure",
    "intégration Firebase",
    "développement d'API Django",
    "freelance en développement web",
    "portefeuille en ligne de développeur",
    "Mouhameth Lamotte portfolio",
    "développement frontend et backend",
    "réalisation de projets web à Dakar",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
