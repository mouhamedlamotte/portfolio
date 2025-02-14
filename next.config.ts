import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  serverExternalPackages: ['@lib/generate-email-html'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'aempgiihupooyhu8.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
