export function createGoogleCalendarUrl(event: {
  title: string;
  description: string;
  location: string;
  date: string;
  endDate?: string;
}) {
  const startTime = new Date(event.date).toISOString().replace(/-|:|\.\d\d\d/g, "");
  const endTime = event.endDate 
    ? new Date(event.endDate).toISOString().replace(/-|:|\.\d\d\d/g, "") 
    : new Date(new Date(event.date).getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g, "");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    details: `${event.description}\n\nMore info: https://agenticai.events`,
    location: event.location,
    dates: `${startTime}/${endTime}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
