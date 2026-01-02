import { AlertTriangle } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-2">AgenticAI.events</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              The definitive guide to AI and tech events in 2026 and beyond.
            </p>
          </div>
          
          <div className="flex-1 max-w-md p-4 bg-background border rounded-lg text-xs text-muted-foreground flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Disclaimer</p>
              <p>
                Events listed are curated from public sources. While we verify official events, dates and details may change. 
                Always confirm with the official organizer before booking travel or tickets.
              </p>
            </div>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="mailto:imrulo.eth@proton.me" className="hover:text-foreground">Contact</a>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AgenticAI.events. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
