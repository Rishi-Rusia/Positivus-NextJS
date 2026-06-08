"use client";

import { motion } from "framer-motion";

const brands = [
  "https://positivustheme.vercel.app/_image?href=%2F_astro%2Fcompany-logo6.BTRoJjnx.svg&w=125&h=48&f=svg",
  "https://positivustheme.vercel.app/_image?href=%2F_astro%2Fcompany-logo5.BbmFav3z.svg&w=127&h=48&f=svg",
  "https://positivustheme.vercel.app/_image?href=%2F_astro%2Fcompany-logo4.COtkDUvM.svg&w=129&h=48&f=svg",
  "https://positivustheme.vercel.app/_image?href=%2F_astro%2Fcompany-logo3.c2biK_9v.svg&w=147&h=48&f=svg",
  "https://positivustheme.vercel.app/_image?href=%2F_astro%2Fcompany-logo2.CREQfids.svg&w=126&h=48&f=svg",
  "https://positivustheme.vercel.app/_image?href=%2F_astro%2Fcompany-logo1.syO998vd.svg&w=111&h=48&f=svg",
];

export default function Brands() {
  return (
    <section className="relative mx-12 my-5 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex w-max items-center gap-20"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 cursor-pointer"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="h-auto grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent" />

        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}