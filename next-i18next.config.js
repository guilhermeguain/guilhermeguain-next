import { resolve } from 'path';

export const i18n = {
  locales: ['en-US', 'pt-BR'],
  defaultLocale: 'en-US',
  localeDetection: false,
  localePath: resolve('./public/locales'),
  domains: [
    {
      domain: process.env.NEXT_PUBLIC_EN_URL || 'https://www.guilhermeguain.com',
      defaultLocale: 'en-US',
      locales: ['en-US']
    },
    {
      domain: process.env.NEXT_PUBLIC_PT_URL || 'https://www.guilhermeguain.com.br',
      defaultLocale: 'pt-BR',
      locales: ['pt-BR']
    }
  ]
};