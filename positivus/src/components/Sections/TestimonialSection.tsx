"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import SectionHeader from "../layout/SectionHeader";
import TestimonialCard from "../UI/Cards/TestimonialCard";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, GrowthNest",
    quote:
      "Working with this team completely changed how we approach digital marketing. Within six months our inbound leads nearly doubled, and our customer acquisition costs dropped significantly.",
  },
  {
    name: "Sophia Bennett",
    role: "Marketing Director, Elevate Health",
    quote:
      "Their strategic approach and attention to detail stood out from day one. Every campaign was backed by data, and the results consistently exceeded our expectations.",
  },
  {
    name: "Daniel Carter",
    role: "CEO, Atlas Logistics",
    quote:
      "We needed a partner who understood both branding and performance marketing. The team delivered on both fronts and helped us scale into new markets successfully.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Growth, FinBridge",
    quote:
      "Communication was seamless throughout the project. We always knew what was happening, why it was happening, and what results we could expect next.",
  },
  {
    name: "Marcus Reed",
    role: "Co-Founder, BrightPath",
    quote:
      "The content strategy they developed transformed our online presence. Engagement increased dramatically and our website became a major source of qualified leads.",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <SectionHeader
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />

      <div className="mt-10 overflow-hidden rounded-[45px] bg-[#191A23] px-6 py-12 md:px-12 md:py-16">
        <div className="relative flex min-h-[320px] items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                x: 120,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -120,
              }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
              className="w-full"
            >
              <TestimonialCard
                quote={testimonials[current].quote}
                name={testimonials[current].name}
                role={testimonials[current].role}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-10">
          <button
            onClick={prevSlide}
            className="cursor-pointer text-white transition-transform hover:scale-110"
          >
            <ArrowLeft size={38} />
          </button>

          <div className="flex items-center gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-4 w-4 rounded-full transition-all ${
                  current === index
                    ? "bg-[#B9FF66]"
                    : "bg-white"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="cursor-pointer text-white transition-transform hover:scale-110"
          >
            <ArrowRight size={38} />
          </button>
        </div>
      </div>
    </section>
  );
}