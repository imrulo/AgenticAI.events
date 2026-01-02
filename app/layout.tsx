import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AgenticAI.events | The Ultimate Guide to 2026 AI & Tech Events",
  description:
    "Discover the most important Agentic AI, Autonomous Systems, and Technology conferences of 2026. Your curated guide to the future of tech events.",
  keywords: [
    "AI events 2026",
    "Agentic AI",
    "Tech conferences",
    "Autonomous agents",
    "Machine Learning events",
    "Technology summits",
  ],
  openGraph: {
    title: "AgenticAI.events | 2026 Tech Event Guide",
    description:
      "Curated list of top Agentic AI and Technology events for 2026. Stay ahead of the curve.",
    url: "https://agenticai.events",
    siteName: "AgenticAI.events",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`font-sans antialiased bg-background text-foreground min-h-screen ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
