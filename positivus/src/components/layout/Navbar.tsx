"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
<> <header className="sticky top-0 z-50 w-full bg-white"> <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8"> <Link href="/"> <Image
           src="https://positivustheme.vercel.app/Logo.svg"
           alt="Positivus"
           width={220}
           height={36}
           priority
         /> </Link>
      <div className="hidden items-center gap-12 lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-xl text-black transition-all duration-200 hover:underline visited:text-black"
          >
            {link.label}
          </Link>
        ))}

        <button className="rounded-2xl border border-black px-8 py-4 text-xl transition-all duration-200 hover:bg-black hover:text-white">
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

  <div
    className={`fixed inset-0 z-[100] transition-all duration-300 ${
      isOpen
        ? "visible bg-black/30 opacity-100"
        : "invisible bg-black/0 opacity-0"
    }`}
    onClick={() => setIsOpen(false)}
  >
    <aside
      className={`absolute left-0 top-0 h-full w-full bg-[#3946C5] text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between border-b border-cyan-400/30 px-6 py-6">
        <Image
          src="https://positivustheme.vercel.app/Logo.svg"
          alt="Positivus"
          width={180}
          height={30}
          className="brightness-0 invert"
        />

        <button
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
      </div>

      <div className="flex h-[calc(100%-89px)] flex-col justify-between px-8 py-10">
        <div className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-medium transition-all hover:underline visited:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className="rounded-2xl border border-white px-6 py-4 text-lg transition-all duration-200 hover:bg-white hover:text-[#3946C5]">
          Request a quote
        </button>
      </div>
    </aside>
  </div>
</>

);
}
