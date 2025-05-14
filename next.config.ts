import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io", "media.istockphoto.com"], // Add the Sanity CDN hostname here
  },
};

export default nextConfig;
