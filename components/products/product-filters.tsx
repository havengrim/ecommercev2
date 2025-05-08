"use client"

import { useState } from "react"
import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 200])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const categories = [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "accessories", label: "Accessories" },
    { id: "footwear", label: "Footwear" },
  ]

  const sizes = [
    { id: "xs", label: "XS" },
    { id: "s", label: "S" },
    { id: "m", label: "M" },
    { id: "l", label: "L" },
    { id: "xl", label: "XL" },
  ]

  const colors = [
    { id: "black", label: "Black" },
    { id: "white", label: "White" },
    { id: "blue", label: "Blue" },
    { id: "red", label: "Red" },
    { id: "green", label: "Green" },
  ]

  const sortOptions = [
    { id: "newest", label: "Newest" },
    { id: "price-low-high", label: "Price: Low to High" },
    { id: "price-high-low", label: "Price: High to Low" },
    { id: "best-selling", label: "Best Selling" },
  ]

  const FiltersContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-sm font-medium">Sort By</h3>
        <RadioGroup defaultValue="newest">
          {sortOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <RadioGroupItem value={option.id} id={`sort-${option.id}`} />
              <Label htmlFor={`sort-${option.id}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <Separator />
      <div>
        <h3 className="mb-4 text-sm font-medium">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={`category-${category.id}`} />
              <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="mb-4 text-sm font-medium">Price Range</h3>
        <Slider defaultValue={priceRange} max={200} step={1} onValueChange={setPriceRange} />
        <div className="mt-2 flex items-center justify-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="mb-4 text-sm font-medium">Sizes</h3>
        <div className="space-y-2">
          {sizes.map((size) => (
            <div key={size.id} className="flex items-center space-x-2">
              <Checkbox id={`size-${size.id}`} />
              <Label htmlFor={`size-${size.id}`}>{size.label}</Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="mb-4 text-sm font-medium">Colors</h3>
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color.id} className="flex items-center space-x-2">
              <Checkbox id={`color-${color.id}`} />
              <Label htmlFor={`color-${color.id}`}>{color.label}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="hidden md:block">
        <FiltersContent />
      </div>
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Products</h1>
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FiltersContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}
