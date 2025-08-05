"use client"

import { MapPin, Calendar, PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const packages = [
  {
    id: 1,
    title: "Pilanesberg Game Park Wildlife Experience",
    duration: "2 Nights",
    highlights: ["2x afternoon game drives", "1x morning game drive", "Lunch, Dinners, B&B included"],
    location: "Pilanesberg Game Park",
    image: "/images/packages/Pilanesberg_National_Park_package_1.jpg",
    description:
      "Experience the Big Five in an ancient volcanic crater with luxury accommodation and guided game drives.",
    category: "Wildlife Safari",
  },
  {
    id: 2,
    title: "Madikwe Game Park Wildlife Experience",
    duration: "2 Nights",
    highlights: ["2x afternoon game drives", "1x morning game drive", "Lunch, Dinners, B&B included"],
    location: "Madikwe Game Park",
    image: "/images/packages/madikwe_game_park_package_1.jpg",
    description:
      "Discover one of South Africa's largest game reserves with exceptional wildlife viewing and luxury lodges.",
    category: "Wildlife Safari",
  },
  {
    id: 3,
    title: "Kruger National Park & Panorama Route Experience",
    duration: "3 Nights",
    highlights: [
      "1x afternoon Kruger game drive",
      "1x full day Kruger game drive",
      "Full day Panorama route tour",
      "Graskop Gorge Lift, God's Window, Lisbon Falls",
      "Lunch, Dinners, B&B included",
    ],
    location: "Kruger National Park & Mpumalanga",
    image: "/images/packages/panorama_route_package_1.jpeg",
    description:
      "Combine world-class wildlife viewing with breathtaking scenic beauty on this comprehensive adventure.",
    category: "Wildlife & Nature",
  },
  {
    id: 4,
    title: "Triland Route Experience",
    duration: "Multi-Day",
    highlights: [
      "Mpumalanga: Nature and Wildlife Experience",
      "eSwatini: Authentic Cultural Experience",
      "Mozambique: Leisure Experience",
      "Three countries in one journey",
    ],
    location: "Mpumalanga, eSwatini & Mozambique",
    image: "/images/packages/triland_route_package_1.jpg",
    description:
      "An extraordinary journey across three countries, experiencing diverse cultures, wildlife, and landscapes.",
    category: "Multi-Country Adventure",
  },
]

export default function PackagesSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      {/* Industry Standard Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
                <PawPrint className="text-primary h-5 w-5" />
                <span className="text-sm font-medium text-primary">Safari Packages</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-medium text-foreground mb-4 tracking-tight leading-tight">
                Multi-Day Adventures
              </h2>
              <p className="text-base lg:text-lg text-foreground/50 font-light leading-relaxed max-w-2xl">
                Immersive safari experiences combining luxury accommodation, expert guides, and unforgettable wildlife
                encounters
              </p>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={`${pkg.title} - ${pkg.category} experience in ${pkg.location}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority={index < 2} // Prioritize first two images
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-foreground text-sm font-medium rounded-full">
                    {pkg.category}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-6 right-6">
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-black/30 backdrop-blur-sm text-white text-sm rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 text-white/80 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{pkg.location}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-medium text-white mb-3 leading-tight">{pkg.title}</h3>
                  <p className="text-white/90 text-base mb-8 leading-relaxed font-light">{pkg.description}</p>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className="w-full bg-white text-foreground hover:bg-white/90 px-8 py-4 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() =>
                      window.open(
                        `https://wa.me/27645578406?text=Hi! I need a quote for one of your tours ${pkg.title}`,
                        "_blank",
                      )
                    }
                  >
                    Get A Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
