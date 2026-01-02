import { getEvents } from "@/lib/data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EventExplorer } from "@/components/event-explorer"
import { NewsletterSection } from "@/components/newsletter-section"
import { HomeHero } from "@/components/home-hero"
import { FeaturesSection } from "@/components/features-section"

export default async function Home() {
  const events = await getEvents()

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20">
      <SiteHeader />
      
      <main className="flex-grow">
        {/* New Hero Section */}
        <HomeHero />

        {/* Value Proposition / SEO Section */}
        <FeaturesSection />

        {/* Main Application Area */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <section id="events" className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Explore Verified 2026 Events
              </h2>
              <p className="text-lg text-muted-foreground">
                Search, filter, and add to your calendar. From massive expos like CES to intimate AI summits.
              </p>
            </div>
            
            <EventExplorer initialEvents={events} />
          </section>
        </div>

        {/* Newsletter Section */}
        <NewsletterSection />
      </main>

      <SiteFooter />
    </div>
  )
}
