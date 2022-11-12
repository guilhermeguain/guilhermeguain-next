module.exports = {
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
    localeDetection: false,
    domains: [
      {
        domain: process.env.NEXT_PUBLIC_EN_URL,
        defaultLocale: 'en-US',
        locales: ['en-US']
      },
      {
        domain: process.env.NEXT_PUBLIC_PT_URL,
        defaultLocale: 'pt-BR',
        locales: ['pt-BR']
      }
    ]
  }
};