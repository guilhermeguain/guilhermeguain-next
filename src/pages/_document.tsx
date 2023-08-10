import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#1A202C" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="canonical" href="https://www.guilhermeguain.com.br"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
