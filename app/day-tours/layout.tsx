import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Day Tours - Cultural & Wildlife Experiences | Fhulufhelo Tours",
    template: "%s | Day Tours - Fhulufhelo Tours",
  },
  description:
    "Discover South Africa's iconic destinations with our expertly guided day tours. Cultural experiences, wildlife encounters, and historical sites in single-day adventures.",
  openGraph: {
    title: "Day Tours - Cultural & Wildlife Experiences in South Africa",
    description:
      "Experience South Africa's rich culture and wildlife in single-day adventures. From Soweto township tours to wildlife sanctuaries.",
    url: "https://fhulufhelotours.co.za/day-tours",
  },
}

export default function DayToursLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
