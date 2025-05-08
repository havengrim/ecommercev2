"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/utils"
import { useCart } from "@/components/cart/cart-provider"

export function CartSummary() {
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
          <div className="flex justify-between text-sm">
            <span>Subtotal ({items.length} items)</span>
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
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/checkout">Proceed to Checkout</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
