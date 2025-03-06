import Image from "next/image";
import { testimonials, colors } from "../config/siteConfig";

export default function TestimonialsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center tracking-tight">
        {testimonials.title}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.items.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#2F4238]/10 p-6 rounded-lg text-center relative shadow-sm border border-[#2F4238]/20"
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-[#C76F41]/20 shadow-sm">
              <Image
                src={testimonial.image}
                alt={`${testimonial.name} testimonial`}
                fill
                className="object-cover"
              />
            </div>
            <div className="pt-10">
              <p className="text-lg italic mb-4 text-[#2F4238] leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="font-semibold text-[#1A3A3A]">{testimonial.name}</p>
              <p className="text-sm text-[#C76F41]">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
