"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "About us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Use Cases", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <Link href="/">
            <Image
              src="https://positivustheme.vercel.app/Logo.svg"
              alt="Positivus"
              width={220}
              height={36}
              priority
            />
          </Link>

          <div className="hidden items-center gap-12 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative text-xl text-black visited:text-black"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}

            <button className="cursor-pointer rounded-2xl border border-black px-8 py-4 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-lg">
              Request a quote
            </button>
          </div>

          <button
            className="lg:hidden"
            aria-label="Open Menu"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={32} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
              }}
              className="fixed left-0 top-0 z-[101] h-screen w-[65%] bg-white shadow-[0_0_40px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-6">
                <Image
                  src="https://positivustheme.vercel.app/Logo.svg"
                  alt="Positivus"
                  width={180}
                  height={30}
                  priority
                />

                <button
                  aria-label="Close Menu"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex h-[calc(100vh-85px)] flex-col justify-between px-8 py-10">
                <div className="flex flex-col gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative w-fit text-2xl font-medium text-[#191A23] visited:text-[#191A23]"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#191A23] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </Link>
                  ))}
                </div>

                <button className="cursor-pointer rounded-xl bg-[#191A23] px-6 py-4 text-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Request a quote
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}