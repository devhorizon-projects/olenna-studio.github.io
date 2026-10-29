import type { NextConfig } from "next";

const isExport = process.env.EXPORT === "true" || process.env.GITHUB_ACTIONS === "true";
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath =
  rawBasePath && rawBasePath.trim() !== ""
    ? rawBasePath
    : (process.env.GITHUB_ACTIONS === "true" ? "/olenna-studio.github.io" : "");

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
  basePath: basePath || undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
