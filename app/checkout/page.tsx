import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CheckoutForm } from "@/components/checkout/checkout-form"
import { CheckoutSummary } from "@/components/checkout/checkout-summary"

export const metadata: Metadata = {
  title: "Checkout | StyleShop",
  description: "Complete your purchase",
}

export default function CheckoutPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/cart" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Checkout</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <CheckoutForm />
        </div>
        <div>
          <CheckoutSummary />
        </div>
      </div>
    </div>
  )
}
