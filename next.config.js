/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    tsconfigPath: './tsconfig.json', // Explicitly point to your config
  },
  images: { unoptimized: true },
};

module.exports = nextConfig; 