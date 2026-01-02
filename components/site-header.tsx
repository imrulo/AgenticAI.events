import Link from "next/link"
import { CalendarDays } from "lucide-react"
import { SubmitEventButton } from "@/components/submit-event-button"
import { SponsorButton } from "@/components/sponsor-button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <CalendarDays className="h-6 w-6 text-primary" />
          <span>AgenticAI.events</span>
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
            <Link href="#events" className="hover:text-primary transition-colors">Events</Link>
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-2">
            <SponsorButton className="hidden sm:flex" />
            <SubmitEventButton />
          </div>
        </div>
      </div>
    </header>
  )
}
