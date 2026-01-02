import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
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
  metadataBase: new URL("https://agenticai.events"),
  title: {
    default: "AgenticAI.events | Global AI & Tech Conferences 2026",
    template: "%s | AgenticAI.events",
  },
  description:
    "The definitive, verified guide to the most important Artificial Intelligence, Agentic AI, and Technology conferences of 2026. Discover global events from CES and Web Summit to HumanX and DeepFest.",
  keywords: [
    "AI events 2026",
    "Agentic AI conferences",
    "Tech conferences 2026",
    "Autonomous agents summits",
    "Machine Learning events",
    "Generative AI conferences",
    "CES 2026",
    "Web Summit 2026",
    "HumanX 2026",
    "DeepFest Riyadh",
    "Global Tech Events",
    "Silicon Valley Tech Events",
  ],
  authors: [{ name: "imrulo.eth", url: "https://github.com/imrulo" }],
  creator: "imrulo.eth",
  publisher: "AgenticAI.events",
  openGraph: {
    title: "AgenticAI.events | Global AI & Tech Conferences 2026",
    description:
      "Your curated, verified guide to the future of tech. Explore the top AI, Agentic, and Tech events happening worldwide in 2026.",
    url: "https://agenticai.events",
    siteName: "AgenticAI.events",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // We'll need to ensure this exists or use a default if not
        width: 1200,
        height: 630,
        alt: "AgenticAI.events 2026 Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgenticAI.events | Global AI & Tech Conferences 2026",
    description:
      "Discover the verified list of 2026's top AI and Tech conferences. From Autonomous Agents to Global Summits.",
    creator: "@imrulo", // Assuming this handle or similar
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
  verification: {
    // google: "verification_token", // Placeholder for future
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
        <Toaster />
      </body>
    </html>
  )
}
