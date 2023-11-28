'use client';

import React, { useCallback } from 'react';

export const useLangSelector = () => {
  const locale = 'pt-BR';
  // const { push, locale, asPath } = useRouter();

  const handleLangChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    // push(asPath, asPath, { locale: event.currentTarget.value });
  }, []);

  return {
    locale,
    handleLangChange,
  };
};
