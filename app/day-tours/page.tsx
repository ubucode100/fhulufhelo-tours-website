"use client"

import { MapPin, Clock, Share2 } from "lucide-react"
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
                className={`relative overflow-hidden rounded-lg ${index === 0
                  ? 'aspect-square md:col-span-3 md:row-span-3 md:aspect-auto'
                  : 'aspect-square md:col-span-1 md:row-span-1'
                  }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${tour.name} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 35vw, 25vw"
                />
              </div>
            )) || (
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt={`${tour.name} - Image`}
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

export default function DayToursPage() {
  return (
    <div className="">
      {/* Header */}
      <div className="bg-gradient-to-b from-base-400 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Day Tours</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover South Africa&apos;s most iconic destinations in unforgettable single-day experiences
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-24">
          {dayTours.map((tour) => (
            <div className="space-y-4" key={tour.id}>
              <h2 className="md:block hidden text-3xl lg:text-4xl font-medium text-foreground tracking-tight leading-tight">
               { tour.name }
              </h2>
              <TourCard key={tour.id} tour={tour} />
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}
