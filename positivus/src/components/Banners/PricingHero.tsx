"use client";

import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-[220px] font-bold text-[#191A23]/5 lg:block">
        PRICING
      </div>

      <motion.div
        className="absolute right-10 top-20 hidden lg:block"
        animate={{
          y: [0, -12, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        <div className="rounded-[24px] border border-[#191A23] bg-[#B9FF66] px-6 py-4 shadow-[0_5px_0_0_#191A23]">
          SEO
        </div>
      </motion.div>

      <motion.div
        className="absolute left-20 top-40 hidden lg:block"
        animate={{
          y: [0, -15, 0],
          rotate: [3, -3, 3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
      >
        <div className="rounded-[24px] border border-[#191A23] bg-[#F3F3F3] px-6 py-4 shadow-[0_5px_0_0_#191A23]">
          PPC
        </div>
      </motion.div>

      <div className="relative text-center">
        <div className="mb-6 inline-block rounded-xl bg-[#B9FF66] px-4 py-2">
          Pricing
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-medium text-[#191A23] md:text-6xl lg:text-[72px]">
          Transparent Pricing For Every Stage Of Growth
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-xl text-[#191A23]">
          Flexible plans designed to help businesses grow with confidence.
        </p>
      </div>
    </section>
  );
}