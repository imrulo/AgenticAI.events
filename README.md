# AgenticAI.events

The ultimate guide to Agentic AI and Technology events for 2026 and beyond. This project is a minimalist, high-performance web application built with Next.js and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

## 🛠️ Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/agenticai-events.git
   cd agenticai-events
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📅 Managing Events

Events are stored in a simple JSON file for ease of maintenance and zero-cost database requirements.

1. Open `data/events.json`.
2. Add a new event object following this structure:
   ```json
   {
     "id": "unique-id-2026",
     "title": "Event Name",
     "date": "2026-05-20",
     "endDate": "2026-05-22",
     "location": "City, Country",
     "description": "Short description...",
     "category": "Conference",
     "tags": ["AI", "Tech"],
     "url": "https://official-event-link.com",
     "isFeatured": false
   }
   ```
3. Commit and push your changes. Vercel will automatically redeploy with the new data.

## 🌍 Deployment

This project is designed to be deployed on Vercel with zero configuration.

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/new).
3. Import your repository.
4. Click **Deploy**.

No environment variables are required for the basic functionality.

## 🎨 Customization

- **Fonts**: Configured in `app/layout.tsx` (Inter & Space Grotesk).
- **Colors**: Defined in `app/globals.css` (CSS variables).
- **UI Components**: Located in `components/ui`.

## 📄 License

MIT License. Free to use and modify.
