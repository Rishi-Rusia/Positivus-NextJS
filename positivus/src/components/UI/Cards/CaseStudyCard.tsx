"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type CaseStudyCardProps = {
  description: string;
};

export default function CaseStudyCard({
  description,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.02,
      }}
      className="cursor-pointer rounded-[45px] bg-[#191A23] p-8 text-white"
    >
      <div className="flex h-full min-h-[250px] flex-col justify-between">
        <p className="max-w-sm text-lg leading-relaxed">
          {description}
        </p>

        <div className="mt-8 flex items-center gap-3 text-[#B9FF66]">
          <span className="text-xl font-medium">
            Case Info
          </span>

          <motion.div
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={32} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}