interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  date: string;
  endDate?: string;
}

function formatISODate(date: string | Date) {
  return new Date(date).toISOString().replace(/-|:|\.\d\d\d/g, "");
}

export function createGoogleCalendarUrl(event: CalendarEvent) {
  const startTime = formatISODate(event.date);
  const endTime = event.endDate 
    ? formatISODate(event.endDate)
    : formatISODate(new Date(new Date(event.date).getTime() + 60 * 60 * 1000));

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    details: `${event.description}\n\nMore info: https://agenticai.events`,
    location: event.location,
    dates: `${startTime}/${endTime}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function createOutlookCalendarUrl(event: CalendarEvent) {
  const startTime = new Date(event.date).toISOString();
  const endTime = event.endDate 
    ? new Date(event.endDate).toISOString()
    : new Date(new Date(event.date).getTime() + 60 * 60 * 1000).toISOString();

  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    startdt: startTime,
    enddt: endTime,
    subject: event.title,
    body: `${event.description}\n\nMore info: https://agenticai.events`,
    location: event.location,
  });

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

export function createICSFile(event: CalendarEvent) {
  const startTime = formatISODate(event.date);
  const endTime = event.endDate 
    ? formatISODate(event.endDate)
    : formatISODate(new Date(new Date(event.date).getTime() + 60 * 60 * 1000));

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AgenticAI.events//Event Calendar//EN
BEGIN:VEVENT
UID:${Date.now()}@agenticai.events
DTSTAMP:${formatISODate(new Date())}
DTSTART:${startTime}
DTEND:${endTime}
SUMMARY:${event.title}
DESCRIPTION:${event.description}\\n\\nMore info: https://agenticai.events
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

  // Return data URI for download
  return `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
}
