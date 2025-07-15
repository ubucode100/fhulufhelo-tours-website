import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Day Tour Not Found</h1>
        <p className="text-gray-600 mb-8">
          The day tour you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/day-tours">View All Day Tours</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
