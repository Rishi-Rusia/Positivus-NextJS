"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-12 text-center">
      <motion.img
        src="https://positivustheme.vercel.app/404.svg"
        alt="404 Illustration"
        className="mb-8 w-full max-w-[520px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      <motion.h1
        className="max-w-4xl text-3xl font-medium text-[#191A23] md:text-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
      >
        Sorry, we couldn't find the page you were looking for
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.5,
        }}
      >
        <Link
          href="/"
          className="mt-10 inline-flex cursor-pointer items-center justify-center rounded-[18px] bg-[#191A23] px-10 py-5 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Go Home
        </Link>
      </motion.div>
    </main>
  );
}