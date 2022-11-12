import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

export const useLanguages = () => {
  const { t } = useTranslation(['about']);

  const languages = useMemo(
    () => [
      {
        id: 'portuguese',
        proficiency: [
          { id: 'speaking', value: 100 },
          { id: 'listening', value: 100 },
          { id: 'writing', value: 100 },
        ],
      },
      {
        id: 'english',
        proficiency: [
          { id: 'speaking', value: 40 },
          { id: 'listening', value: 80 },
          { id: 'writing', value: 90 },
        ],
      },
    ],
    [],
  );

  return {
    t,
    languages,
  };
};
