"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

type ProcessAccordionProps = {
  number: string;
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function ProcessAccordion({
  number,
  title,
  content,
  isOpen,
  onToggle,
}: ProcessAccordionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className={`overflow-hidden rounded-[45px] border border-[#191A23] shadow-[0_5px_0_0_#191A23] ${
        isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between px-6 py-6 text-left md:px-10 md:py-8"
      >
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-4xl font-medium md:text-6xl">
            {number}
          </span>

          <h3 className="text-xl font-medium md:text-3xl">
            {title}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#191A23] bg-[#F3F3F3] md:h-16 md:w-16">
          {isOpen ? (
            <Minus size={30} />
          ) : (
            <Plus size={30} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="px-6 pb-6 md:px-10 md:pb-10">
              <div className="mb-6 h-px bg-[#191A23]" />

              <p className="text-base leading-relaxed md:text-lg">
                {content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}