import { getEvents } from "@/lib/data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EventExplorer } from "@/components/event-explorer"
import { Badge } from "@/components/ui/badge"

export default async function Home() {
  const events = await getEvents()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 space-y-6">
          <Badge variant="outline" className="px-4 py-1 text-sm rounded-full border-primary/20 bg-primary/5 text-primary">
            The Future of Tech is Here
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:to-blue-400">
            Agentic AI & Tech Events 2026
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most important conferences, summits, and meetups defining the era of autonomous agents and artificial intelligence.
          </p>
        </section>

        {/* Events Explorer */}
        <section id="events" className="max-w-7xl mx-auto">
          <EventExplorer initialEvents={events} />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
