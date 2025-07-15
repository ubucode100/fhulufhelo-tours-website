import type { Metadata } from "next"
import DayToursPageClient from "./DayToursClientPage"

export const metadata: Metadata = {
  title: "Day Tours - Cultural & Wildlife Experiences | Fhulufhelo Tours",
  description:
    "Discover South Africa's iconic destinations with our expertly guided day tours. Soweto cultural tours, Apartheid Museum visits, Johannesburg city tours, wildlife sanctuaries, and more. Professional guides, small groups, and authentic experiences.",
  keywords: [
    "day tours South Africa",
    "Soweto tours",
    "Johannesburg day tours",
    "Apartheid Museum tours",
    "cultural tours Johannesburg",
    "Pretoria city tours",
    "wildlife day tours",
    "elephant sanctuary tours",
    "lion sanctuary tours",
    "diamond mine tours",
    "Gold Reef City tours",
    "South African cultural experiences",
    "township tours",
    "historical tours South Africa",
    "single day tours",
  ],
  openGraph: {
    title: "Day Tours - Cultural & Wildlife Experiences in South Africa",
    description:
      "Experience South Africa's rich culture and wildlife in single-day adventures. From Soweto township tours to wildlife sanctuaries, discover iconic destinations with expert guides.",
    images: [
      {
        url: "/images/daytours/sowetotour_local_community_visit.webp",
        width: 1200,
        height: 630,
        alt: "Soweto Cultural Tour - Local Community Experience",
      },
      {
        url: "/images/daytours/brick-wall-black-white-sign-apartheid-museum-pillars-other-conceptual-words-johannesburg-south-africa-august-252665388.webp",
        width: 1200,
        height: 630,
        alt: "Apartheid Museum Tour - Historical Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Day Tours - South African Cultural & Wildlife Experiences",
    description:
      "Single-day cultural and wildlife experiences across South Africa. Soweto tours, wildlife sanctuaries, historical sites, and more with expert guides.",
    images: ["/images/daytours/hillbrow_tower.jpg"],
  },
  alternates: {
    canonical: "/day-tours",
  },
}

export default function DayToursPage() {
  return <DayToursPageClient />
}
