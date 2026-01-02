export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-2">AgenticAI.events</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              The definitive guide to AI and tech events in 2026 and beyond.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AgenticAI.events. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
