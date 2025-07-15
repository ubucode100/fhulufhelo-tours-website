import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Safari Packages",
    template: "%s | Safari Packages - Fhulufhelo Tours",
  },
}


export default function PackageDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
