"use client"

import { usePathname } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/layout/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { CartDropdown } from "@/components/cart/cart-dropdown"
import { UserDropdown } from "@/components/user/user-dropdown"
import { MobileNav } from "@/components/layout/mobile-nav"

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-16 overflow-hidden">

        {/* Left Nav */}
        <div className="flex items-center">
          <MainNav />
          <MobileNav />
        </div>

        {/* Search Bar Centered, Responsive Width */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block w-[60%] md:max-w-lg sm:max-w-sm">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none"
            />
          </div>
        </div>

        {/* Right Nav */}
        <div className="ml-auto flex items-center space-x-4">
          <CartDropdown />
          <UserDropdown />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
