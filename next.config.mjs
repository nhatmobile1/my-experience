/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Only use assetPrefix in production (Vercel), not in local dev
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://my-experience-eight.vercel.app' : undefined,
  basePath: '',
}

export default nextConfig
