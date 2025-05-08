"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart/cart-provider"
import { useToast } from "@/components/ui/use-toast"

export function CheckoutForm() {
  const router = useRouter()
  const { clearCart } = useCart()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      clearCart()
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase.",
      })
      router.push("/checkout/success")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              We'll use this information to send your order confirmation and shipping updates.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shipping Address</CardTitle>
            <CardDescription>Enter the address where you want your order delivered.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address">Street Address</Label>
              <Input id="address" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
              <Input id="address2" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State / Province</Label>
                <Select required>
                  <SelectTrigger id="state">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ca">California</SelectItem>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="tx">Texas</SelectItem>
                    <SelectItem value="fl">Florida</SelectItem>
                    <SelectItem value="il">Illinois</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP / Postal Code</Label>
                <Input id="zip" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select defaultValue="us" required>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="mx">Mexico</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shipping Method</CardTitle>
            <CardDescription>Choose how you want your order shipped.</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="standard" className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard" className="flex flex-col">
                    <span className="font-medium">Standard Shipping</span>
                    <span className="text-sm text-muted-foreground">3-5 business days</span>
                  </Label>
                </div>
                <div className="font-medium">Free</div>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express" className="flex flex-col">
                    <span className="font-medium">Express Shipping</span>
                    <span className="text-sm text-muted-foreground">1-2 business days</span>
                  </Label>
                </div>
                <div className="font-medium">$9.99</div>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment</CardTitle>
            <CardDescription>All transactions are secure and encrypted.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="card">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="card">Credit Card</TabsTrigger>
                <TabsTrigger value="paypal">PayPal</TabsTrigger>
              </TabsList>
              <TabsContent value="card" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <div className="relative">
                    <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                    <CreditCard className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name-on-card">Name on Card</Label>
                  <Input id="name-on-card" required />
                </div>
              </TabsContent>
              <TabsContent value="paypal" className="pt-4">
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    You will be redirected to PayPal to complete your purchase securely.
                  </p>
                  <Button type="button" className="w-full">
                    Continue with PayPal
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Processing..." : "Place Order"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </form>
  )
}
