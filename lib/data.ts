import { Event } from '@/types';
// In a real scenario, this might fetch from an API or DB
import eventsData from '../data/events.json';

export async function getEvents(): Promise<Event[]> {
  // Simulate data fetching
  return new Promise((resolve) => {
    // Return sorted by date
    const sortedEvents = (eventsData as Event[]).sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    resolve(sortedEvents);
  });
}

export async function getFeaturedEvents(): Promise<Event[]> {
  const events = await getEvents();
  return events.filter(event => event.isFeatured);
}
