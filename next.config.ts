import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nextjsfirstdenoproject",
  assetPrefix: "/nextjsfirstdenoproject/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "/nextjsfirstdenoproject",
  },
};

export default nextConfig;