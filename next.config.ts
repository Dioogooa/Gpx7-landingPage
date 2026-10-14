import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        // Picsum Photos — imagens placeholder
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        // Unsplash placeholder
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
