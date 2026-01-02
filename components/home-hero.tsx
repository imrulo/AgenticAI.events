import Link from "next/link"
import { ArrowRight, Calendar, Globe, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center fade-in">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm rounded-full border border-primary/20 bg-primary/10 text-primary animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Verified 2026 Event Calendar Live
              </span>
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            The Definitive Guide to <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-primary to-indigo-600 dark:from-blue-400 dark:via-primary dark:to-indigo-400">
              Agentic AI & Tech Events
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Navigate the future of technology with our curated list of the most impactful <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, and <strong>Autonomous Systems</strong> conferences in 2026.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button size="lg" className="h-12 px-8 text-base rounded-full group" asChild>
              <Link href="#events">
                Explore Events
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full" asChild>
              <Link href="#about">
                Why Attend?
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted-foreground border-t mt-12 animate-in fade-in zoom-in duration-1000 delay-500">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary/80" />
              <p><strong>100% Verified</strong> Official Dates</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Globe className="h-6 w-6 text-primary/80" />
              <p><strong>Global Coverage</strong> USA, Europe, Asia</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Calendar className="h-6 w-6 text-primary/80" />
              <p><strong>Curated</strong> for Tech Professionals</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
      </div>
    </section>
  )
}
