import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ── Enable React strict mode ──────────────────────────────
  reactStrictMode: true,

  // ── Image optimization ────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    // Add any external image hostnames here, e.g.:
    // remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },

  // ── Compiler options ──────────────────────────────────────
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig