import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CartItems } from "@/components/cart/cart-items"
import { CartSummary } from "@/components/cart/cart-summary"

export const metadata: Metadata = {
  title: "Shopping Cart | StyleShop",
  description: "View and manage your shopping cart",
}

export default function CartPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/products" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <CartItems />
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  )
}
