import { Event } from "@/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ExternalLink, CalendarPlus, Mic } from "lucide-react"
import Link from "next/link"
import { createGoogleCalendarUrl } from "@/lib/calendar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const isPast = new Date(event.date) < new Date();
  const googleCalendarUrl = createGoogleCalendarUrl(event);
  const hasOpenCFP = event.cfpDeadline ? new Date(event.cfpDeadline) > new Date() : false;
  
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-200 border-primary/10 group">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2">
          <Badge variant={event.isFeatured ? "default" : "secondary"} className="mb-2">
            {event.category}
          </Badge>
          <div className="flex gap-2">
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
        <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
          {event.title}
        </CardTitle>
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
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
                <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
                  <CalendarPlus className="w-5 h-5" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to Google Calendar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  )
}
