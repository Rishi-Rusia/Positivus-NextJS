"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  image: string;
  variant?: "light" | "green" | "dark";
};

export default function ServiceCard({
  title,
  image,
  variant = "light",
}: ServiceCardProps) {
  const isDark = variant === "dark";

  const cardStyles = {
    light: "bg-[#F3F3F3]",
    green: "bg-[#B9FF66]",
    dark: "bg-[#191A23]",
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`flex min-h-[280px] cursor-pointer justify-between rounded-[32px] border border-black p-8 shadow-[0_6px_0_0_#191A23] ${cardStyles[variant]}`}
    >
      <div className="flex flex-col justify-between">
        <div>
          <span
            className={`inline-block rounded-lg px-2 py-1 text-2xl font-medium ${
              isDark ? "bg-white text-black" : "bg-[#B9FF66] text-black"
            }`}
          >
            {title}
          </span>
        </div>

        <motion.div
          whileHover="hover"
          className="flex items-center gap-4"
        >
          <motion.div
            variants={{
              hover: {
                rotate: 45,
              },
            }}
            transition={{
              duration: 0.25,
            }}
            className={`flex h-12 w-12 items-center justify-center rounded-full ${
              isDark ? "bg-white" : "bg-[#191A23]"
            }`}
          >
            <ArrowUpRight
              size={28}
              className={isDark ? "text-black" : "text-[#B9FF66]"}
            />
          </motion.div>

          <span
            className={`text-xl ${
              isDark ? "text-white" : "text-[#191A23]"
            }`}
          >
            Service Info
          </span>
        </motion.div>
      </div>

      <div className="ml-6 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-auto max-h-[180px] w-full max-w-[250px] object-contain"
        />
      </div>
    </motion.div>
  );
}