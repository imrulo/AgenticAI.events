import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <Mail className="h-6 w-6" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Stay Ahead of the Agentic Revolution</h2>
        <p className="text-muted-foreground mb-8">
          Get weekly curated updates on the most important AI events, call for papers deadlines, and agentic tech breakthroughs.
        </p>
        <form className="flex gap-2 max-w-md mx-auto" action="https://formspree.io/f/mqazqozg" method="POST">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-background" 
            name="email"
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
        <p className="text-xs text-muted-foreground mt-4">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
