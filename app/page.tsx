import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Globe, TrendingUp, Users, Zap, Shield, Award, BarChart3 } from "lucide-react"

export default function AgenticAIEventsLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[url('/abstract-neural-network.png')] opacity-5 bg-cover bg-center" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              Limited Availability – Act Fast
            </Badge>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Secure <span className="text-primary break-words">AgenticAI.events</span> Today
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The Ultimate Domain for AI Event Leadership. Elevate your brand with this premium, brandable domain
              designed to drive organic traffic, enhance credibility, and position you as an industry leader in agentic
              AI and event management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
                <a href="https://wa.link/6difl3" target="_blank" rel="noopener noreferrer">
                  Inquire Now
                </a>
              </Button>
              <a
                href="mailto:imrulo.eth@proton.me"
                className="text-primary hover:text-primary/80 font-medium text-lg underline underline-offset-4"
              >
                imrulo.eth@proton.me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Analysis Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Domain Keyword Analysis</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    "Agentic" + "AI"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Combines the cutting-edge concept of autonomous AI agents with artificial intelligence, positioning
                    your brand at the forefront of AI innovation and autonomous systems.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    "Events"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Instantly communicates event management, conferences, and gatherings - perfect for AI conferences,
                    workshops, networking events, and virtual summits in the AI space.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Why AgenticAI.events is Your Perfect Investment
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "Exact Match Domain Power",
                  description:
                    "Perfect keyword alignment for 'agentic AI events' searches, driving targeted organic traffic and immediate relevance.",
                },
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: "Superior SEO Strength",
                  description:
                    "Built-in SEO advantages with high-value keywords, fostering organic traffic growth and higher search rankings.",
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Enhanced Brand Credibility",
                  description:
                    "Professional domain extension builds instant trust and credibility with AI professionals and event attendees.",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Versatile Industry Applications",
                  description:
                    "Perfect for AI conferences, agentic AI platforms, event management systems, and AI networking communities.",
                },
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "Instant Market Recognition",
                  description:
                    "Memorable, brandable domain that clearly communicates your focus on cutting-edge AI events and autonomous systems.",
                },
                {
                  icon: <BarChart3 className="h-6 w-6" />,
                  title: "Long-term Investment Value",
                  description:
                    "As agentic AI grows, this domain becomes increasingly valuable - secure your position in this emerging market.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-lg border bg-card">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Market Insights & Domain Value
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-primary">$50K+</CardTitle>
                  <CardDescription>Average AI domain sales (2024)</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-primary">300%</CardTitle>
                  <CardDescription>Growth in AI event attendance</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-primary">85%</CardTitle>
                  <CardDescription>Businesses prioritizing AI adoption</CardDescription>
                </CardHeader>
              </Card>
            </div>
            <p className="text-center text-muted-foreground">
              Data sourced from DNJournal, AI industry reports, and domain market analysis. The agentic AI sector is
              experiencing unprecedented growth, making premium domains in this space increasingly valuable.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Perfect Applications for AgenticAI.events
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-4 text-left font-semibold">Industry/Business Type</th>
                    <th className="border border-border p-4 text-left font-semibold">Example Application & Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-4 font-medium">AI Conference Organizers</td>
                    <td className="border border-border p-4">
                      Host premier agentic AI conferences with built-in SEO for 'AI events' searches, attracting
                      top-tier speakers and attendees
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 font-medium">Agentic AI Platforms</td>
                    <td className="border border-border p-4">
                      Launch autonomous AI agent platforms with event-driven architectures, perfect domain for
                      showcasing AI agent capabilities
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 font-medium">Event Management SaaS</td>
                    <td className="border border-border p-4">
                      Build AI-powered event management tools with instant brand recognition and industry-specific
                      credibility
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 font-medium">AI Training & Education</td>
                    <td className="border border-border p-4">
                      Create educational platforms for agentic AI with event-based learning, workshops, and
                      certification programs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">Secure & Trusted Transaction</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Secure Escrow Guarantee</h3>
                <p className="text-muted-foreground">
                  Protected transaction via Escrow.com or similar trusted services
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">One-Time Availability</h3>
                <p className="text-muted-foreground">
                  Exclusive opportunity - not listed on other platforms for direct, private sale
                </p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Full Ownership Transfer</h3>
                <p className="text-muted-foreground">Complete domain ownership with ICANN-compliant transfer process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "Why is AgenticAI.events valuable?",
                  answer:
                    "This domain combines two high-value keywords: 'agentic AI' (cutting-edge autonomous AI technology) and 'events' (growing conference/platform market). It offers perfect keyword alignment, built-in SEO advantages, and positions you at the forefront of the rapidly expanding agentic AI industry with potential ROI as the market grows.",
                },
                {
                  question: "What businesses is it ideal for?",
                  answer:
                    "Perfect for AI conference organizers, agentic AI platform developers, event management SaaS companies, AI training organizations, autonomous systems companies, AI networking communities, and any business focusing on AI events or agent-based AI technologies.",
                },
                {
                  question: "How do I make an offer?",
                  answer:
                    "Contact us directly via WhatsApp at wa.link/6difl3 or email imrulo.eth@proton.me. We'll discuss your needs, provide pricing information, and guide you through the secure purchase process with step-by-step assistance.",
                },
                {
                  question: "How does domain transfer work?",
                  answer:
                    "We use secure escrow services (Escrow.com or similar ICANN-accredited providers) to protect both parties. Process includes: offer acceptance, escrow initiation, domain verification, payment processing, and secure transfer completion - typically 5-10 business days with full safeguards.",
                },
                {
                  question: "Is it a one-time purchase?",
                  answer:
                    "Yes, this is a complete ownership transfer with no recurring fees. Once purchased, you own the domain outright with full control over renewal, DNS settings, and usage. Standard annual renewal fees apply directly to your chosen registrar.",
                },
                {
                  question: "What payment methods are accepted?",
                  answer:
                    "We accept wire transfers, cryptocurrency (Bitcoin, Ethereum), and payments through secure escrow services. All transactions are processed through verified, secure channels with full documentation and legal compliance.",
                },
                {
                  question: "Are there any warranties?",
                  answer:
                    "Yes, we guarantee clean title transfer, no legal encumbrances, and full ICANN compliance. The domain comes with a clear ownership history and we provide all necessary documentation for seamless transfer and future management.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Don't Miss This Opportunity</h2>
            <p className="text-lg mb-8 opacity-90">
              AgenticAI.events is a once-in-a-lifetime opportunity to secure a premium domain in the fastest-growing AI
              sector. Position your brand for success in the agentic AI revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <a href="https://wa.link/6difl3" target="_blank" rel="noopener noreferrer">
                  Get Started Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <a href="mailto:imrulo.eth@proton.me">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fine Print */}
      <section className="py-8 bg-muted/50 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p className="mb-2">
            This page exists purely to showcase the domain for sale — no active service behind it. All transactions are
            subject to standard domain sale terms and conditions.
          </p>
          <p>
            Domain availability subject to change; offers non-binding until escrow initiation. Legal disclaimer applies.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            Made by{" "}
            <a
              href="https://www.rulo.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Rulo.pro
            </a>{" "}
            © {new Date().getFullYear()} | Privacy Policy
          </p>
        </div>
      </footer>
    </div>
  )
}
