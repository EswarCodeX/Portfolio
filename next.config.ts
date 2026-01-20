import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
  trailingSlash: true,
  output: "export", // generates static site in "out" folder
  images: {
    unoptimized: true, // disable image optimization to make build work
  },
     turbopack: {},
};

export default nextConfig;
