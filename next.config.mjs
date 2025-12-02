/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: 'https://my-experience-eight.vercel.app',
  basePath: '',
}

export default nextConfig
