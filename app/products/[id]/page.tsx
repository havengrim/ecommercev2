import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ProductGallery } from "@/components/products/product-gallery"
import { ProductInfo } from "@/components/products/product-info"
import { RelatedProducts } from "@/components/products/related-products"
import images from "@/public/images"

export const metadata: Metadata = {
  title: "Product Details | StyleShop",
  description: "View product details and add to cart",
}

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the product data based on the ID
  const product = {
    id: params.id,
    name: "Classic White T-Shirt",
    price: 29.99,
    description:
      "A comfortable and versatile white t-shirt made from 100% organic cotton. Perfect for everyday wear and easy to style with any outfit.",
    features: ["100% organic cotton", "Regular fit", "Crew neck", "Short sleeves", "Machine washable"],
    images: [
      images.whiteT.src,
      images.white1.src,
      images.white2.src,
      images.white3.src,
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray", "Blue"],
    category: "Men",
    rating: 4.5,
    reviewCount: 120,
    inStock: true,
  }

  return (
    <div className="px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/products" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to products
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>
      <Separator className="my-12" />
      <RelatedProducts />
    </div>
  )
}
