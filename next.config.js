/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add these settings
  output: "export",
  images: {
    unoptimized: true, // Required for static exports
  },
  trailingSlash: true,
};

module.exports = nextConfig;
