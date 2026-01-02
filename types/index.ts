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
  cfpDeadline?: string; // ISO date string YYYY-MM-DD
  coordinates?: {
    lat: number;
    lng: number;
  };
  // New verification fields
  isVerified?: boolean; // Manually verified by maintainers
  lastVerified?: string; // Date when it was last checked
  status?: 'scheduled' | 'cancelled' | 'postponed' | 'sold-out';
}

export type EventCategory = 'All' | 'Conference' | 'Summit' | 'Meetup' | 'Webinar' | 'Academic' | 'Hackathon' | 'Expo';
