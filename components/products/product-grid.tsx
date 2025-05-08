import { ProductCard } from "@/components/products/product-card"

interface ProductGridProps {
  products: Array<{
    id: string
    name: string
    price: number
    image: string
    category: string
    rating: number
    reviewCount: number
    isNew?: boolean
  }>
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
