import { useMemo } from 'react';

export const useLanguages = () => {
  const languages = useMemo(
    () => [
      {
        id: 'portuguese',
        label: 'Português',
        proficiency: [
          { id: 'speaking', label: 'Speaking', value: 100 },
          { id: 'listening', label: 'Listening', value: 100 },
          { id: 'writing', label: 'Writing', value: 100 },
        ],
      },
      {
        id: 'english',
        label: 'Inglês',
        proficiency: [
          { id: 'speaking', label: 'Speaking', value: 40 },
          { id: 'listening', label: 'Listening', value: 80 },
          { id: 'writing', label: 'Writing', value: 90 },
        ],
      },
    ],
    [],
  );

  return {
    languages,
  };
};
