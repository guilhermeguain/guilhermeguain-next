import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import TagManager from 'react-gtm-module';
import { appWithTranslation } from 'next-i18next';
import { Analytics } from '@vercel/analytics/react';

import { theme } from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MFKHPQ4' });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}

export default appWithTranslation(App);
