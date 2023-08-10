import React from 'react';
import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

function Document({ locale }: DocumentProps) {
  const canonical =
    locale === 'pt-BR' ? 'https://www.guilhermeguain.com.br' : 'https://www.guilhermeguain.com';

  return (
    <Html lang={locale}>
      <Head>
        <meta name="theme-color" content="#1A202C" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="canonical" href={canonical}></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
