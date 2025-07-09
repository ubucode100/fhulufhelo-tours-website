"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  tourName?: string
  className?: string
  variant?: "floating" | "inline"
}

export function WhatsAppButton({
  phoneNumber = "+27123456789", // South African number format
  message,
  tourName,
  className,
  variant = "inline",
}: WhatsAppButtonProps) {
  const defaultMessage = tourName
    ? `Hi! I'm interested in the ${tourName} tour. Can you provide more information?`
    : "Hi! I'm interested in your tours. Can you provide more information?"

  const whatsappMessage = message || defaultMessage
  const encodedMessage = encodeURIComponent(whatsappMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  if (variant === "floating") {
    return (
      <div className="fixed bottom-6 right-6 z-50 lg:bottom-8 lg:right-8">
        <Button
          onClick={handleWhatsAppClick}
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    )
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="outline"
      className={`bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:border-green-300 ${className}`}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      WhatsApp Us
    </Button>
  )
}
