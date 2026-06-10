"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export default function PricingCard({
  name,
  price,
  description,
  features,
  featured,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className={`rounded-[45px] border border-[#191A23] p-8 shadow-[0_5px_0_0_#191A23] ${
        featured
          ? "bg-[#B9FF66]"
          : "bg-[#F3F3F3]"
      }`}
    >
      <h3 className="text-3xl font-medium">
        {name}
      </h3>

      <div className="mt-4 text-6xl font-medium">
        {price}
      </div>

      <p className="mt-6">
        {description}
      </p>

      <div className="my-8 h-px bg-[#191A23]" />

      <ul className="space-y-4">
        {features.map((feature) => (
          <li key={feature}>
            ✓ {feature}
          </li>
        ))}
      </ul>

      <button className="mt-8 w-full rounded-[14px] bg-[#191A23] px-6 py-4 text-white">
        Get Started
      </button>
    </motion.div>
  );
}