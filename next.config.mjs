/** @type {import('next').NextConfig} */
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [], // Add remote patterns here if needed
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    }];
  },
};

export default config;
