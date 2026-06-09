"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  description: string;
};

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:gap-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="w-fit rounded-lg bg-[#B9FF66] px-3 py-1 text-4xl font-medium text-black md:text-5xl">
        {title}
      </h2>

      <p className="max-w-3xl text-lg text-[#191A23] md:text-xl">
        {description}
      </p>
    </motion.div>
  );
}