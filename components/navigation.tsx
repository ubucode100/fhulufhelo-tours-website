"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Day Tours", href: "/day-tours" },
    { name: "Packages", href: "/packages" },
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

  // Use Next.js navigation for SSR-safe active state
  const pathname = usePathname()

  function isActive(href: string) {
    return pathname === href
  }

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed inset-x-0 top-0 z-40 bg-base py-4 px-4 md:px-0">
        <div className="mx-auto max-w-7xl flex items-center justify-between bg-background rounded-md  px-4 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="Fhulufhelo Tours Logo"
              width={42}
              height={42}
              className="h-8 w-8 lg:h-12 lg:w-12 object-contain"
            />
            <span className="text-lg tracking-tight text-foreground font-['Georgia'] font-medium antialiased">
              Fhulufhelo Tours
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <div className="flex gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-5 py-1 rounded-full transition-colors duration-200 text-sm
                    ${isActive(link.href)
                      ? "bg-foreground text-white shadow"
                      : "text-foreground hover:bg-gray-100"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* WhatsApp Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-green-600 text-white rounded-full px-4 py-2 text-base shadow hover:bg-green-700 transition"
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
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-foreground cursor-pointer"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background flex flex-col">
          {/* Top bar with close */}
          <div className="flex items-center justify-between bg-base/90 px-4 py-3">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <Image src="/logo.jpg" alt="Fhulufhelo Tours Logo" width={32} height={32} className="h-8 w-8 object-contain" />
              <span className="text-lg tracking-tight text-foreground font-['Georgia'] font-medium antialiased">
                Fhulufhelo Tours
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className=" p-2 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          {/* Nav links */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="flex flex-col w-11/12 max-w-xs gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`w-full text-center px-4 py-2 rounded-full transition-colors duration-200 text-lg
                    ${isActive(link.href)
                      ? "bg-foreground text-white shadow"
                      : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Button
              className="mt-6 w-11/12 max-w-xs flex items-center justify-center gap-2 bg-green-600 text-white rounded-full px-4 py-2 text-base font-semibold shadow hover:bg-green-700 transition"
              onClick={() => {
                window.open('https://wa.me/27727777777?text=Hi! I\'m interested in your tours', '_blank')
                setIsMenuOpen(false)
              }}
            >
              <Image
                src="/Digital_Glyph_Green.svg"
                alt="WhatsApp"
                width={20}
                height={20}
                className="h-5 w-5"
                priority
              />
              +27 72 777 7777
            </Button>
          </div>
        </div>
      )}
    </>
  )
}