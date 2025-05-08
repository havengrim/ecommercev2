"use client"

import { useState } from "react"
import { Heart, ShoppingBag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatPrice } from "@/lib/utils"
import { useCart } from "@/components/cart/cart-provider"
import { useToast } from "@/components/ui/use-toast"

interface ProductInfoProps {
  product: {
    id: string
    name: string
    price: number
    description: string
    features: string[]
    sizes: string[]
    colors: string[]
    category: string
    rating: number
    reviewCount: number
    inStock: boolean
  }
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: "/placeholder.svg?height=600&width=600&text=T-Shirt+Front",
      quantity,
      size: selectedSize,
      color: selectedColor,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="mt-2 flex items-center gap-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="ml-1 font-medium">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
          <span className="text-sm text-muted-foreground">{product.category}</span>
        </div>
      </div>
      <div className="text-2xl font-bold">{formatPrice(product.price)}</div>
      <p className="text-muted-foreground">{product.description}</p>
      <div className="space-y-4">
        <div>
          <h3 className="mb-2 font-medium">Size</h3>
          <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <div key={size}>
                <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                <Label
                  htmlFor={`size-${size}`}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary"
                >
                  {size}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div>
          <h3 className="mb-2 font-medium">Color</h3>
          <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <div key={color}>
                <RadioGroupItem value={color} id={`color-${color}`} className="peer sr-only" />
                <Label
                  htmlFor={`color-${color}`}
                  className="flex h-10 cursor-pointer items-center justify-center rounded-md border px-3 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary"
                >
                  {color}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div>
          <h3 className="mb-2 font-medium">Quantity</h3>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              <span>-</span>
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="w-8 text-center">{quantity}</span>
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setQuantity(quantity + 1)}>
              <span>+</span>
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
        <Button size="lg" className="flex-1" onClick={handleAddToCart} disabled={!product.inStock}>
          <ShoppingBag className="mr-2 h-5 w-5" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
        <Button size="lg" variant="outline">
          <Heart className="mr-2 h-5 w-5" />
          Add to Wishlist
        </Button>
      </div>
      <Separator />
      <Tabs defaultValue="details">
        <TabsList className="w-full">
          <TabsTrigger value="details" className="flex-1">
            Details
          </TabsTrigger>
          <TabsTrigger value="shipping" className="flex-1">
            Shipping
          </TabsTrigger>
          <TabsTrigger value="returns" className="flex-1">
            Returns
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="space-y-4 pt-4">
          <h3 className="font-medium">Features</h3>
          <ul className="list-inside list-disc space-y-1 text-muted-foreground">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="shipping" className="pt-4">
          <p className="text-muted-foreground">
            We offer free standard shipping on all orders over $50. For orders under $50, standard shipping is $5.99.
            Expedited shipping is available for an additional fee.
            <br />
            <br />
            Orders are typically processed within 1-2 business days. Delivery times vary depending on location, but
            standard shipping usually takes 3-7 business days.
          </p>
        </TabsContent>
        <TabsContent value="returns" className="pt-4">
          <p className="text-muted-foreground">
            We accept returns within 30 days of delivery. Items must be in original condition with tags attached.
            <br />
            <br />
            To initiate a return, please contact our customer service team. Return shipping costs are the responsibility
            of the customer unless the item is defective or incorrect.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
