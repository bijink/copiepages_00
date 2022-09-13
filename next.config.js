/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
      domains: ['b.zmtcdn.com', 'picsum.photos'],
   },
}

module.exports = nextConfig
