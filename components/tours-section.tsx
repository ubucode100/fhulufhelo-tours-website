"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Clock, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { dayTours } from "@/data/packages"
import Link from "next/link"
import Image from "next/image"

// Transform day tours into unified format
const tours = dayTours.map((tour) => ({  
  id: tour.id,
  title: tour.name,
  category: tour.category,
  duration: tour.duration,
  groupSize: `${tour.maxGroupSize} people`,
  location: tour.location,
  image: tour.images[0] || "/placeholder.svg?height=600&width=400",
  description: tour.description,
}))

export default function ToursSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    const nextIndex = currentIndex < tours.length - 1 ? currentIndex + 1 : 0
    scrollToIndex(nextIndex)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : tours.length - 1
    scrollToIndex(prevIndex)
  }

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const cardWidth = container.children[0]?.clientWidth || 0
    const gap = 20 // 1.25rem gap for better spacing

    container.scrollTo({
      left: (cardWidth + gap) * index,
      behavior: "smooth",
    })

    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const handleScroll = () => {
    if (!scrollContainerRef.current || isTransitioning) return

    const container = scrollContainerRef.current
    const cardWidth = container.children[0]?.clientWidth || 0
    const gap = 20
    const scrollLeft = container.scrollLeft
    const newIndex = Math.round(scrollLeft / (cardWidth + gap))

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < tours.length) {
      setCurrentIndex(newIndex)
    }
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [currentIndex, isTransitioning])

  return (
    <section className="py-16 lg:py-24 bg-white">
      {/* Industry Standard Container */}     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive Positioning */}
        <div className="mb-8 lg:mb-16">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-slate-100 text-foreground text-sm font-medium rounded-full mb-3">
                Featured Tours
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-2 lg:mb-3 tracking-tight leading-tight">
                Experience the Magic
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/50 font-normal leading-relaxed max-w-2xl">
                Carefully curated adventures that showcase the very best of South Africa
              </p>
            </div>

            {/* Navigation Controls - Responsive */}
            <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
              {/* Hide arrows on mobile, show on desktop */}
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                disabled={isTransitioning}
                className="hidden lg:flex rounded-full border-slate-200 hover:bg-slate-50 w-10 h-10 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                disabled={isTransitioning}
                className="hidden lg:flex rounded-full border-slate-200 hover:bg-slate-50 w-10 h-10 bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              {/* Counter - Show on all devices */}
              <div className="flex items-center gap-1 bg-slate-50 px-3 py-1.5 rounded-full text-sm">
                <span className="text-foreground font-medium">{currentIndex + 1}</span>
                <span className="text-slate-400">/</span>
                <span className="text-foreground/50">{tours.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tours Carousel - Optimized for Mobile Scrolling */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="flex-none w-[280px] sm:w-[320px] lg:w-[340px] xl:w-[360px] max-w-[360px] snap-center"
              >
                {/* 
                  Wrap the card in a Next.js Link for navigation to the tour detail page.
                  The "Book Tour" button is also a Link for accessibility and clarity.
                */}
                <Link
                  href={`/day-tours/${tour.id}`}
                  className="group relative block overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  aria-label={`View details for ${tour.title}`}
                  prefetch={false}
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <Image
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width={100}
                      height={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                        {tour.category}
                      </span>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 text-white/80 text-xs">
                          <MapPin className="w-3 h-3" />
                          <span>{tour.location}</span> 
                        </div>
                      </div>

                      <h3 className="text-xl font-medium text-white mb-2 leading-tight">{tour.title}</h3>
                      <p className="text-white/90 text-sm mb-4 leading-relaxed font-light">{tour.description}</p>

                      {/* Duration, Group Size, and Book Button on Same Line */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3 text-white/80 text-xs">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{tour.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{tour.groupSize}</span>
                          </div>
                        </div>
                        <Link
                          href={`/day-tours/${tour.id}`}
                          className="bg-white text-foreground hover:bg-white/90 px-4 py-2 rounded-full text-xs font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 focus:outline-none"
                          aria-label={`Book ${tour.title}`}
                          prefetch={false}
                          onClick={e => e.stopPropagation()}
                        >
                          Book Tour
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Dots Indicator - Centered */}
          <div className="flex justify-center gap-2 mt-6">
            {tours.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                disabled={isTransitioning}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-slate-900 w-6" : "bg-slate-300 hover:bg-slate-400 w-1.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
