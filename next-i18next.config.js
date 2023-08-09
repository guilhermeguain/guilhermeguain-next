// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'pt-BR',
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
  },
  localePath: path.resolve('./public/locales'),
};