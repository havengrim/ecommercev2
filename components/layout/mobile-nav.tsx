"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, ShoppingBag } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <div className="px-7">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <ShoppingBag className="mr-2 h-4 w-4" />
              <span className="font-bold">StyleShop</span>
            </Link>
          </div>
          <div className="my-4 px-7">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search products..." className="w-full bg-background pl-8 shadow-none" />
            </div>
          </div>
          <nav className="flex flex-col space-y-3 px-7">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                pathname === "/" ? "text-foreground" : "text-foreground/60",
              )}
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                pathname?.startsWith("/products") ? "text-foreground" : "text-foreground/60",
              )}
            >
              Shop
            </Link>
            <Link
              href="/categories"
              onClick={() => setOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                pathname?.startsWith("/categories") ? "text-foreground" : "text-foreground/60",
              )}
            >
              Categories
            </Link>
            <Link
              href="/sale"
              onClick={() => setOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                pathname?.startsWith("/sale") ? "text-foreground" : "text-foreground/60",
              )}
            >
              Sale
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Link href="/" className="flex items-center space-x-2">
        <ShoppingBag className="h-6 w-6" />
        <span className="font-bold">StyleShop</span>
      </Link>
    </div>
  )
}
