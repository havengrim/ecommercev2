import { Star } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=80&width=80&text=SJ",
      rating: 5,
      text: "I absolutely love the quality of the clothes. The fit is perfect and the material is so comfortable. Will definitely be ordering more!",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=80&width=80&text=MC",
      rating: 4,
      text: "Great selection of products and fast shipping. The customer service was very helpful when I needed to exchange a size.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg?height=80&width=80&text=ER",
      rating: 5,
      text: "StyleShop has become my go-to for fashion. The prices are reasonable and the quality exceeds expectations. Highly recommend!",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-lg">
              Don't just take our word for it. Here's what our customers have to say about their shopping experience.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col space-y-4 rounded-lg border p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
