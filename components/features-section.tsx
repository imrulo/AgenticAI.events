import { Lightbulb, Network, Rocket, Terminal, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: <Rocket className="h-6 w-6 text-blue-500" />,
      title: "Discover Innovation",
      description: "Witness the launch of breakthrough Agentic AI models and autonomous frameworks first-hand at events like OpenAI DevDay and Google Cloud Next."
    },
    {
      icon: <Network className="h-6 w-6 text-indigo-500" />,
      title: "Global Networking",
      description: "Connect with 100,000+ developers, investors, and visionaries at massive hubs like Web Summit Lisbon and CES Las Vegas."
    },
    {
      icon: <Terminal className="h-6 w-6 text-green-500" />,
      title: "Hands-on Workshops",
      description: "Gain practical skills in building agents, fine-tuning LLMs, and deploying edge AI at specialized technical summits."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
      title: "Strategic Insights",
      description: "Hear from industry titans about the roadmap for 2026 and beyond. Understand where the smart money is flowing."
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "Community & Culture",
      description: "Join vibrant communities at meetups and hackathons. Find your co-founder or your next big career opportunity."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      title: "Future-Proof Skills",
      description: "Stay relevant in a rapidly evolving market. Learn about Ethics, Governance, and the societal impact of AGI."
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Attend Tech Events in 2026?
          </h2>
          <p className="text-lg text-muted-foreground">
            The Agentic AI revolution is happening now. Conferences are no longer just about listening—they are about building, connecting, and shaping the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow bg-background/50 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-background border flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
