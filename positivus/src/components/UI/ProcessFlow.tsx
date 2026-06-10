"use client";

import { motion } from "framer-motion";

const steps = [
  "Discovery",
  "Strategy",
  "Execution",
  "Optimization",
  "Growth",
];

export default function ProcessFlow() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-6 md:grid-cols-5">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="rounded-[35px] border border-[#191A23] bg-[#F3F3F3] p-6 text-center shadow-[0_5px_0_0_#191A23]"
          >
            <div className="mb-3 text-4xl">
              {index + 1}
            </div>

            <div className="font-medium">
              {step}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}