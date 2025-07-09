import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import WhatsAppFloat from "./components/WhatsAppFloat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Navya ENT and Health Care Center - ENT Specialists in Kathmandu",
  description:
    "Specialized Care for Your Ears, Nose, and Throat. Expert ENT services including hearing tests, sinus treatment, allergy care, and surgery consultations in Kathmandu, Nepal.",
  keywords:
    "ENT specialist, ear nose throat, Kathmandu clinic, hearing test, sinus treatment, allergy care, tinnitus management",
  authors: [{ name: "navya Clinic" }],
  openGraph: {
    title: "Navya ENT and Health Care Center - ENT Specialists",
    description: "Specialized Care for Your Ears, Nose, and Throat",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <WhatsAppFloat />
      </body>
    </html>
  )
}
