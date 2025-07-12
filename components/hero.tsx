import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

/**
 * Hero section for the homepage.
 * - Clean SaaS-style: headline, subheadline, CTAs, subtle trust badge.
 * - Left-aligned, with video background.
 */
export default function Hero() {
  return (
    <section className="relative isolate min-h-[90vh] w-full overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <div className="aspect-video w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="size-full object-cover"
          >
            <source src="/hero_video.webm" type="video/webm" />
            {/* Fallback image if video doesn't load */}
            <div className="size-full bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500" />
          </video>
        </div>
        {/* Video overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
          {/* Badge/Announcement */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-white/80 ring-1 ring-white/20 hover:ring-white/30 backdrop-blur-sm transition-all duration-300">
              TTOS Registered • 25 Years Experience
            </div>
          </div>

          {/* Hero content */}
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold text-white sm:text-6xl">
              Explore South Africa with Fhulufhelo Tours
            </h1>

            <p className="mt-8 text-pretty text-lg font-medium text-white/90 sm:text-xl/8 max-w-2xl mx-auto">
              Human touch, local expertise. 25 years of unforgettable journeys, now just a click away.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="rounded-md bg-white px-6 py-3 text-sm text-black hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 group cursor-pointer"
              >
                Get a Quote
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="text-sm text-white hover:text-white/80 hover:bg-white/10 px-6 py-3 rounded-md transition-all duration-200 group cursor-pointer"
              >
                Browse Tours
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
}
