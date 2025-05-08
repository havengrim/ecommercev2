import Link from "next/link"

import { Button } from "@/components/ui/button"

export function FeaturedSection() {
  return (
    <section className="bg-muted py-12 md:py-16 lg:py-20 w-full">
      <div className="px-8 md:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Summer Collection</h2>
              <p className="text-muted-foreground md:text-lg">
                Discover our latest summer collection featuring lightweight fabrics and vibrant colors perfect for the
                season.
              </p>
            </div>
            <div>
              <Button asChild size="lg">
                <Link href="/products">Shop Collection</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg?height=400&width=600&text=Summer+Collection"
              alt="Summer Collection"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
