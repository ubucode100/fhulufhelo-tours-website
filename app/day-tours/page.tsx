"use client"

import { useState } from "react"
import { MapPin, Clock, Users, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const dayTours = [
  {
    id: "soweto-tour",
    name: "Soweto Tour",
    description: "Experience the vibrant culture and rich history of Soweto",
    duration: "6 hours",
    groupSize: "8-12 people",
    price: 850,
    location: "Soweto, Johannesburg",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
  },
  {
    id: "johannesburg-inner-city",
    name: "Johannesburg Inner City Tour",
    description: "Discover the heart of Johannesburg's urban landscape",
    duration: "4 hours",
    groupSize: "6-10 people",
    price: 650,
    location: "Johannesburg CBD",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
  },
  {
    id: "gold-reef-city",
    name: "Gold Reef City",
    description: "Fun-filled adventure at South Africa's premier theme park",
    duration: "8 hours",
    groupSize: "4-15 people",
    price: 950,
    location: "Gold Reef City",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
  },
  {
    id: "apartheid-museum",
    name: "Apartheid Museum",
    description: "Journey through South Africa's history and path to democracy",
    duration: "5 hours",
    groupSize: "6-15 people",
    price: 550,
    location: "Johannesburg",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
  },
  {
    id: "pretoria-city-tour",
    name: "Pretoria City Tour",
    description: "Explore South Africa's administrative capital and its landmarks",
    duration: "7 hours",
    groupSize: "8-15 people",
    price: 750,
    location: "Pretoria",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
  },
  {
    id: "lion-cheetah-sanctuary",
    name: "Lion & Cheetah Sanctuary",
    description: "Get up close with Africa's magnificent big cats",
    duration: "8 hours",
    groupSize: "6-15 people",
    price: 1100,
    location: "Hartbeespoort",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
  },
]

function TourCard({ tour }: { tour: (typeof dayTours)[0] }) {
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <Card className="group overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-0">
      {/* Image Grid - Show ALL images */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-1 p-1">
          {tour.images.map((image, index) => (
            <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${tour.name} - Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
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
            onClick={() => setIsFavorited(!isFavorited)}
          >
            <Heart className={`h-4 w-4 ${isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </Button>
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
      <div className="p-6">
        {/* Location */}
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{tour.location}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.name}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>

        {/* Details */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{tour.groupSize}</span>
          </div>
        </div>

        {/* Price & Book */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">R{tour.price.toLocaleString()}</div>
          <Link href={`/day-tours/${tour.id}`}>
            <Button className="rounded-full bg-gray-900 hover:bg-gray-800 px-6">View Details</Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default function DayToursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Day Tours</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover South Africa's most iconic destinations in unforgettable single-day experiences
            </p>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dayTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  )
}
