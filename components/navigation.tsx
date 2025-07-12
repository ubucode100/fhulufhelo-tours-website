"use client"

import { useEffect, useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/data/packages"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Day Tours", href: "/day-tours" },
    { name: "Packages", href: "/packages" },
    { name: "Transfer ", href: "/transfers" },
    { name: "Contact", href: "#footer" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  /**
   * Closes the mobile menu when the Escape key is pressed.
   * @param e - KeyboardEvent from the keydown listener
   */
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
          } ${isMenuOpen ? 'lg:block hidden' : ''}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/logo.jpg"
                  alt="Fhulufhelo Tours Logo"
                  width={40}
                  height={40}
                  className="h-8 w-8 lg:h-10 lg:w-10 object-contain"
                />
                <span className={`text-lg font-semibold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'
                  }`}>
                  Fhulufhelo Tours
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:gap-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm/6 transition-colors duration-200 hover:text-orange-400 ${isScrolled ? 'text-gray-900' : 'text-white'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* WhatsApp Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* WhatsApp Button - Desktop */}
              <Button
                variant="ghost"
                size="sm"
                className="hidden lg:flex items-center gap-2 text-green-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer hover:border-green-700"
                onClick={() =>
                  window.open(
                    'https://wa.me/27727777777?text=Hi! I\'m interested in your tours',
                    '_blank'
                  )
                }
              >
                <Image
                  src="/Digital_Glyph_Green.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                  priority={false}
                />
                +27 72 777 7777
              </Button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className={`lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-200 ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                  }`}
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <Menu aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/50 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex min-h-full flex-col">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image
                    src="/logo.jpg"
                    alt="Fhulufhelo Tours Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                  <span className="text-lg font-semibold text-gray-900">
                    Fhulufhelo Tours
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="sr-only">Close menu</span>
                  <X aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-6">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block rounded-lg px-3 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Section */}
              <div className="border-t border-gray-200 p-6">
                <button
                  onClick={() => {
                    window.open('https://wa.me/27123456789?text=Hi! I\'m interested in your tours', '_blank')
                    setIsMenuOpen(false)
                  }}
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-green-600 px-3 py-3 text-base font-semibold text-white hover:bg-green-700 transition-colors duration-200"
                >
                  <Image
                    src="/Digital_Glyph_Green.svg"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                    priority
                  />
                  Contact via WhatsApp
                </button>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">Call:</span>
                    <a
                      href={`tel:${company.contact.phone}`}
                      className="text-orange-600 hover:text-orange-700 transition-colors duration-200"
                    >
                      {company.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">Email:</span>
                    <a
                      href="mailto:info@fhulufhelotours.com"
                      className="text-orange-600 hover:text-orange-700 transition-colors duration-200"
                    >
                      info@fhulufhelotours.com
                    </a>
                  </div>
                  <div className="text-xs text-gray-500 pt-3 border-t border-gray-200">
                    <p className="font-medium">25 Years of South African Adventures</p>
                    <p className="mt-1">TTOS Registered • Visa Services Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}