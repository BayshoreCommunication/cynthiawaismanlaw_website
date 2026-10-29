import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://cynthiawaismanlaw-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cynthia I. Waisman, P.A. | Immigration & Estate Planning Law Firm",
    template: "%s | Cynthia I. Waisman, P.A.",
  },
  description:
    "Cynthia I. Waisman, P.A. provides dedicated and compassionate legal representation in Immigration Law, Estate Planning, Probate Administration, and Guardianship across Tampa, Clearwater, and Wesley Chapel, Florida.",
  keywords: [
    "Cynthia I. Waisman",
    "Tampa Immigration Attorney",
    "Clearwater Estate Planning Lawyer",
    "Wesley Chapel Probate Law",
    "Florida Guardianship Attorney",
    "Tampa Bay Law Firm",
    "Immigration Law Florida",
    "Wills and Trusts Tampa",
  ],
  authors: [{ name: "Cynthia I. Waisman, P.A." }],
  creator: "Cynthia I. Waisman, P.A.",
  publisher: "Cynthia I. Waisman, P.A.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cynthia I. Waisman, P.A.",
    title: "Cynthia I. Waisman, P.A. | Immigration & Estate Planning Law Firm",
    description:
      "Dedicated legal counsel in Immigration Law, Estate Planning, Probate Administration, and Guardianship across Tampa, Clearwater, and Wesley Chapel, Florida.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Cynthia I. Waisman, P.A. Attorney At Law",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cynthia I. Waisman, P.A. | Immigration & Estate Planning Law Firm",
    description:
      "Dedicated legal counsel in Immigration Law, Estate Planning, Probate Administration, and Guardianship across Tampa, Clearwater, and Wesley Chapel, Florida.",
    images: ["/opengraph.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { Suspense } from "react";
import ScrollAnimationProvider from "@/components/shared/ScrollAnimationProvider";
import { ConsultationModalProvider } from "@/components/shared/ConsultationModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <ScrollAnimationProvider />
        </Suspense>
        <ConsultationModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ConsultationModalProvider>
      </body>
    </html>
  );
}
