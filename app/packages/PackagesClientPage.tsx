"use client"

import { MapPin, Calendar, Users, Share2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { tourPackages } from "@/data/packages"

function PackageCard({ pkg }: { pkg: (typeof tourPackages)[0] }) {
  return (
    <Card className="group overflow-hidden p-4 bg-primary-foreground rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border-0 p-0">
      <div className="flex md:flex-row flex-col gap-3">
        {/* Image Grid - Show ALL images */}
        <div className="relative md:w-3/2">
          <div className="grid gap-1 p-2 grid-cols-2 md:grid-cols-4 md:grid-rows-3">
            {pkg.images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg ${
                  index === 0
                    ? "aspect-square md:col-span-3 md:row-span-3 md:aspect-auto"
                    : "aspect-square md:col-span-1 md:row-span-1"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${pkg.name} - ${index === 0 ? "Main safari experience" : `Gallery image ${index + 1}`}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 35vw, 25vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          {/* Top Actions */}
          <div className="absolute top-3 right-3 flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-sm"
              aria-label={`Share ${pkg.name} package`}
            >
              <Share2 className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-white/90 text-foreground hover:bg-white text-sm">Safari Package</Badge>
          </div>
        </div>
        {/* Content - Clean and Simple */}
        <div className="px-4 pb-2 flex flex-col justify-between">
          <div className="pt-4">
            {/* Title */}
            <h3 className="block md:hidden text-xl text-foreground mb-2">{pkg.name}</h3>
            {/* Description */}
            <p className="text-foreground/70 text-sm md:text-lg mb-4 line-clamp-3 md:line-clamp-none">
              {pkg.description}
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{pkg.location}</span>
            </div>
            {/* Details */}
            <div className="flex items-center gap-2 text-sm text-gray-500 py-4 text-base flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4" />
                <span className="text-base">{pkg.duration}</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1 rounded-full">
                <Users className="w-4 h-4" />
                <span className="text-base">{pkg.groupSize}</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-base">{pkg.rating}</span>
              </Badge>
            </div>
          </div>
          {/* Price & Book */}
          <div className="flex items-center gap-3 py-2 justify-end">
            <div className="text-2xl text-foreground">
              {pkg.originalPrice && (
                <div className="text-sm text-gray-500 line-through">R{pkg.originalPrice.toLocaleString()}</div>
              )}
              <div className="text-2xl text-foreground">R{pkg.price.toLocaleString()}</div>
            </div>
            <Link href={`/packages/${pkg.id}`}>
              <Button className="rounded-full hover:bg-gray-100 px-6 cursor-pointer">View Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function PackagesPageClient() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Safari Packages - Fhulufhelo Tours",
            description: "Premium multi-day safari packages across South Africa's top game reserves",
            url: "https://fhulufhelotours.co.za/packages",
            numberOfItems: tourPackages.length,
            itemListElement: tourPackages.map((pkg, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "TouristTrip",
                "@id": `https://fhulufhelotours.co.za/packages/${pkg.id}`,
                name: pkg.name,
                description: pkg.description,
                image: pkg.images.map((img) => `https://fhulufhelotours.co.za${img}`),
                url: `https://fhulufhelotours.co.za/packages/${pkg.id}`,
                provider: {
                  "@type": "TravelAgency",
                  name: "Fhulufhelo Tours",
                  url: "https://fhulufhelotours.co.za",
                },
                offers: {
                  "@type": "Offer",
                  price: pkg.price,
                  priceCurrency: "ZAR",
                  availability: "https://schema.org/InStock",
                  validFrom: new Date().toISOString(),
                  priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
                },
                duration: pkg.duration,
                touristType: "Wildlife Enthusiast",
                itinerary: pkg.itinerary?.map((day) => ({
                  "@type": "Action",
                  name: day.title,
                  description: day.description,
                })),
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: pkg.rating,
                  reviewCount: pkg.reviewCount,
                  bestRating: 5,
                },
                geo: {
                  "@type": "Place",
                  name: pkg.location,
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "South Africa",
                  },
                },
              },
            })),
          }),
        }}
      />

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://fhulufhelotours.co.za",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Safari Packages",
                item: "https://fhulufhelotours.co.za/packages",
              },
            ],
          }),
        }}
      />

      <div className="">
        {/* Header */}
        <div className="bg-gradient-to-b from-base-400 to-white pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Safari Packages</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Multi-day luxury safari experiences with premium accommodations and expert guides
              </p>

              {/* SEO-friendly summary */}
              <div className="mt-8 max-w-4xl mx-auto text-left">
                <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Premium South African Safari Experiences
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Discover South Africa&apos;s incredible wildlife with our carefully curated safari packages. From the
                    malaria-free Pilanesberg Game Park to the iconic Kruger National Park, each package offers unique
                    experiences with the Big 5, luxury accommodations, and expert guides.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>4.8+ Average Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span>Small Group Sizes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-500" />
                      <span>Top Game Reserves</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          {/* Packages Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-24">
              {tourPackages.map((pkg) => (
                <article className="space-y-4" key={pkg.id}>
                  <header>
                    <h2 className="text-3xl md:block hidden lg:text-4xl font-medium text-foreground tracking-tight leading-tight">
                      {pkg.name}
                    </h2>
                  </header>
                  <PackageCard key={pkg.id} pkg={pkg} />

                  {/* SEO Content for each package */}
                  <div className="mt-6 prose max-w-none">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-3">What&apos;s Included in {pkg.name}</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">Package Highlights:</h4>
                          <ul className="space-y-1 text-sm">
                            {pkg.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Package Includes:</h4>
                          <ul className="space-y-1 text-sm">
                            {pkg.inclusions.slice(0, 4).map((inclusion, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                {inclusion}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* FAQ Section for SEO */}
            <section className="mt-16 bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">What is included in safari packages?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    All our safari packages include accommodation, meals, game drives, professional guides, park
                    entrance fees, and transportation. Specific inclusions vary by package.
                  </p>

                  <h3 className="font-semibold mb-2">Are the game reserves malaria-free?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Pilanesberg and Madikwe Game Parks are malaria-free areas, making them perfect for families. Kruger
                    National Park is in a malaria area, so precautions are recommended.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What is the best time for safari?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    The dry season (May to September) offers excellent game viewing as animals gather around water
                    sources. However, each season has its unique advantages.
                  </p>

                  <h3 className="font-semibold mb-2">Can packages be customized?</h3>
                  <p className="text-sm text-gray-600">
                    Yes! We offer custom safari packages tailored to your preferences, group size, and budget. Contact
                    us to discuss your specific requirements.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
