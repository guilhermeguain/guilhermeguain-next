import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

export const useSoftSkills = () => {
  const { t } = useTranslation(['about', 'soft-skills']);

  const softSkills = useMemo(
    () => [
      {
        id: 'communication',
        value: 80,
      },
      {
        id: 'teamwork',
        value: 90,
      },
      {
        id: 'problem-solving',
        value: 100,
      },
      {
        id: 'time-management',
        value: 70,
      },
      {
        id: 'critical-thinking',
        value: 90,
      },
      {
        id: 'decision-making',
        value: 80,
      },
    ],
    [],
  );

  return {
    t,
    softSkills,
  };
};
