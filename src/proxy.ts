import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale, locales } from '@lib/locales';

const PUBLIC_FILE = /\.(.*)$/;

const hasLocalePrefix = (pathname: string, locale: string) =>
  pathname === `/${locale}` || pathname.startsWith(`/${locale}/`);

export const proxy = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/documents') ||
    pathname.startsWith('/locales') ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname === '/favicon.ico' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (hasLocalePrefix(pathname, defaultLocale)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(`/${defaultLocale}`, '') || '/';

    return NextResponse.redirect(url);
  }

  if (locales.some((locale) => hasLocalePrefix(pathname, locale))) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;

  return NextResponse.rewrite(url);
};
