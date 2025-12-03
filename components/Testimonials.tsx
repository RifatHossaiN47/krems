import React from "react";
import { Quote, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallBack";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "KREMS delivered our e-commerce platform ahead of schedule with exceptional quality. Their technical expertise and communication made the entire process seamless.",
      author: "Sarah Chen",
      role: "CTO, RetailPro",
      rating: 5,
    },
    {
      quote:
        "The AI document processing system they built saved our team hundreds of hours. The RAG implementation is incredibly accurate and the team's ML knowledge is world-class.",
      author: "David Martinez",
      role: "Managing Partner, Legal Innovations",
      rating: 5,
    },
  ];

  const clientLogos = [
    { name: "TechCorp", width: 120 },
    { name: "DataFlow", width: 100 },
    { name: "CloudBase", width: 110 },
    { name: "AI Systems", width: 115 },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        {/* Testimonials */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">What Clients Say</h2>
          <p className="text-xl text-[var(--color-text-secondary)]">
            Real feedback from companies we have partnered with.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--color-surface)] rounded-xl p-8 relative shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[var(--color-teal-500)] to-[var(--color-orange-500)] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[var(--color-orange-500)] text-[var(--color-orange-500)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-[var(--color-text-primary)] mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-[var(--color-gray-200)] pt-4">
                <div className="font-semibold text-[var(--color-navy-800)]">
                  {testimonial.author}
                </div>
                <div className="text-sm text-[var(--color-text-muted)]">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="border-t border-[var(--color-gray-200)] pt-16">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
              Trusted by Forward-Thinking Companies
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <div
                  className="px-6 py-4 bg-[var(--color-gray-100)] rounded-lg font-bold text-[var(--color-gray-600)] text-center"
                  style={{ minWidth: `${logo.width}px` }}
                >
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
