"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/data/packages"

interface WhatsAppButtonProps {
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  children?: React.ReactNode
}

export default function WhatsAppButton({
  className = "",
  variant = "default",
  size = "default",
  children
}: WhatsAppButtonProps) {
  const phoneNumber = company.contact.whatsapp.replace(/\s/g, "")

  const handleClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your tours. Can you help me with more information?")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      className={`bg-green-600 hover:bg-green-700 text-white ${className}`}
      variant={variant}
      size={size}
    >
      <Phone className="w-4 h-4 mr-2" />
      {children || "WhatsApp Us"}
    </Button>
  )
}
