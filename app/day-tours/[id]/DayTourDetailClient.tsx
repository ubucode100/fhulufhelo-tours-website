"use client"

import { Calendar, Users, Clock, Award, Car, Home } from "lucide-react"
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
import type { dayTours } from "@/data/packages"

interface DayTourDetailClientProps {
  tourData: (typeof dayTours)[0]
}

export default function DayTourDetailClient({ tourData: tour }: DayTourDetailClientProps) {
  const handleBookNow = () => {
    if (
      typeof window !== "undefined" &&
      window.BookSAWidget &&
      tour.listingId
    ) {
      window.BookSAWidget.open(tour.listingId.toString());
    } else {
      console.error('BookSAWidget not available or listing ID missing');
    }
  };
  return (
    <>
      {/* Structured Data for Individual Day Tour */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
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
              logo: "https://fhulufhelotours.co.za/logo.jpg",
              telephone: "+27822585189",
              email: "info@fhulufhelotours.co.za",
            },
            offers: {
              "@type": "Offer",
              price: tour.price.adult,
              priceCurrency: tour.price.currency,
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "TravelAgency",
                name: "Fhulufhelo Tours",
              },
            },
            duration: tour.duration,
            touristType: tour.category === "Cultural" ? "Cultural Tourist" : "Adventure Tourist",
            itinerary: tour.itinerary?.map((item) => ({
              "@type": "Action",
              name: item.title,
              description: item.description,
              startTime: item.time,
            })),
            geo: {
              "@type": "Place",
              name: tour.location,
              address: {
                "@type": "PostalAddress",
                addressCountry: "South Africa",
                addressRegion: tour.location.includes("Johannesburg") ? "Gauteng" : "Gauteng",
              },
            },
            includesObject: tour.inclusions.map((inclusion) => ({
              "@type": "Thing",
              name: inclusion,
            })),
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Pickup Time",
                value: tour.pickupTime,
              },
              {
                "@type": "PropertyValue",
                name: "Return Time",
                value: tour.returnTime,
              },
              {
                "@type": "PropertyValue",
                name: "Max Group Size",
                value: tour.maxGroupSize.toString(),
              },
              {
                "@type": "PropertyValue",
                name: "Minimum Age",
                value: tour.minAge.toString(),
              },
              {
                "@type": "PropertyValue",
                name: "Difficulty",
                value: tour.difficulty,
              },
              {
                "@type": "PropertyValue",
                name: "Category",
                value: tour.category,
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
                name: "Day Tours",
                item: "https://fhulufhelotours.co.za/day-tours",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: tour.name,
                item: `https://fhulufhelotours.co.za/day-tours/${tour.id}`,
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative pt-34 flex items-center justify-center">
          {/* Breadcrumb Navigation - Positioned at top */}
          <div className="absolute top-24 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb>
                <BreadcrumbList className="">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="flex items-center hover:text-white">
                      <Home className="h-4 w-4" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/day-tours" className="hover:text-white">
                      Day Tours
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="">{tour.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="pt-8 pb-12 lg:pb-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{tour.name}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <span className="text-lg">{tour.location}</span>
              </div>
            </div>

            {/* Swipeable Image Gallery */}
            <div className="mb-12">
              <SwipeableGallery images={tour.images} alt={tour.name} />
            </div>

            {/* Tour Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-2xl text-foreground mb-4">About This Tour</h2>
                  <p className="text-gray-600 leading-relaxed">{tour.description}</p>
                </div>

                {/* Tour Details Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-foreground" />
                    <div>
                      <div className="font-semibold text-foreground">Duration</div>
                      <div className="text-gray-600">{tour.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-foreground" />
                    <div>
                      <div className="font-semibold text-foreground">Max Group Size</div>
                      <div className="text-gray-600">{tour.maxGroupSize} people</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-5 h-5 mr-3 text-foreground" />
                    <div>
                      <div className="font-semibold text-foreground">Pickup Time</div>
                      <div className="text-gray-600">{tour.pickupTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-foreground" />
                    <div>
                      <div className="font-semibold text-foreground">Return Time</div>
                      <div className="text-gray-600">{tour.returnTime}</div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h3 className="text-xl text-foreground mb-4">Tour Highlights</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {tour.highlights.map((highlight: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-green-500" />
                        <span className="text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Itinerary */}
                {/*                 <div className="mb-8">
                  <h3 className="text-xl text-foreground mb-4">Tour Schedule</h3>
                  <div className="space-y-4">
                    {tour.itinerary.map((item: { time: string; title: string; description: string }, index: number) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-600 text-white text-sm font-bold rounded-full px-3 py-1 -ml-6 mr-3">
                            {item.time}
                          </div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Inclusions */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What&apos;s Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tour.inclusions.map((inclusion: string, index: number) => (
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
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-36">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900">R{tour.price.adult.toLocaleString()}</div>
                    <div className="text-gray-600">per adult</div>
                    {tour.price.child && (
                      <div className="text-sm text-gray-500">Children: R{tour.price.child.toLocaleString()}</div>
                    )}
                  </div>
                  <Separator className="my-6" />
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Difficulty</span>
                      <span className="font-semibold text-gray-900">{tour.difficulty}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold text-gray-900">{tour.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Min Age</span>
                      <span className="font-semibold text-gray-900">{tour.minAge} years</span>
                    </div>
                  </div>
                  <Button 
                onClick={() => handleBookNow()} className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 mb-4">
                    Book This Tour
                  </Button>
                  <WhatsAppButton className="w-full rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky Booking Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-bold text-gray-900">R{tour.price.adult.toLocaleString()}</div>
              <div className="text-sm text-gray-600">per person • {tour.duration}</div>
            </div>
            <div className="flex gap-2">
              <WhatsAppButton className="rounded-full px-4" />
              <Button
                onClick={() => handleBookNow()} className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6">
                Book Now
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
