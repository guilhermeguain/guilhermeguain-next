import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

export const useEvents = () => {
  const { t } = useTranslation(['events']);

  const events = useMemo(
    () => [
      'gramado-summit-2024',
      'dev-leaders-conference-alura-2023',
      'ia-experience-wtc-sp',
      'assemble-rocketseat',
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
