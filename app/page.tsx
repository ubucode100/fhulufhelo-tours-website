import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import ToursSection from "@/components/tours-section"
import PackagesSection from "@/components/packages-section"
import TrustSection from "@/components/trust-section"
import ValuesSection from "@/components/values-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
         <TrustSection />
      <ToursSection />
      <PackagesSection />
      <ValuesSection />
            <TestimonialsSection />
      <Footer />
    </main>
  )
}
