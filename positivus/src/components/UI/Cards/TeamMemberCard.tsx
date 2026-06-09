"use client";

import { motion } from "framer-motion";

type TeamMemberCardProps = {
  image: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
};

export default function TeamMemberCard({
  image,
  name,
  role,
  bio,
  linkedin,
}: TeamMemberCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-[45px] border border-[#191A23] bg-[#F3F3F3] p-8 shadow-[0_5px_0_0_#191A23]"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-end gap-4">
          <img
            src={image}
            alt={name}
            className="h-24 w-24 object-contain"
          />

          <div>
            <h3 className="text-xl font-medium text-[#191A23]">
              {name}
            </h3>

            <p className="text-sm text-[#191A23]">
              {role}
            </p>
          </div>
        </div>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <img
            src="https://positivustheme.vercel.app/_image?href=%2F_astro%2Flinkedin.eKpMB-Du.svg&w=30&h=30&f=svg"
            alt="LinkedIn"
            className="h-8 w-8"
          />
        </a>
      </div>

      <div className="my-6 h-px bg-[#191A23]" />

      <p className="leading-relaxed text-[#191A23]">
        {bio}
      </p>
    </motion.article>
  );
}