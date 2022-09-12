/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
      domains: ['b.zmtcdn.com'],
   },
}

module.exports = nextConfig
