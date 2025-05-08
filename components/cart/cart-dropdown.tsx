"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart/cart-provider"
import { formatPrice } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function CartDropdown() {
  const [open, setOpen] = useState(false)
  const { items, removeItem, updateQuantity, itemCount, subtotal } = useCart()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              {itemCount}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>Shopping Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-1 pr-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-start gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-md border">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <div className="flex text-sm text-muted-foreground">
                        {item.size && <p className="mr-2">Size: {item.size}</p>}
                        {item.color && <p>Color: {item.color}</p>}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <span>-</span>
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-4 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <span>+</span>
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span>{formatPrice(item.price * item.quantity)}</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeItem(item.id)}>
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="pr-6">
              <Separator className="mb-4" />
              <div className="space-y-1.5 pb-4 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>
              <SheetFooter className="flex flex-col gap-2 pb-2">
                <Button asChild className="w-full" onClick={() => setOpen(false)}>
                  <Link href="/checkout">Checkout</Link>
                </Button>
                <Button variant="outline" asChild className="w-full" onClick={() => setOpen(false)}>
                  <Link href="/cart">View Cart</Link>
                </Button>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" aria-hidden="true" />
            <div className="text-center">
              <h3 className="text-lg font-medium">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
            </div>
            <Button asChild className="mt-4" onClick={() => setOpen(false)}>
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
