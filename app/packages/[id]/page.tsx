import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { tourPackages } from "@/data/packages"
import PackageDetailClient from "./PackageDetailClient"

interface PackageDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return tourPackages.map((pkg) => ({
    id: pkg.id,
  }))
}

export async function generateMetadata({ params }: PackageDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const pkg = tourPackages.find((p) => p.id === id)

  if (!pkg) {
    return {
      title: "Package Not Found",
      description: "The safari package you're looking for doesn't exist.",
    }
  }

  const packageKeywords = [
    pkg.name.toLowerCase(),
    `${pkg.location.toLowerCase()} safari`,
    `${pkg.duration.toLowerCase()} safari package`,
    "Big 5 safari",
    "South African safari",
    `${pkg.accommodation.toLowerCase()}`,
    `${pkg.difficulty.toLowerCase()} safari`,
    "wildlife tour",
    "game drive",
    "safari experience",
  ]

  return {
    title: `${pkg.name} - ${pkg.duration} Safari Package | Fhulufhelo Tours`,
    description: `${pkg.description} Book your ${pkg.duration.toLowerCase()} safari experience at ${pkg.location} with ${pkg.accommodation.toLowerCase()}. Rated ${pkg.rating}/5 by ${pkg.reviewCount} travelers. From R${pkg.price.toLocaleString()}.`,
    keywords: packageKeywords,
    openGraph: {
      title: `${pkg.name} - Premium Safari Experience`,
      description: `${pkg.description.substring(0, 160)}...`,
      images: [
        {
          url: pkg.images[0],
          width: 1200,
          height: 630,
          alt: `${pkg.name} - Safari experience at ${pkg.location}`,
        },
        {
          url: pkg.images[1] || pkg.images[0],
          width: 1200,
          height: 630,
          alt: `${pkg.name} - Wildlife and accommodation`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pkg.name} - ${pkg.duration} Safari`,
      description: `Experience ${pkg.location} with ${pkg.accommodation.toLowerCase()}. ${pkg.highlights.slice(0, 3).join(", ")}. From R${pkg.price.toLocaleString()}.`,
      images: [pkg.images[0]],
    },
    alternates: {
      canonical: `/packages/${pkg.id}`,
    },
    other: {
      "product:price:amount": pkg.price.toString(),
      "product:price:currency": "ZAR",
      "product:availability": "in stock",
      "product:condition": "new",
      "product:retailer_item_id": pkg.id,
    },
  }
}

export default async function PackageDetailPage({ params }: PackageDetailPageProps) {
  const { id } = await params
  const pkg = tourPackages.find((p) => p.id === id)

  if (!pkg) {
    notFound()
  }

  return <PackageDetailClient packageData={pkg} />
}
