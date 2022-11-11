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
        locales: ['en']
      },
      {
        domain: 'guilhermeguain.com',
        defaultLocale: 'en-US',
        locales: ['en']
      },
      {
        domain: 'www.guilhermeguain.com.br',
        defaultLocale: 'pt-BR',
        locales: ['pt']
      },
      {
        domain: 'guilhermeguain.com.br',
        defaultLocale: 'pt-BR',
        locales: ['pt']
      }
    ]
  }
};

module.exports = nextConfig;
