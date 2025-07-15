import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Day Tours",
    template: "%s | Day Tours - Fhulufhelo Tours",
  },
}

export default function DayTourDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
