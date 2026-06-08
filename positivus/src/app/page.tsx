"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-8">
      <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-medium leading-tight text-[#191A23] md:text-6xl lg:text-[64px]">
            Navigating the
            <br />
            digital landscape
            <br />
            for success
          </h1>

          <p className="mt-8 text-lg text-[#191A23] md:text-xl">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 rounded-[14px] bg-[#191A23] px-8 py-5 text-lg font-medium text-white"
          >
            Book a Consultation
          </motion.button>
        </motion.div>

        <motion.div
          className="w-full max-w-[600px]"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src="https://positivustheme.vercel.app/_image?href=%2F_astro%2Fhero.Cc0GD7y9.svg&w=601&h=515&f=svg"
            alt="Digital Marketing Illustration"
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}