import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Real mockup avatars for the About + Testimonials sections. Swap for your
    // own customer photos in /public/images and update lib/site-config.ts.
    remotePatterns: [
      { protocol: "https", hostname: "randomuser.me" },
    ],
  },
};

export default nextConfig;
