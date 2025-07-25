"use client"

import { MapPin, Calendar, Users, Star, Bed, Utensils, Car, Clock, Award, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import WhatsAppButton from "@/components/whatsapp-button"
import { SwipeableGallery } from "@/components/swipeable-gallery"
import type { tourPackages } from "@/data/packages"

interface PackageDetailClientProps {
  packageData: (typeof tourPackages)[0]
}

export default function PackageDetailClient({ packageData: pkg }: PackageDetailClientProps) {
  return (
    <>
      {/* Structured Data for Individual Package */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
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
              logo: "https://fhulufhelotours.co.za/logo.jpg",
              telephone: "+27822585189",
              email: "info@fhulufhelotours.co.za",
            },
            offers: {
              "@type": "Offer",
              price: pkg.price,
              priceCurrency: "ZAR",
              availability: "https://schema.org/InStock",
              validFrom: new Date().toISOString(),
              priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
              seller: {
                "@type": "TravelAgency",
                name: "Fhulufhelo Tours",
              },
            },
            duration: pkg.duration,
            touristType: "Wildlife Enthusiast",
            itinerary: pkg.itinerary?.map((day) => ({
              "@type": "Action",
              name: day.title,
              description: day.description,
              startTime: `Day ${day.day}`,
            })),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: pkg.rating,
              reviewCount: pkg.reviewCount,
              bestRating: 5,
              worstRating: 1,
            },
            geo: {
              "@type": "Place",
              name: pkg.location,
              address: {
                "@type": "PostalAddress",
                addressCountry: "South Africa",
                addressRegion: pkg.location.includes("Kruger") ? "Mpumalanga" : "North West Province",
              },
            },
            includesObject: pkg.inclusions.map((inclusion) => ({
              "@type": "Thing",
              name: inclusion,
            })),
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Group Size",
                value: pkg.groupSize,
              },
              {
                "@type": "PropertyValue",
                name: "Accommodation",
                value: pkg.accommodation,
              },
              {
                "@type": "PropertyValue",
                name: "Meals",
                value: pkg.meals,
              },
              {
                "@type": "PropertyValue",
                name: "Transport",
                value: pkg.transport,
              },
              {
                "@type": "PropertyValue",
                name: "Difficulty",
                value: pkg.difficulty,
              },
              {
                "@type": "PropertyValue",
                name: "Best Time",
                value: pkg.bestTime,
              },
            ],
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
              {
                "@type": "ListItem",
                position: 3,
                name: pkg.name,
                item: `https://fhulufhelotours.co.za/packages/${pkg.id}`,
              },
            ],
          }),
        }}
      />

      {/* Review Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "TouristTrip",
              name: pkg.name,
              image: `https://fhulufhelotours.co.za${pkg.images[0]}`,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: pkg.rating,
              bestRating: 5,
            },
            author: {
              "@type": "Organization",
              name: "Fhulufhelo Tours Customers",
            },
            reviewBody: `Excellent ${pkg.name.toLowerCase()} with professional guides and amazing wildlife experiences. Highly recommended for ${pkg.difficulty.toLowerCase()} level adventurers.`,
          }),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center">
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/packages">Safari Packages</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{pkg.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Page Header */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{pkg.name}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{pkg.location}</span>
              </div>
            </div>

            {/* Swipeable Image Gallery */}
            <div className="mb-8">
              <SwipeableGallery images={pkg.images} alt={pkg.name} />
            </div>

            {/* Package Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Package</h2>
                  <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
                </div>

                {/* Package Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                    <div>
                      <div className="font-semibold text-gray-900">Duration</div>
                      <div className="text-gray-600">{pkg.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-gray-400" />
                    <div>
                      <div className="font-semibold text-gray-900">Group Size</div>
                      <div className="text-gray-600">{pkg.groupSize}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 mr-3 text-gray-400" />
                    <div>
                      <div className="font-semibold text-gray-900">Accommodation</div>
                      <div className="text-gray-600">{pkg.accommodation}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="w-5 h-5 mr-3 text-gray-400" />
                    <div>
                      <div className="font-semibold text-gray-900">Meals</div>
                      <div className="text-gray-600">{pkg.meals}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-5 h-5 mr-3 text-gray-400" />
                    <div>
                      <div className="font-semibold text-gray-900">Transport</div>
                      <div className="text-gray-600">{pkg.transport}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-gray-400" />
                    <div>
                      <div className="font-semibold text-gray-900">Best Time</div>
                      <div className="text-gray-600">{pkg.bestTime}</div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Package Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pkg.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-green-500" />
                        <span className="text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Itinerary */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Day-by-Day Itinerary</h3>
                  <div className="space-y-4">
                    {pkg.itinerary.map((day, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center -ml-6 mr-3">
                            {day.day}
                          </div>
                          <h4 className="font-semibold text-gray-900">{day.title}</h4>
                        </div>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What&apos;s Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pkg.inclusions.map((inclusion, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">{inclusion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Sidebar */}
              <div className="lg:col-span-1 hidden lg:block">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      {pkg.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          R{pkg.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="text-3xl font-bold text-gray-900">R{pkg.price.toLocaleString()}</div>
                    <div className="text-gray-600">per person</div>
                  </div>
                  <Separator className="my-6" />
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-semibold">{pkg.rating}</span>
                        <span className="text-gray-500 ml-1">({pkg.reviewCount} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Difficulty</span>
                      <span className="font-semibold text-gray-900">{pkg.difficulty}</span>
                    </div>
                  </div>
                  <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 mb-4">
                    Get A Quote
                  </Button>
                  <WhatsAppButton className="w-full rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sticky Booking Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                {pkg.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">R{pkg.originalPrice.toLocaleString()}</span>
                )}
              </div>
              <div className="text-xl font-bold text-gray-900">R{pkg.price.toLocaleString()}</div>
              <div className="text-sm text-gray-600">per person</div>
            </div>
            <div className="flex gap-2">
              <WhatsAppButton className="rounded-full px-4" />
              <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6">
                Get Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Add padding to prevent content from being hidden behind sticky bar */}
        <div className="lg:hidden h-20"></div>
      </div>
    </>
  )
}
