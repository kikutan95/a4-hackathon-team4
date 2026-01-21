import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
  experimental: {
     // @ts-expect-error: Turbopack root is experimental
    turbo: {
      root: __dirname,
    },
  },
};

export default nextConfig;
