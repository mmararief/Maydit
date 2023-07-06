/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uploadthing.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    appDir: true
  },
  async rewrites() {
    return [
      {
        source: '/api/vclass/:path*',
        destination: 'https://apivclass.herokuapp.com/:path*', // Replace with the actual API URL
      },
    ];
  },
};

module.exports = nextConfig;
