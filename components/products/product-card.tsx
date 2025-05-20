"use client"

import Link from "next/link"
import { Heart, Star } from "lucide-react"

import { cn, formatPrice } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart/cart-provider"
import { useToast } from "@/components/ui/use-toast"
import { StaticImageData } from "next/image"
interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image: string | StaticImageData 
    category: string
    rating: number
    reviewCount: number
    isNew?: boolean
  }
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

   const imageSrc = typeof product.image === "string" ? product.image : product.image.src
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: imageSrc,
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className={cn("group relative overflow-hidden rounded-lg border", className)}>
      <Link href={`/products/${product.id}`} className="relative block overflow-hidden">
        {product.isNew && <Badge className="absolute left-2 top-2 z-10">New</Badge>}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Heart className="h-5 w-5" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
        <div className="aspect-square overflow-hidden">
          <img
            src={imageSrc || "/placeholder.svg"} // ✅ must be a string
            alt={product.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-1 text-sm text-muted-foreground">{product.category}</div>
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="line-clamp-1 text-base font-medium">{product.name}</h3>
        </Link>
        <div className="mt-1 flex items-center gap-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount} reviews)</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="font-medium">{formatPrice(product.price)}</div>
          <Button size="sm" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
