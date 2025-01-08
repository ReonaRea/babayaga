import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  assetPrefix: isProd ? "/babayaga/" : "",
  basePath: isProd ? "/babayaga" : "",
};

export default nextConfig;
