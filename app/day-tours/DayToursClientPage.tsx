"use client"

import { MapPin, Clock, Share2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { dayTours } from "@/data/packages"

function TourCard({ tour }: { tour: (typeof dayTours)[0] }) {
  return (
    <Card className="group overflow-hidden p-4 bg-primary-foreground rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border-0 p-0">
      <div className="flex md:flex-row flex-col gap-3">
        {/* Image Grid - Show ALL images */}
        <div className="relative md:w-9/10">
          <div className="grid gap-1 p-2 grid-cols-2 md:grid-cols-4 md:grid-rows-3">
            {tour.images?.slice(0, 4).map((image, index) => (
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
                  alt={`${tour.name} - ${index === 0 ? "Main tour experience" : `Gallery image ${index + 1}`}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 35vw, 25vw"
                  priority={index === 0}
                />
              </div>
            )) || (
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt={`${tour.name} - Tour experience`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 35vw, 25vw"
                />
              </div>
            )}
          </div>
          {/* Top Actions */}
          <div className="absolute top-3 right-3 flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-sm"
              aria-label={`Share ${tour.name} tour`}
            >
              <Share2 className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-white/90 text-gray-900 hover:bg-white text-sm">Day Tours</Badge>
          </div>
        </div>
        {/* Content - Clean and Simple */}
        <div className="px-4 pb-2 flex flex-col justify-between">
          <div className="pt-4">
            {/* Title */}
            <h3 className="block md:hidden text-xl text-gray-900 mb-2">{tour.name}</h3>
            {/* Description */}
            <p className="text-foreground/70 text-lg mb-4 line-clamp-2 md:line-clamp-none">{tour.description}</p>
            {/* Details */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{tour.duration}</span>
              </div>
            </div>
          </div>
          {/* Price & Book */}
          <div className="flex items-center gap-3 py-2 justify-end">
            <div className="text-2xl text-gray-900">
              R{tour.price?.adult?.toLocaleString() || tour.price?.toLocaleString()} /pp
            </div>
            <Link href={`/day-tours/${tour.id}`}>
              <Button className="rounded-full hover:bg-gray-100 px-6 cursor-pointer">View Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function DayToursPageClient() {
  return (
    <>
      {/* Structured Data for Day Tours */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Day Tours - Fhulufhelo Tours",
            description: "Single-day cultural and wildlife experiences across South Africa's most iconic destinations",
            url: "https://fhulufhelotours.co.za/day-tours",
            numberOfItems: dayTours.length,
            itemListElement: dayTours.map((tour, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "TouristTrip",
                "@id": `https://fhulufhelotours.co.za/day-tours/${tour.id}`,
                name: tour.name,
                description: tour.description,
                image: tour.images?.map((img) => `https://fhulufhelotours.co.za${img}`) || [],
                url: `https://fhulufhelotours.co.za/day-tours/${tour.id}`,
                provider: {
                  "@type": "TravelAgency",
                  name: "Fhulufhelo Tours",
                  url: "https://fhulufhelotours.co.za",
                },
                offers: {
                  "@type": "Offer",
                  price: tour.price.adult,
                  priceCurrency: tour.price.currency,
                  availability: "https://schema.org/InStock",
                  validFrom: new Date().toISOString(),
                  priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
                },
                duration: tour.duration,
                touristType: tour.category === "Cultural" ? "Cultural Tourist" : "Adventure Tourist",
                geo: {
                  "@type": "Place",
                  name: tour.location,
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
                name: "Day Tours",
                item: "https://fhulufhelotours.co.za/day-tours",
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Day Tours</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover South Africa&apos;s most iconic destinations in unforgettable single-day experiences
              </p>

              {/* SEO-friendly summary */}
              <div className="mt-8 max-w-4xl mx-auto text-left">
                <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Explore South Africa in a Single Day</h2>
                  <p className="text-gray-700 mb-4">
                    Experience the best of South African culture, history, and wildlife with our expertly guided day
                    tours. From the vibrant townships of Soweto to the historic Apartheid Museum, each tour offers
                    unique insights into South Africa's rich heritage and natural beauty.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>Full & Half Day Options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-500" />
                      <span>Small Group Experiences</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>Iconic Destinations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          {/* Tours Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-24">
              {dayTours.map((tour, index) => (
                <article className="space-y-4" key={tour.id}>
                  <header>
                    <h2 className="md:block hidden text-3xl lg:text-4xl font-medium text-foreground tracking-tight leading-tight">
                      {tour.name}
                    </h2>
                  </header>
                  <TourCard key={tour.id} tour={tour} />

                  {/* SEO Content for each tour */}
                  <div className="mt-6 prose max-w-none">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-3">What's Included in {tour.name}</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">Tour Highlights:</h4>
                          <ul className="space-y-1 text-sm">
                            {tour.highlights.slice(0, 4).map((highlight, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Tour Includes:</h4>
                          <ul className="space-y-1 text-sm">
                            {tour.inclusions.slice(0, 4).map((inclusion, idx) => (
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
              <h2 className="text-2xl font-bold text-center mb-8">Day Tours FAQ</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">What is included in day tours?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Most day tours include professional guide, transportation, entrance fees, and lunch. Specific
                    inclusions vary by tour - check individual tour details.
                  </p>

                  <h3 className="font-semibold mb-2">What time do day tours start?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Most day tours start between 08:00-09:00 with hotel pickup. Full day tours typically return by
                    17:00, while half-day tours return by 13:00.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Are day tours suitable for children?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Most tours are family-friendly with minimum age requirements varying by tour. Children's pricing is
                    available for most experiences.
                  </p>

                  <h3 className="font-semibold mb-2">Can tours be customized?</h3>
                  <p className="text-sm text-gray-600">
                    Yes! We can customize day tours for private groups, special interests, or specific requirements.
                    Contact us to discuss your needs.
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
