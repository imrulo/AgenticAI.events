"use client"

import { Event } from "@/types"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface CalendarViewProps {
  events: Event[]
}

export function CalendarView({ events }: CalendarViewProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Create a map of dates to events
  const eventsByDate = events.reduce((acc, event) => {
    const dateStr = new Date(event.date).toDateString()
    if (!acc[dateStr]) {
      acc[dateStr] = []
    }
    acc[dateStr].push(event)
    return acc
  }, {} as Record<string, Event[]>)

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-auto p-4 border rounded-lg bg-card">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md"
          modifiers={{
            hasEvent: (date) => !!eventsByDate[date.toDateString()],
          }}
          modifiersStyles={{
            hasEvent: {
              fontWeight: "bold",
              textDecoration: "underline",
              color: "var(--primary)",
            }
          }}
        />
      </div>
      
      <div className="flex-1 space-y-4">
        <h3 className="text-xl font-bold">
          Events for {date?.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </h3>
        
        {date && eventsByDate[date.toDateString()] ? (
          <div className="grid gap-4">
            {eventsByDate[date.toDateString()].map(event => (
              <div key={event.id} className="p-4 border rounded-lg bg-card hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg">{event.title}</h4>
                  <Badge variant="secondary">{event.category}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{event.location}</p>
                <p className="text-sm mb-3">{event.description}</p>
                <a 
                  href={event.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground p-8 border border-dashed rounded-lg">
            <p>No events scheduled for this date.</p>
            <p className="text-sm mt-2">Try selecting a date with a highlighted indicator.</p>
          </div>
        )}
      </div>
    </div>
  )
}
