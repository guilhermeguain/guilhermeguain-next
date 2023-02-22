import React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Montserrat } from '@next/font/google';

import { AppContext } from '@contexts/App';

import '@styles/global.css';
import '@styles/theme.css';

const fontFamily = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <div className={fontFamily.className}>
        <Component {...pageProps} />
      </div>
    </AppContext>
  );
}

export default appWithTranslation(App);
