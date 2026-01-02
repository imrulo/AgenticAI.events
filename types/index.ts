export interface Event {
  id: string;
  title: string;
  date: string; // ISO date string YYYY-MM-DD
  endDate?: string;
  location: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  isFeatured: boolean;
}

export type EventCategory = 'All' | 'Conference' | 'Summit' | 'Meetup' | 'Webinar' | 'Academic' | 'Hackathon';
