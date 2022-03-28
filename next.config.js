/** @type {import('next').NextConfig} */

const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      child_process: false,
      net: false,
      crypto: false,
    };

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://172.30.1.32:8080/api/:path*`,
      },
    ];
  },
});
