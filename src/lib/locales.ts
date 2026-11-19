export const locales = ['pt-BR', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt-BR';

export const siteUrl = 'https://www.guilhermeguain.com.br';

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const localeHref = (locale: string, path = '/') => {
  if (locale === defaultLocale) return path;

  return path === '/' ? `/${locale}` : `/${locale}${path}`;
};
