"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface SwipeableGalleryProps {
  images: string[]
  alt: string
  className?: string
}

export function SwipeableGallery({ images, alt, className }: SwipeableGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Touch/Mouse handlers for swipe gestures
  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
    setTranslateX(0)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return
    const diff = clientX - startX
    setTranslateX(diff)
  }

  const handleEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 50 // Minimum swipe distance
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        prevImage()
      } else {
        nextImage()
      }
    }
    setTranslateX(0)
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleEnd()
  }

  // Mouse events for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd()
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Mobile Gallery with Side Previews */}
      <div className="lg:hidden">
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-3 px-4 cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={isDragging ? handleMouseMove : undefined}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 12}px + ${isDragging ? translateX : 0}px))`,
              transition: isDragging ? "none" : "transform 0.3s ease-out",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 aspect-[4/3] relative overflow-hidden rounded-xl transition-all duration-300 ${
                  index === currentIndex ? "w-[70vw] opacity-100" : "w-[20vw] opacity-60"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${alt} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes={index === currentIndex ? "70vw" : "20vw"}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 h-10 w-10 rounded-full p-0 z-10"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 h-10 w-10 rounded-full p-0 z-10"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Grid (unchanged) */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-3">
        {images.map((image, index) => (
          <div key={index} className="aspect-[4/3] relative overflow-hidden rounded-xl">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} - Image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="25vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
