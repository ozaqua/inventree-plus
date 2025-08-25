import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable external connections
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "127.0.0.1:3000", "10.77.7.10:3000"],
    },
  },
  // Disable strict mode for development to prevent double renders
  reactStrictMode: false,
  // Allow images from any source during development
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
