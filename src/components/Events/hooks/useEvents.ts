import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

export const useEvents = () => {
  const { t } = useTranslation(['events']);

  const events = useMemo(
    () => [
      'next-js-conf',
      'seo-summit',
      'dowhile-2020',
      'semrush-live',
      'google-cloud-summit',
      'wordcamp-sao-paulo-2018',
      'google-amp-roadshow-brazil',
    ],
    [],
  );

  return {
    t,
    events,
  };
};
