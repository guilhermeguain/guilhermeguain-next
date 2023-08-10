/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config');

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    const isDevelopment = process.env.NEXT_PUBLIC_VERCEL_ENV === 'development';
    
    const headers = isDevelopment ? [] : [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: isDevelopment ? 'SAMEORIGIN' : 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; connect-src https://analytics.google.com https://googleads.g.doubleclick.net https://www.google-analytics.com https://partner.googleadservices.com https://www.googleadservices.com https://stats.g.doubleclick.net; script-src 'unsafe-inline' 'self' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com; font-src 'self' https://fonts.googleapis.com data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; object-src 'none'; frame-src 'self'; img-src 'self' https://www.google.com.br data:; base-uri 'self';",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), geolocation=(), microphone=()',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
    
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
  i18n
};

module.exports = withVanillaExtract(nextConfig);
