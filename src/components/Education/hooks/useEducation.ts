import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

export const useEducation = () => {
  const { t } = useTranslation(['education']);

  const educations = useMemo(
    () => [
      'ignite-lab-node-js',
      'ignite',
      'gostack',
      'nanodegree-udacity',
      'stack-alura',
      'php-impacta',
      'graphic-design',
    ],
    [],
  );

  return {
    t,
    educations,
  };
};
