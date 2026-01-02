"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Event } from "@/types"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix for default marker icon in Leaflet with Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

interface EventMapProps {
  events: Event[]
}

export default function EventMap({ events }: EventMapProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[500px] w-full bg-muted/20 animate-pulse rounded-lg flex items-center justify-center">Loading map...</div>
  }

  const eventsWithCoords = events.filter(e => e.coordinates)

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden border border-border z-0 relative">
      <MapContainer 
        center={[20, 0]} 
        zoom={2} 
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {eventsWithCoords.map(event => (
          <Marker 
            key={event.id} 
            position={[event.coordinates!.lat, event.coordinates!.lng]}
            icon={icon}
          >
            <Popup>
              <div className="p-1">
                <h3 className="font-bold text-sm mb-1">{event.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{event.location}</p>
                <a 
                  href={event.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  View Details
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
