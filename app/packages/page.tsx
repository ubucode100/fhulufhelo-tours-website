"use client"

import { useState } from "react"
import { MapPin, Calendar, Users, Heart, Share2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { tourPackages } from "@/data/packages"

function PackageCard({ pkg }: { pkg: (typeof tourPackages)[0] }) {
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <Card className="group overflow-hidden p-4 bg-primary-foreground rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border-0 p-0">

      <div className="flex md:flex-row flex-col gap-3">

        {/* Image Grid - Show ALL images */}
        <div className="relative md:w-9/10">
          <div className="grid gap-1 p-2 grid-cols-2 md:grid-cols-4 md:grid-rows-3">
            {pkg.images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg ${index === 0
                  ? 'aspect-square md:col-span-3 md:row-span-3 md:aspect-auto'
                  : 'aspect-square md:col-span-1 md:row-span-1'
                  }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${pkg.name} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 35vw, 25vw"
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
            <Badge className="bg-white/90 text-gray-900 hover:bg-white text-sm">Safari Package</Badge>
          </div>

          {/* Discount Badge */}
          {pkg.originalPrice && (
            <div className="absolute bottom-3 left-3">
              <Badge className="bg-red-500 text-white hover:bg-red-600 text-sm">
                Save R{pkg.originalPrice - pkg.price}
              </Badge>
            </div>
          )}
        </div>

        {/* Content - Clean and Simple */}
        <div className="px-4 pb-2 flex flex-col justify-between">

          <div className="pt-4">
            {/* Title */}
            <h3 className="block md:hidden text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-4 line-clamp-2 md:line-clamp-none">{pkg.description}</p>

            {/* Details */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">

              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{pkg.location}</span>
              </div>

              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{pkg.duration}</span>
              </div>

              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{pkg.groupSize}</span>
              </div>

              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                <span>{pkg.rating}</span>
              </div>
          </div>
          </div>

          {/* Price & Book */}
          <div className="flex items-center gap-3 py-2 justify-end">
            <div className="text-2xl text-gray-900">
              {pkg.originalPrice && (
                <div className="text-sm text-gray-500 line-through">R{pkg.originalPrice.toLocaleString()}</div>
              )}
              <div className="text-2xl font-bold text-gray-900">R{pkg.price.toLocaleString()}</div>
            </div>
            <Link href={`/packages/${pkg.id}`}>
              <Button variant="outline" className="rounded-full hover:bg-gray-100 px-6 cursor-pointer">View Details</Button>
            </Link>
          </div>
        </div>
      </div>

    </Card>
  )
}

export default function PackagesPage() {
  return (
    <div className="">
      {/* Header */}
      <div className="bg-gradient-to-b from-base-400 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Safari Packages</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multi-day luxury safari experiences with premium accommodations and expert guides
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8">
          {tourPackages.map((pkg) => (
            <>
              <p className="hidden md:block mt-16 text-4xl font-semibold tracking-tight text-pretty text-primary sm:text-5xl">{pkg.name}</p>
              <PackageCard key={pkg.id} pkg={pkg} />
            </>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}
