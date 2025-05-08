"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the email to your API
    console.log("Subscribing email:", email)

    toast({
      title: "Subscribed!",
      description: "You've successfully subscribed to our newsletter.",
    })

    setEmail("")
  }

  return (
    <section className="bg-muted py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Join Our Newsletter</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By subscribing you agree to our{" "}
              <a href="/terms" className="underline underline-offset-2">
                Terms & Conditions
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
