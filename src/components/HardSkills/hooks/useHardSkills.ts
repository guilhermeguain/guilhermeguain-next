import { useMemo } from 'react';

export const useHardSkills = () => {
  const hardSkills = useMemo(
    () => [
      {
        id: 'html-css',
        label: 'HTML/CSS',
        value: 100,
      },
      {
        id: 'javascript-react',
        label: 'JavaScript/React.js',
        value: 95,
      },
      {
        id: 'typescript',
        label: 'TypeScript',
        value: 80,
      },
      {
        id: 'technical-seo',
        label: 'SEO técnico',
        value: 90,
      },
      {
        id: 'design-layout',
        label: 'Design/Layout',
        value: 95,
      },
      {
        id: 'git',
        label: 'Git',
        value: 80,
      },
    ],
    [],
  );

  return {
    hardSkills,
  };
};
