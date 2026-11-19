import { ChangeEvent, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { defaultLocale } from '@lib/locales';

export const useLangSelector = () => {
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();

  const handleLangChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const nextLocale = event.currentTarget.value;
      const hash = window.location.hash;
      const path = nextLocale === defaultLocale ? '/' : `/${nextLocale}`;

      router.push(`${path}${hash}`);
    },
    [router],
  );

  return {
    locale,
    handleLangChange,
  };
};
