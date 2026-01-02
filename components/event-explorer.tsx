"use client"

import { useState, useMemo } from "react"
import { Event, EventCategory } from "@/types"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EventCard } from "@/components/event-card"
import { Search, List, Calendar as CalendarIcon, Map as MapIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import dynamic from "next/dynamic"
import { CalendarView } from "@/components/calendar-view"

// Dynamically import map to avoid SSR issues with Leaflet
const EventMap = dynamic(() => import("@/components/event-map"), { 
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-muted/20 animate-pulse rounded-lg flex items-center justify-center">Loading map...</div>
})

interface EventExplorerProps {
  initialEvents: Event[]
}

export function EventExplorer({ initialEvents }: EventExplorerProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'All'>("All")
  const [showOnlyCFP, setShowOnlyCFP] = useState(false)

  const filteredEvents = useMemo(() => {
    return initialEvents.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;

      const matchesCFP = showOnlyCFP ? (event.cfpDeadline && new Date(event.cfpDeadline) > new Date()) : true;

      return matchesSearch && matchesCategory && matchesCFP;
    });
  }, [initialEvents, searchTerm, selectedCategory, showOnlyCFP]);

  return (
    <div className="space-y-8">
      {/* Controls Container */}
      <div className="flex flex-col gap-6 bg-card p-6 rounded-lg border shadow-sm">
        {/* Search and Category */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search events, tags, locations..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="w-full md:w-[200px]">
            <Select value={selectedCategory} onValueChange={(val) => setSelectedCategory(val as EventCategory)}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Conference">Conference</SelectItem>
                <SelectItem value="Summit">Summit</SelectItem>
                <SelectItem value="Meetup">Meetup</SelectItem>
                <SelectItem value="Hackathon">Hackathon</SelectItem>
                <SelectItem value="Academic">Academic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Advanced Filters */}
        <div className="flex items-center gap-2">
          <Switch 
            id="cfp-mode" 
            checked={showOnlyCFP} 
            onCheckedChange={setShowOnlyCFP} 
          />
          <Label htmlFor="cfp-mode" className="cursor-pointer">Show only events with open Call for Papers</Label>
        </div>
      </div>

      {/* View Tabs */}
      <Tabs defaultValue="list" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {filteredEvents.length} {filteredEvents.length === 1 ? 'Event' : 'Events'} Found
          </h2>
          <TabsList>
            <TabsTrigger value="list" className="gap-2"><List className="w-4 h-4" /> List</TabsTrigger>
            <TabsTrigger value="calendar" className="gap-2"><CalendarIcon className="w-4 h-4" /> Calendar</TabsTrigger>
            <TabsTrigger value="map" className="gap-2"><MapIcon className="w-4 h-4" /> Map</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="list" className="mt-0">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No events found matching your criteria.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="calendar" className="mt-0">
          <CalendarView events={filteredEvents} />
        </TabsContent>

        <TabsContent value="map" className="mt-0">
          <EventMap events={filteredEvents} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
