/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
    localeDetection: false,
    domains: [
      {
        domain: 'www.guilhermeguain.com',
        defaultLocale: 'en-US',
        locales: ['en-US']
      },
      {
        domain: 'www.guilhermeguain.com.br',
        defaultLocale: 'pt-BR',
        locales: ['pt-BR']
      }
    ]
  }
};

module.exports = nextConfig;
