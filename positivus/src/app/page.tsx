"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import FakeHeight from "../components/layout/FakeHeight";

export default function Hero() {
  return (
    <>
    <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:pt-5 lg:pb-12">
      <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h1
            className="text-5xl font-medium leading-tight text-[#191A23] md:text-6xl lg:text-[64px]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            Navigating the
            <br />
            digital landscape
            <br />
            for{" "}
            <span className="inline-block min-w-[220px] underline decoration-2 underline-offset-8">
              <Typewriter
                words={["success", "growth", "reach", "visibility"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 text-lg text-[#191A23] md:text-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </motion.p>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-6 cursor-pointer rounded-[14px] bg-[#191A23] px-8 py-5 text-lg font-medium text-white"
          >
            Book a Consultation
          </motion.button>
        </motion.div>

        <motion.div
          className="w-full max-w-[600px]"
          initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            rotate: { duration: 0.8 },
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
          }}
        >
          <img
            src="https://positivustheme.vercel.app/_image?href=%2F_astro%2Fhero.Cc0GD7y9.svg&w=601&h=515&f=svg"
            alt="Digital Marketing Illustration"
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
    <FakeHeight />
      <FakeHeight />
    </>
    
  );
}