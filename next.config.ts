import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // add images.unsplash.com to allowed domains
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
