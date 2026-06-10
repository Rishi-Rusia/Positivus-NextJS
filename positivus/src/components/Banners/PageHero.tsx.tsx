"use client";

import { motion } from "framer-motion";

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
  backgroundText: string;
};

export default function PageHero({
  badge,
  title,
  description,
  backgroundText,
}: PageHeroProps) {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none text-[220px] font-bold text-[#191A23]/5 lg:block">
        {backgroundText}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="relative text-center"
      >
        <div className="mb-6 inline-block rounded-xl bg-[#B9FF66] px-4 py-2 text-lg font-medium text-[#191A23]">
          {badge}
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-medium leading-tight text-[#191A23] md:text-6xl lg:text-[72px]">
          {title}
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-[#191A23] md:text-xl">
          {description}
        </p>
      </motion.div>
    </section>
  );
}