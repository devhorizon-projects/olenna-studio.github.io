
import type { NextConfig } from "next";

const isExport =
  process.env.EXPORT === "true" ||
  process.env.GITHUB_ACTIONS === "true";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

// Use a repository subpath only when explicitly configured.
// For a custom domain, leave NEXT_PUBLIC_BASE_PATH empty.
const basePath = rawBasePath?.trim() || "";

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
  ...(basePath ? { basePath } : {}),
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
