import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

export const useLangSelector = () => {
  const { push, locale, asPath } = useRouter();

  const handleLangChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    push(asPath, asPath, { locale: event.currentTarget.value });
  }, []);

  return {
    locale,
    handleLangChange,
  };
};
