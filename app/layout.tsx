import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

// Configure Poppins font with multiple weights for high quality
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Fhulufhelo Tours - 25 Years of South African Safari & Cultural Tours",
    template: "%s | Fhulufhelo Tours - South African Safari Specialists",
  },
  description:
    "Experience South Africa with Fhulufhelo Tours - 25 years of excellence in safari tours, cultural experiences, and custom travel packages. Big 5 wildlife safaris, Soweto tours, Kruger National Park, and Pilanesberg adventures. TTOS registered tour operator.",
  keywords: [
    "South African tours",
    "safari tours South Africa",
    "Big 5 safari",
    "Kruger National Park tours",
    "Pilanesberg Game Park",
    "Soweto tours",
    "Johannesburg tours",
    "Cape Town tours",
    "wildlife safari",
    "cultural tours South Africa",
    "day tours Johannesburg",
    "multi-day safari packages",
    "Sun City tours",
    "Apartheid Museum tours",
    "custom South Africa tours",
    "TTOS registered tour operator",
    "malaria-free safari",
    "Madikwe Game Park",
    "Panorama Route tours",
    "elephant sanctuary",
    "lion walk experience",
    "diamond mine tours",
    "Pretoria city tours",
  ],
  authors: [{ name: "Fhulufhelo Tours" }],
  creator: "Fhulufhelo Tours",
  publisher: "Fhulufhelo Tours",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fhulufhelotours.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fhulufhelo Tours - Premier South African Safari & Cultural Tours",
    description:
      "Discover South Africa with our expert-guided safari tours, cultural experiences, and custom travel packages. 25 years of excellence in Big 5 safaris, Soweto tours, and wildlife adventures.",
    url: "https://fhulufhelotours.co.za",
    siteName: "Fhulufhelo Tours",
    images: [
      {
        url: "/images/packages/pilanesberg_game_park_wildlife_experiance_2.jpg",
        width: 1200,
        height: 630,
        alt: "Fhulufhelo Tours - Big 5 Safari Experience at Pilanesberg Game Park",
      },
      {
        url: "/images/packages/kruger_and_Panorama _route_expreiance_1.jpg",
        width: 1200,
        height: 630,
        alt: "Kruger National Park and Panorama Route Tour Experience",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fhulufhelo Tours - South African Safari & Cultural Tours",
    description:
      "25 years of excellence in South African safari tours, Big 5 wildlife experiences, and cultural adventures. TTOS registered tour operator.",
    images: ["/images/packages/madikwe_game_park_experiance_1.jpeg"],
    creator: "@FhulufheloTours",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Travel & Tourism",
  classification: "Tourism Services",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Johannesburg, South Africa",
    "geo.position": "-26.2041;28.0473",
    ICBM: "-26.2041, 28.0473",
    "business:contact_data:street_address": "Johannesburg, South Africa",
    "business:contact_data:locality": "Johannesburg",
    "business:contact_data:region": "Gauteng",
    "business:contact_data:postal_code": "2000",
    "business:contact_data:country_name": "South Africa",
    "business:contact_data:phone_number": "+27822585189",
    "business:contact_data:website": "https://fhulufhelotours.co.za",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#A0522D" />
        <meta name="msapplication-TileColor" content="#FFF8F0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Fhulufhelo Tours" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://wa.me" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Fhulufhelo Tours",
              description:
                "Premier South African tour operator specializing in safari tours, cultural experiences, and custom travel packages with 25 years of excellence.",
              url: "https://fhulufhelotours.co.za",
              logo: "https://fhulufhelotours.co.za/logo.jpg",
              image: [
                "https://fhulufhelotours.co.za/images/packages/pilanesberg_game_park_wildlife_experiance_2.jpg",
                "https://fhulufhelotours.co.za/images/packages/kruger_and_Panorama _route_expreiance_1.jpg",
                "https://fhulufhelotours.co.za/images/packages/madikwe_game_park_experiance_1.jpeg",
                "https://fhulufhelotours.co.za/images/daytours/sowetotour_local_community_visit.webp",
              ],
              telephone: "+27822585189",
              email: "info@fhulufhelotours.co.za",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "South Africa",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.2041,
                longitude: 28.0473,
              },
              foundingDate: "1999",
              areaServed: [
                {
                  "@type": "Country",
                  name: "South Africa",
                },
              ],
              serviceType: [
                "Safari Tours",
                "Cultural Tours",
                "Day Tours",
                "Multi-day Packages",
                "Custom Tours",
                "Wildlife Experiences",
                "Airport Transfers",
                "Visa Services",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Tour Packages",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "TouristTrip",
                      name: "Pilanesberg Game Park Wildlife Experience",
                      description: "2-night Big 5 safari experience in malaria-free Pilanesberg Game Park",
                      touristType: "Wildlife Enthusiast",
                      image:
                        "https://fhulufhelotours.co.za/images/packages/pilanesberg_game_park_wildlife_experiance_2.jpg",
                    },
                    price: "4500",
                    priceCurrency: "ZAR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "TouristTrip",
                      name: "Soweto Cultural Tour",
                      description: "Full day cultural experience in historic Soweto township",
                      touristType: "Cultural Tourist",
                      image: "https://fhulufhelotours.co.za/images/daytours/sowetotour_local_community_visit.webp",
                    },
                    price: "850",
                    priceCurrency: "ZAR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "TouristTrip",
                      name: "Kruger National Park & Panorama Route",
                      description: "4-day combination of wildlife safari and scenic route experience",
                      touristType: "Adventure Tourist",
                      image:
                        "https://fhulufhelotours.co.za/images/packages/kruger_and_Panorama _route_expreiance_1.jpg",
                    },
                    price: "6800",
                    priceCurrency: "ZAR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "TouristTrip",
                      name: "Madikwe Game Park Wildlife Experience",
                      description: "Exclusive 2-night luxury safari experience in Madikwe Game Reserve",
                      touristType: "Luxury Tourist",
                      image: "https://fhulufhelotours.co.za/images/packages/madikwe_game_park_experiance_1.jpeg",
                    },
                    price: "5200",
                    priceCurrency: "ZAR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "TouristTrip",
                      name: "Triland Route Experience",
                      description: "7-day multi-country adventure through South Africa, eSwatini, and Mozambique",
                      touristType: "Adventure Tourist",
                      image: "https://fhulufhelotours.co.za/images/packages/triland_route_experience_1.webp",
                    },
                    price: "15000",
                    priceCurrency: "ZAR",
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1500",
                bestRating: "5",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Sarah Johnson",
                  },
                  reviewBody:
                    "Exceptional safari experience with Fhulufhelo Tours. Professional guides, amazing wildlife sightings, and excellent service throughout our Pilanesberg adventure.",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Michael Chen",
                  },
                  reviewBody:
                    "The Soweto tour was incredibly moving and educational. Our guide was knowledgeable and passionate about sharing the history and culture. Highly recommended!",
                },
              ],
              sameAs: [
                "https://www.facebook.com/FhulufheloTours",
                "https://www.instagram.com/fhulufhelotours",
                "https://www.twitter.com/FhulufheloTours",
              ],
              memberOf: {
                "@type": "Organization",
                name: "Tourism Trade Organization of South Africa",
                alternateName: "TTOS",
              },
            }),
          }}
        />

        {/* Additional Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Fhulufhelo Tours",
              image: [
                "https://fhulufhelotours.co.za/logo.jpg",
                "https://fhulufhelotours.co.za/images/packages/pilanesberg_game_park_wildlife_experiance_2.jpg",
                "https://fhulufhelotours.co.za/images/daytours/sowetotour_local_community_visit.webp",
              ],
              "@id": "https://fhulufhelotours.co.za",
              url: "https://fhulufhelotours.co.za",
              telephone: "+27822585189",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Johannesburg",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                postalCode: "2000",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.2041,
                longitude: 28.0473,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              priceRange: "R850-R17500",
              paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
              currenciesAccepted: "ZAR",
            }),
          }}
        />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://fhulufhelotours.co.za",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
