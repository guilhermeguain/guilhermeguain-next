import { useCallback } from 'react';
import { useRouter } from 'next/router';

export const useLangSelector = () => {
  const { push, locale, asPath } = useRouter();

  const handleLangChange = useCallback((lang: string) => {
    push(asPath, asPath, { locale: lang });
  }, []);

  return {
    locale,
    handleLangChange,
  };
};
