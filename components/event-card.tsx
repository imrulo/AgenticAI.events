import { Event } from "@/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ExternalLink, CalendarPlus, Mic, CheckCircle2, MoreVertical, Flag, Download, Share2, Bot, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { createGoogleCalendarUrl, createOutlookCalendarUrl, createICSFile } from "@/lib/calendar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const isPast = new Date(event.date) < new Date();
  const hasOpenCFP = event.cfpDeadline ? new Date(event.cfpDeadline) > new Date() : false;
  
  const copyAgentPrompt = () => {
    const prompt = `Task: Add this event to my schedule and research travel logistics.
Event: ${event.title}
Date: ${event.date} ${event.endDate ? `to ${event.endDate}` : ''}
Location: ${event.location}
URL: ${event.url}
Description: ${event.description}
Action items:
1. Block dates in calendar.
2. Find flight options arriving 1 day prior.
3. Find hotels near the venue.
4. Check if registration is open.`;
    
    navigator.clipboard.writeText(prompt);
    toast.success("Agent prompt copied to clipboard!", {
      description: "Paste this into ChatGPT, Claude, or your AI assistant.",
    });
  };

  const shareUrl = `https://agenticai.events`; // Ideally deep link to event ID
  const shareText = `Check out ${event.title} at ${event.location} on AgenticAI.events! #AgenticAI #TechEvents`;

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-200 border-primary/10 group relative">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2">
          <Badge variant={event.isFeatured ? "default" : "secondary"} className="mb-2">
            {event.category}
          </Badge>
          <div className="flex gap-2">
            {event.isVerified && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-blue-500">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Verified Official Event</p>
                    {event.lastVerified && <p className="text-xs text-muted-foreground">Last checked: {event.lastVerified}</p>}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {hasOpenCFP && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="outline" className="border-green-500 text-green-600 bg-green-50 dark:bg-green-950/20 mb-2 cursor-help">
                      <Mic className="w-3 h-3 mr-1" /> CFP Open
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Call for Papers closes on {new Date(event.cfpDeadline!).toLocaleDateString()}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {isPast && <Badge variant="outline" className="text-muted-foreground mb-2">Past</Badge>}
          </div>
        </div>
        <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors pr-8">
          {event.title}
        </CardTitle>
        
        {/* Context Menu for Reporting */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <a 
                  href={`https://github.com/imrulo/AgenticAI.events/issues/new?title=Report+Issue%3A+${encodeURIComponent(event.title)}&body=**Event+ID%3A**+${event.id}%0A**Issue%3A**+%5BIncorrect+Date+%2F+Broken+Link+%2F+Spam%5D%0A**Details%3A**`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-destructive focus:text-destructive cursor-pointer"
                >
                  <Flag className="mr-2 h-4 w-4" /> Report Issue
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>
              {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-sm line-clamp-3 mb-4 text-foreground/80">
          {event.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-auto">
          {event.tags.map(tag => (
            <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button asChild className="flex-1 gap-2" variant={event.isFeatured ? "default" : "outline"}>
          <Link href={event.url} target="_blank" rel="noopener noreferrer">
            Visit Website <ExternalLink className="w-4 h-4" />
          </Link>
        </Button>
        
        {/* Share / AI Actions */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Share2 className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Share & Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={copyAgentPrompt} className="cursor-pointer">
              <Bot className="w-4 h-4 mr-2 text-primary" /> Copy for AI Agent
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Twitter className="w-4 h-4 mr-2" /> Share on X
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Linkedin className="w-4 h-4 mr-2" /> Share on LinkedIn
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Calendar Actions */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <CalendarPlus className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Add to Calendar</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href={createGoogleCalendarUrl(event)} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Google Calendar
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href={createOutlookCalendarUrl(event)} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Outlook Web
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href={createICSFile(event)} download={`${event.id}.ics`} className="cursor-pointer">
                <Download className="w-3 h-3 mr-2" /> Apple / Outlook (ICS)
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  )
}
