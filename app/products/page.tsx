import type { Metadata } from "next"
import { ProductGrid } from "@/components/products/product-grid"
import { ProductFilters } from "@/components/products/product-filters"

export const metadata: Metadata = {
  title: "Products | StyleShop",
  description: "Browse our collection of products",
}

export default function ProductsPage() {
  // Sample products data
  const products = [
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
    {
      id: "5",
      name: "Casual Sneakers",
      price: 69.99,
      image: "/placeholder.svg?height=400&width=300&text=Sneakers",
      category: "Footwear",
      rating: 4.4,
      reviewCount: 78,
      isNew: true,
    },
    {
      id: "6",
      name: "Denim Jacket",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=300&text=Jacket",
      category: "Men",
      rating: 4.7,
      reviewCount: 112,
      isNew: false,
    },
    {
      id: "7",
      name: "Pleated Midi Skirt",
      price: 45.99,
      image: "/placeholder.svg?height=400&width=300&text=Skirt",
      category: "Women",
      rating: 4.3,
      reviewCount: 67,
      isNew: false,
    },
    {
      id: "8",
      name: "Aviator Sunglasses",
      price: 35.99,
      image: "/placeholder.svg?height=400&width=300&text=Sunglasses",
      category: "Accessories",
      rating: 4.5,
      reviewCount: 89,
      isNew: true,
    },
  ]

  return (
    <div className="px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-4 md:space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
          <p className="text-muted-foreground">Browse our collection of products</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="hidden md:block">
            <ProductFilters />
          </div>
          <div className="md:col-span-3">
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  )
}
