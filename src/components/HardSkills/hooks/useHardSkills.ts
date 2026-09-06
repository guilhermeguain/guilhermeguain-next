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
        id: 'llms-ai-agents',
        value: 95,
      },
      {
        id: 'ai-assisted-development',
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
