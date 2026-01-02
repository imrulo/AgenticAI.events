import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Github, Mail, Plus } from "lucide-react"

export function SubmitEventButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Submit Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Submit an Event</DialogTitle>
          <DialogDescription>
            Help us track the future of Agentic AI. Choose how you want to submit.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4" asChild>
            <a 
              href="https://github.com/imrulo/AgenticAI.events/issues/new?title=New+Event%3A+EVENT_NAME&body=**Event+Name%3A**%0A**Date%3A**%0A**Location%3A**%0A**Website%3A**%0A**Description%3A**" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">Via GitHub (Preferred)</div>
                <div className="text-xs text-muted-foreground">Open an issue or PR to add directly</div>
              </div>
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4" asChild>
            <a href="mailto:submit@agenticai.events?subject=New Event Submission&body=Event Name:%0D%0ADate:%0D%0ALocation:%0D%0AWebsite:%0D%0ADescription:">
              <Mail className="h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">Via Email</div>
                <div className="text-xs text-muted-foreground">Send us the details directly</div>
              </div>
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
