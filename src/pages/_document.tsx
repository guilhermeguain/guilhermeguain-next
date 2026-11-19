import React from 'react';
import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

const siteUrl = 'https://www.guilhermeguain.com.br';

function Document({ locale }: DocumentProps) {
  const canonical = locale === 'en' ? `${siteUrl}/en` : siteUrl;

  return (
    <Html lang={locale}>
      <Head>
        <meta name="theme-color" content="#1A202C" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="pt-BR" href={siteUrl} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
