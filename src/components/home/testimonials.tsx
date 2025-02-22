"use client";

import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "John Doe",
      role: "A Fan of ByteBash",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      quote: "ByteBash is a 100% to win the Hackathon 2025 in Burgas!",
    },
    {
      name: "Jane Smith",
      role: "A Fan of ByteBash",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      quote:
        "The user interface is intuitive and the features are exactly what we needed.",
    },
    {
      name: "Mike Johnson",
      role: "A Fan of ByteBash",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      quote: "This is the best app, my school is much better now.",
    },
  ];

  return (
    <section className="bg-gray-50 px-10 py-20">
      <p className="text-center text-sm font-bold uppercase tracking-widest text-primary">
        Testimonials
      </p>
      <h2 className="mb-14 mt-2 text-center text-4xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
        What our customers say
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-background">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="mr-4 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                &quot;{testimonial.quote}&quot;
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
