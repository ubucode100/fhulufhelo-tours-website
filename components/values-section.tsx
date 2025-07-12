"use client"

import { Plane, Calendar, Users, FileText } from "lucide-react"

const values = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Seamless pickup and drop-off services from all major South African airports to your accommodation",
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Quick and hassle-free booking process for all tours with flexible dates and instant confirmation",
  },
  {
    icon: Users,
    title: "Expert Tour Guides",
    description: "Professional local guides with deep knowledge and passion for South African culture and wildlife",
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "TTOS certified visa processing services completed within 2-5 working days for your convenience",
  },
]

export default function ValuesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-base-400 to-white">
      {/* Industry Standard Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
                Our Services
              </span>
              <h2 className="text-3xl lg:text-5xl font-medium text-foreground mb-4 tracking-tight leading-tight">
                Top Values for You
              </h2>
              <p className="text-base lg:text-lg text-foreground/50 font-light leading-relaxed max-w-2xl">
                Experience the variety of benefits when choosing our comprehensive South African tour services
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-2xl mb-6">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">{value.title}</h3>
              <p className="text-sm text-foreground/50 font-light leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
