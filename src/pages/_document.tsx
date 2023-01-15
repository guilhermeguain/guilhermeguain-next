import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

import { theme } from '@styles/theme';

function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="gray.800" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
