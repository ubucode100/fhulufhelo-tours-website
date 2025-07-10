import { Phone, Mail, MapPin } from "lucide-react"
import { dayTours, tourPackages, company } from "@/data/packages"

export default function Footer() {
  // Popular day tours based on actual services
  const popularDayTours = dayTours.slice(0, 6).map(tour => ({
    name: tour.name,
    href: `/day-tours/${tour.id}`
  }))

  // Tour packages based on actual offerings
  const popularTourPackages = tourPackages.slice(0, 4).map(pkg => ({
    name: pkg.name,
    href: `/packages/${pkg.id}`
  }))

  // Company links based on actual business focus
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "TTOS Registration", href: "/credentials/ttos" },
    { name: "Contact Us", href: "/contact" },
    { name: "Quote Request", href: "/quote-request" },
    { name: "Visa Services", href: "/services/visa-services" },
    { name: "Airport Transfers", href: "/services/airport-transfers" },
  ]

  const legalLinks = [
    { name: "Terms & Conditions", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Booking Conditions", href: "#booking" },
    { name: "Cancellation Policy", href: "#cancellation" },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info & Contact */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">{company.name.toUpperCase()}</h2>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">{company.experience.years} YEARS</span>
                <span className="text-slate-300">of Excellence</span>
              </div>
              <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-md">
                {company.description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-base">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a href={`tel:${company.contact.phone}`} className="text-slate-300 hover:text-orange-400 transition-colors font-medium">
                  {company.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-4 text-base">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a
                  href={`mailto:${company.contact.email}`}
                  className="text-slate-300 hover:text-orange-400 transition-colors font-medium"
                >
                  {company.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-4 text-base">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                <div className="text-slate-300">
                  <p className="font-medium">Johannesburg, South Africa</p>
                  <p className="text-sm text-slate-400">{company.credentials.ttosRegistration} • {company.credentials.visaServices}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Tours</h3>
            <ul className="space-y-3">
              {popularDayTours.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-300 hover:text-orange-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Packages</h3>
            <ul className="space-y-3">
              {popularTourPackages.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-300 hover:text-orange-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-300 hover:text-orange-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium">TTOS Member</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium">Visa Services</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="text-sm font-medium">4.9/5</span>
                <span className="text-xs text-slate-400">(2,847 reviews)</span>
              </div>
            </div>

            <div className="text-sm text-slate-400">
              <span>Licensed Tour Operator • {company.credentials.ttosRegistration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 bg-slate-800">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-400">
              <p>&copy; 2024 {company.name}. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap gap-6 text-xs text-slate-400">
              {legalLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-orange-400 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
