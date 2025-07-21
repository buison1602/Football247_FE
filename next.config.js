/** @type {import('next').NextConfig} */
const nextConfig = {
  // External packages for server components (moved from experimental in Next.js 15+)
  serverExternalPackages: [],

  // Disable webpack cache in development to avoid permission issues
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable webpack cache in development to avoid file permission issues
      config.cache = false;
    }
    return config;
  },
}

module.exports = nextConfig
