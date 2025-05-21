import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Order Confirmation | StyleShop",
  description: "Your order has been placed successfully",
}

export default function CheckoutSuccessPage() {
  return (
    <div className=" flex flex-col items-center justify-center px-4 py-16 md:px-6 md:py-24">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
        <Check className="h-10 w-10 text-primary" />
      </div>
      <h1 className="mt-6 text-3xl font-bold">Thank You for Your Order!</h1>
      <p className="mt-2 text-center text-muted-foreground">
        Your order has been placed successfully. We've sent a confirmation email with all the details.
      </p>
      <div className="mt-8 max-w-md rounded-lg border p-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Order Number:</span>
            <span>#ORD-12345</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Date:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Payment Method:</span>
            <span>Credit Card</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Shipping Method:</span>
            <span>Standard Shipping</span>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/account/orders">View Order History</Link>
        </Button>
      </div>
    </div>
  )
}
