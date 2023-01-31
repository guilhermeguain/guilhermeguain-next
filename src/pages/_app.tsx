import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import TagManager from 'react-gtm-module';
import { appWithTranslation } from 'next-i18next';

import { theme } from '@styles/theme';
import '@styles/global.css';
import '@styles/theme.css';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MFKHPQ4' });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(App);
