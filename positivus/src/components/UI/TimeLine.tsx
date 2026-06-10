"use client";

import { motion } from "framer-motion";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({
  items,
}: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-[#B9FF66] md:block" />

      <div className="space-y-10">
        {items.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            <div className="w-full md:w-[45%]">
              <div className="rounded-[35px] border border-[#191A23] bg-[#F3F3F3] p-8 shadow-[0_5px_0_0_#191A23]">
                <div className="mb-2 text-3xl font-bold text-[#B9FF66]">
                  {item.year}
                </div>

                <h3 className="mb-3 text-2xl font-medium text-[#191A23]">
                  {item.title}
                </h3>

                <p className="text-[#191A23]">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}