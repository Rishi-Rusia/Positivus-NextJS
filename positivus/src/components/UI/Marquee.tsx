"use client";

import { motion } from "framer-motion";

type MarqueeProps = {
  items: string[];
  speed?: number;
};

export default function Marquee({
  items,
  speed = 30,
}: MarqueeProps) {
  const content = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-[#191A23] bg-[#191A23] py-6">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {content.map((item, index) => (
          <div
            key={index}
            className="mx-8 flex items-center gap-8"
          >
            <span className="text-2xl font-medium text-[#B9FF66] md:text-3xl">
              {item}
            </span>

            <span className="text-2xl text-white md:text-3xl">
              •
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}