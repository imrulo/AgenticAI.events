import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "Premium Domain AgenticAI.events for Sale - Unlock Your Brand's Potential in AI Events",
  description:
    "Acquire AgenticAI.events, a memorable exact-match domain ideal for AI conferences, agentic AI platforms, and event management. Boost SEO, credibility, and traffic with this versatile premium asset.",
  generator: "AgenticAI.events",
  keywords: [
    "AI events",
    "agentic AI",
    "domain for sale",
    "premium domain",
    "AI conferences",
    "artificial intelligence",
  ],
  openGraph: {
    title: "Premium Domain AgenticAI.events for Sale - AI Events & Conferences",
    description:
      "Secure the perfect domain for your AI events platform. AgenticAI.events - premium, brandable, and SEO-optimized for the artificial intelligence industry.",
    url: "https://agenticai.events",
    siteName: "AgenticAI.events",
    images: [
      {
        url: "/futuristic-ai-conference.png",
        width: 1200,
        height: 630,
        alt: "AgenticAI.events - Premium Domain for AI Events",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Domain AgenticAI.events for Sale - AI Events & Conferences",
    description: "Secure the perfect domain for your AI events platform. Premium, brandable, and SEO-optimized.",
    images: ["/futuristic-ai-conference.png"],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="canonical" href="https://agenticai.events" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
