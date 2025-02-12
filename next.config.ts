import type { NextConfig } from 'next';
import i18n from './next-i18next.config';
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  i18n: {
    defaultLocale: 'ru-RU',
    locales: ['en-US', 'ru-RU'],
  },
};

export default nextConfig;
