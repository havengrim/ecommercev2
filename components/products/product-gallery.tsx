"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg border">
        <div className="aspect-square">
          <img
            src={images[currentImage] || "/placeholder.svg"}
            alt="Product image"
            className="h-full w-full object-cover"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 text-foreground"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous image</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 text-foreground"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next image</span>
        </Button>
      </div>
      <div className="flex space-x-2 overflow-auto pb-1">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative overflow-hidden rounded border ${currentImage === index ? "ring-2 ring-primary" : ""}`}
            onClick={() => setCurrentImage(index)}
          >
            <div className="h-20 w-20">
              <img
                src={image || "/placeholder.svg"}
                alt={`Product thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
