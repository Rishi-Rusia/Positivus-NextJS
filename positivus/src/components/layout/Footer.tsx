"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Use Cases", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-20 bg-[#191A23] text-white"
    >
      <div className="mx-auto max-w-7xl rounded-t-[45px] px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Image
            src="https://framerusercontent.com/images/SzMR1zeXdFWN7PpxCGhPJA4bY.png?scale-down-to=512"
            alt="Positivus"
            width={180}
            height={30}
          />

          <nav className="flex flex-wrap gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="underline transition-opacity hover:opacity-80"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            <Link
              href="#"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src="https://positivustheme.vercel.app/_image?href=%2F_astro%2Ffacebook.D0JOV-zG.svg&w=30&h=30&f=svg"
                alt="Facebook"
                className="h-8 w-8"
              />
            </Link>

            <Link
              href="#"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src="https://positivustheme.vercel.app/_image?href=%2F_astro%2Flinkedin.eKpMB-Du.svg&w=30&h=30&f=svg"
                alt="LinkedIn"
                className="h-8 w-8"
              />
            </Link>

            <Link
              href="#"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src="https://positivustheme.vercel.app/_image?href=%2F_astro%2Ftwitter.CkIHlicD.svg&w=30&h=30&f=svg"
                alt="Twitter"
                className="h-8 w-8"
              />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="mb-6 inline-block rounded-md bg-[#B9FF66] px-2 py-1 text-lg font-medium text-[#191A23]">
              Contact us
            </div>

            <div className="space-y-6 text-lg">
              <p>Email: exampleemail.com</p>

              <p>Phone: +123 456 789</p>

              <p>
                Address: 1234 Street Name, City
                <br />
                Name, Country Name
              </p>
            </div>
          </div>

          <div className="flex-1 rounded-[20px] bg-[#292A32] p-6 lg:p-10">
            <div className="flex flex-col gap-4 lg:flex-row">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 rounded-[14px] border border-white bg-transparent px-6 py-5 text-white outline-none placeholder:text-neutral-400"
              />

              <button className="cursor-pointer rounded-[14px] bg-[#B9FF66] px-8 py-5 font-medium text-[#191A23] transition-all duration-300 hover:scale-[1.02]">
                Subscribe to news
              </button>
            </div>
          </div>
        </div>

        <div className="my-12 h-px bg-white/30" />

        <div className="flex flex-col gap-4 text-sm lg:flex-row lg:items-center lg:justify-between">
          <p>2024 Positivus - Made With Astro by Manul</p>

          <div className="flex gap-4">
            <Link href="#" className="underline">
              Credits ( Olga, Esteban )
            </Link>

            <Link href="#" className="underline">
              Licence
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}