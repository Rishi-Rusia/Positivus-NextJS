"use client";

import { motion } from "framer-motion";

type CTASectionProps = {
  title: string;
  description: string;
  buttonText: string;
  image: string;
};

export default function CTASection({
  title,
  description,
  buttonText,
  image,
}: CTASectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[45px] bg-[#F3F3F3] px-8 py-10 md:px-14 md:py-14">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium text-[#191A23] md:text-5xl">
              {title}
            </h2>

            <p className="mt-6 text-lg text-[#191A23] md:text-xl">
              {description}
            </p>

            <button className="mt-8 cursor-pointer rounded-[14px] bg-[#191A23] px-8 py-5 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              {buttonText}
            </button>
          </div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-[420px]"
          >
            <img
              src={image}
              alt={title}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}