import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { dayTours } from "@/data/packages"
import DayTourDetailClient from "./DayTourDetailClient"

interface DayTourDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return dayTours.map((tour) => ({
    id: tour.id,
  }))
}

export async function generateMetadata({ params }: DayTourDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const tour = dayTours.find((t) => t.id === id)

  if (!tour) {
    return {
      title: "Day Tour Not Found",
      description: "The day tour you're looking for doesn't exist.",
    }
  }

  const tourKeywords = [
    tour.name.toLowerCase(),
    `${tour.location.toLowerCase()} tour`,
    `${tour.duration.toLowerCase()} tour`,
    `${tour.category.toLowerCase()} tour`,
    "day tour South Africa",
    "Johannesburg tours",
    "cultural experience",
    "guided tour",
    "South African heritage",
  ]

  return {
    title: `${tour.name} - ${tour.duration} ${tour.category} Tour | Fhulufhelo Tours`,
    description: `${tour.description} Experience ${tour.location} with professional guides. ${tour.duration} tour from R${tour.price.adult.toLocaleString()}. Includes ${tour.inclusions.slice(0, 3).join(", ")}.`,
    keywords: tourKeywords,
    openGraph: {
      title: `${tour.name} - ${tour.category} Day Tour Experience`,
      description: `${tour.description.substring(0, 160)}...`,
      images:
        tour.images?.slice(0, 2).map((img) => ({
          url: img,
          width: 1200,
          height: 630,
          alt: `${tour.name} - ${tour.category} tour experience in ${tour.location}`,
        })) || [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tour.name} - ${tour.duration} Tour`,
      description: `Experience ${tour.location} with ${tour.highlights.slice(0, 3).join(", ")}. From R${tour.price.adult.toLocaleString()}.`,
      images: tour.images ? [tour.images[0]] : [],
    },
    alternates: {
      canonical: `/day-tours/${tour.id}`,
    },
    other: {
      "product:price:amount": tour.price.adult.toString(),
      "product:price:currency": tour.price.currency,
      "product:availability": "in stock",
      "product:condition": "new",
      "product:retailer_item_id": tour.id,
    },
  }
}

export default async function DayTourDetailPage({ params }: DayTourDetailPageProps) {
  const { id } = await params
  const tour = dayTours.find((t) => t.id === id)

  if (!tour) {
    notFound()
  }

  return <DayTourDetailClient tourData={tour} />
}
