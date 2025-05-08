import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/products/product-card"
import { CategoryCard } from "@/components/products/category-card"
import { HeroCarousel } from "@/components/home/hero-carousel"
import { FeaturedSection } from "@/components/home/featured-section"
import { TestimonialSection } from "@/components/home/testimonial-section"
import { NewsletterSection } from "@/components/home/newsletter-section"

export default function HomePage() {
  // Sample featured products data
  const featuredProducts = [
    {
      id: "1",
      name: "Classic White T-Shirt",
      price: 29.99,
      image: "/placeholder.svg?height=400&width=300&text=T-Shirt",
      category: "Men",
      rating: 4.5,
      reviewCount: 120,
      isNew: true,
    },
    {
      id: "2",
      name: "Slim Fit Jeans",
      price: 59.99,
      image: "/placeholder.svg?height=400&width=300&text=Jeans",
      category: "Men",
      rating: 4.2,
      reviewCount: 85,
      isNew: false,
    },
    {
      id: "3",
      name: "Summer Floral Dress",
      price: 49.99,
      image: "/placeholder.svg?height=400&width=300&text=Dress",
      category: "Women",
      rating: 4.8,
      reviewCount: 210,
      isNew: true,
    },
    {
      id: "4",
      name: "Leather Crossbody Bag",
      price: 79.99,
      image: "/placeholder.svg?height=400&width=300&text=Bag",
      category: "Accessories",
      rating: 4.6,
      reviewCount: 95,
      isNew: false,
    },
  ]

  // Sample categories data
  const categories = [
    {
      id: "men",
      name: "Men",
      image: "/placeholder.svg?height=300&width=300&text=Men",
      itemCount: 152,
    },
    {
      id: "women",
      name: "Women",
      image: "/placeholder.svg?height=300&width=300&text=Women",
      itemCount: 238,
    },
    {
      id: "accessories",
      name: "Accessories",
      image: "/placeholder.svg?height=300&width=300&text=Accessories",
      itemCount: 86,
    },
    {
      id: "footwear",
      name: "Footwear",
      image: "/placeholder.svg?height=300&width=300&text=Footwear",
      itemCount: 112,
    },
  ]

  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Categories Section */}
      <section className="px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Shop by Category</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/categories" className="flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/products" className="flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <FeaturedSection />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  )
}
