"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/utils"
import { useCart } from "@/components/cart/cart-provider"

export function CheckoutSummary() {
  const { items, subtotal } = useCart()

  // Calculate shipping (free over $50)
  const shipping = subtotal > 50 ? 0 : 5.99

  // Calculate tax (example: 8%)
  const tax = subtotal * 0.08

  // Calculate total
  const total = subtotal + shipping + tax

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {items.map((item) => (
            <div key={`${item.id}-${item.size}-${item.color}`} className="flex justify-between text-sm">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax (estimated)</span>
            <span>{formatPrice(tax)}</span>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </CardContent>
    </Card>
  )
}
