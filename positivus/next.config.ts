import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "positivustheme.vercel.app",
    },
  ],
},
};

export default nextConfig;

