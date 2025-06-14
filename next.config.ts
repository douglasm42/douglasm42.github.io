import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA)
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    unoptimized: true,
  },
}
 
export default nextConfig