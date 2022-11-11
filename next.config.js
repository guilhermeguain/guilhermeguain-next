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
        domain: 'guilhermeguain.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'guilhermeguain.com.br',
        defaultLocale: 'pt-BR',
      }
    ]
  }
};

module.exports = nextConfig;
