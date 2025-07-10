
import Hero from "@/components/hero"

import ToursSection from "@/components/tours-section"
import PackagesSection from "@/components/packages-section"
import TrustSection from "@/components/trust-section"
import ValuesSection from "@/components/values-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustSection />
      <ToursSection />
      <PackagesSection />
      <ValuesSection />
      <TestimonialsSection />
    </main>
  )
}
