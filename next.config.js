/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lunar-javascript'],
  output: 'export',
  basePath: '/ziwei-doushu',
  images: { unoptimized: true },
};

module.exports = nextConfig;
