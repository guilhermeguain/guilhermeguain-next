import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

export const useHardSkills = () => {
  const { t } = useTranslation(['about', 'hard-skills']);

  const hardSkills = useMemo(
    () => [
      {
        id: 'html-css',
        value: 100,
      },
      {
        id: 'javascript-react',
        value: 100,
      },
      {
        id: 'typescript',
        value: 95,
      },
      {
        id: 'technical-seo',
        value: 100,
      },
      {
        id: 'design-layout',
        value: 90,
      },
      {
        id: 'git',
        value: 90,
      },
    ],
    [],
  );

  return {
    t,
    hardSkills,
  };
};
