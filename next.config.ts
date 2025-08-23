import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from all domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*', // Accept images from any domain
      },
    ],
  },
};

export default nextConfig;
