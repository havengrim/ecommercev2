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
      <div className="flex h-16 items-center p-6">
        <MainNav />
        <MobileNav />
        <div className="hidden flex-1 items-center justify-center px-2 md:flex">
          <div className="w-full max-w-lg">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <CartDropdown />
            <UserDropdown />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
