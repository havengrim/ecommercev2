import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/products/product-card"
import images from "@/public/images"

export function RelatedProducts() {
  // Sample related products data
  const relatedProducts = [
    {
      id: "2",
      name: "Slim Fit Jeans",
      price: 59.99,
      image: images.slim,
      category: "Men",
      rating: 4.2,
      reviewCount: 85,
      isNew: false,
    },
    {
      id: "5",
      name: "Casual Sneakers",
      price: 69.99,
      image: images.casual,
      category: "Footwear",
      rating: 4.4,
      reviewCount: 78,
      isNew: true,
    },
    {
      id: "6",
      name: "Denim Jacket",
      price: 89.99,
      image: images.denim,
      category: "Men",
      rating: 4.7,
      reviewCount: 112,
      isNew: false,
    },
    {
      id: "8",
      name: "Aviator Sunglasses",
      price: 35.99,
      image: images.glass,
      category: "Accessories",
      rating: 4.5,
      reviewCount: 89,
      isNew: true,
    },
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight">You May Also Like</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/products" className="flex items-center gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
