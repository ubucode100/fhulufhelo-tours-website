import type { Metadata } from "next"
import PackagesPageClient from "./PackagesClientPage"

export const metadata: Metadata = {
  title: "Safari Packages - Multi-Day Wildlife Tours | Fhulufhelo Tours",
  description:
    "Discover our premium safari packages including Pilanesberg, Madikwe, Kruger National Park, and Triland Route experiences. Multi-day luxury wildlife tours with expert guides, Big 5 game viewing, and premium accommodations. Book your South African safari adventure today.",
  keywords: [
    "safari packages South Africa",
    "multi-day safari tours",
    "Pilanesberg safari package",
    "Madikwe Game Park package",
    "Kruger National Park package",
    "Triland Route experience",
    "Big 5 safari tours",
    "luxury safari packages",
    "wildlife tour packages",
    "South African game reserves",
    "malaria-free safari",
    "premium safari accommodation",
    "guided safari tours",
    "wildlife photography tours",
    "safari holiday packages",
  ],
  openGraph: {
    title: "Premium Safari Packages - Multi-Day Wildlife Adventures",
    description:
      "Experience the best of South African wildlife with our luxury safari packages. From Pilanesberg to Kruger National Park, discover the Big 5 with expert guides and premium accommodations.",
    images: [
      {
        url: "/images/packages/pilanesberg_game_park_wildlife_experiance_2.jpg",
        width: 1200,
        height: 630,
        alt: "Pilanesberg Game Park Safari Package - Big 5 Wildlife Experience",
      },
      {
        url: "/images/packages/kruger_and_Panorama _route_expreiance_1.jpg",
        width: 1200,
        height: 630,
        alt: "Kruger National Park and Panorama Route Safari Package",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Safari Packages - South African Wildlife Adventures",
    description:
      "Multi-day luxury safari experiences with Big 5 game viewing, expert guides, and premium accommodations across South Africa's top game reserves.",
    images: ["/images/packages/madikwe_game_park_experiance_1.jpeg"],
  },
  alternates: {
    canonical: "/packages",
  },
}

export default function PackagesPage() {
  return <PackagesPageClient />
}
