"use client"

import { MapPin, Calendar, Users, Star, Clock, Award, Car, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
import { dayTours } from "@/data/packages"
import { use } from "react"

export default function DayTourDetailPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = use(params)

  function getDayTourById(id: string) {
    const tour = (dayTours as Array<any>).find((tour) => tour.id === id)
    return tour
  }

  const tour = getDayTourById(id)

  console.log(tour, id)


  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-6 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center">
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/day-tours">Day Tours</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{tour.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Tour Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-blue-600 text-white hover:bg-blue-700">Day Tour</Badge>
              <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                {tour.rating}
              </Badge>
              <Badge className="bg-green-500 text-white hover:bg-green-600">{tour.difficulty}</Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{tour.name}</h1>

            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">{tour.location}</span>
            </div>
          </div>

          {/* Swipeable Image Gallery */}
          <div className="mb-8">
            <SwipeableGallery images={tour.images} alt={tour.name} />
          </div>

          {/* Tour Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Tour</h2>
                <p className="text-gray-600 leading-relaxed">{tour.description}</p>
              </div>

              {/* Tour Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-semibold text-gray-900">Duration</div>
                    <div className="text-gray-600">{tour.duration}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-semibold text-gray-900">Group Size</div>
                    <div className="text-gray-600">{tour.groupSize}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Car className="w-5 h-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-semibold text-gray-900">Transport</div>
                    <div className="text-gray-600">{tour.transport}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-semibold text-gray-900">Best Time</div>
                    <div className="text-gray-600">{tour.bestTime}</div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tour Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-green-500" />
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tour Schedule</h3>
                <div className="space-y-4">
                  {tour.itinerary.map((item, index) => (
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
              </div>

              {/* Inclusions */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tour.inclusions.map((inclusion, index) => (
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
                  <div className="text-3xl font-bold text-gray-900">R{tour.price.toLocaleString()}</div>
                  <div className="text-gray-600">per person</div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold">{tour.rating}</span>
                      <span className="text-gray-500 ml-1">({tour.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Difficulty</span>
                    <span className="font-semibold text-gray-900">{tour.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-900">{tour.duration}</span>
                  </div>
                </div>

                <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 mb-4">
                  Book This Tour
                </Button>

                <WhatsAppButton tourName={tour.name} className="w-full rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Booking Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-bold text-gray-900">R{tour.price.toLocaleString()}</div>
            <div className="text-sm text-gray-600">per person • {tour.duration}</div>
          </div>
          <div className="flex gap-2">
            <WhatsAppButton tourName={tour.name} className="rounded-full px-4" />
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6">
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" tourName={tour.name} />

      {/* Add padding to prevent content from being hidden behind sticky bar */}
      <div className="lg:hidden h-20"></div>
    </div>
  )
}
