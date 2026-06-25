/** @type {import('next').NextConfig} */

// Base path is empty by default (Vercel / custom domain at root) and only set
// to the repo sub-path when building for GitHub Pages (NEXT_PUBLIC_BASE_PATH).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // static export — works on GitHub Pages, Vercel and any static host
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true, // required for static export
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
