import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/fr/a-propos",
        destination: "/fr/about",
        locale: false,
      },
      {
        source: "/fr/confidentialite",
        destination: "/fr/privacy",
        locale: false,
      },
      {
        source: "/fr/galerie",
        destination: "/fr/gallery",
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
