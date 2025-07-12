"use client"

import { MapPin, Calendar, Users, Clock, Award, Car, Home, Link } from "lucide-react"
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
import { dayTours } from "@/data/packages"
import { use } from "react"

// TypeScript interface for day tour structure
interface DayTour {
  id: string
  name: string
  duration: string
  pickupTime: string
  returnTime: string
  price: {
    adult: number
    child: number
    currency: string
  }
  description: string
  highlights: string[]
  inclusions: string[]
  exclusions: string[]
  location: string
  category: string
  difficulty: string
  minAge: number
  maxGroupSize: number
  availableDays: string[]
  itinerary: Array<{
    time: string
    title: string
    description: string
  }>
  images: string[]
}

export default function DayTourDetailPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = use(params)

  /**
   * Retrieves a day tour by its ID from the dayTours array
   * @param id - The unique identifier of the tour
   * @returns The tour object if found, undefined otherwise
   */
  function getDayTourById(id: string): DayTour | undefined {
    return dayTours.find((tour) => tour.id === id)
  }

  const tour = getDayTourById(id)

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-8">The tour you&apos;re looking for doesn&apos;t exist.</p>
          <Button asChild>
            <Link href="/day-tours">Back to Day Tours</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-[40vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${tour.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Breadcrumb Navigation - Positioned at top */}
        <div className="absolute top-18 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb>
              <BreadcrumbList className="text-white">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="flex items-center text-white/90 hover:text-white">
                    <Home className="h-4 w-4" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/day-tours" className="text-white/90 hover:text-white">
                    Day Tours
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">{tour.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {tour.name}
          </h1>

          <div className="flex items-center justify-center gap-6 text-white/80 text-lg">
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6" />
              <span className="text-xl">{tour.location}</span>
            </div>

            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>{tour.maxGroupSize}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pt-16 pb-12 lg:pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Tour</h2>
                <p className="text-gray-600 leading-relaxed">{tour.description}</p>
              </div>

              {/* Tour Details Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
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

                  </div>
                </div>
                <div className="flex items-center">
                  <Car className="w-5 h-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-semibold text-gray-900">Transport</div>

                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-semibold text-gray-900">Best Time</div>
 
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tour Highlights</h3>
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
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tour Schedule</h3>
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
              </div>

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
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900">R{tour.price.toLocaleString()}</div>
                  <div className="text-gray-600">per person</div>
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
                </div>

                <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 mb-4">
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
            <div className="text-xl font-bold text-gray-900">R{tour.price.toLocaleString()}</div>
            <div className="text-sm text-gray-600">per person • {tour.duration}</div>
          </div>
          <div className="flex gap-2">
            <WhatsAppButton className="rounded-full px-4" />
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6">
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Add padding to prevent content from being hidden behind sticky bar */}
      <div className="lg:hidden h-20"></div>
    </div>
  )
}
