"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United Kingdom",
    rating: 5,
    text: "Fhulufhelo Tours made our South African dream come true! The Kruger safari was absolutely incredible, and our guide's knowledge was exceptional. Every detail was perfectly organized.",
    tour: "Kruger National Park Package",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Australia",
    rating: 5,
    text: "25 years of experience really shows. From airport pickup to the final goodbye, everything was seamless. The Pilanesberg game drives exceeded all expectations!",
    tour: "Pilanesberg Wildlife Experience",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Spain",
    rating: 5,
    text: "The visa assistance was a lifesaver - processed in just 3 days! The cultural tours opened our eyes to South Africa's rich heritage. Truly unforgettable memories.",
    tour: "Cultural & Heritage Tours",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Canada",
    rating: 5,
    text: "Completely tailor-made experience as promised. They listened to our preferences and created the perfect itinerary. Professional, friendly, and absolutely reliable.",
    tour: "Custom Safari Package",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      {/* Industry Standard Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-white text-slate-700 text-sm font-medium rounded-full mb-4">
                Guest Reviews
              </span>
              <h2 className="text-3xl lg:text-5xl font-medium text-slate-900 mb-4 tracking-tight leading-tight">
                Trusted by Travelers
              </h2>
              <p className="text-base lg:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
                Hear from our guests about their unforgettable South African adventures and why they choose us for their
                dream journeys
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-slate-300" />
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-slate-700 text-base leading-relaxed mb-6 font-light">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                  <div className="font-medium text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.location}</div>
                <div className="text-xs text-slate-500 mt-1">{testimonial.tour}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl lg:text-4xl font-light text-slate-900 mb-2">4.9/5</div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-light text-slate-900 mb-2">500+</div>
              <div className="text-sm text-slate-600">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-light text-slate-900 mb-2">98%</div>
              <div className="text-sm text-slate-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
