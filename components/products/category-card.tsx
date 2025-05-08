import Link from "next/link"

import { cn } from "@/lib/utils"

interface CategoryCardProps {
  category: {
    id: string
    name: string
    image: string
    itemCount: number
  }
  className?: string
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.id}`}
      className={cn("group relative overflow-hidden rounded-lg border", className)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-medium">{category.name}</h3>
        <p className="text-sm opacity-90">{category.itemCount} items</p>
      </div>
    </Link>
  )
}
