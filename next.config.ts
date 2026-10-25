import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nextjsfirstdenoproject",
  assetPrefix: "/nextjsfirstdenoproject/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;