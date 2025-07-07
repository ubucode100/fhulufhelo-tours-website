import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

/**
 * Hero section for the homepage.
 * - Clean SaaS-style: headline, subheadline, CTAs, subtle trust badge.
 * - Left-aligned, with video background.
 */
export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/placeholder.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500" />
        </video>
        {/* Video overlay - lighter for cleaner look */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start max-w-2xl ml-0 md:ml-8">
        <h1 className="font-bold text-4xl md:text-5xl text-white mb-4 leading-tight text-left">
          Explore South Africa <br />
          <span className="font-normal">with Fhulufhelo Tours</span>
        </h1>
        <p className="text-base md:text-lg text-white/90 mb-8 max-w-md text-left">
          Human touch, local expertise. 25 years of unforgettable journeys, now just a click away.
        </p>
        <div className="flex gap-4 mb-6">
          <Button
            size="lg"
            className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-white/90 transition"
          >
            Get a Quote
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Browse Tours
          </Button>
        </div>
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <span>TTOS Registered</span>
          <span className="mx-1">·</span>
          <span>25 Years Experience</span>
        </div>
      </div>
    </section>
  )
}
