'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, MapPin, Clock, BadgeCheck, TramFront } from 'lucide-react'
import { useEventListener, useKeyPress } from '@uidotdev/usehooks'
import { dayTours } from '@/data/packages'

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
  const scrollRef = useRef<HTMLDivElement>(null)
  const touchStart = useRef(0)

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current
    if (!container) return

    const card = container.children[0] as HTMLElement
    const cardWidth = card?.offsetWidth || 320
    const gap = 20

    const scrollLeft = index === 0 ? 0 :
      (cardWidth + gap) * index + (window.innerWidth < 640 ? 16 : 32)

    container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    setCurrentIndex(index)
  }

  const next = () => scrollToIndex((currentIndex + 1) % tours.length)
  const prev = () => scrollToIndex(currentIndex === 0 ? tours.length - 1 : currentIndex - 1)

  const handleTouch = (e: React.TouchEvent) => {
    if (e.type === 'touchstart') {
      touchStart.current = e.touches[0].clientX
    } else if (e.type === 'touchend') {
      const distance = touchStart.current - e.changedTouches[0].clientX
      if (Math.abs(distance) > 50) distance > 0 ? next() : prev()
    }
  }

  // Keyboard navigation


  // Update index on scroll
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth || 320
      const gap = 20

      const newIndex = scrollLeft < 50 ? 0 :
        Math.round((scrollLeft - 32) / (cardWidth + gap))

      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < tours.length) {
        setCurrentIndex(newIndex)
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [currentIndex, tours.length])

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-base-400 to-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-12">
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
              <TramFront className="text-primary h-5 w-5" />
              <span className="text-sm font-medium text-primary">
                Featured Day Tours
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-2 lg:mb-3 tracking-tight">
              Experience the Magic
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-foreground/50 max-w-2xl">
              Carefully curated adventures that showcase the very best of South Africa
            </p>
          </div>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 bg-slate-50 px-3 py-1.5 rounded-full text-sm">
              <span className="font-medium">{currentIndex + 1}</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-500">{tours.length}</span>
            </div>
            <Button size="icon" onClick={prev} className="rounded-full w-10 h-10">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button size="icon" onClick={next} className="rounded-full w-10 h-10">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 sm:px-6 lg:px-8"
        onTouchStart={handleTouch}
        onTouchEnd={handleTouch}
      >
        {tours.map((tour, index) => (
          <div
            key={tour.id}
            className={`flex-none w-80 snap-center ${index === 0 ? 'ml-4 lg:ml-8' : ''}`}
          >
            <Link
              href={`/day-tours/${tour.id}`}
              className="group block rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={tour.image || '/placeholder.svg'}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full">
                    {tour.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-1 text-white/80 text-xs mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{tour.location}</span>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-2">{tour.title}</h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">{tour.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-white/80 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{tour.duration}</span>
                    </div>
                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                      Book Tour
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile Indicators */}
      <div className="lg:hidden flex flex-col items-center gap-4 mt-6">
        <div className="flex items-center gap-1 bg-slate-50 px-3 py-1.5 rounded-full text-sm">
          <span className="font-medium">{currentIndex + 1}</span>
          <span className="text-slate-400">/</span>
          <span className="text-slate-500">{tours.length}</span>
        </div>

        <div className="flex gap-2">
          {tours.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-1.5 rounded-full transition-all ${index === currentIndex ? 'bg-slate-900 w-6' : 'bg-slate-300 w-1.5'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
