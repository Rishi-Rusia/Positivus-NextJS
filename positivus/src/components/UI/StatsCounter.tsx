"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

type StatsCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export default function StatsCounter({
  value,
  suffix = "",
  label,
}: StatsCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{
        y: -4,
      }}
      className="rounded-[35px] border border-[#191A23] bg-[#B9FF66] p-8 shadow-[0_5px_0_0_#191A23]"
    >
      <h3 className="text-5xl font-medium text-[#191A23]">
        <CountUp
          end={value}
          duration={2}
          enableScrollSpy
          scrollSpyOnce
        />
        {suffix}
      </h3>

      <p className="mt-2 text-lg text-[#191A23]">
        {label}
      </p>
    </motion.div>
  );
}