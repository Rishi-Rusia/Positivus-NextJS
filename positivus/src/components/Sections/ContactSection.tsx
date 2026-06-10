"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "../layout/SectionHeader";

export default function ContactSection() {
  const [contactType, setContactType] = useState("hi");

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <SectionHeader
        title="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 overflow-hidden rounded-[45px] bg-[#F3F3F3]"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Form */}
          <div className="flex-1 p-8 md:p-12">
            {/* Radio Buttons */}
            <div className="mb-10 flex flex-wrap gap-8">
              <label className="flex cursor-pointer items-center gap-3">
                <button
                  type="button"
                  onClick={() => setContactType("hi")}
                  className={`flex h-7 w-7 items-center justify-center rounded-full border border-[#191A23] ${
                    contactType === "hi"
                      ? "bg-[#B9FF66]"
                      : "bg-white"
                  }`}
                >
                  {contactType === "hi" && (
                    <div className="h-3 w-3 rounded-full bg-[#B9FF66]" />
                  )}
                </button>

                <span>Say Hi</span>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <button
                  type="button"
                  onClick={() => setContactType("quote")}
                  className={`flex h-7 w-7 items-center justify-center rounded-full border border-[#191A23] ${
                    contactType === "quote"
                      ? "bg-[#B9FF66]"
                      : "bg-white"
                  }`}
                >
                  {contactType === "quote" && (
                    <div className="h-3 w-3 rounded-full bg-[#B9FF66]" />
                  )}
                </button>

                <span>Get a Quote</span>
              </label>
            </div>

            <form className="max-w-xl space-y-6">
              <div>
                <label className="mb-2 block text-sm">
                  Name*
                </label>

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-[14px] border border-[#191A23] bg-white px-6 py-4 outline-none transition-all focus:border-[#B9FF66]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Email*
                </label>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-[14px] border border-[#191A23] bg-white px-6 py-4 outline-none transition-all focus:border-[#B9FF66]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Message*
                </label>

                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full resize-none rounded-[14px] border border-[#191A23] bg-white px-6 py-4 outline-none transition-all focus:border-[#B9FF66]"
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-[14px] bg-[#191A23] px-8 py-5 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Send
              </button>
            </form>
          </div>

          {/* Illustration */}
          <div className="relative hidden items-center justify-center overflow-hidden lg:flex lg:w-[40%]">
            <motion.img
              src="https://positivustheme.vercel.app/_image?href=%2F_astro%2Fcontact-pic.BrB0SfUf.png&w=692&h=649&f=webp"
              alt="Contact Illustration"
              className="absolute right-[-180px] w-[650px] max-w-none"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}