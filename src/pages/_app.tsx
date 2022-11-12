import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import TagManager from 'react-gtm-module';

import { theme } from '../styles/theme';

import { AppProvider } from '../contexts/App';

import '../i18n';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MFKHPQ4' });
  }, []);

  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppProvider>
  );
}

export default App;
