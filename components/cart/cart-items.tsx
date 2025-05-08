"use client"

import { Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { useCart } from "@/components/cart/cart-provider"
import { Separator } from "@/components/ui/separator"

export function CartItems() {
  const { items, removeItem, updateQuantity } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center">
        <h2 className="text-lg font-medium">Your cart is empty</h2>
        <p className="text-sm text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <a href="/products">Browse Products</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {items.map((item) => (
        <div key={`${item.id}-${item.size}-${item.color}`}>
          <div className="flex items-start space-x-4">
            <div className="h-24 w-24 overflow-hidden rounded-md border">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="font-medium">{item.name}</h3>
              <div className="flex text-sm text-muted-foreground">
                {item.size && <p className="mr-2">Size: {item.size}</p>}
                {item.color && <p>Color: {item.color}</p>}
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  disabled={item.quantity <= 1}
                >
                  <span>-</span>
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <span>+</span>
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Remove item</span>
              </Button>
            </div>
          </div>
          <Separator className="mt-4" />
        </div>
      ))}
    </div>
  )
}
