/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config');

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    const headers = [];
    
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
        source: '/:path*',
      });
    }
    return headers;
  },
  async redirects() {
    const englishHosts = ['www.guilhermeguain.com', 'guilhermeguain.com'];

    return englishHosts.flatMap((host) => [
      {
        source: '/',
        has: [{ type: 'host', value: host }],
        destination: 'https://www.guilhermeguain.com.br/en',
        permanent: true,
      },
      {
        source: '/:path+',
        has: [{ type: 'host', value: host }],
        destination: 'https://www.guilhermeguain.com.br/en/:path+',
        permanent: true,
      },
    ]);
  },
  i18n
};

module.exports = withVanillaExtract(nextConfig);
