"use client"

import Link from "next/link"
import { User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UserDropdown() {
  // This is a placeholder for authentication state
  const isAuthenticated = false

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
          <span className="sr-only">User menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {isAuthenticated ? (
          <>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/account">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/account/orders">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/account/wishlist">Wishlist</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/account/addresses">Addresses</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link href="/login">Sign in</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/register">Create account</Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
