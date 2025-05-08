"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { ShoppingBag } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-1 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <ShoppingBag className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">StyleShop</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Home
        </Link>
        <Link
          href="/products"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/products") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Shop
        </Link>
        <Link
          href="/categories"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/categories") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Categories
        </Link>
        <Link
          href="/sale"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/sale") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Sale
        </Link>
      </nav>
    </div>
  )
}
