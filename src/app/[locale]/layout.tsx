import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';

import { GoogleTagManager } from '@components/GoogleTagManager';
import { I18nProvider } from '@components/I18nProvider';
import { AppContext } from '@contexts/App';
import { metaCopy } from '@lib/meta';
import { isLocale, locales, siteUrl } from '@lib/locales';

import '@styles/global.css';
import '@styles/theme.css';

const fontFamily = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1A202C',
};

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { locale } = await params;
  const copy = metaCopy[isLocale(locale) ? locale : 'pt-BR'];
  const canonical = locale === 'en' ? `${siteUrl}/en` : siteUrl;

  return {
    title: copy.title,
    description: copy.desc,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
      languages: {
        'pt-BR': siteUrl,
        en: `${siteUrl}/en`,
        'x-default': siteUrl,
      },
    },
    icons: { icon: '/images/favicon.png' },
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    openGraph: {
      title: copy.title,
      description: copy.desc,
      type: 'website',
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.desc,
    },
  };
};

const LocaleLayout = async ({ children, params }: Props) => {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className={fontFamily.className}>
        <I18nProvider locale={locale}>
          <GoogleTagManager />
          <AppContext>{children}</AppContext>
        </I18nProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
