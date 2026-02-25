import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.nasa.gov",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
