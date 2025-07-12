"use client"

import { BadgeCheck } from "lucide-react"
import { Badge } from "./ui/badge"

const trustStats = [
  {
    number: "25+",
    label: "Years of Excellence",
    description: "Trusted South African tour operator since 1999",
  },
  {
    number: "98%",
    label: "Customer Satisfaction",
    description: "Consistently rated excellent by our guests",
  },
  {
    number: "TTOS",
    label: "Certified Operator",
    description: "Official visa processing in 2-5 working days",
  },
  {
    number: "100%",
    label: "Tailor-Made",
    description: "Every tour crafted to your preferences",
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      {/* Industry Standard Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-start justify-between">
            <div className="flex-1">

              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
                <BadgeCheck className="text-primary h-5 w-5" />
                <span className="text-sm font-medium text-primary">
                  Why Choose Us
                </span>
              </div>


              <h2 className="text-3xl lg:text-5xl font-medium text-foreground mb-4 tracking-tight leading-tight">
                Trusted by Thousands
              </h2>
              <p className="text-base lg:text-lg text-foreground/50 font-light leading-relaxed max-w-2xl">
                25 years of creating unforgettable South African experiences with official certification and complete
                personalization.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {trustStats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="text-4xl lg:text-6xl font-light text-foreground mb-2 tracking-tight">{stat.number}</div>
              <div className="text-sm lg:text-base font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-xs lg:text-sm text-foreground/50 font-light leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
