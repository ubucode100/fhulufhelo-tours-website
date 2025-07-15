import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Safari Packages - Multi-Day Wildlife Tours | Fhulufhelo Tours",
    template: "%s | Safari Packages - Fhulufhelo Tours",
  },
  description:
    "Discover our premium safari packages including Pilanesberg, Madikwe, Kruger National Park, and Triland Route experiences. Multi-day luxury wildlife tours with expert guides, Big 5 game viewing, and premium accommodations.",
  openGraph: {
    title: "Premium Safari Packages - Multi-Day Wildlife Adventures",
    description:
      "Experience the best of South African wildlife with our luxury safari packages. From Pilanesberg to Kruger National Park, discover the Big 5 with expert guides.",
    url: "https://fhulufhelotours.co.za/packages",
  },
}

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
