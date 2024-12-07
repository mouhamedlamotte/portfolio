import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./providers";
import { Toaster } from "@/app/[locale]/components/ui/toaster";
import { ImgPreview } from "@/app/[locale]/components/common/img-preview";
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
    description:
      "Portfolio de Mouhameth Lamotte, développeur web basé à Dakar.",
    url: "https://www.mouhamedlamotte.tech",
    siteName: "Mouhameth Lamotte Portfolio",
    images: [
      {
        url: "https://www.mouhamedlamotte.tech/og.png",
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
    description:
      "Portfolio de Mouhameth Lamotte, développeur web basé à Dakar.",
    images: ["https://www.mouhamedlamotte.tech/og.png"],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {


  const lcl =  (await params).locale

  return (
    <html lang={lcl} suppressHydrationWarning>
      <head>
        <meta
          property="og:title"
          content="Mouhameth Lamotte - Développeur Web"
        />
        <meta
          property="og:description"
          content="Portfolio de Mouhameth Lamotte, développeur web basé à Dakar."
        />
        <meta property="og:url" content="https://www.mouhamedlamotte.tech" />
        <meta property="og:site_name" content="Mouhameth Lamotte Portfolio" />
        <meta
          property="og:image"
          content="https://www.mouhamedlamotte.tech/og.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Aperçu du portfolio de Mouhameth Lamotte"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MouhamedLamotly" />
        <meta name="twitter:creator" content="@MouhamedLamotly" />
        <meta
          name="twitter:title"
          content="Mouhameth Lamotte - Développeur Web"
        />
        <meta
          name="twitter:description"
          content="Portfolio de Mouhameth Lamotte, développeur web basé à Dakar."
        />
        <meta
          name="twitter:image"
          content="https://www.mouhamedlamotte.tech/og.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<FallbackComponent />}>
          <Provider locale={lcl}>
            {children}
            </Provider>
          <Toaster />
          <ImgPreview />
        </Suspense>
      </body>
    </html>
  );
}

const FallbackComponent = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <span className=" text-center font-bold">Mouhamed lamotte</span>
        <Loader className="animate-spin" />
      </div>
    </div>
  );
};
