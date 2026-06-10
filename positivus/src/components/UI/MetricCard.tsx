"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

type Props = {
  value: number;
  suffix?: string;
  label: string;
};

export default function MetricCard({
  value,
  suffix = "",
  label,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-[35px] border border-[#191A23] bg-[#B9FF66] p-8 shadow-[0_5px_0_0_#191A23]"
    >
      <div className="text-5xl font-medium">
        <CountUp
          end={value}
          duration={2}
          enableScrollSpy
          scrollSpyOnce
        />
        {suffix}
      </div>

      <p className="mt-2">{label}</p>
    </motion.div>
  );
}