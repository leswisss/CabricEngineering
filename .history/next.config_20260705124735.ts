import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/fr/about",
        destination: "/fr/confidentialite",
        locale: false,
      },
      {
        source: "/en/about",
        destination: "/en/a-propos",
        locale: false,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    qualities: [100, 90, 75],
  },
};

export default nextConfig;
