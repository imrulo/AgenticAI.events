"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface SponsorButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  className?: string
}

export function SponsorButton({ variant = "outline", className }: SponsorButtonProps) {
  const handleSponsor = () => {
    const address = "0xc7427F23C55a980cD2Ceea25eDb3b372af70aF0E"
    navigator.clipboard.writeText(address)
    toast.success("Wallet address copied!", {
      description: "Thanks for your support! ❤️ (imrulo.eth)",
      duration: 5000,
    })
  }

  return (
    <Button variant={variant} size="sm" onClick={handleSponsor} className={className}>
      <Heart className="mr-2 h-4 w-4 text-red-500 fill-current" />
      Sponsor
    </Button>
  )
}
