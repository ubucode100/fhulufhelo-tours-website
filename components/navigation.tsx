"use client"

import { useEffect, useState } from "react"
import { Menu, X, ChevronDown, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/data/packages"
import Link from "next/link"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Day Tours", href: "/day-tours" },
    { name: "Packages", href: "/packages" },
    { name: "Transfer ", href: "/transfers" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="Fhulufhelo Tours Logo" 
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <h1 className="text-white font-semibold tracking-wide">
              Fhulufhelo Tours
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* WhatsApp Button */}
          <div className="hidden md:flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 text-sm font-medium transition-colors duration-200"
              onClick={() => window.open('https://wa.me/27123456789?text=Hi! I\'m interested in your tours', '_blank')}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Full Screen */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="flex flex-col h-full bg-slate-900">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <h1 className="text-white text-xl font-bold tracking-wide">Fhulufhelo Tours</h1>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8">
                <div className="space-y-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-white text-2xl font-medium py-4 border-b border-slate-700/50 hover:text-orange-400 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Footer */}
              <div className="p-6 border-t border-slate-700 bg-slate-800">
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">Call Us:</span>
                    <a href={`tel:${company.contact.phone}`} className="text-orange-400 hover:text-orange-300">
                      {company.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">Email:</span>
                    <a href="mailto:info@fhulufhelotours.com" className="text-orange-400 hover:text-orange-300">
                      info@fhulufhelotours.com
                    </a>
                  </div>
                  <div className="text-xs text-slate-400 pt-2 border-t border-slate-700">
                    <p>25 Years of South African Adventures</p>
                    <p>TTOS Registered • Visa Services Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
