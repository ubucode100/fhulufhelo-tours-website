import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kambanga.com",
      },
    ],
  },
};

export default nextConfig;
