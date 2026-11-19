'use client';

import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

import { createI18n } from '@lib/i18n';

type Props = {
  locale: string;
  children: ReactNode;
};

export const I18nProvider = ({ locale, children }: Props) => {
  const [i18n] = useState(() => createI18n(locale));

  useEffect(() => {
    if (i18n.language !== locale) {
      void i18n.changeLanguage(locale);
    }
  }, [i18n, locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
