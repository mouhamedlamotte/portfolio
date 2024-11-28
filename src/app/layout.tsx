import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { ImgPreview } from "@/components/common/img-preview";
import { Suspense } from "react";
import { Loader } from "lucide-react";

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
  openGraph: {
    title: "Mouhameth Lamotte - Développeur Web",
    description: "Portfolio de Mouhameth Lamotte, développeur web basé à Dakar.",
    url: "https://mouhamedbaba.vercel.app", 
    siteName: "Mouhameth Lamotte Portfolio",
    images: [
      {
        url: "https://mouhamedbaba.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Mouhameth Lamotte",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MouhamedLamotly", 
    creator: "@MouhamedLamotly",
    title: "Mouhameth Lamotte - Développeur Web",
    description: "Portfolio de Mouhameth Lamotte, développeur web basé à Dakar.",
    images: ["https://mouhamedbaba.vercel.app/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta property="og:title" content="Mouhameth Lamotte - Développeur Web" />
        <meta
          property="og:description"
          content="Portfolio de Mouhameth Lamotte, développeur web basé à Dakar."
        />
        <meta property="og:url" content="https://mouhamedbaba.vercel.app" />
        <meta property="og:site_name" content="Mouhameth Lamotte Portfolio" />
        <meta
          property="og:image"
          content="https://mouhamedbaba.vercel.app/og.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Aperçu du portfolio de Mouhameth Lamotte" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MouhamedLamotly" />
        <meta name="twitter:creator" content="@MouhamedLamotly" />
        <meta name="twitter:title" content="Mouhameth Lamotte - Développeur Web" />
        <meta
          name="twitter:description"
          content="Portfolio de Mouhameth Lamotte, développeur web basé à Dakar."
        />
        <meta
          name="twitter:image"
          content="https://mouhamedbaba.vercel.app/og.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <Suspense fallback={<FallbackComponent/>}>
        <Provider>{children}</Provider>
        <Toaster />
        <ImgPreview />
            </Suspense>
      </body>
    </html>
  );
}


const FallbackComponent = () => {
  return <div className="w-full h-full">
        <Loader className="animate-spin" />
  </div>
}